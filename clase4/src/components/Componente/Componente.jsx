import { useState, useEffect } from "react"


const Componente = () =>{
console.log("renderComponente");

const [count, setCount] = useState(0);

useEffect(()=>{
    console.log("useEffect" );
    document.title= "count: " + count;
    return ()=>{
        console.log("return useEffect" );
        document.title= "vite";
        
    }
}, [count] )


const aumentar = ()=>{
    setCount(count => count +1)
}
const reducir = ()=>{
    setCount(count => count -1)
}

    return(
        <>
            <p>---------Componente useEffct----------</p>
            <p>{count}</p>
            <button onClick={aumentar} >+</button>
            <button onClick={reducir} >-</button>
        </>
    )
}

export default Componente

