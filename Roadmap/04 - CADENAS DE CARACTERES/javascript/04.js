/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición, recorrido,
 *   conversión a mayúsculas y minúsculas, reemplazo, división, unión, interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

//operaciones con cadenas de caracteres

//acceso a caracteres específicos
let cadena = "Hola Mundo";
console.log(cadena[0]); //H
console.log(cadena.charAt(0)); //H

//subcadenas
console.log(cadena.substring(0, 4)); //Hola
console.log(cadena.substr(0, 4)); //Hola
console.log(cadena.slice(0, 4)); //Hola

//longitud
console.log(cadena.length); //10

//concatenación
let cadena2 = " desde JavaScript";
console.log(cadena + cadena2); //Hola Mundo desde JavaScript

//repetición
console.log(cadena.repeat(3)); //Hola MundoHola MundoHola Mundo

//recorrido
for (let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]);
}

//conversión a mayúsculas y minúsculas
console.log(cadena.toUpperCase()); //HOLA MUNDO
console.log(cadena.toLowerCase()); //hola mundo

//reemplazo
console.log(cadena.replace("Mundo", "Universo")); //Hola Universo

//división
console.log(cadena.split(" ")); //["Hola", "Mundo"]

//unión
console.log(["Hola", "Mundo"].join(" ")); //Hola Mundo

//interpolación
let nombre = "Juan";
let edad = 30;
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`); //Hola, me llamo Juan y tengo 30 años

//verificación
console.log(cadena.includes("Mundo")); //true
console.log(cadena.startsWith("Hola")); //true
console.log(cadena.endsWith("Mundo")); //true

//palíndromos
function esPalindromo(palabra) {
  return palabra === palabra.split("").reverse().join("");
}

console.log(esPalindromo("oso")); //true
console.log(esPalindromo("casa")); //false

//anagramas
function esAnagrama(palabra1, palabra2) {
  return palabra1.split("").sort().join("") === palabra2.split("").sort().join("");
}

console.log(esAnagrama("roma", "amor")); //true
console.log(esAnagrama("casa", "saca")); //false

//isogramas
function esIsograma(palabra) {
  return palabra.length === new Set(palabra).size;
}

console.log(esIsograma("casa")); //true
console.log(esIsograma("casa")); //false

//otras operaciones
console.log(cadena.indexOf("Mundo")); //5
console.log(cadena.lastIndexOf("o")); //7
console.log(cadena.search("Mundo")); //5
console.log(cadena.match(/o/g)); //["o", "o"]
console.log(cadena.match(/o/g).length); //2
console.log(cadena.charCodeAt(0)); //72
console.log(String.fromCharCode(72)); //H
console.log(cadena.trim()); //Hola Mundo
console.log(cadena.padStart(20, ".")); //..........Hola Mundo
console.log(cadena.padEnd(20, ".")); //Hola Mundo..........
console.log(cadena.startsWith("Hola")); //true
console.log(cadena.endsWith("Mundo")); //true
console.log(cadena.includes("Mundo")); //true
console.log(cadena.localeCompare("Hola Mundo")); //0
console.log(cadena.normalize("NFD")); //Hola Mundo
console.log(cadena.repeat(3)); //Hola MundoHola MundoHola Mundo
console.log(cadena.slice(0, 4)); //Hola
console.log(cadena.substring(0, 4)); //Hola
console.log(cadena.substr(0, 4)); //Hola
console.log(cadena.toLowerCase()); //hola mundo
console.log(cadena.toUpperCase()); //HOLA MUNDO
console.log(cadena.replace("Mundo", "Universo")); //Hola Universo
console.log(cadena.split(" ")); //["Hola", "Mundo"]
console.log(cadena.concat(" desde JavaScript")); //Hola Mundo desde JavaScript
console.log(cadena.length); //10
console.log(cadena.charAt(0)); //H
console.log(cadena[0]); //H
console.log(cadena.charCodeAt(0)); //72
console.log(String.fromCharCode(72)); //H
console.log(cadena.indexOf("Mundo")); //5
console.log(cadena.lastIndexOf("o")); //7
console.log(cadena.search("Mundo")); //5
console.log(cadena.match(/o/g)); //["o", "o"]
console.log(cadena.match(/o/g).length); //2
console.log(cadena.trim()); //Hola Mundo
console.log(cadena.padStart(20, ".")); //..........Hola Mundo
console.log(cadena.padEnd(20, ".")); //Hola Mundo..........

//Ejercicio
function analizarPalabras(palabra1, palabra2) {
  let resultado = {
    palindromo: false,
    anagrama: false,
    isograma: false,
  };

  if (esPalindromo(palabra1) && esPalindromo(palabra2)) {
    resultado.palindromo = true;
  }

  if (esAnagrama(palabra1, palabra2)) {
    resultado.anagrama = true;
  }

  if (esIsograma(palabra1) && esIsograma(palabra2)) {
    resultado.isograma = true;
  }

  return resultado;
}

console.log(analizarPalabras("oso", "casa")); //{palindromo: true, anagrama: false, isograma: false}
console.log(analizarPalabras("roma", "amor")); //{palindromo: false, anagrama: true, isograma: true}
console.log(analizarPalabras("casa", "saca")); //{palindromo: false, anagrama: false, isograma: true}
console.log(analizarPalabras("casa", "casa")); //{palindromo: true, anagrama: true, isograma: true}
console.log(analizarPalabras("casa", "casa")); //{palindromo: true, anagrama: true, isograma: true}
console.log(analizarPalabras("casa", "casa")); //{palindromo: true, anagrama: true, isograma: true}
console.log(analizarPalabras("casa", "casa")); //{palindromo: true, anagrama: true, isograma: true}

// Path: Roadmap/04%20-%20CADENAS%20DE%20CARACTERES/javascript/05.js
