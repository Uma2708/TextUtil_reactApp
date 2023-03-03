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
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
<button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpace}>Remove Extra Space</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="mb-4">Your text sum </h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
        <h2>Sentences </h2>
        <p>{text.split(".").filter((element)=>{return element.length!==0}).length}</p>
    </div>
    </>
  )
}
