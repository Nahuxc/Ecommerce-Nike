import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

const ItemListContainer = () =>{

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {

        const colletionRef = categoriaId
        ? query(collection(db, "products"), where("categoria", "==", categoriaId))
        : collection(db, "products")

        getDocs(colletionRef).then(response =>{
            const products = response.docs.map(doc =>{
                return {id: doc.id, ...doc.data()}
            })
            setProducts(products)
        }).finally(() =>{
          setLoading(false, 2000)
        })
    }, [categoriaId])

    if(loading){
        return <Loader/>
    }

    return(
        <div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;