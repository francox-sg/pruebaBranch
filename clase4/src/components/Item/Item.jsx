
const Item =({id, nombre, imagen, precio})=>{

    return(
        <>
        <div>
            <h4>{nombre}</h4>
            <img style={{width:100, height:100}} src={imagen} alt="" />
            <p>${precio}</p>
            
        </div>
        </>
    )
}

export default Item