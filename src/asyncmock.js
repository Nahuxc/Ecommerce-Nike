const products = [
    {
        id: "1",
        name: "Nike Air Zoom SuperRep 2",
        categoria: "Air",
        precio: "ARS$ 11.858",
        img: "https://centralsport.online/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/B/Q/BQ3204-400-zapatillas-baratas-nike-correr-revolution-5-hombre-azul-1.png",
        stock: 4,
        talla: ["38","39","40","41"],
        descripcion: "Clásicas, cómodas y versátiles, las Zapatillas Nike Air Zoom SuperRep 2 están inspiradas en un modelo de los '90 con una capellada de lona y ojales de metal para una durabilidad superior. La suela de goma aporta tracción para que puedas llevarlas a donde sea que vayas. El fondo monocromático te permite combinarlas con todos tus looks y los detalles Swoosh y el cuero del talón llevan tu estilo a otro nivel."
    },
    {
        id: "2",
        name: "Nike Jordan Max Aura 3",
        categoria: "Jordan",
        precio: "ARS$ 18.245",
        img: "https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwd644bb85/images/hi-res/001495140_101.png?sw=600&sh=600&sm=fit",
        stock: 8,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Jordan Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "3",
        name: "Nike Roshe Two Flyknit",
        categoria: "Roshe",
        precio: "ARS$ 15.858",
        img: "https://www.golfshop.de/media/image/cf/90/43/CI7736-103-PHSRH000-2000nfrkOXbpiKea3_600x600.png",
        stock: 15,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Roshe Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "4",
        name: "Nike Air Jordan's",
        categoria: "Jordan",
        precio: "ARS$ 8.245",
        img: "https://cdn.shopify.com/s/files/1/0515/6379/0508/products/air-jordan-1-mid-white-black-royal-554724-140_1_1800x1800_b2a03456-fb02-4575-a0bd-44edb7228acb_600x.png?v=1627981074",
        stock: 5,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Jordan Air  Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "5",
        name: "Nike Air Max Zero",
        categoria: "Air",
        precio: "ARS$ 12.245",
        img: "https://www.mgsports.cl/wp-content/uploads/2020/01/zapatillas-nike-training-600x600.png",
        stock: 12,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductsId = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getCategoria = (categoriaId) =>{
    return new Promise (resolve =>{
        setTimeout(()=> {
            resolve(products.filter(prod => prod.categoria === categoriaId))
        }, 500)
    })
}