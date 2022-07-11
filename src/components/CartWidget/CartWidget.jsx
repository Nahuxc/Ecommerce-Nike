import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";

const CartWidget = () =>{
    
    const {getQuantity} = useContext(CartContext)
    const Quantity = getQuantity()

    return(
        <div>
            <Link className="btn-interaz" to="/cart">
            <i className="fa-solid fa-cart-shopping">
                    <span> {Quantity} </span>
                </i>
            </Link>
        </div>
    )
}

export default CartWidget;