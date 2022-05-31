import React, { useState } from "react";

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);
  function counterPlus() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function counterMinus() {
    if (count > initial) {
      setCount(count - 1);
    }
  }
  function onAdd() {
    if (stock >= 1) {
      alert("El producto fue agregado al carrito");
    } else if (stock < 1) {
      alert("No tenemos stock de este producto");
    }
  }
  return (
    <div id="product-container">
      <p>Este es un producto</p>
      <p>El stock de tu producto es: {stock}</p>
      <div className="count-container">
        <button
          type="button"
          className="product-btn count-btn"
          onClick={() => counterMinus()}
        >
          -
        </button>
        <p>Cantidad: {count}</p>
        <button
          type="button"
          className="product-btn count-btn"
          onClick={() => counterPlus()}
        >
          +
        </button>
        <button
          type="button"
          className="product-btn cart-btn"
          onClick={() => onAdd()}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
