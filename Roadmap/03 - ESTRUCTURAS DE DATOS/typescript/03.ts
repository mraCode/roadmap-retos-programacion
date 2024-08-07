
/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */ 

//estructuras de datos en typescript
//array
let array: number[] = [1, 2, 3, 4, 5];

//tupla
let tupla: [string, number] = ["hola", 5];

//set
let set = new Set<number>();
set.add(1);
set.add(2);
set.add(3);
console.log(set);

//map
let map = new Map<number, string>();
map.set(1, "hola");
map.set(2, "adios");
console.log(map);

//object
let object = {
    nombre: "pepe",
    edad: 20
};
console.log(object);

//operaciones con array
//inserción
array.push(6);
console.log(array);

//borrado
array.pop();
console.log(array);

//actualización
array[0] = 10;
console.log(array);

//ordenación
array.sort((a, b) => a - b);
console.log(array);

//operaciones con set
//inserción
set.add(4);
console.log(set);

//borrado
set.delete(1);
console.log(set);

//actualización
set.add(5);
console.log(set);

//ordenación
//no se puede ordenar un set

//operaciones con map
//inserción
map.set(3, "hasta luego");
console.log(map);

//borrado
map.delete(1);
console.log(map);

//actualización
map.set(2, "hasta mañana");
console.log(map);

//ordenación
//no se puede ordenar un map

//operaciones con object
//inserción
object["apellido"] = "perez";
console.log(object);

//borrado
delete object["nombre" as keyof typeof object];
console.log(object);

//actualización
object["nombre"] = "juan";
console.log(object);

//ordenación
//no se puede ordenar un object

//agenda de contactos
let agenda = new Map<string, number>();

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("1. Buscar contacto");
    console.log("2. Añadir contacto");
    console.log("3. Actualizar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Salir");
}

function buscarContacto() {
    rl.question("Introduce el nombre del contacto: ", (nombre) => {
        if (agenda.has(nombre)) {
            console.log(`El número de ${nombre} es ${agenda.get(nombre)}`);
        } else {
            console.log("Ese contacto no existe");
        }
        menu();
        seleccionarOpcion();
    });
}

function anadirContacto() {
    rl.question("Introduce el nombre del contacto: ", (nombre) => {
        rl.question("Introduce el número del contacto: ", (numero) => {
            if (agenda.has(nombre)) {
                console.log("Ese contacto ya existe");
            } else {
                agenda.set(nombre, Number(numero));
                console.log("Contacto añadido");
            }
            menu();
            seleccionarOpcion();
        });
    });
}

function actualizarContacto() {
    rl.question("Introduce el nombre del contacto: ", (nombre) => {
        if (agenda.has(nombre)) {
            rl.question("Introduce el nuevo número del contacto: ", (numero) => {
                agenda.set(nombre, Number(numero));
                console.log("Contacto actualizado");
            });
        } else {
            console.log("Ese contacto no existe");
        }
        menu();
        seleccionarOpcion();
    });
}

function eliminarContacto() {
    rl.question("Introduce el nombre del contacto: ", (nombre) => {
        if (agenda.has(nombre)) {
            agenda.delete(nombre);
            console.log("Contacto eliminado");
        } else {
            console.log("Ese contacto no existe");
        }
        menu();
        seleccionarOpcion();
    });
}

function seleccionarOpcion() {
    rl.question("Introduce el número de la operación que quieres realizar: ", (opcion) => {
        switch (opcion) {
            case "1":
                buscarContacto();
                break;
            case "2":
                anadirContacto();
                break;
            case "3":
                actualizarContacto();
                break;
            case "4":
                eliminarContacto();
                break;
            case "5":
                rl.close();
                break;
            default:
                console.log("Opción no válida");
                menu();
                seleccionarOpcion();
                break;
        }
    });
}

menu();
seleccionarOpcion();

rl.on('close', () => {
    console.log("Hasta luego");
});

//para ejecutar el programa:
//tsc 03.ts
//node 03.js
//seguir las instrucciones que aparecen en la terminal
//para finalizar el programa, introducir el número 5





