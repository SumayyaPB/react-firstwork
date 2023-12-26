import React from 'react'
import './App.css';

function Input({label}) {
  return (
    <div className='input'>
        <label htmlFor="name">{label}</label>
        <input type="text" />
    </div>
  )
}

export default Input