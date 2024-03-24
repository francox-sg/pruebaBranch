import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainter/ItemListContainter';
import Button from './components/Button/Button.jsx';
import { useState } from 'react';
import './App.css'

function App() {
const [quantity, setQuantity] = useState(0);
const producto = {id:1 , nombre:"remera", precio:500, stock:5};


const handleClick = (count)=>{
  console.log(`Agregados ${count}`);
  setQuantity(count)
}

  return (
    <>
      {
        quantity === 0 ? <Contador {...producto } onAdd={handleClick} /> : <p>Listo</p>
      }
      
      <ItemListContainer/>
      {/* <Button/> */}
    </>

    )
}

export default App
