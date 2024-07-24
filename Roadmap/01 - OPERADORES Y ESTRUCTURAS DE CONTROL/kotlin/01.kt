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

fun main() {
    // Operadores aritméticos
    val a = 10
    val b = 5
    println("Operadores aritméticos:")
    println("Suma: ${a + b}")
    println("Resta: ${a - b}")
    println("Multiplicación: ${a * b}")
    println("División: ${a / b}")
    println("Módulo: ${a % b}")

    // Operadores lógicos
    val c = true
    val d = false
    println("\nOperadores lógicos:")
    println("AND: ${c && d}")
    println("OR: ${c || d}")
    println("NOT: ${!c}")

    // Operadores de comparación
    println("\nOperadores de comparación:")
    println("Igualdad: ${a == b}")
    println("Desigualdad: ${a != b}")
    println("Mayor que: ${a > b}")
    println("Menor que: ${a < b}")
    println("Mayor o igual que: ${a >= b}")
    println("Menor o igual que: ${a <= b}")

    // Operadores de asignación
    var e = 10
    println("\nOperadores de asignación:")
    println("Asignación: $e")
    e += 5
    println("Suma y asignación: $e")
    e -= 5
    println("Resta y asignación: $e")
    e *= 5
    println("Multiplicación y asignación: $e")
    e /= 5
    println("División y asignación: $e")
    e %= 5
    println("Módulo y asignación: $e")

    // Operadores de identidad
    val f = "Hola"
    val g = "Hola"
    val h = "Adiós"
    println("\nOperadores de identidad:")
    println("Igualdad de referencias: ${f === g}")
    println("Desigualdad de referencias: ${f !== h}")
    
    // Operadores de pertenencia
    val i = "Hola"
    val j = "Hola"
    val k = "Adiós"
    println("\nOperadores de pertenencia:")
    println("Pertenece: ${i in j}")
    println("No pertenece: ${i !in k}")

    // Operadores de bits
    val l = 0b1010
    val m = 0b1100
    println("\nOperadores de bits:")
    println("AND: ${l and m}")
    println("OR: ${l or m}")
    println("XOR: ${l xor m}")
    println("Desplazamiento a la izquierda: ${l shl 1}")
    println("Desplazamiento a la derecha: ${l shr 1}")
    println("Desplazamiento a la derecha sin signo: ${l ushr 1}")

    // Estructuras de control
    println("\nEstructuras de control:")
    // Condicionales
    if (a > b) {
        println("a es mayor que b")
    } else {
        println("a no es mayor que b")
    }

    // Iterativas
    for (n in 10..55) {
        if (n % 2 == 0 && n != 16 && n % 3 != 0) {
            println(n)
        }
    }

    // Excepciones
    try {
        val o = 10 / 0
    } catch (e: Exception) {
        println("Error: ${e.message}")
    }
}

// Resultado esperado:
// Operadores aritméticos:
// Suma: 15
// Resta: 5
// Multiplicación: 50
// División: 2
// Módulo: 0
//
// Operadores lógicos:
// AND: false
// OR: true
// NOT: false
//
// Operadores de comparación:
// Igualdad: false
// Desigualdad: true
// Mayor que: true
// Menor que: false
// Mayor o igual que: true
// Menor o igual que: false
//
// Operadores de asignación:
// Asignación: 10
// Suma y asignación: 15
// Resta y asignación: 10
// Multiplicación y asignación: 50
// División y asignación: 10
// Módulo y asignación: 0
//
// Operadores de identidad:
// Igualdad de referencias: true
// Desigualdad de referencias: true
//
// Operadores de pertenencia:
// Pertenece: true
// No pertenece: true
//
// Operadores de bits:
// AND: 8
// OR: 14
// XOR: 6
// Desplazamiento a la izquierda: 20
// Desplazamiento a la derecha: 5
// Desplazamiento a la derecha sin signo: 5
//
// Estructuras de control:
// a es mayor que b
// 12
// 14
// 18
// 20
// 22
// 24
// 26
// 28
// 32
// 34
// 38
// 40
// 42
// 44
// 46
// 50
// 52
// 54
// Error: / by zero


