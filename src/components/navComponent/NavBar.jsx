import CartWidget from "../cartWidget/CartWidget";
import icon from "./logo-navbar.jpg";
import "./main.css";
function NavBar() {
  return (
    <header id="header-section">
      <nav id="nav-section">
        <img src={icon} alt="Casa D Velas Logotipo" />
        <CartWidget />
        <input type="checkbox" id="hmb-menu" className="hmb-menu" />
        <label htmlFor="hmb-menu" className="hmb-label">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </label>
        <ul className="nav-ul">
          <li>
            <a>Inicio</a>
          </li>
          <li>
            <a>Productos</a>
          </li>
          <li>
            <a>Carrito</a>
          </li>
          <li>
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="spacer-bar" />
    </header>
  );
}
export default NavBar;
