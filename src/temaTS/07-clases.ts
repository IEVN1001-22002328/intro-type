class Persona{
    nombre:String;
    edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre},Edad:${this.edad}`);
    }
}
const persona1 = new Persona('',0);
persona1.nombre='Juan';
persona1.edad=30;
persona1.imprimir();