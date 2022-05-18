import ItemListContainer from "./ItemListContainer";

const CartWidget = () =>{
    return(
        <div>
            <button className="btn-interaz">
                <i className="fa-solid fa-cart-shopping">
                    <ItemListContainer greeting="0"/>
                </i>
            </button>
        </div>
    )
}

export default CartWidget;