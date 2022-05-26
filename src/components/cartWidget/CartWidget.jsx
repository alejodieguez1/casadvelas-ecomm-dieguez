import React from 'react'
import icon from './cart-image.png'
export default function CartWidget() {
  return (
    <div className = 'widgetContainer'>
    <img src={icon} alt="Icono Carrito de compras"/>
    </div>
  )
}
