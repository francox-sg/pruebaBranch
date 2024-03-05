import { useState } from "react"

const Contador = ({nombre, stock})=>{

const [count, setCount] = useState(0);

const increment = ()=>{
    
    if (stock > count){
        setCount(prev => prev+1)
        
    }
    
}
const decrement = ()=>{
    if(count>0){

        setCount(prev => prev-1)
    }
}


return(
    <>
        <p>El Producto es {nombre} y la cantidad es {stock}</p>
        <p>{count}</p>
        <button onClick={increment} >increment</button>    
        <button onClick={decrement} >decrement</button>    
    
    </>

)

}



export default Contador