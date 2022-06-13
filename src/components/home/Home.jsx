import React from 'react'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import './main.css'

let wallpaper = require('../../assets/main-logo.png');

export default function Home() {
  return (
      <div className='main-container'>
        <main id="main-section">
            <div className="main-container parallax"> 
                <img src={wallpaper} alt="Casa D Velas logo principal"/>
            </div>
        </main>
        <section id="description-section">
            <div className="container">
                <p>La cera de soja es natural, ecológica y sostenible. Las velas elaboradas con cera de soja tienen muchas ventajas:</p>
                <ul>
                    <li>-No contaminan el medio ambiente, que que liberan un 90 % menos hollín.</li>
                    <li>-Su duración es mayor, el doble que las de parafina.</li>
                    <li>-Se consumen totalmente.</li>
                </ul>
            </div>
        </section>
        <section className="parallax">
            <h2>PRODUCTOS</h2>
        </section>
        <section id="products-section">
            <ItemDetailContainer/>
        </section>  
      </div>
  )
}
