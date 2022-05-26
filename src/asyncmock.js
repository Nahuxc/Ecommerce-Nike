const products = [
    {
        id: "1",
        name: "Nike Air Max",
        precio: "$15858",
        img: "https://i2.wp.com/www.zarpado.com/wp-content/uploads/2020/01/01_Packshot_Air_Jordan_1_LOW_OG_Dior_93507-e1579871627241.png?fit=1000%2C667&resize=350%2C200"
    },
    {
        id: "2",
        name: "Nike Black",
        precio: "$8245",
        img: "https://static.nike.com/a/images/t_default/6aad412b-aef1-474a-96d1-06a3c7dafaca/calzado-air-max-excee-vl97pm.png"
    },
    {
        id: "3",
        name: "Nike Prime",
        precio: "$11858",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/078/955/products/nike-sock-dart-819686100-5_1024x1-ebbddbb1bc7a8ff97916218093210509-1024-1024.png"
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}