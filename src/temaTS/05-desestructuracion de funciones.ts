export interface Producto{
    nombre:String;
    precio:number;
}
const telefono:Producto={
    nombre:'Redmi Note',
    precio:3500
};

const tablet:Producto={
    nombre:'Huawei Tab',
    precio:6500
};

function calcularIVA(productos:Producto[]):number{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return total*0.23;
}

const articulos=[telefono, tablet];
const iva=calcularIVA(articulos);
console.log(`El IVA es: ${iva})`);

//Desestructuracion de funciones
export function calcularIVADos(productos:Producto[]):[number,number]{
    let total=0;
    for(let producto of productos){
        total+=producto.precio;
    }
    return [total, total*0.23];
}

const [total, ivaDos]=calcularIVADos(articulos);
console.log(`El total es: ${total})`);
console.log(`El IVA es: ${ivaDos})`);