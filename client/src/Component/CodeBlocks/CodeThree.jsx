import React from 'react'
import { marked } from "marked";
import 'react-highlight/node_modules/highlight.js/styles/dark.css';
import Editor from "@monaco-editor/react";

import { useRef } from "react";

export default function CodeThree() {
    const editorRef = useRef(null);
    const markdown = `
  \`\`\`
  const elements = ['one', 'two', 'three'];
  return (
    <ul>
      {elements.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
    </ul>
  )
  \`\`\`
`;
function handleEditorDidMount(editor) {
    editorRef.current = editor; 
  }

  return (
    <div>Loops Code


      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
     <Editor
       height="50vh"
       theme='vs-dark'
       defaultLanguage="javascript"
       defaultValue="// write your code"
       onMount={handleEditorDidMount}
     />
    </div>
  )
}
