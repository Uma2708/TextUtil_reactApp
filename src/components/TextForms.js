import React, { useState } from 'react'


export default function TextForms(props) {
    const handleUpClick=()=>{
        // console.log("uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("changed to uppercase ","sucess");
    }
    const handleClearClick=()=>{
        // console.log("uppercase was clicked");
        let newText="";
        setText(newText);
    }
    const handleLoClick=()=>{
        // console.log("uppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("changed to lowercase ","sucess");
    }
    const handleOnChange=(event)=>{
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        // console.log("on change");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        console.log(text);
    }

    const handleRemoveSpace =()=>{ 
        var newText=text.split(/[ ]+/);
        setText(newText.join(" "));
}


    const[text, setText] = useState('Enter text here');
    // setText("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text sum </h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
        <h2>Sentences </h2>
        <p>{text.split(". ").length}</p>
    </div>
    </>
  )
}
