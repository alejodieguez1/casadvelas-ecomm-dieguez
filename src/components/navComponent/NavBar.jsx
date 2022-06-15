import { Link } from "react-router-dom";
import "./main.css";
let logo = require("../../assets/logo-white-bg.jpg");
function NavBar() {

  return (
    <header id="header-section">
      <nav id="nav-section">
        <img src={logo} alt="Casa D Velas Logotipo" />
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
              Productos 
            </Link>
            <div id="drop-mn" className="dropdown-content">
              <a className="drop-btn drop-link">Velas</a>
              <a className="drop-btn drop-link">Difusores</a>
              <a className="drop-btn drop-link">Homespray</a>
              <a className="drop-btn drop-link">Centros de mesa</a>
              <a className="drop-btn drop-link">GiftBoxes</a>
            </div>
          </li>
          <span className="nav-span middle-span" />
          <li className="nav-li">
            <a className="li-a">Carrito</a>
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
