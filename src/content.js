import React, { useState, useEffect } from 'react';
import * as p from 'react-bootstrap';
import { useSelector } from 'react-redux';
import file from './dummyText.md';
import Expand from './Modal';
import { marked } from 'marked';
// or const { marked } = require('marked');

export const Content = () => {
  const DarkMode = useSelector((state) => state.DarkMode);
  console.log(Text);
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

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
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
            Editor{' '}
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
            Preview{' '}
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
