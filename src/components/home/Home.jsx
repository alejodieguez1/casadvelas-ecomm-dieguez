import React from "react";
import ItemListContainer from "../itemListContainer/ItemListContainer";

let textLogo = require("../../assets/text-logo.png");

export default function Home() {
  return (
    <>
      <main id="main-section">
        <div className="main-container parallax">
          <img src={textLogo} alt="Casa D Velas logo principal" />
        </div>
      </main>
      <section id="description-section">
        <div className="container">
          <p className="home-p home-text">
            La cera de soja es natural, ecológica y sostenible. Las velas
            elaboradas con cera de soja tienen muchas ventajas:
          </p>
          <ul>
            <li className="home-li home-text">
              -No contaminan el medio ambiente, que que liberan un 90 % menos
              hollín.
            </li>
            <li className="home-li home-text">-Su duración es mayor, el doble que las de parafina.</li>
            <li className="home-li home-text">-Se consumen totalmente.</li>
          </ul>
        </div>
      </section>
      <section className="parallax">
        <h2 className="home-h2 home-title">PRODUCTOS</h2>
      </section>
      <section id="products-section">
        <ItemListContainer />
      </section>
    </>
  );
}
