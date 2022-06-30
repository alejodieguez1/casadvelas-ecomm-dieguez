import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList/ItemList";
import "./main.css";

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "products");

    if (id) {
      const q = query(productsCollection, where("category", "==", id));
      setLoading(true);
      getDocs(q)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(true);
      getDocs(productsCollection)
        .then((snapshot) => {
          setProductos(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
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

// useEffect(() => {
//   setLoading(true);
//   const data = async () => {
//     try {
//       const result = await getData();
//       !id
//         ? setProductos(result)
//         : setProductos(result.filter((producto) => producto.category === id));
//       setLoading(false);
//     } catch (err) {
//       console.error("Ha habido un error", err);
//     }
//   };
//   data();
// }, [id]);
