import icon from "./logo-navbar.jpg";
import "./main.css";
function NavBar() {
  return (
    <header id="header-section">
      <nav id="nav-section">
        <img src={icon} alt="Casa D Velas Logotipo" />
        <input type="checkbox" id="hmb-menu" className="hmb-menu" />
        <label htmlFor="hmb-menu" className="hmb-label">
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </label>
        <ul className="nav-ul">
          <li className="nav-li">
            <a className="li-a">Inicio</a>
          </li>
          <span className="nav-span"/>
          <li className="nav-li">
            <a className="li-a">Productos</a>
          </li>
          <span className="nav-span middle-span"/>
          <li className="nav-li">
            <a className="li-a">Carrito</a>
          </li>
          <span className="nav-span"/>
          <li className="nav-li">
            <a className="li-a">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
