import { useState } from 'react';
import { getData } from '../../../mocks/DataBase';
import { Item } from '../item/Item';


function ItemList() {
  const [productos, setProductos] = useState([]);
  async function useData(){
    try{
      const result = await getData()
      setProductos(result);
    }catch(err){
      console.error("Ha habido un error", err);
    };
  };
  useData();
  return (
    <div className="itemList">
      {
        productos.map((producto) => {
          return (
            <Item key={producto.id} producto={producto}/>
          )
        })
      }
    </div>
    )
  };

export default ItemList;
