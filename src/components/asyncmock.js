const productos = [
    {
        id: "1",
        name: "iphone 15",
        precio: "$1858"
    },
    {
        id: "2",
        name: "iphone 12",
        precio: "$1245"
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}