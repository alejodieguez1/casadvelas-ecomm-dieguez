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
      <div className="count-container">
        <button
          type="button"
          className="product-btn count-btn"
          onClick={() => counterMinus()}
        >
          -
        </button>
        <p>Cantidad:{count}</p>
        <button
          type="button"
          className="product-btn count-btn"
          onClick={() => counterPlus()}
        >
          +
        </button>
        <p>El stock de este producto es: {stock}</p>
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
