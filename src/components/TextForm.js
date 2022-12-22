import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
    setText(text.toUpperCase());
    // props.showAlert('Converted to upper case', 'success')
  }
  const handleLoClick = () =>{
    setText(text.toLowerCase());
    // props.showAlert('Converted to lower case', 'success')
  }
  const handleOnChange = (e) =>{
    setText(e.target.value)
  }

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    // props.showAlert('Extra spaceses removed', 'success')
  }
  const handleClear = (e) =>{
    setText('')
    // props.showAlert('Cleared', 'success')
  }
  const [text, setText] = useState('');
//   setText('Enter text here')
  return (
    <>
    <div className='container mt-4' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h4>{props.heading}</h4>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#212529':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="4"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h5>Your text summary</h5>
        <p>{text.trim().length > 0? text.trim().split(" ").length: 0} words and {text.trim().length > 0? text.length: 0} characters</p>
        <p>{text.trim().length > 0? 0.008 * text.split(" ").length: 0} Minutes read</p>
        <h5>Preview</h5>
        <p>{text.length > 0? text: 'Enter something to preview it here'}</p>
    </div>
    </>
  )
}
