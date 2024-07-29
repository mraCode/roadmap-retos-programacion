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

// Operadores
console.log('Operadores');
console.log('Aritméticos');
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(1 % 1);
console.log('Lógicos');
console.log(true && true);
console.log(true || false);
console.log(!true);
console.log('De comparación');
console.log(1 === 1);
console.log(1 !== 1);
console.log(1 > 1);
console.log(1 < 1);
console.log(1 >= 1);
console.log(1 <= 1);
console.log('De asignación');
let a = 1;
console.log(a);
console.log('De identidad');
console.log(10 === Number('10'));
console.log(11 !== Number('11'));
console.log('De pertenencia');
console.log([1, 2, 3].includes(1));
console.log('De bits');
console.log(1 & 1);
console.log(1 | 1);
console.log(1 ^ 1);
console.log(~1);
console.log(1 << 1);
console.log(1 >> 1);
console.log(1 >>> 1);

// Estructuras de control
console.log('Estructuras de control');
console.log('Condicionales');
if (true) {
  console.log('if');
} else if (true) {
  console.log('else if');
} else {
  console.log('else');
}
console.log('Iterativas');
for (let i = 0; i < 1; i++) {
  console.log('for');
}
// eslint-disable-next-line no-var
for (var i = 0; i < 1; i++) {
  console.log('for');
}
while (i < 1) {
  console.log('while');
  i++;
}
i = 0;
do {
  console.log('do while');
  i++;
}
while (i < 1);
console.log('Excepciones');
try {
  throw new Error('Error');
} catch (error) {
    console.log('catch');
    } finally {
      console.log('finally');
    }
// Números entre 10 y 55
console.log('Números entre 10 y 55');
for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}
