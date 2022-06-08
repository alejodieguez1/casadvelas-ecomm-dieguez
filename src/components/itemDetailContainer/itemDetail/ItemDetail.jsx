import React from "react";

export default function ItemDetail({ products }) {
  return (
    <div className="itemsContainer">
      {products.map((producto) => {
        return (
          <div className="item-container" key={producto.id}>
            <img src={producto.image} />
            <h2>{producto.name}</h2>
            <p>{producto.details}</p>
            <h3>${producto.price}</h3>
          </div>
        );
      })}
    </div>
  );
}
