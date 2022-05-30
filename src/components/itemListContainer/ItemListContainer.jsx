import React from 'react'
import './main.css'
export default function ItemListContainer({greeting}) {
  return (
  <section id='main-section'>
    <p>Esto es el item list container</p>
    <button className='greet-btn' type='button' onClick={() => greeting()}>Click me!</button>
  </section>
  )
}
