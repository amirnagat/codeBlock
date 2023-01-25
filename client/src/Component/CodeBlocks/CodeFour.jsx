import React ,{ useRef }from 'react'
import { marked } from "marked";
import Editor from "@monaco-editor/react";

export default function CodeFour() {
const editorRef = useRef(null);
const markdown = `const forwardFn = (id) => {
        console.log(id);
        const filteredArray = state.filter((e, index) => {
          console.log(index);
          return index !== id;
        });
    
        setstate(filteredArray);
      };

  `;
  function handleEditorDidMount(editor) {
    editorRef.current = editor; 
  }

  return (
    <div>Filter Code


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
