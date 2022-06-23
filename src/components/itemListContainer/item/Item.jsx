import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  const { id, image, name, details, price, stock } = producto;
  return (
    <div className="home-product">
      <img src={image} alt="Productos" />
      <h2>{name}</h2>
      <Link to={`/product/${id}`}>
        <button type="button" className="btn">Ver detalle del producto</button>
      </Link>
    </div>
  );
};
