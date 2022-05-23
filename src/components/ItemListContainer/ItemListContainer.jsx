import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css"

const ItemListContainer = (props) =>{
    return(
        <div className="box-product">
            <h1 className="titule-prod">{props.titulo}</h1>
            <img className="img-prod" src="https://i2.wp.com/www.zarpado.com/wp-content/uploads/2020/01/01_Packshot_Air_Jordan_1_LOW_OG_Dior_93507-e1579871627241.png?fit=1000%2C667&resize=350%2C200" alt="zapatilla-nike" />
            <p className="price-prod">Precio: $13000</p>
            <ItemCount initial="1" stock="5"/>
        </div>
    )
}

export default ItemListContainer;