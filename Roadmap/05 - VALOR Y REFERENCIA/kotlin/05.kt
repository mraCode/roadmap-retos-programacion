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


 //asignación por valor y por referencia
fun main() {
    //asignación por valor
    var a = 5
    var b = a
    b = 10
    println("a: $a, b: $b") //a: 5, b: 10

    //asignación por referencia
    var c = intArrayOf(5)
    var d = c
    d[0] = 10
    println("c: ${c[0]}, d: ${d[0]}") //c: 10, d: 10
}

//funciones con variables por valor y por referencia

fun main() {
    //por valor
    var a = 5
    var b = 10
    println("a: $a, b: $b")
    swap(a, b)
    println("a: $a, b: $b") //a: 5, b: 10

    //por referencia
    var c = intArrayOf(5)
    var d = intArrayOf(10)
    println("c: ${c[0]}, d: ${d[0]}")
    swap(c, d)
    println("c: ${c[0]}, d: ${d[0]}") //c: 10, d: 5
}

fun swap(a: Int, b: Int) {
    val temp = a
    a = b
    b = temp
}

fun swap(c: IntArray, d: IntArray) {
    val temp = c[0]
    c[0] = d[0]
    d[0] = temp
}

//programa que recibe dos parametros por valor 
fun main() {
    var a = 5
    var b = 10
    println("a: $a, b: $b")
    val result = swap(a, b)
    println("a: $a, b: $b, result: $result") //a: 5, b: 10, result: 10
}   

fun swap(a: Int, b: Int): Int {
    return b
}

//programa que recibe dos parametros por referencia

fun main() {
    var a = intArrayOf(5)
    var b = intArrayOf(10)
    println("a: ${a[0]}, b: ${b[0]}")
    val result = swap(a, b)
    println("a: ${a[0]}, b: ${b[0]}, result: ${result[0]}") //a: 10, b: 5, result: 10
}

fun swap(a: IntArray, b: IntArray): IntArray {
    val temp = a[0]
    a[0] = b[0]
    b[0] = temp
    return b
}


