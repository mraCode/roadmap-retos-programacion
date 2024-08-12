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
    Ques es la recursividad? y como se usa en programación? uso en kotlin
    La recursividad es un concepto de programación donde una función se llama a sí misma. En Kotlin, se utiliza para:
    - Resolver problemas matemáticos (factorial, Fibonacci).
    - Recorrer estructuras de datos complejas (árboles, grafos).
    - Implementar algoritmos de búsqueda y ordenación (búsqueda binaria, quicksort).
    - Algoritmos de backtracking (ocho reinas, mochila).
    - Algoritmos de división y conquista (ordenación por fusión, multiplicación de matrices).
    - Algoritmos de programación dinámica (mochila, Floyd-Warshall).
    - Algoritmos de grafos (Dijkstra, Kruskal).
    
 */

fun main() {
    imprimirNumeros(100)
    println(factorial(5))
    println(fibonacci(10))
}
/*
que hace la funcion imprimirNumeros(numero: Int) en el codigo?
La función imprimirNumeros(numero: Int) imprime el número que recibe como argumento y luego se llama a sí misma con el número anterior.
Esto se repite hasta que el número es menor que 0, lo que detiene la recursión.
De esta forma, se imprimen los números
del 100 al 0 en orden descendente.
 */
fun imprimirNumeros(numero: Int) {
    if (numero >= 0) {
        println(numero)
        imprimirNumeros(numero - 1)
    }
}
 
/* 
que hace la funcion factorial(numero: Int) en el codigo?
La función factorial(numero: Int) calcula el factorial del número que recibe como argumento.
El factorial de un número n se define como el producto de todos los enteros positivos menores o iguales a n.
Por ejemplo, el factorial de 5 (5!) es igual a 5 * 4 * 3 * 2 * 1 = 120.
La función utiliza la recursividad para calcular el factorial de forma eficiente.
 */
fun factorial(numero: Int): Int {
    return if (numero == 0) 1 else numero * factorial(numero - 1)
}

/*
que hace la funcion fibonacci(posicion: Int) en el codigo?
La función fibonacci(posicion: Int) calcula el valor de un elemento en la sucesión de Fibonacci según su posición.
La sucesión de Fibonacci es una serie de números en la que cada número es la suma de los dos anteriores.
Por ejemplo, los primeros números de la sucesión son 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
La función utiliza la recursividad para calcular el valor de un elemento en la sucesión de forma eficiente.
 */

fun fibonacci(posicion: Int): Int {
    return if (posicion <= 1) posicion else fibonacci(posicion - 1) + fibonacci(posicion - 2)
}

// 100
// 99

// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 5 * 4!
// 4 * 3!
// 3 * 2!
// 2 * 1!
// 1 * 0! = 1

// 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610
// 0 1 2 3 4 5 6 7  8  9 10 11  12  13  14  15
