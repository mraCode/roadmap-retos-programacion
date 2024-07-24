/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// OPERADORES

// Aritméticos
console.log(1 + 1); // 2
console.log(2 - 1); // 1
console.log(2 * 2); // 4
console.log(4 / 2); // 2

// Lógicos
console.log(true && true); // true
console.log(true || false); // true
console.log(!false); // true

// De comparación
console.log(1 === 1); // true
console.log(1 !== 2); // true
console.log(1 < 2); // true
console.log(2 > 1); // true

// De asignación
let a = 1;
console.log(a); // 1
a += 1;
console.log(a); // 2
a -= 1;
console.log(a); // 1
a *= 2;
console.log(a); // 2
a /= 2;
console.log(a); // 1

// De identidad
console.log(1 === 1); // true
console.log(1 !== "1"); // true

// De pertenencia
const arr = [1, 2, 3];
console.log(1 in arr); // true
console.log(4 in arr); // false

// De bits
console.log(1 & 2); // 0
console.log(1 | 2); // 3
console.log(1 ^ 2); // 3
console.log(~1); // -2
console.log(1 << 2); // 4
console.log(4 >> 2); // 1

// ESTRUCTURAS DE CONTROL

// Condicionales

// if
if (true) {
  console.log("if");
}

// if else
if (false) {
  console.log("if");
} else {
  console.log("else");
}

// if else if
if (false) {
  console.log("if");
} else if (true) {
  console.log("else if");
} else {
  console.log("else");
}

// switch
switch (1) {
  case 1:
    console.log("switch");
    break;
  default:
    console.log("default");
}

// Iterativas

// for
for (let i = 0; i < 3; i++) {
  console.log("for");
}

// while
let i = 0;
while (i < 3) {
  console.log("while");
  i++;
}

// do while
let j = 0;
do {
  console.log("do while");
  j++;
} while (j < 3);

// Excepciones

// try catch

try {
  throw new Error("error");
} catch (error) {
  console.log(error);
} finally {
  console.log("finally");
}

// DIFICULTAD EXTRA

for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}
