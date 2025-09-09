function sumar(a:number, b:number):number {
    return a+b;
}
console.log(sumar(10,20));

const sumarFlecha = (a:number, b:number): number =>  a+b;
console.log(sumarFlecha(15,20));

function saludar(nombre:string, apellido?: string): string{
    if (apellido){
        return `Hola, ${nombre} ${apellido}`;
    }else{
        return `Hola, ${nombre}`;
    }
}
console.log(saludar('Sebas','Glez'));
console.log(saludar('Moises'));

interface Mascota{
    nombre:string;
    tipo:string;
    edad:string;
    mostrarEdad:()=>void;
}

function calcular(mascotas:Mascota,x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
    console.log(mascotas.mostrarEdad());
}

const nuevaMascota: Mascota={
    nombre: 'Watson',
    tipo:'rata',
    edad:'3',
    mostrarEdad(){
        console.log(`la edad de ${this.nombre} es ${this.edad} años`);
    },
};

calcular(nuevaMascota,2);