import Contador from './components/contador/contador'
import Componente from './components/Componente/Componente';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  
  const [show, setShow] = useState(false);

/*   useEffect( ()=>{
    setShow(show => show ? false : true)
  }, [] ) */

  const toggle = ()=>{
    setShow(show => show ? false : true)
  }

  return (
    <>
      <button onClick={toggle}>Mostrar</button>
      {show ? <Componente/>: null}
    </>

    )
}

export default App
