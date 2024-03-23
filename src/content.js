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
// import Markdown from 'react-markdown';
import { marked } from 'marked';

export const Content = () => {
  const DarkMode = useSelector((state) => state.DarkMode);
  const dark = () => {
    return {
      bg: () => {
        return DarkMode ? 'dark' : 'light';
      },
      text: () => {
        return DarkMode ? 'light' : 'dark';
      },
      color: () => {
        return DarkMode ? 'white' : 'black';
      },
      backgroundColor: () => {
        return DarkMode ? '#212529' : 'white';
      },
    };
  };

  const [markdown, setMarkdown] = useState('');
  const [value, setValue] = useState('');

  const handleMouseUp = () => {
    const selectedText = window.getSelection().toString();
    setValue(selectedText);
    console.log(`Selected text: ${selectedText}`);
  };

  const bold = () => {
    const startIndex = markdown.indexOf(value);
    const selectedText = markdown.substring(
      startIndex,
      startIndex + value.length
    );
    setMarkdown(markdown.replace(selectedText, `**${selectedText}**`));
  };

  const italic = () => {
    const startIndex = markdown.indexOf(value);
    const selectedText = markdown.substring(
      startIndex,
      startIndex + value.length
    );
    setMarkdown(markdown.replace(selectedText, `*${selectedText}*`));
  };

  const quote = () => {
    const startIndex = markdown.indexOf(value);
    const selectedText = markdown.substring(
      startIndex,
      startIndex + value.length
    );
    setMarkdown(markdown.replace(selectedText, `\n > ${selectedText}`));
  };

  // Remove unnecessary useEffect

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  const updateMarkdown = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  function createMarkup() {
    return { __html: marked.parse(markdown).replace(/(<\/h(1|2)>)/gm, '<hr>') };
  }
  function TheMarkup() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }

  return (
    <div>
      <p.Row id='input' className='justify-content-center'>
        <p.Card
          id='output'
          border='dark'
          text={dark().text()}
          bg={dark().bg()}
          style={{ height: 'fit-content', width: '85vw' }}>
          <p.Card.Header>
            <div className='row  justify-content-start'>
              <div className='p-2 fs-5 col-sm-1'>Editor</div>
              <p.Button className='btn btn-dark col-sm-1'>
                <FontAwesomeIcon icon={faBold} onClick={bold} />
              </p.Button>
              <p.Button className='btn btn-dark col-sm-1'>
                <FontAwesomeIcon onClick={italic} icon={faItalic} />
              </p.Button>
              <p.Button className='btn btn-dark col-sm-1'>
                <FontAwesomeIcon onClick={quote} icon={faQuoteLeft} />
              </p.Button>
            </div>
            <Expand Title='Editor'>
              {' '}
              <p.Form.Control
                as='textarea'
                style={{
                  height: '70vh',
                  backgroundColor: dark().backgroundColor(),
                  color: dark().color(),
                }}
                value={markdown}
                onChange={(e) => {
                  updateMarkdown(e.target.value);
                }}
              />
            </Expand>{' '}
          </p.Card.Header>
          <p.Form.Control
            onMouseUp={handleMouseUp}
            as='textarea'
            style={{
              height: '30vh',
              backgroundColor: dark().backgroundColor(),
              color: dark().color(),
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
          text={dark().text()}
          bg={dark().bg()}
          style={{ height: 'fit-content', width: '85vw' }}>
          <p.Card.Header>
            <div className='p-2 fs-5 col-sm-1'>Preview</div>{' '}
            <Expand Title='Preview'>
              {' '}
              <TheMarkup />
            </Expand>{' '}
          </p.Card.Header>
          <p.Card.Body>
            <p.Card.Text>
              <TheMarkup />
            </p.Card.Text>
          </p.Card.Body>
        </p.Card>
      </p.Row>
    </div>
  );
};
