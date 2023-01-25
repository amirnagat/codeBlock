import React from 'react'
import 'react-highlight/node_modules/highlight.js/styles/agate.css';
import { marked } from "marked";
import Editor from "@monaco-editor/react";

import { useRef } from "react";
export default function () {
const editorRef = useRef(null);
const markdown = ` \`\`const colors = ["red","green","blue","black"] \`\`\``;
function handleEditorDidMount(editor) {
    editorRef.current = editor; 
  }
  return (
    <div>
             Array Code -   
     
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
