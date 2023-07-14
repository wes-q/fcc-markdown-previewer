/* eslint-disable no-undef */
import {marked} from 'marked';
import PropTypes from 'prop-types';
import { useRef } from "react";

export default function Mark({text}) {
    const headerRef = useRef();
    const markdown = marked(text);
    
  
    // const handleClick = () => {
    //     headerRef.current.innerHTML = markdown;
    // }

    headerRef.current.innerHTML = markdown;

    return (
      <div>
        <div id="content" ref={headerRef}></div>
        {/* <button onClick={handleClick}>Ace</button> */}
      </div>
    );
  }

  Mark.propTypes = {
    text: PropTypes.string.isRequired
  }
  
  