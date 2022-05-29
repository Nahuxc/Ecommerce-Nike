import "./ItemCount.css"
import { useState } from "react";


const ItemCount = (props)=>{

    const [count, setCount] = useState(parseInt(props.initial));

    const onAdd = () => {
		if (count < props.stock) {
			setCount(count + 1);
		}
	};

	const onSubtraction = () => {
		if (count > props.initial) {
			setCount(count - 1);
		}
	};

    return(
        <div className="box-btnprod-aum">
            <div className="box-btnprod">
                <button className="btn-rest" onClick={onSubtraction}>
                    -
                </button>
                    <span className="span-num-prod">
                        {count}
                    </span>
                <button className="btn-sum" onClick={onAdd}>
                    +
                </button>
            </div>
        </div>
    )
}

export default ItemCount;