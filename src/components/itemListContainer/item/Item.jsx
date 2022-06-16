import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <div className="home-product">
      <img src={producto.image} />
      <h2>{producto.name}</h2>
      <Link to={`/product/${producto.id}`}>
        <button>Ver detalle del producto</button>
      </Link>
    </div>
  );
};
