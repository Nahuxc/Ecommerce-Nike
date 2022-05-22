const ItemListContainer = (props) =>{
    return(
        <div>
            <h1>{props.name}</h1>
            <img src="https://i2.wp.com/www.zarpado.com/wp-content/uploads/2020/01/01_Packshot_Air_Jordan_1_LOW_OG_Dior_93507-e1579871627241.png?fit=1000%2C667&resize=350%2C200" alt="zapatilla-nike" />
            <button>
                -
            </button>
            <span>0</span>
            <button>
                +
            </button>
            <p>precio: $13000</p>
        </div>
    )
}

export default ItemListContainer;