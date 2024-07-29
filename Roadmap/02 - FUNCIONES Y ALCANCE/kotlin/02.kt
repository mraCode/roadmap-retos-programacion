/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */


// Ejemplo de función sin parámetros ni retorno
fun funcionSinParametrosNiRetorno() {
    println("Ejemplo de función sin parámetros ni retorno")
}


// Ejemplo de función con varios parámetros y retorno
fun funcionConVariosParametrosYRetorno(parametro1: String, parametro2: String): String {
    return "Ejemplo de función con varios parámetros y retorno: $parametro1, $parametro2"
}

// Ejemplo de función con retorno
fun funcionConRetorno(): String {
    return "Ejemplo de función con retorno"
}

//funcion dentro de funcion
fun funcionDentroDeFuncion() {
    fun funcionInterna() {
        println("Función interna")
    }
    funcionInterna()
}

// Variable global
val variableGlobal = "Variable global"

//variable local
fun funcionConVariableGlobal() {
    val variableLocal = "Variable local"
    println(variableGlobal)
    println(variableLocal)
}


//dificultad extra 
fun funcionExtra(parametro1: String, parametro2: String): Int {
    var contador = 0
    for (i in 1..100) {
        if (i % 3 == 0 && i % 5 == 0) {
            println("$parametro1$parametro2")
        } else if (i % 3 == 0) {
            println(parametro1)
        } else if (i % 5 == 0) {
            println(parametro2)
        } else {
            println(i)
        }
        contador++
    }
    return contador
}

fun main() {
    funcionSinParametrosNiRetorno()
    println(funcionConUnParametroYRetorno("parametro"))
    println(funcionConVariosParametrosYRetorno("parametro1", "parametro2"))
    println(funcionConRetorno())
    funcionDentroDeFuncion()
    funcionConVariableGlobal()
    println(funcionExtra("Fizz", "Buzz"))
}




