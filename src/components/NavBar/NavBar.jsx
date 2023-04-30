import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"


const NavBar = () => {

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 800px)").matches
      )
    
      useEffect(() => {
        window
        .matchMedia("(min-width: 800px)")
        .addEventListener('change', e => setMatches( e.matches ));
      }, []);

    return (
        <div>
                {
                    !matches ? ( 
                    <nav className="nav">
                        <Link className="box-img-logo" to="/">
                            <img className="logo" src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt="logo-nike"></img>
                        </Link>
                    </nav>)
                    :
                    <nav className="nav">
                        <Link to="/">
                            <img className="logo" src="https://www.wsj.com/coupons/static/shop/32174/logo/Nike-coupons.png" alt="logo-nike"></img>
                        </Link>
                        <ul className="nav-menu">
                            <li className="nav-menu_li"><Link className="link-a" to="/">Inicio</Link></li>
                            <li className="nav-menu_li"><Link className="link-a" to="/Air">Nike Air</Link></li>
                            <li className="nav-menu_li"><Link className="link-a" to="/Jordan">Nike Jordan</Link></li>
                            <li className="nav-menu_li"><Link className="link-a" to="/Roshe">Nike Roshe</Link></li>
                        </ul>
                    <CartWidget />
                    </nav>
                }
        </div>
    );
}

export default NavBar;