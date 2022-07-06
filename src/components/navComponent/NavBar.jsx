import { Link } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";
let logo = require("../../assets/logo-white-bg.jpg");


function NavBar() {
  return (
    <header id="header-section">
      <nav id="nav-section">
        <Link to="/">
          <img src={logo} alt="Casa D Velas Logotipo" />
        </Link>
        <CartWidget />
        <input type="checkbox" id="hmb-menu" className="hmb-menu" />
        <label htmlFor="hmb-menu" className="hmb-label">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </label>
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/" className="li-a">
              Inicio
            </Link>
          </li>
          <span className="nav-span" />
          <li className="nav-li dropdown">
            <Link to="/products" className="li-a down">
              Todos los productos
            </Link>
            <span className="nav-span products-span middle-span" />
            <div id="drop-mn" className="dropdown-content">
              <Link
                to="/products/category/velas"
                className="drop-btn drop-link"
              >
                Velas
              </Link>
              <Link
                to="/products/category/difusores"
                className="drop-btn drop-link"
              >
                Difusores
              </Link>
              <Link
                to="/products/category/homespray"
                className="drop-btn drop-link"
              >
                Homespray
              </Link>
              <Link
                to="/products/category/centros"
                className="drop-btn drop-link"
              >
                Centros de mesa
              </Link>
              <Link
                to="/products/category/gifts"
                className="drop-btn drop-link"
              >
                GiftBoxes
              </Link>
              <Link
                to="/products/category/especieros"
                className="drop-btn drop-link"
              >
                Especieros
              </Link>
            </div>
          </li>
          <span className="nav-span middle-span" />
          <li className="nav-li">
            <Link to="/cart" className="li-a down">
              Carrito
            </Link>
          </li>
          <span className="nav-span" />
          <li className="nav-li">
            <a className="li-a">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
