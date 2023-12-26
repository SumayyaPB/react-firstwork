import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Input from './Input';
import Button from './Button';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main'>
    {/* <React.StrictMode> */}
    <App />
    <Input label="Name"/>
    <Input label="Number"/>
    <Input label="Email"/>
    <Input label="Password"/>
    <Button />
   
  {/* </React.StrictMode> */}
  </div>
  
);



