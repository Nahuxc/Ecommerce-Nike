import { useContext } from "react"
import CartContext from "../Context/CartContext"
import "./Cart.css"


const Cart = () => {

  const {cart, removeItem, vaciar, precioTotal, getQuantity} = useContext(CartContext)

  const Quantity = getQuantity()

  return (
    <div className="box-cart">
        <h2>Carrito</h2>
        {Quantity > 0 ? <div>
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
            <div>Total: ${precioTotal()} </div>
            <button>Finalizar Compra</button>
            <button onClick={()=> vaciar()}>vaciar</button>
        </div> : <span>Carrito Vacio</span>}
    </div>
  )
}

export default Cart