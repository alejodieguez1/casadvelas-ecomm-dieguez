import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../mocks/DataBase";
import ItemDetail from "./itemDetail/ItemDetail";
import "./main.css";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const data = async () => {
      try {
        const result = await getData();
        setProduct(result.find((producto) => producto.id == id));
        setLoading(false);
      } catch (err) {
        console.error("Ha habido un error", err);
      }
    };
    data();
  }, [id]);
  return (
    <>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      )}
    </>
  );
}
