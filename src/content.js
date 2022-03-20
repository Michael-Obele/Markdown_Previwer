import React, { useState } from 'react';
import * as p from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { marked } from 'marked';
// or const { marked } = require('marked');

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
  const [markdown, setMarkdown] = useState('# Hello world!');
  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  };
  const html = marked.parse(markdown);
  function createMarkup() {
    return { __html: html };
  }
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
  return (
    <div>
      <p.Row id='input' className='justify-content-center'>
        <p.Form.Control
          as='textarea'
          style={{
            height: '30vh',
            width: '50vw',
            backgroundColor: dark().backgroundColor(),
            color: dark().color(),
          }}
          onChange={(e) => {
            updateMarkdown(e.target.value);
          }}
        />
      </p.Row>
      <p.Row className='justify-content-center'>
        <p.Card
          id='output'
          border='dark'
          text={dark().text()}
          bg={dark().bg()}
          style={{ height: 'fit-content', width: '50vw' }}
        >
          <p.Card.Header>Header</p.Card.Header>
          <p.Card.Body>
            <p.Card.Text>
              <MyComponent />
            </p.Card.Text>
          </p.Card.Body>
        </p.Card>
      </p.Row>
    </div>
  );
};
