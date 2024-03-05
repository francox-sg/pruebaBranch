import Item from "../Item/Item"

const ItemList = ({productos})=>{

    return(
        <>
            {

            productos.map((producto)=>{
                return (
                        <div key={producto.id}>
                            <Item {...producto}/>

                        </div>
                    ) 
                    
            })
            }
        </>
    )


}

export default ItemList