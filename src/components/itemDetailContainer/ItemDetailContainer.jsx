import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail/ItemDetail";
import "./main.css";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const productRef = doc(db, "products", id);

    setLoading(true);

    getDoc(productRef)
      .then((snapshot) => {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  return loading ? (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  ) : (
    <section id="products-section">
      <ItemDetail product={product} />
    </section>
  );
}

// setLoading(true);
// const data = async () => {
//   try {
//     const result = await getData();
//     setProduct(result.find((producto) => producto.id == id));
//     setLoading(false);
//   } catch (err) {
//     console.error("Ha habido un error", err);
//   }
// };
// data();
