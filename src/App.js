
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  const [mode, setMode]=useState('light');
  const[alert, setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Light mode enabled", "sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode enabled", "sucess");
    }
  }

  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3"><TextForms showAlert={showAlert} heading="Enter the text to analyze " mode={mode} /></div>
   <About/>
    </>
  );
}

export default App;
