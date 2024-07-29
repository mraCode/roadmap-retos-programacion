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

// Ejemplo de funciones básicas
function funcionBasica() {
  console.log('Función básica');
}

function funcionConParametros(param1: string, param2: number) {
  console.log('Función con parámetros:', param1, param2);
}

function funcionConRetorno(): string {
  return 'Función con retorno';
}

// Funciones dentro de funciones
function funcionConFuncion() {
  function funcionInterna() {
    console.log('Función interna');
  }

  funcionInterna();
}

// Funciones ya creadas en el lenguaje
console.log('Número aleatorio:', Math.random());

// Variable LOCAL y GLOBAL
let variableGlobal = 'Variable global';


function funcionLocal() {
  let variableLocal = 'Variable local';
  console.log(variableLocal);
}

funcionLocal();

console.log(variableGlobal);

// DIFICULTAD EXTRA

function funcionExtra(param1: string, param2: string): number {
  let contador = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(param1 + param2);
    } else if (i % 3 === 0) {
      console.log(param1);
    } else if (i % 5 === 0) {
      console.log(param2);
    } else {
      console.log(i);
    }

    contador++;
  }

  return contador;
}
