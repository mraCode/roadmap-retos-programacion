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
Que es la recursividad y como funciona en TS
La recursividad es una técnica de programación que nos permite dividir un problema en subproblemas más pequeños y resolverlos de forma más sencilla. En JavaScript, una función recursiva es una función que se llama a sí misma.

Para que una función sea recursiva, debe cumplir dos condiciones:
- Debe tener un caso base: es el caso que indica cuándo la función debe dejar de llamarse a sí misma.
- Debe tener un caso recursivo: es el caso que indica cuándo la función debe llamarse a sí misma.

En el caso de la función que imprime números del 100 al 0, 
el caso base es cuando el número es 0, y el caso recursivo es cuando el número es mayor que 0.   

En el caso de la función que calcula el factorial de un número, 
el caso base es cuando el número es 0 o 1, y el caso recursivo es cuando el número es mayor que 1.  

En el caso de la función que calcula el valor de un elemento en la sucesión de Fibonacci, 
el caso base es cuando la posición es 0 o 1, y el caso recursivo es cuando la posición es mayor que 1.

La recursividad es una técnica poderosa, pero hay que tener cuidado con ella, 
ya que puede llevar a un bucle infinito si no se define correctamente el caso base.

*/

// Ejemplo de función recursiva que imprime números del 100 al 0
function printNumbers(num: number): void {
    if (num < 0) {
        return;
    }

    console.log(num);
    printNumbers(num - 1);
}

printNumbers(100);

// Ejemplo de función recursiva que calcula el factorial de un número
/*
El factorial de un número n se define como el producto de todos los números enteros positivos desde 1 hasta n.
Por ejemplo, el factorial de 5 es 5 * 4 * 3 * 2 * 1 = 120.

*/
function factorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5)); // 120

// Ejemplo de función recursiva que calcula el valor de un elemento en la sucesión de Fibonacci
/*
La sucesión de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores.
Por ejemplo, los primeros números de la sucesión de Fibonacci son: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...

*/

function fibonacci(position: number): number {
    if (position === 0 || position === 1) {
        return position;
    }

    return fibonacci(position - 1) + fibonacci(position - 2);
}

console.log(fibonacci(6)); // 8



// Ejercicio de recursividad
// Imprimir números del 100 al 0 con un bucle for
for (let i = 100; i >= 0; i--) {
    console.log(i); //
} // 100, 99, 98, ..., 0

