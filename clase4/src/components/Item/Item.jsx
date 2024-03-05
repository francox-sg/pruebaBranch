
const Item =({id, nombre, imagen, precio})=>{

    return(
        <>
        <div>
            <h4>{nombre}</h4>
            <img style={{width:100, height:100}} src={imagen} alt="" />
        </div>
        </>
    )
}

export default Item