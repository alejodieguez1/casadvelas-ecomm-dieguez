import React, { useEffect, useState } from "react";
import { getData } from "../../mocks/DataBase";
import ItemList from "./itemList/ItemList";
import "./main.css";

export default function ItemListContainer() {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    const useData = async () => {
      try{
        const result = await getData()
        setProductos(result)
      }catch(err){
        console.error("Ha habido un error", err);
      };
    }
    useData()
  },[])
  return (
      <div className="itemListContainer">
          <ItemList productos={productos}/>
      </div>
  );
}
