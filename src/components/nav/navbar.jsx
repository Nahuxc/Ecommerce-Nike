import React from "react";
import "./navbar.css"
import CartWidget from "../Cart/CartWidget";


const NavBar =()=>{
    return(
        <nav className="nav">
            <img className="logo" src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt="logo-nike"></img>
            <ul className="nav-menu">
                <li className="nav-menu_li"><a href="#">Inicio</a></li>
                <li className="nav-menu_li"><a href="#">Productos</a></li>
                <li className="nav-menu_li"><a href="#">Categorias</a></li>
                <li className="nav-menu_li"><a href="#">Servicios</a></li>
            </ul>
            <CartWidget />
            <button  className="btn-interaz"><i className="fa-solid fa-user"></i></button>
        </nav>
    );
}

export default NavBar;