import React, { useState } from 'react';
import * as p from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { marked } from 'marked';
// or const { marked } = require('marked');

export const Content = () => {
  const dummyText = `
   ## Hi <img src="https://c.tenor.com/Wx9IEmZZXSoAAAAj/hi.gif" height="25" width="25" >

# I’m Michael Obele

#### I'm a \`<Web/>\` **Developer**

\`\`\`
function Developer(you, I) {
    const collaborate = () => {
      const I = 'Michael',
        am = 'is';
      if (you) {
        return \`\${I} \${am} now collaborating with \${you}\`;
      } else {
        return \`\${I} \${am} free to collaborate\`;
      }
    };
    return collaborate();
  }
  \`\`\`

- 👀 I’m searching for organizations and or persons to collaborate on open-source projects!

- 🌱 I’m currently learning  <img src="https://github.com/Michael-Obele/Gif/blob/main/icons8-javascript.gif?raw=true" align="center" height="28" width="28"> <img src="https://github.com/Michael-Obele/Gif/blob/main/icons8-react.gif?raw=true" align="center" height="28" width="28"> and <img src="https://github.com/Michael-Obele/Gif/blob/main/icons8-python.gif?raw=true" align="center" height="28" width="28">

- 📫 You can reach me on Twitter [@Dev_Obele](https://twitter.com/Dev_Obele) or check out my [website](https://moaconcept.xyz)

<h3 align="center">I Love coding ❤️</h3>
<p align="center">
   <a href="https://github.com/Michael-Obele">
   <img src="https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" align="center" height="97" width="134" ></a>
</p>

# Something more
  
  `;
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
  const [markdown, setMarkdown] = useState(dummyText);
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
          style={{ height: 'fit-content', width: '50vw' }}
        >
          <p.Card.Header>Editor</p.Card.Header>

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
          style={{ height: 'fit-content', width: '50vw' }}
        >
          <p.Card.Header>Preview</p.Card.Header>
          <p.Card.Body>
            <p.Card.Text>
              <TheMarkup />
            </p.Card.Text>
          </p.Card.Body>
        </p.Card>
      </p.Row>
      {marked.parse(markdown)}
    </div>
  );
};
