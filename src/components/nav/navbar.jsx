import React from "react";
import "./navbar.css"


const Navbar =()=>{
    return(
        <nav className="nav">
            <img className="logo" src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt=""></img>
            <ul className="nav-menu">
                <li className="nav-menu_li"><a href="#">Inicio</a></li>
                <li className="nav-menu_li"><a href="#">Productos</a></li>
                <li className="nav-menu_li"><a href="#">Categorias</a></li>
                <li className="nav-menu_li"><a href="#">Servicio</a></li>
            </ul>
            <button className="btn-interaz" ><i class="fa-solid fa-cart-shopping"></i></button>
            <button  className="btn-interaz"><i class="fa-solid fa-user"></i></button>
        </nav>
    );
}

export default Navbar;