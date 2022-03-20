import React, { useState, useEffect } from 'react';

import * as p from 'react-bootstrap';

export const Input = () => {
  return (
    <p.Row id='input' className='justify-content-center'>
      <p.Form.Control
        as='textarea'
        style={{
          height: '20vh',
          width: '50vw',
          backgroundColor: '#212529',
          color: 'white',
        }}
      />
    </p.Row>
  );
};

export const Output = () => {
  const [markdown, setMarkdown] = useState('');
  return (
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
          <p.Card.Title>Light Card Title</p.Card.Title>
          <p.Card.Text>Some quick.</p.Card.Text>
        </p.Card.Body>
      </p.Card>
    </p.Row>
  );
};
