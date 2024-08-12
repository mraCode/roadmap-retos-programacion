/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición).
 */

/*
Que es la recursividad? y como funciona? funcionamiento en JS
La recursividad es una técnica de programación que se basa en la repetición de un proceso
mediante una función que se llama a sí misma. 
En JavaScript, una función recursiva es una función que se llama a sí misma.
La recursividad es un concepto importante en matemáticas y ciencias de la computación.

Ejemplo de recursividad
Una función recursiva es una función que se llama a sí misma.
En este ejemplo, la función cuenta hacia atrás desde un número hasta 0.

function countDown(fromNumber) {
    console.log(fromNumber);
    
    let nextNumber = fromNumber - 1;
    
    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}   
    countDown(3);
    // Output:

    // 3
    // 2
    // 1    

En este ejemplo, la función countDown se llama a sí misma con un número más bajo cada vez.
La función se detiene cuando nextNumber es 0.

La recursividad es útil para resolver problemas que se pueden dividir en problemas más pequeños del mismo tipo.
En este caso, countDown se puede dividir en un problema más pequeño: countDown(nextNumber).

La recursividad es una técnica poderosa, pero debe usarse con precaución.
Si no se detiene, la recursividad puede causar un bucle infinito.


*/

// Solución:
function printNumbersN(number) {
    console.log(number);
    if (number > 0) {
        printNumbersN(number - 1);
    }
}

printNumbersN(100); // 100, 99, 98, ..., 0

// DIFICULTAD EXTRA (opcional):
// Calcula el factorial de un número concreto (la función recibe ese número).
function factorialN(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorialN(number - 1);
}

console.log(factorialN(5)); // 120

// Calcula el valor de un elemento concreto (según su posición) en la sucesión de Fibonacci (la función recibe la posición).
function fibonacciN(position) {
    if (position === 0) {
        return 0;
    }
    if (position === 1) {
        return 1;
    }
    return fibonacciN(position - 1) + fibonacciN(position - 2);
}


console.log(fibonacciN(6)); // 8

// Nota: La sucesión de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores.
// Ejemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// La posición 6 es el número 8.

// Nota: La recursividad es una técnica poderosa, pero debe usarse con precaución.
// Si no se detiene, la recursividad puede causar un bucle infinito.
// En el caso de la sucesión de Fibonacci, la recursividad no es la mejor opción para calcular el valor de un elemento concreto.
// La recursividad es más lenta que un bucle y puede causar un desbordamiento de pila (stack overflow) para números grandes.
// Para calcular el valor de un elemento concreto en la sucesión de Fibonacci, es mejor utilizar un bucle o una fórmula matemática.
// La recursividad es útil para resolver problemas que se pueden dividir en problemas más pequeños del mismo tipo.
// En este caso, la sucesión de Fibonacci se puede dividir en un problema más pequeño: fibonacci(position - 1) + fibonacci(position - 2).


//metodo fibonacci con bucle
function fibonacciB(position) {
    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 0; i < position; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a;
}

console.log(fibonacciB(6)); // 8

