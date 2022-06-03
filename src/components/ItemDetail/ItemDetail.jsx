import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, precio, img, descripcion, stock}) => {
  return (
    <div className='box-ItemDetail'>
        <div className='box-img'>
          <img className='img-detail' src={img} alt="Zapatillas-nike" />
        </div>
        <div className='box-descripcion'>
          <h1 className='titulo-detail'>{name}</h1>
          <p className='descripcion-detail'> {descripcion} </p>
          <p className='precio-detail'>{precio} </p>
          <ItemCount initial="0" stock={stock}/>
          <div className='box-btnbuy'>
              <button className='btn-buy'>Agregar Al Carrito</button>
          </div>
        </div>
    </div>
  )
}

export default ItemDetail