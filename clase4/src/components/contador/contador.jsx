import { useState } from "react"


const Contador = ()=>{
    console.log("render");

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("marron");

    const increment = ()=>{
        setCount (prev => prev + 1) ;
        setCount (prev => prev + 1) ;
        setCount (prev => prev + 1) ;
        
    }
    
    const decrement = ()=>{
        setCount (count - 1);
    }


    const cambiaColor = ()=>{
        if (color === "marron"){
            setColor("Rojo");
        }else if(color ==="Rojo"){
            setColor("Negro")
        }else{
            setColor(prev => prev + "+")
        }
    }

    return(
        <>
            <p>{count}</p>    
            <button onClick={   increment   }>Incrementar</button>
            <button onClick={   decrement   }>Decrementar</button>
            <p>"El color es: " {color}</p>
            <button onClick={cambiaColor}>Cambiar color</button>
        </>
    )
}

export default Contador