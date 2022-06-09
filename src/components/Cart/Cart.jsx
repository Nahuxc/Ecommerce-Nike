import { useContext } from "react"
import CartContext from "../Context/CartContext"
import "./Cart.css"


const Cart = () => {

  const {cart, removeItem} = useContext(CartContext)

  return (
    <div className="box-cart">
        <h2>Carrito</h2>
        <div >
           {cart.map(prod => {
             return(
               <div key={prod.id} className="cart">
                 <div>{prod.name}</div>
                 <div>Cantidad: {prod.Quantity}</div>
                 <div>Precio x uni: ${prod.precio} </div>
                 <div>SubTotal: ${prod.precio * prod.Quantity} </div>
                 <button onClick={()=> removeItem(prod.id)}>Eliminar</button>
               </div>
             )})
           }
        </div>
    </div>
  )
}

export default Cart