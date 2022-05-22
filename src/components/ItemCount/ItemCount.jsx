import "./ItemCount.css"

const ItemCount = ()=>{
    return(
        <div className="box-btnprod">
            <button className="btn-rest">
                -
            </button>
                <span className="span-num-prod">
                    0
                </span>
            <button className="btn-sum">
                +
            </button>
        </div>
    )
}

export default ItemCount;