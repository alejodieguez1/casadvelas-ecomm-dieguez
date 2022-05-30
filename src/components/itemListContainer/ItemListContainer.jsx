import React from 'react'
import './main.css'
export default function ItemListContainer() {
  return (
  <section id='main-section'>
    <p>Este es un producto</p>
    <p>El stock del producto es: </p>
    <div className='count-container'>
        <button type='button' className='product-btn'>-</button>
        <p>A</p>
        <button type='button' className='product-btn'>+</button>
        <button type='button' className='product-btn'>Add to cart</button>
    </div>
  </section>
  )
}
