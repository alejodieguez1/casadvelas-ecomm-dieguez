const Productos = [{
    id: 5,
    name:"Vela redonda",
    details:"Vela redonda con un refill gratuito incluido",
    price: 50,
    stock: 3,
    image: "https://picsum.photos/597/300"
},
{
    id: 10,
    name:"Vela Venice",
    details:"Vela con estilo Venice propia de la marca con un refill gratuito incluido",
    price: 70,
    stock: 11,
    image: "https://picsum.photos/597/300"
},
{
    id: 9,
    name:"Vela Circle",
    details:"Vela con estilo Circle, parecida a nuestra Vela redonda pero con el propio estilo de la marca con un refill gratuito incluido",
    price: 80,
    stock: 5,
    image: "https://picsum.photos/597/300"
},
{
    id:3,
    name:"Vela X",
    details:"Vela con estilo x, con el propio estilo de la marca con un refill gratuito incluido",
    price: 45,
    stock: 9,
    image: "https://picsum.photos/597/300"
},
{
    id:87,
    name: "Vela Y",
    details: "Vela con estilo copa",
    price: 32,
    stock:13,
    image: "https://picsum.photos/597/300"
},
{
    id:46,
    name:"Vela A",
    details:"Vela con estilo A",
    price: 57,
    stock: 2,
    image: "https://picsum.photos/597/300"
},{
    id:67,
    name:"Vela Q",
    details:"Vela con estilo Q",
    price: 43,
    stock: 21,
    image: "https://picsum.photos/597/300"
},{
    id:91,
    name:"Vela T",
    details:"Vela con estilo T",
    price: 4,
    stock: 9,
    image: "https://picsum.photos/597/300"
},];


export function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(Productos), 2000);
    });
};

export default Productos;