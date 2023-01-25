import React, { useRef} from 'react'
import 'react-highlight/node_modules/highlight.js/styles/agate.css';
import { marked } from "marked";
import Editor from "@monaco-editor/react";
import 'highlight.js/styles/github.css';
export default function CodeOne() {
    const editorRef = useRef(null);



const markdown = `
  \`\`\`
    const variable = 'hello';

    function getProfile(id: string): {
      name: string; address: string, photo: string
    } {
      return {
        name: 'ben', address: "ben's house", photo: "/ben.png"
      };
    }
  \`\`\`
`;
function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  return (
    <div>Async Code
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
