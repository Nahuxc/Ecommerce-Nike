const products = [
    {
        id: "1",
        name: "Nike Air Zoom SuperRep 2",
        categoria: "Air",
        precio: 11858,
        img: "https://centralsport.online/media/catalog/product/cache/10f519365b01716ddb90abc57de5a837/B/Q/BQ3204-400-zapatillas-baratas-nike-correr-revolution-5-hombre-azul-1.png",
        stock: 4,
        talla: ["38","39","40","41"],
        descripcion: "Clásicas, cómodas y versátiles, las Zapatillas Nike Air Zoom SuperRep 2 están inspiradas en un modelo de los '90 con una capellada de lona y ojales de metal para una durabilidad superior. La suela de goma aporta tracción para que puedas llevarlas a donde sea que vayas. El fondo monocromático te permite combinarlas con todos tus looks y los detalles Swoosh y el cuero del talón llevan tu estilo a otro nivel."
    },
    {
        id: "2",
        name: "Nike Jordan Max Aura 3",
        categoria: "Jordan",
        precio: 18245,
        img: "https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dwd644bb85/images/hi-res/001495140_101.png?sw=600&sh=600&sm=fit",
        stock: 8,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Jordan Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "3",
        name: "Nike Roshe Two Flyknit",
        categoria: "Roshe",
        precio: 15858,
        img: "https://www.golfshop.de/media/image/cf/90/43/CI7736-103-PHSRH000-2000nfrkOXbpiKea3_600x600.png",
        stock: 15,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Roshe Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "4",
        name: "Nike Air Jordan's",
        categoria: "Jordan",
        precio:  8245,
        img: "https://cdn.shopify.com/s/files/1/0515/6379/0508/products/air-jordan-1-mid-white-black-royal-554724-140_1_1800x1800_b2a03456-fb02-4575-a0bd-44edb7228acb_600x.png?v=1627981074",
        stock: 5,
        talla: ["37","38","40","42"],
        descripcion: "Las zapatillas Nike Jordan Air  Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "5",
        name: "Nike Air Max Zero",
        categoria: "Air",
        precio: 12245,
        img: "https://www.mgsports.cl/wp-content/uploads/2020/01/zapatillas-nike-training-600x600.png",
        stock: 16,
        talla: ["38","39","40","41"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "6",
        name: "Nike Roshe G",
        categoria: "Roshe",
        precio: 8545,
        img: "https://www.golfshop.de/media/image/99/34/77/CD6066-003-PHSRH001-2000vBjl8yT8rt0tk_600x600.png",
        stock: 13,
        talla: ["38","39","40","42"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "7",
        name: "Nike Air Max 200",
        categoria: "Air",
        precio: 21245,
        img: "https://www.courir.es/dw/image/v2/BCCL_PRD/on/demandware.static/-/Sites-master-catalog-courir/default/dw34f37f50/images/hi-res/001495050_101.png?sw=600&sh=600&sm=fit",
        stock: 18,
        talla: ["38","39","40","42"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "8",
        name: "UK's Latest Air Jordan",
        categoria: "Jordan",
        precio: 18780,
        img: "https://cdn.shopify.com/s/files/1/0515/6379/0508/products/air-jordan-1-mid-gs-coral-chalk-rush-pink-554725-662_1_900x900_07b5c517-d6da-4f2b-b559-261e6ba8202f_600x.png?v=1633624316",
        stock: 22,
        talla: ["38","39","40","42"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "9",
        name: "Nike Roshe Red Native",
        categoria: "Roshe",
        precio: 15600,
        img: "https://static.runnea.com/images/202105/asics-gel-kayano-28-3-1024x1024x80.png?1",
        stock: 40,
        talla: ["38","39","40","42"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "10",
        name: "Nike Roshe RunAllDay",
        categoria: "Roshe",
        precio: 5600,
        img: "https://scalasport.com.co/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0NNYnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--86a492937b7550939c8ce0594e9f13128d80abc3/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9TY21WemFYcGxYM1J2WDJacGRGc0hhUUpZQW1rQ1dBST0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--361554d0b7dd92546ceda39454543fcece989fd5/CD0223007%201.png?locale=en",
        stock: 24,
        talla: ["38","39","40","42"],
        descripcion: "Las zapatillas Nike Sneakers Low se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "12",
        name: "Jordan Air 1 Mid",
        categoria: "Jordan",
        precio: 15600,
        img: "https://static.runnea.com/images/202106/88/jordan-air-1-mid-se-840xXx90.png?1",
        stock: 35,
        talla: ["38","39","40","42"],
        descripcion: "Las zapatillas Nike Jordan Air 1 Mid se destacan por un diseño que fusiona por un lado su exterior que combina la piel natural y sintética proporcionando una mejor sujeción donde más se necesita y, por otro lado, su media suela gruesa cuenta con la tecnología Air que te proporciona más altura con una forma disruptiva en su mitad con forma de olas para que sientas confort y estilo en cada paso."
    },
    {
        id: "13",
        name: "Nike Air Max Night Maroon",
        categoria: "Air",
        precio: 13650,
        img: "https://i.ebayimg.com/images/g/DQEAAOSwuSlhoQ9L/s-l600.png",
        stock: 15,
        talla: ["38","39","40","42"],
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