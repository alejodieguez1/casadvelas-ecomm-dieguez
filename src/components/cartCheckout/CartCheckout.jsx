import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Contexto } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartCheckout() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { cart, getItemPrice, emptyCart } = useContext(Contexto);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    const { name, email, phone } = userData;

    const order = {
      buyer: { name, email, phone },
      items: cart,
      total: getItemPrice(),
    };
    addDoc(orderCollection, order).then(({ id }) => {
      Swal.fire({
        position: "center",
        icon: "success",
        iconColor: "#00A300",
        title: `Su compra en \nCasa D Velas\n ha sido exitosa!\n Numero de ticket:\n${id}`,
        showConfirmButton: true,
      });
    });
    emptyCart();
  };

  return (
    <div id="form-section">
      <div className="form-container">
        <p>Completa con tus datos</p>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="input-container">
            <label htmlFor="name" className="input-label">
              <p>Nombre</p>
            </label>
            <input
              type="name"
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Ingresa tu nombre"
              className="input"
              {...register("name", {
                required: {
                  value: true,
                  minLength: 3,
                  message: "Ingrese un nombre",
                },
                pattern: {
                  value:
                    /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                  message: "Ingrese un nombre válido",
                },
              })}
            />
            {errors.name && (
              <h6 className="error-message">{errors.name.message}</h6>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="email" className="input-label">
              <p>Email</p>
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Ingresa tu email"
              className="input"
              {...register("email", {
                required: {
                  value: true,
                  minLength: 3,
                  message: "Ingrese un email",
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Ingrese un email válido",
                },
              })}
            />
            {errors.email && (
              <h6 className="error-message">{errors.email.message}</h6>
            )}
          </div>
          <div className="input-container">
            <label htmlFor="phone" className="input-label">
              <p>Telefono</p>
            </label>
            <input
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
              id="phone"
              placeholder="Ingresa tu teléfono"
              className="input"
              {...register("phone", {
                required: {
                  value: true,
                  minLength: 5,
                  message: "Ingrese un teléfono",
                },
                pattern: {
                  value:
                    /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/d,
                  message: "Ingrese un teléfono válido",
                },
              })}
            />
            {errors.phone && (
              <h6 className="error-message">{errors.phone.message}</h6>
            )}
          </div>
          <div className="price-container">
            <p>Precio Total</p>
            <p>${getItemPrice()}</p>
          </div>
          <button type="submit">FINALIZAR PEDIDO</button>
          <button
            type="button"
            className="cart-btn btn"
            onClick={() => navigate(-1)}
          >
            ← Volver
          </button>
        </form>
      </div>
    </div>
  );
}
