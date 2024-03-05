import Contador from './components/Contador/Contador';
import ItemListContainer from './components/ItemListContainter/ItemListContainter';
import './App.css'

function App() {

const producto = {id:1 , nombre:"remera", precio:500, stock:5};
  
  return (
    <>
      <Contador {...producto} />
      <ItemListContainer/>
    </>

    )
}

export default App
