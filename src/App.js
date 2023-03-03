import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
      showAlert("Light mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Dark mode enabled", "success");
    }
  }

 return ( 
    <BrowserRouter>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
    
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
            <TextForms showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter, Remove extra spaces " mode={mode} />
          </Route>
          <Route exact path="/about"><About mode={mode} /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
