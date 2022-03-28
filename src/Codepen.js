import React from 'react';
import { marked } from 'marked';

const Codepen = () => {
  //begining of dummy text
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

<h2 align="center">I Love coding ❤️</h2>
<p align="center">
   <a href="https://github.com/Michael-Obele">
   <img src="https://c.tenor.com/NOYF3f82b_gAAAAC/programmer.gif" align="center" height="97" width="134" ></a>
</p>

> Just a Coding Image Below

![](https://media.gettyimages.com/vectors/programming-code-application-window-vector-id1124838925?k=20&m=1124838925&s=612x612&w=0&h=lKkgavYLrbDtSnQivxMm3_4ThyovkQEFvbOb2Dv3O6g=)

## Something Huge Coming 😏
  
  `;

  //end of dummy text
  const [markdown, setMarkdown] = React.useState(dummyText);
  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  };
  function TheMarkup() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
        id='preview'
      />
    );
  }
  return (
    <div className='example'>
      <h1>Editor</h1>
      <form>
        <textarea
          id='editor'
          value={markdown}
          onChange={(e) => {
            updateMarkdown(e.target.value);
          }}
          cols={100}
          rows={10}
        />
      </form>
      <h1>Preview</h1>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
          id='preview'
        />
      </div>
    </div>
  );
};

export default Codepen;