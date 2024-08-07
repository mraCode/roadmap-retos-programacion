
/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación
 *   los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos.
 *   (o el número de dígitos que quieras)
 * - También se debe proponer una operación de finalización del programa.
 */ 

// Ejemplo de creación de estructuras de datos en Kotlin

fun main() {
    // Listas
    val lista = listOf(1, 2, 3, 4, 5)
    val listaMutable = mutableListOf(1, 2, 3, 4, 5)
    listaMutable.add(6)
    listaMutable.removeAt(0)
    listaMutable[0] = 0
    listaMutable.sort()
    println(listaMutable)

    // Mapas
    val mapa = mapOf("a" to 1, "b" to 2, "c" to 3)
    val mapaMutable = mutableMapOf("a" to 1, "b" to 2, "c" to 3)
    mapaMutable["d"] = 4
    mapaMutable.remove("a")
    mapaMutable["b"] = 0
    println(mapaMutable)

    // Sets
    val set = setOf(1, 2, 3, 4, 5)
    val setMutable = mutableSetOf(1, 2, 3, 4, 5)
    setMutable.add(6)
    setMutable.remove(1)
    println(setMutable)
}

// Ejemplo de agenda de contactos

fun main() {
    val agenda = mutableMapOf<String, String>()
    var opcion: Int
    do {
        println("1. Añadir contacto")
        println("2. Buscar contacto")
        println("3. Actualizar contacto")
        println("4. Eliminar contacto")
        println("5. Salir")
        opcion = readLine()!!.toInt()
        when (opcion) {
            1 -> {
                print("Nombre: ")
                val nombre = readLine()!!
                print("Teléfono: ")
                val telefono = readLine()!!
                agenda[nombre] = telefono
            }
            2 -> {
                print("Nombre: ")
                val nombre = readLine()!!
                println("Teléfono: ${agenda[nombre]}")
            }
            3 -> {
                print("Nombre: ")
                val nombre = readLine()!!
                print("Teléfono: ")
                val telefono = readLine()!!
                agenda[nombre] = telefono
            }
            4 -> {
                print("Nombre: ")
                val nombre = readLine()!!
                agenda.remove(nombre)
            }
        }
    } while (opcion != 5)
}

//como ejecutar el codigo
//kotlinc 03.kt -include-runtime -d 03.jar
//java -jar 03.jar
//o
//kotlin 03.kt



