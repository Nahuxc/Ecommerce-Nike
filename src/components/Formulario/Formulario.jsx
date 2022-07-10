import React, { useContext, useState } from "react";
import { db } from "../../service/firebase";
import { addDoc, collection, Timestamp, getDocs, query, where, documentId, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import CartContext from "../Context/CartContext";
import Loader from "../Loader/Loader";
import "./Formulario.css"

const OrdenFinal = () => {
    const { cart, precioTotal, vaciar } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");
    const [creatingOrder, setCreatingOrder] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const sendOrder = e => {
        e.preventDefault();
        setCreatingOrder(true);
        delete formData.emailConfirm;
        const newOrder = {
            name: formData,
            date: Timestamp.fromDate(new Date()),
            items: cart,
            total: precioTotal()
        };
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, newOrder)
            .then(({ id }) => {
                batch.commit()
                vaciar()
                setOrderId(id)
            }).catch(error => {
                console.log(error)
            })
            .finally(() => {
                setCreatingOrder(false);
                setFormData({ name: "", email: "", phone: "" });
            });

        const ids = cart.map(prod => prod.id)

        const outOfStock = []

        const batch = writeBatch(db)

        const collectionRef = collection(db, 'products')

        getDocs(query(collectionRef, where(documentId(),"in", ids)))

            .then(response =>{
                response.docs.forEach(doc =>{
                    const dataDoc = doc.data()

                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.Quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    } else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            })

    };
    return (
        <div>
            <div className="box-form">
                {creatingOrder ? (
                  <Loader/>
                ) : orderId ? (
                    <div className=" box-orders">
                        <h2 className="titulo-id">Tu compra Se Realizo Con Exito</h2>
                        {orderId && <h1 className="codigo-id">Aca Tu Codigo de Orden ID: {orderId }</h1>}
                        <Link className="box-btnvl" to="/">
                            <button className="btn-vl">Volver al inicio</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <h2>Formulario de compra</h2>
                        <h3>Completa Con Tus Datos Y Finaliza Tu Compra</h3>
                        <form
                            onSubmit={sendOrder}
                            onChange={handleChange}
                        >
                            <div >
                                <label>Nombre y Apellido</label>
                                <input
                                    type="name"
                                    name="name"
                                    defaultValue={formData.name}
                                    required
                                />
                            </div>
                            <div>
                                <label >Telefono</label>
                                <input
                                    type="number"
                                    name="phone"
                                    defaultValue={formData.phone}
                                    required
                                />
                            </div>
                            <div >
                                <label >E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={formData.email}
                                    required
                                />
                            </div>
                            <button
                                disabled={
                                    !formData.name ||
                                    !formData.phone ||
                                    !formData.email ||
                                    cart.length === 0
                                }
                            >
                                Confirmar Compra
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div >
    )

}


export default OrdenFinal;