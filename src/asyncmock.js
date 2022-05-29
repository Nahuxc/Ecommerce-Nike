const products = [
    {
        id: "1",
        name: "Nike Air Zoom SuperRep 2",
        precio: "ARS$ 11.858",
        img: "https://static.runnea.com/images/202104/nike-air-zoom-superrep2-ficha-caracteristicas-precios-200x200x80xX.png?1",
        stock: 4,
        descripcion: "Clásicas, cómodas y versátiles, las Zapatillas Nike Air Zoom SuperRep 2 están inspiradas en un modelo de los '90 con una capellada de lona y ojales de metal para una durabilidad superior. La suela de goma aporta tracción para que puedas llevarlas a donde sea que vayas. El fondo monocromático te permite combinarlas con todos tus looks y los detalles Swoosh y el cuero del talón llevan tu estilo a otro nivel."
    },
    {
        id: "2",
        name: "Nike Sneakers",
        precio: "ARS$ 18.245",
        img: "https://i.pinimg.com/originals/7d/32/0e/7d320ea4f4bac92d2a97a1ef080f5cf2.png",
        stock: 8,
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "3",
        name: "Nike Roshe Two Flyknit",
        precio: "ARS$ 15.858",
        img: "https://static.runnea.com/images/201701/nike-roshe-two-flyknit-foto-3-200x200x80xX-1.jpg?1",
        stock: 15,
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "4",
        name: "Nike Sneakers Love",
        precio: "ARS$ 8.245",
        img: "https://i.pinimg.com/originals/1a/26/37/1a2637e7eb4d2f5d8347a5e2d85c7779.png",
        stock: 5,
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "5",
        name: "Nike Air Max Zero",
        precio: "ARS$ 12.245",
        img: "https://static.runnea.com/images/201605/nike-air-max-zero-id-rojas-200x200x80xX.png?1",
        stock: 12,
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1500)
    })
}

export const getProductsId = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === id))
        }, 2500)
    })
}