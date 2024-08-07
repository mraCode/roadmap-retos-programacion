/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con palabras de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subpalabras, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

//ejemplo de operaciones con palabras de caracteres
let palabra = "Hola Mundo";
console.log(palabra[0]); //H
console.log(palabra.length); //10
console.log(palabra.toUpperCase()); //HOLA MUNDO
console.log(palabra.toLowerCase()); //hola mundo
console.log(palabra.replace("Hola", "Adios")); //Adios Mundo
console.log(palabra.split(" ")); //["Hola", "Mundo"]
console.log(palabra.concat("!!!")); //Hola Mundo!!!
console.log(palabra.repeat(2)); //Hola MundoHola Mundo
console.log(palabra.includes("Hola")); //true
console.log(palabra.indexOf("Mundo")); //5
console.log(palabra.lastIndexOf("o")); //7
console.log(palabra.slice(0, 4)); //Hola
console.log(palabra.substring(0, 4)); //Hola
console.log(palabra.substr(0, 4)); //Hola
console.log(palabra.charAt(0)); //H
console.log(palabra.charCodeAt(0)); //72
console.log(palabra.charCodeAt(1)); //111
console.log(palabra.charCodeAt(2)); //108
console.log(palabra.charCodeAt(3)); //97
console.log(palabra.charCodeAt(4)); //32

//programa que analiza dos palabras diferentes
let palabra1 = "oso";
let palabra2 = "oso";
let palabra3 = "hola";
let palabra4 = "aloh";
let palabra5 = "murcielago";
let palabra6 = "murcielago";
let palabra7 = "murcielago";

console.log("Palabra1: " + palabra1);
console.log("Palabra2: " + palabra2);

//palindromo
if (palabra1 === palabra1.split("").reverse().join("")) {
  console.log("Es palindromo");
}

//anagrama
if (
  palabra3.split("").sort().join("") === palabra4.split("").sort().join("")
) {
  console.log("Es anagrama");
}

//isograma
if (
  palabra5.split("").every((letra, index) => palabra5.indexOf(letra) === index)
) {
  console.log("Es isograma");
}

//comparar palabras
if (palabra6 === palabra7) {
  console.log("Son iguales");
} else {
    console.log("No son iguales");
    }

