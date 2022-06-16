const Productos = [
    {
      id: 5,
      name: "Vela redonda",
      details: "Vela redonda con un refill gratuito incluido",
      category: "velas",
      price: 50,
      stock: 3,
      image: "img/vela-redonda.jpg"
    },
    {
      id: 10,
      name: "Vela Venice",
      details: "Vela con estilo Venice propia de la marca con un refill gratuito incluido",
      category: "velas",
      price: 70,
      stock: 11,
      image: "../assets/venice-vela.jpeg"
    },
    {
      id: 9,
      name: "Vela Circle",
      details: "Vela con estilo Circle, parecida a nuestra Vela redonda pero con el propio estilo de la marca con un refill gratuito incluido",
      category: "velas",
      price: 80,
      stock: 5,
      image: "../assets/vela-redonda.jpg"
    },
    {
      id: 3,
      name: "Difusor X",
      details: "Vela con estilo x, con el propio estilo de la marca con un refill gratuito incluido",
      category: "difusores",
      price: 45,
      stock: 9,
      image: "../assets/vela-redonda.jpg"
    },
    {
      id: 87,
      name: "Difusor Y",
      details: "Vela con estilo copa",
      category: "difusores",
      price: 32,
      stock: 13,
      image: "../assets/vela-redonda.jpg"
    },
    {
      id: 46,
      name: "Homespray A",
      details: "Vela con estilo A",
      category: "homespray",
      price: 57,
      stock: 2,
      image: "../assets/vela-redonda.jpg"
    },
    {
      id: 67,
      name: "Giftbox Q",
      details: "Vela con estilo Q",
      category: "gifts",
      price: 43,
      stock: 21,
      image: "../assets/vela-redonda.jpg"
    },
    {
      id: 91,
      name: "Centro de mesa T",
      details: "Vela con estilo T",
      category: "centros",
      price: 4,
      stock: 9,
      image: "../assets/vela-redonda.jpg"
    }
  ]


export function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(Productos), 2000);
    });
};

export default Productos;