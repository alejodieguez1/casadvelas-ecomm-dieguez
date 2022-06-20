import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../../itemCounter/ItemCount";

export default function ItemDetail({ product }) {
  const [counter, setCounter] = useState(true);

  function onAdd() {
    setCounter(false);
  }

  let navigate = useNavigate();
  const { id, image, details, name, price, stock } = product;
  return (
    <div className="itemsContainer">
      <div className="home-product" key={id}>
        <img src={image} alt="Productos" />
        <h2>{name}</h2>
        <p>{details}</p>
        <h3>${price}</h3>
        {counter ? (
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        ) : (
          <div>
            <Link to="/products">Seguir comprando</Link>
            <br />
            <Link to="/cart">Ir al carrito</Link>
          </div>
        )}
        <br />
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>
    </div>
  );
}
