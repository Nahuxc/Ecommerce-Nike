import { useContext } from "react";
import CartContext from "../Context/CartContext";

const CartWidget = () =>{

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return(
        <div>
            <button className="btn-interaz">
                <i className="fa-solid fa-cart-shopping">
                    <span> {quantity} </span>
                </i>
            </button>
        </div>
    )
}

export default CartWidget;