
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

//estructuras de datos de JS
//Array
let array = [1,2,3,4,5];
console.log(array);

//Set
let set = new Set();

//Map
let map = new Map();

//WeakSet
let weakSet = new WeakSet();

//WeakMap
let weakMap = new WeakMap();


//Operaciones de inserción, borrado, actualización y ordenación
//Array
array.push(6);
console.log(array);

array.pop();
console.log(array);

array[0] = 0;
console.log(array);

array.sort();
console.log(array);

//Set
set.add(1);
set.add(2);
set.add(3);
set.add(4);
console.log(set);

set.delete(1);
console.log(set);

//Map
map.set('key1', 1);
map.set('key2', 2);
map.set('key3', 3);
console.log(map);

map.delete('key1');
console.log(map);

map.set('key2', 4);
console.log(map);

//WeakSet
let obj = {};
weakSet.add(obj);
console.log(weakSet);

weakSet.delete(obj);
console.log(weakSet);

//WeakMap
let obj2 = {};
weakMap.set(obj2, 1);
console.log(weakMap);

weakMap.delete(obj2);
console.log(weakMap);

//Agenda de contactos
let agendaContact = new Map();

function addContact(name, phone){
    agendaContact.set(name, phone);
}

function searchContact(name){
    return agendaContact.get(name);
}

function updateContact(name, phone){
    agendaContact.set(name, phone);
}

function deleteContact(name){
    agendaContact.delete(name);
}

addContact('Juan', 1234567890);
addContact('Pedro', 1234567891);

console.log(searchContact('Juan'));
console.log(searchContact('Pedro'));

updateContact('Juan', 1234567892);
console.log(searchContact('Juan'));

deleteContact('Juan');
console.log(searchContact('Juan'));


//Ejercicio extra
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let contacts = []; // Array para almacenar los contactos

function addContactToAgenda() {
    rl.question('Nombre del contacto: ', (name) => {
        rl.question('Número del contacto: ', (number) => {
            contacts.push({ name, number });
            console.log('Contacto añadido.');
            menu();
        });
    });
}

function searchContactToAgenda() {
    rl.question('Nombre del contacto a buscar: ', (name) => {
        const contact = contacts.find(contact => contact.name === name);
        if (contact) {
            console.log(`Contacto encontrado: ${contact.name} - ${contact.number}`);
        } else {
            console.log('Contacto no encontrado.');
        }
        menu();
    });
}

function updateContactToAgenda() {
    rl.question('Nombre del contacto a actualizar: ', (name) => {
        const contact = contacts.find(contact => contact.name === name);
        if (contact) {
            rl.question('Nuevo número del contacto: ', (newNumber) => {
                contact.number = newNumber;
                console.log('Contacto actualizado.');
                menu();
            });
        } else {
            console.log('Contacto no encontrado.');
            menu();
        }
    });
}

function deleteContactToAgenda() {
    rl.question('Nombre del contacto a eliminar: ', (name) => {
        const index = contacts.findIndex(contact => contact.name === name);
        if (index !== -1) {
            contacts.splice(index, 1);
            console.log('Contacto eliminado.');
        } else {
            console.log('Contacto no encontrado.');
        }
        menu();
    });
}

function showContactsToAgenda() {
    if (contacts.length > 0) {
        console.log('Contactos:');
        contacts.forEach(contact => {
            console.log(`${contact.name} - ${contact.number}`);
        });
    } else {
        console.log('No hay contactos.');
    }
    menu();
}

function menu() {
    rl.question('1. Añadir contacto\n2. Buscar contacto\n3. Actualizar contacto\n4. Eliminar contacto\n5. Mostrar contactos\n6. Salir\n', (option) => {
        switch(option) {
            case '1':
                addContactToAgenda();
                break;
            case '2':
                searchContactToAgenda();
                break;
            case '3':
                updateContactToAgenda();
                break;
            case '4':
                deleteContactToAgenda();
                break;
            case '5':
                showContactsToAgenda();
                break;
            case '6':
                rl.close();
                return;
            default:
                console.log('<<<<<< Opción no válida >>>>>>');
                menu();
        }
    });
}

// Llamar a la función menu() para iniciar el programa
menu();

rl.on('close', () => {
    process.exit(0);
}
);

