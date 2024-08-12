/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime el valor de las
 *   variables originales y las nuevas, comprobando que se ha invertido su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

//asignación por valor
let a = 5;

//asignación por referencia (en este caso, se copia la referencia)
let b = a;

//asignación por valor
let c = "Hola";

//asignación por referencia (en este caso, se copia la referencia)
let d = c;

console.log(a, b, c, d);
/*
Paso por Valor: Los tipos primitivos se pasan por valor. 
Los cambios dentro de la función no afectan a la variable original.
*/
//funcion que recibe un variable por valor
function modifyPrimitive(value) {
    value = 42;
    console.log("Inside function:", value); // 42
}

let num = 10;
console.log("Before function call:", num); // 10
modifyPrimitive(num);
console.log("After function call:", num); // 10

/* 
Paso por Referencia: Los objetos y arrays se pasan por referencia. 
Los cambios dentro de la función afectan al objeto o array original.
*/
//funcion que recibe un objeto por referencia
function modifyObject(obj) {
    obj.name = "John";
    console.log("Inside function:", obj); // { name: "John" }
}

let person = { name: "Alice" };
console.log("Before function call:", person); // { name: "Alice" }
modifyObject(person);
console.log("After function call:", person); // { name: "John" }

//funcion que recibe un array por referencia
function modifyArray(arr) {
    arr.push(4);
    console.log("Inside function:", arr); // [1, 2, 3, 4]
}

let numbers = [1, 2, 3];
console.log("Before function call:", numbers); // [1, 2, 3]
modifyArray(numbers);
console.log("After function call:", numbers); // [1, 2, 3, 4]

//Ejercicio extra
//primer programa 
//intercambio de variables por valor
//declaramos las dos variables 
let x = 5;
let y = 10;

//funcion que intercambia los valores de las variables
function swapValuesByValue(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

//llamamos a la funcion y asignamos los valores a dos nuevas variables
let [xNew, yNew] = swapValuesByValue(x, y);

//imprimimos los valores originales y los nuevos
console.log(x, y, xNew, yNew);//5 10 10 5

//segundo programa
//intercambio de variables por referencia
//declaramos las dos variables
let obj1 = { name: "Alice" };
let obj2 = { name: "Bob" };

//funcion que intercambia los valores de las variables
function swapValuesByReference(a, b) {
    let temp = a.name;
    a.name = b.name;
    b.name = temp;
    return [a, b];
}

//llamamos a la funcion y asignamos los valores a dos nuevas variables
let [obj1New, obj2New] = swapValuesByReference(obj1, obj2);

//imprimimos los valores originales y los nuevos
console.log(obj1, obj2, obj1New, obj2New);//