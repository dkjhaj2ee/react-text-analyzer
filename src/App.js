import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import Alert from './components/Alert';
import { 
  BrowserRouter ,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) =>{
  //   setAlert({
  //     message: message,
  //     type: type
  //   })

  //   setTimeout(() => {
  //     setAlert(null)
  //   }, 1500)
  // };

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
    <BrowserRouter>
      <Routes>
        <Route exact
          path='/'
          element={
          <>
            <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
            <TextForm heading="Enter the text to analyze below" mode={mode}/>
          </>
          }/>
          <Route exact
            path='/about'
            element={
              <>
              <Navbar title="Text Analyzer" mode={mode} toggleMode={toggleMode} />
              <About/>
              </>
            } />
          
          <Route path="*" element={<h1>Error Page</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
