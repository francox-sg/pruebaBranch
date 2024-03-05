import ItemList from "../ItemList/ItemList"
import { getProductos } from "../../asynckMock"
import { useEffect, useState } from "react"
const ItemListContainer = ()=>{

    const [products, setProducts] =useState([])


    useEffect(()=>{
        getProductos()
        .then(result =>{
            setProducts(result)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    console.log(products);
        return(
            <>
                <h1>ItemListContainer</h1>
                <ItemList productos={products}/>
            </>
        )
}

export default ItemListContainer