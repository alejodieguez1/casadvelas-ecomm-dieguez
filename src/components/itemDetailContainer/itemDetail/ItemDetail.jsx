import React from "react";
import ItemCount from "../../itemCounter/ItemCount";

export default function ItemDetail({product}) {
  const {id, image, details, name, price, stock} = product
  return (
    <div className="itemsContainer">
        <div className="home-product" key={id}>
          <img src={image} />
          <h2>{name}</h2>
          <p>{details}</p>
          <h3>${price}</h3>
          <ItemCount initial={1} stock={stock} />
        </div>
    </div>
  );
}
