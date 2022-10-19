import "./styles.css";
import React, { useRef } from "react";
import Child from "./child";

export default function App() {
  let inputRef = useRef(null);

  function UpdateInput() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    // is wale se us pr focus aa jayega
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <h1>FarwardRef-in-ReactJS</h1>
      <Child ref={inputRef} />
      <br />
      <button onClick={UpdateInput}>FarwardRef</button>
    </div>
  );
}
