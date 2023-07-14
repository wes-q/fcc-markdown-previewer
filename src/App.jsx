/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DOMPurify from 'dompurify';
import {marked} from 'marked';
import markdownContent from './markdownData';
import './App.css';


function App() {
  const [editorText, setEditorText] = useState(markdownContent);

  function handleChange(event) {
    setEditorText(event.target.value);
  }

  const jsx = DOMPurify.sanitize(marked.parse(editorText))

  return (
    <div className='container-e'>
      <textarea id="editor" className='grow-item' value={editorText} onChange={handleChange} autoFocus placeholder="Put some Github flavor here..."></textarea>
      <div id="preview" className='grow-item' dangerouslySetInnerHTML={{ __html: jsx }}></div>
    </div>
  )
}

export default App