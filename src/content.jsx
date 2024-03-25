import { useState, useEffect } from 'react';
import * as p from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBold,
  faQuoteLeft,
  faItalic,
} from '@fortawesome/free-solid-svg-icons';
import file from './dummyText.md';
import Expand from './Modal';
import { marked } from 'marked';

export const Content = () => {
  const DarkMode = useSelector((state) => state.DarkMode);
  const dark = () => {
    return {
      bg: DarkMode ? 'dark' : 'light',
      text: DarkMode ? 'light' : 'dark',
      color: DarkMode ? 'white' : 'black',
      backgroundColor: DarkMode ? '#212529' : 'white',
    };
  };

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  const [markdown, setMarkdown] = useState('');
  const [value, setValue] = useState('');

  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    setValue(selectedText);
    console.log(`Selected text: ${selectedText}`);
  };

  const bold = () => {
    setMarkdown((prevMarkdown) =>
      prevMarkdown.replace(new RegExp(`\\b${value}\\b`, 'g'), `**${value}**`)
    );
  };

  const italic = () => {
    setMarkdown((prevMarkdown) =>
      prevMarkdown.replace(new RegExp(`\\b${value}\\b`, 'g'), `*${value}*`)
    );
  };

  const quote = () => {
    setMarkdown((prevMarkdown) =>
      prevMarkdown.replace(new RegExp(`\\b${value}\\b`, 'g'), `\n > ${value}`)
    );
  };

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const updateMarkdown = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  const debouncedBold = debounce(bold, 300);
  const debouncedItalic = debounce(italic, 300);
  const debouncedQuote = debounce(quote, 300);

  function createMarkup() {
    return { __html: marked.parse(markdown).replace(/(<\/h(1|2)>)/gm, '<hr>') };
  }

  function TheMarkup() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <>
      <p.Row id='input' className='justify-content-center'>
        <p.Card
          id='output'
          border='dark'
          text={dark().text}
          bg={dark().bg}
          style={{ height: 'fit-content', width: '85vw' }}>
          <p.Card.Header>
            <div className='row  justify-content-start'>
              <div className='p-2 fs-5 col-sm-1'>Editor</div>
              <p.Button className='btn btn-dark col-sm-1'>
                <FontAwesomeIcon icon={faBold} onClick={debouncedBold} />
              </p.Button>
              <p.Button className='btn btn-dark col-sm-1'>
                <FontAwesomeIcon onClick={debouncedItalic} icon={faItalic} />
              </p.Button>
              <p.Button className='btn btn-dark col-sm-1'>
                <FontAwesomeIcon onClick={debouncedQuote} icon={faQuoteLeft} />
              </p.Button>
            </div>
            <Expand Title='Editor'>
              <p.Form.Control
                as='textarea'
                style={{
                  height: '70vh',
                  backgroundColor: dark().backgroundColor,
                  color: dark().color,
                }}
                value={markdown}
                onChange={(e) => {
                  updateMarkdown(e.target.value);
                }}
              />
            </Expand>
          </p.Card.Header>
          <p.Form.Control
            onMouseUp={handleMouseUp}
            as='textarea'
            style={{
              height: '30vh',
              backgroundColor: dark().backgroundColor,
              color: dark().color,
            }}
            value={markdown}
            onChange={(e) => {
              updateMarkdown(e.target.value);
            }}
          />
        </p.Card>
        <p.Card
          id='output'
          border='dark'
          text={dark().text}
          bg={dark().bg}
          style={{ height: 'fit-content', width: '85vw' }}>
          <p.Card.Header>
            <div className='p-2 fs-5 col-sm-1'>Preview</div>

            <Expand Title='Preview'>
              <TheMarkup />
            </Expand>
          </p.Card.Header>
          <p.Card.Body>
            <p.Card.Text body={<TheMarkup />}>
              <TheMarkup />
            </p.Card.Text>
          </p.Card.Body>
        </p.Card>
      </p.Row>
    </>
  );
};
