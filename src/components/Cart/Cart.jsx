import { useContext } from "react"
import CartContext from "../Context/CartContext"
import "./Cart.css"


const Cart = () => {

  const {cart, removeItem, vaciar, precioTotal, getQuantity} = useContext(CartContext)

  const Quantity = getQuantity()

  return (
    <div className="box-cart">
      <div className="box-titulo">
        <h2>Carrito</h2>
      </div>
        {Quantity > 0 ? <div>
           {cart.map(prod => {
             return(
               <div key={prod.id} className="cart">
                 <div>{prod.name}</div>
                 <div>Cantidad: {prod.Quantity}</div>
                 <div>Precio x uni: ${prod.precio} </div>
                 <div>SubTotal: ${prod.precio * prod.Quantity} </div>
                 <button className="btn-eliminar" onClick={()=> removeItem(prod.id)}>Eliminar</button>
               </div>
             )})
            }
            <div className="total-precio">Total: ${precioTotal()} </div>
            <div className="box-btns">
              <div className="box-btnvaciar">
                <button className="btn-vaciar" onClick={()=> vaciar()}>Vaciar</button>
              </div>
              <div className="box-btnfisish">
                <button className="btn-finish">Finalizar Compra</button>
              </div>
            </div>
        </div> : <div className="box-cart-vacio">
          <span className="cart-vacio-titulo">Carrito Vacio</span>
          </div>}
    </div>
  )
}

export default Cart