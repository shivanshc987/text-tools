import React, {useState} from 'react'
 
export default function TextForm(props) {
    const handleUPclick = ()=>{
        // console.log("uppercas clicked")
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLOclick = ()=>{
      // console.log("uppercas clicked")
      let newText=text.toLowerCase();
      setText(newText)
  }
    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleClearClick = ()=>{ 
      let newText = '';
      setText(newText);

      // props.showAlert("Text Cleared!", "success");
  }

 

  // Credits: A
  const handleCopy = () => {
      navigator.clipboard.writeText(text);
      var text = document.getElementById("myBox") 
      text.select();
      // props.showAlert("Copied to Clipboard!", "success");
  }

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      // props.showAlert("Extra spaces removed!", "success");
  }

    const [text,setText]=useState('');
    
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
   <div className='mb-3'>
   
   <textarea className='form-control' id="myBox" rows='8' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLOclick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>YOUR TEXT SUMMARY</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>

  )
}
