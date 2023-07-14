/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import DOMPurify from 'dompurify';
import {marked} from 'marked';
import './App.css';

function App() {
  const [editorText, setEditorText] = useState("");
  // const headerRef = useRef();

  function handleChange(event) {
    setEditorText(event.target.value);
  }

  // headerRef.current.innerHTML = markdown;

  const jsx = DOMPurify.sanitize(marked.parse(editorText))

  return (
    <div className='container-e'>
      {/* <div className='divinside'></div> */}
      <textarea id="editor" className='grow-item' onChange={handleChange} autoFocus placeholder="Put some Github flavor here..."></textarea>
      <div id="preview" className='grow-item' dangerouslySetInnerHTML={{ __html: jsx }}></div>
    </div>
  )
}
        

export default App