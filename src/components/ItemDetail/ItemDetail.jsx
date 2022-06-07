
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({name, precio, img, descripcion, stock, talla}) => {

  const [Quantity, SetQuantity] = useState(0)
  const handleOnAdd = (Quantity) =>{
    SetQuantity(Quantity)
  }

  return (
    <div className='box-ItemDetail'>
        <div className='box-img'>
          <img className='img-detail' src={img} alt="Zapatillas-nike" />
        </div>
        <div className='box-descripcion'>
          <h1 className='titulo-detail'>{name}</h1>
          <p className='descripcion-detail'> {descripcion} </p>
          <p className='precio-detail'>{precio} </p>

            <div className='card'>
                <div className='contenido'>
                      <div className='zapatillas-colores'>
                          <h3>Color :</h3>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                      </div>
                </div>
            </div>
          <div>
              {Quantity > 0 ? <Link className="btn-detalle" to="/cart">Finalizar Compra</Link> : <ItemCount onAdd={handleOnAdd} stock={stock}/> }
          </div>
        </div>
    </div>
  )
}

export default ItemDetail