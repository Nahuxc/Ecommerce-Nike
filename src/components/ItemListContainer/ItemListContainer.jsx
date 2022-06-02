import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getCategoria } from "../../asyncmock";


const ItemListContainer = () =>{

    const [products, setProducts] = useState([])



    const {categoriaId} = useParams()

    useEffect(() => {

        if(!categoriaId){
            getProducts().then(response =>{
                setProducts(response)
            })
        }else{
            getCategoria(categoriaId).then(response =>{
                setProducts(response)
            })
        }

    }, [categoriaId])

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;