
import React from 'react';
import Boton from './components/Boton';
import './App.css';
import FreeLogo from './images/free-logo.png'
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react'
import { evaluate } from 'mathjs'
function App() {
  const [input, setinput] = useState('');

  const agregarInput = val =>{
    setinput(input + val)
  }

  const calcularResultado =()=>{
    if(input){
    setinput(evaluate(input))
    }else{
      alert('por favor ingrese valores para hacer los calculos')
    }
  }

  return (
    <React.Fragment>
      <div className='App'>
        <div className='free-logo-cont' >
          <img src={FreeLogo}
          alt="logo free"
          className='free-logo' />
        </div>
        <div className='cont-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >1</Boton>
            <Boton manejarClic={agregarInput} >2</Boton>
            <Boton manejarClic={agregarInput} >3</Boton>
            <Boton manejarClic={agregarInput} >+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >4</Boton>
            <Boton manejarClic={agregarInput} >5</Boton>
            <Boton manejarClic={agregarInput} >6</Boton>
            <Boton manejarClic={agregarInput} >-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} >7</Boton>
            <Boton manejarClic={agregarInput} >8</Boton>
            <Boton manejarClic={agregarInput} >8</Boton>
            <Boton manejarClic={agregarInput} >*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={calcularResultado} >=</Boton>
            <Boton manejarClic={agregarInput} >0</Boton>
            <Boton manejarClic={agregarInput} >.</Boton>
            <Boton manejarClic={agregarInput} >/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClic={()=>setinput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default App;