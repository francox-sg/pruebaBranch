import { useEffect, useRef } from "react"

const Button = ()=>{

    const buttonRef = useRef();
    
    
    
    useEffect(()=>{

        /*   const boton = buttonRef.current;
        
        const handleClick = () => {console.log("Hice Click")}

        boton.addEventListener('click', handleClick )

        return () =>{
            boton.removeEventListener('click', handleClick);
        } */
    },[])

    return(
        <button ref={buttonRef} onClick={(e)=>{console.log(e);}}>Boton</button>
    )
}



export default Button
