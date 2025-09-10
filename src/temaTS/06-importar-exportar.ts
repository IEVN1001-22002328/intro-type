import {calcularIVADos, type Producto} from "./05-desestructuracion de funciones.ts";
 
 const carrito:Producto[]=[
    {
        nombre:'Iphone 14',
        precio: 15000
    },
    {
        nombre:'Ipad Air',
        precio:900
    },
    {
        nombre:'Xiaomi',
        precio:6500
    }
 ];

 const[total,iva] = calcularIVADos(carrito);
 console.log(`El total es: ${total}`);
 console.log(`El IVA es: ${iva}`);
 