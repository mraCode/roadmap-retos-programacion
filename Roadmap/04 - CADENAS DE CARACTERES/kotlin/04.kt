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

 // Solución:
fun main() {
    val cadena = "Hola, mundo!"
    println(cadena[0]) // Acceso a un caracter específico
    println(cadena.substring(0, 4)) // Subcadena
    println(cadena.length) // Longitud
    println(cadena + " Soy un programador") // Concatenación
    println(cadena.repeat(3)) // Repetición
    for (c in cadena) { // Recorrido
        println(c)
    }
    println(cadena.toUpperCase()) // Conversión a mayúsculas
    println(cadena.toLowerCase()) // Conversión a minúsculas
    println(cadena.replace("Hola", "Adiós")) // Reemplazo
    println(cadena.split(",")) // División
    println(cadena + " " + "Soy un programador") // Unión
    println("Hola, soy $cadena") // Interpolación
    println(cadena.contains("Hola")) // Verificación
}

// Ejemplo de salida:
// H
// Hola
// 11
// Hola, mundo! Soy un programador
// Hola, mundo!Hola, mundo!Hola, mundo!
// H
// o
// l
// a
// ,
//
// m
// u
// n
// d
// o
// !
// HOLA, MUNDO!
// hola, mundo!
// Adiós, mundo!
// [Hola,  mundo!]
// Hola, mundo! Soy un programador
// Hola, soy Hola, mundo!
// true

// Ejemplo de salida con el programa extra:
// Introduce la primera palabra: oso
// Introduce la segunda palabra: oso
// Las palabras son palíndromos
// Las palabras son anagramas
// Las palabras son isogramas

// Introduce la primera palabra: hola
// Introduce la segunda palabra: aloh
// Las palabras no son palíndromos
// Las palabras son anagramas
// Las palabras no son isogramas

// Introduce la primera palabra: hola
// Introduce la segunda palabra: hola
// Las palabras no son palíndromos
// Las palabras no son anagramas
// Las palabras no son isogramas
