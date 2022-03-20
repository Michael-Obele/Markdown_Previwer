import React, { useState } from 'react';
import * as p from 'react-bootstrap';
import Markdown from 'marked-react';

export const Content = () => {
  const [markdown, setMarkdown] = useState('# Hello world!');
  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  };
  return (
    <div>
      <p.Row id='input'>
        <p.Form.Control
          as='textarea'
          style={{
            height: '20vh',
            width: '50vw',
            backgroundColor: '#212529',
            color: 'white',
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
          text='light'
          bg='dark'
          style={{ height: 'fit-content', width: '50vw' }}
        >
          <p.Card.Header>Header</p.Card.Header>
          <p.Card.Body>
            <p.Card.Text>
              <Markdown>{markdown}</Markdown>
            </p.Card.Text>
          </p.Card.Body>
        </p.Card>
      </p.Row>
    </div>
  );
};
