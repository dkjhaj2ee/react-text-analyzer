import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      // showAlert('Dark mode has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // showAlert('Light mode has been enabled', 'success')
    }
  } 

  return (
    <>
      <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </>
  );
}

export default App;
