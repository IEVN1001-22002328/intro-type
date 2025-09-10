class Persona3{
    protected nombre1:string;
    protected edad:number
    protected direccion:string;
    constructor(nombre1:string,edad:number,direccion:string){
        this.nombre1=nombre1;
        this.edad=edad;
        this.direccion=direccion;
    }

    mostrarPersona(){
        console.log(`Nombre: ${this.nombre1},
            Edad: ${this.edad},
            Direccion: ${this.direccion}`);
        }
}
class Empleado3 extends Persona3{
    private sueldo:number;
    constructor(nombre1:string,edad:number,direccion:string,sueldo:number){
        super(nombre1,edad,direccion);
        this.sueldo=sueldo;
    }
    mostrarEmpleado(){
        this.mostrarPersona();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

const empleado3 = new Empleado3('Ana',28,'Calle 123',2000);
empleado3.mostrarEmpleado();
empleado3.mostrarPersona();
