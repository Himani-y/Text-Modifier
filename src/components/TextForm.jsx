import React,{useState} from "react";
export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = ()=>{
    console.log("Lowercase clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    let newText = " ";
    setText(newText);
  }
  const handleOnChange = (event)=>{
    console.log("Handle On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div className="container"> 
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value = {text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 *text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text to preview it here"}</p>
    </div>
    </>
  );
}
