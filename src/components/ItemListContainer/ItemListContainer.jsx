import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({titulo}) =>{

    const [products, setProducts] = useState([])


    useEffect(() => {
        getProducts().then(response =>{
            setProducts(response)
        })
    }, [])

    return(
        <div>
            <h1>{titulo}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;