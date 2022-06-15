import React, { useEffect, useState } from "react";
import { getData } from "../../mocks/DataBase";
import ItemList from "./itemList/ItemList";
import { useLocation } from "react-router-dom";
import "./main.css";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/" || location.pathname == "/products") {
      setLoading(true);
      const data = async () => {
        try {
          const result = await getData();
          setProductos(result);
          setLoading(false);
        } catch (err) {
          console.error("Ha habido un error", err);
        }
      };
      data();
    }
  }, []);
  return loading ? (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  ) : (
    <ItemList productos={productos} />
  );
}
