interface alumno{
    edad:number;
    nombre:string;
    curso: string;
    email?:string; // el signo=? es para que sea opcional
    nota:number | string; //puede ser un numero o un string
}

const alumno={
    edad:24,
    nombre:"Sebs",
    curso: "TypeScript",
    email: "sebas@gmail.com",
    nota: "7.5",
}

console.log(`El alumno ${alumno.nombre}
    tiene ${alumno.edad} años y su nota es ${alumno.nota}`);

let mascotas:string[]=['Perro','Gato','Hamster'];
mascotas[1]='Pajaro';
mascotas.push('Tortuga');
console.log(mascotas);

let notas:(number | string)[]=[7,8,9, 'aprobado'];
notas.push(10);
notas.push('sobresaliente')
console.log(notas);