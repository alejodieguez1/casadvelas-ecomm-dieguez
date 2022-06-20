import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../mocks/DataBase";
import ItemList from "./itemList/ItemList";
import "./main.css";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    const data = async () => {
      try {
        const result = await getData();
        !id
          ? setProductos(result)
          : setProductos(result.filter((producto) => producto.category === id));
        setLoading(false);
      } catch (err) {
        console.error("Ha habido un error", err);
      }
    };
    data();
  }, [id]);
  return loading ? (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  ) : (
    <section id="products-section">
      <ItemList productos={productos} />
    </section>
  );
}
