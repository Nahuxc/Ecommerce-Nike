import "./ItemCount.css"
import { useState } from "react";


const ItemCount = ({stock, initial=1, onAdd})=>{




    const [count, setCount] = useState(parseInt(initial));

    const onIncrement = () => {
		if (count < stock) {
			setCount(count + 1);
		}
	};

	const onSubtraction = () => {
		if (count > initial) {
			setCount(count - 1);
		}
	};

    return(
        <div className="">
            <div className="box-btnprod">
                <button className="btn-rest" onClick={onSubtraction}>
                    -
                </button>
                    <span className="span-num-prod">
                        {count}
                    </span>
                <button className="btn-sum" onClick={onIncrement}>
                    +
                </button>
            </div>
            <div className='box-btnbuy'>
              <button className='btn-buy' onClick={()=> onAdd(count) } >Agregar Al Carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;