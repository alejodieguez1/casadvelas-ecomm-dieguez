import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Contexto } from '../../context/CartContext';
import icon from './cart-image.png';
export default function CartWidget() {

  const {getItemQty} = useContext(Contexto);

  return (
    <Link to="/cart" className='link-a'>
    <div className = 'widgetContainer'>
    <img src={icon} alt="Icono Carrito de compras"/>
    <p className='item-qty'>{getItemQty()}</p>
    </div>
    </Link>
  )
}
