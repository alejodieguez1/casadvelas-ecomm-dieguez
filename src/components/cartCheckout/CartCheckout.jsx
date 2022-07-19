import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import { Contexto } from "../../context/CartContext";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";

export default function CartCheckout() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const { cart, getItemPrice, emptyCart } = useContext(Contexto);

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    const onSubmit = (data) => {
      const userData = {
        name: data.name,
        lastName: data.lastname,
        email: data.email,
        phone: data.phone,
      };

      const { name, lastName, email, phone } = userData;

      const order = {
        buyer: { name, lastName, email, phone },
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
      <>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <p>Cantidad:{item.qty}</p>
                    <br />
                  </div>
                </li>
              );
            })}
            <p>Final Price: ${getItemPrice()}</p>
          </ul>
        ) : (
          <>
            <div>El carrito esta vacio</div>
          </>
        )}
        <div id="formSection">
          <p>Completa con tus datos</p>
          <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">
                  <b>NOMBRE</b>
                </label>
                <input
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Ingresa tu nombre"
                  {...register("name", {
                    required: {
                      value: true,
                      maxLength: 20,
                      message: "Ingrese un nombre",
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                      message: "Ingrese un nombre válido",
                    },
                  })}
                />
                {errors.name && <h6>{errors.name.message}</h6>}
              </div>
              <div>
                <label htmlFor="lastname">
                  <b>APELLIDO</b>
                </label>
                <input
                  type="lastname"
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastname"
                  placeholder="Ingresa tu apellido"
                  {...register("lastname", {
                    required: {
                      value: true,
                      message: "Ingrese un apellido",
                    },
                    pattern: {
                      value:
                        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
                      message: "Ingrese un apellido válido",
                    },
                  })}
                />
                {errors.lastname && <h6>{errors.lastname.message}</h6>}
              </div>
              <div>
                <label htmlFor="email">
                  <b>EMAIL</b>
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="Ingresa tu email"
                  {...register("email", {
                    required: {
                      value: true,
                      maxLength: 20,
                      message: "Ingrese un email",
                    },
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      message: "Ingrese un email válido",
                    },
                  })}
                />
                {errors.email && <h6>{errors.email.message}</h6>}
              </div>
              <div>
                <label htmlFor="phone">
                  <b>TELEFONO</b>
                </label>
                <input
                  type="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  id="phone"
                  placeholder="Ingresa tu teléfono"
                  {...register("phone", {
                    required: {
                      value: true,
                      maxLength: 20,
                      message: "Ingrese un teléfono",
                    },
                    pattern: {
                      value:
                        /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/d,
                      message: "Ingrese un teléfono válido",
                    },
                  })}
                />
                {errors.phone && <h6>{errors.phone.message}</h6>}
              </div>
              <div>
                <p>
                  <b>PRECIO TOTAL</b>
                </p>
                <p>
                  <b>${getItemPrice()}</b>
                </p>
              </div>
              <button type="submit">FINALIZAR PEDIDO</button>
            </form>
          </div>
        </div>
      </>
    );
  };

