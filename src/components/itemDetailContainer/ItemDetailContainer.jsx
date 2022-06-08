import React, { useEffect, useState } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import "./main.css";

export default function ItemDetailContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const getApi = () => {
      fetch("https://mocki.io/v1/480f2ce6-fa5f-4775-8962-fcc9e70ef548")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })

        .catch((e) => {
          console.log("Salio mal", e);
        })

        .finally(() => {
          setLoading(false);
        });
    };
    setTimeout(() => {
      getApi();
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="spinner">
          <div className="double-bounce1"></div>
          <div className="double-bounce2"></div>
        </div>
      ) : (
        <div className="itemDetailContainer">
          <ItemDetail products={products} />
        </div>
      )}
    </>
  );
}
