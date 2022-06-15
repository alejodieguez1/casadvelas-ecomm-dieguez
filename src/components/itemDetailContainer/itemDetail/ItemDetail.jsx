import React from "react";
import ItemCount from '../../itemCounter/ItemCount'

export default function ItemDetail({ products }) {
  return (
    <div className="itemsContainer">
      {products.map((producto) => (
        <div className="home-product" key={producto.id}>
          <img src={producto.image} />
          <h2>{producto.name}</h2>
          <p>{producto.details}</p>
          <h3>${producto.price}</h3>
          <ItemCount initial={1} stock={producto.stock}/>
        </div>
      ))}
    </div>
  );
}
