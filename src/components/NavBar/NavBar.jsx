import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="nav">
            <Link to="/">
                <img className="logo" src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt="logo-nike"></img>
            </Link>
            <ul className="nav-menu">
                <li className="nav-menu_li"> <Link className="link-a" to="/">Inicio</Link></li>
                <li className="nav-menu_li"> <Link className="link-a" to="/Air">Nike Air</Link></li>
                <li className="nav-menu_li"> <Link className="link-a" to="/Jordan">Nike Jordan</Link></li>
                <li className="nav-menu_li"> <Link className="link-a" to="/Roshe">Nike Roshe</Link></li>
            </ul>
            <CartWidget />
            <button className="btn-interaz"><i className="fa-solid fa-user"></i></button>
        </nav>
    );
}

export default NavBar;