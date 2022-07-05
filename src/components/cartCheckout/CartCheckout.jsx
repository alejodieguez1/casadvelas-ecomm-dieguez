import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Contexto } from '../../context/CartContext';

export default function CartCheckout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [buyed, setBuyed] = useState("");

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    const {cart, getItemPrice} = useContext(Contexto)

    function getData(){
        const order = {
            buyer: {name, email, phone},
            items: cart,
            total: getItemPrice()
        }
        addDoc(orderCollection, order).then(({id}) => {
            console.log(id);
            setBuyed(id);
        });
    }

  return (
    <>
    {cart.length > 0 ? (
        <div>
          {cart.map((item, index) => {
            return (
              <div key={index} className="product-container">
                <div id="product-detail">
                  <img
                    src={item.image}
                    alt="producto"
                    className="product-img"
                  />
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <p>Cantidad:{item.qty}</p>
                  <br />
                </div>
              </div>
            );
          })}
          <p>Final Price: ${getItemPrice()}</p>
        </div>
      ) : (
        <>
          <div>El carrito esta vacio</div>
        </>
      )}
    <div className="checkContainer">
    <h6 className="titleCheck">Por favor complete los datos para finalizar su compra</h6>
    <h6 className="orderNumber">Su número de pedido es: {buyed}</h6>
    <input onChange={(e) => setName(e.target.value)} placeholder="Ingrese su nombre" className="inName"></input>
    <input onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese su e-mail" className="inMail"></input>
    <input onChange={(e) => setPhone(e.target.value)} placeholder="Ingrese un celular" className="inCel"></input>
    <button onClick={() => getData()} className='btn btn-warning fw-bold p-2 m-2'>Terminar Compra</button>
    </div>
    </>
  )
}
