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
var sum;
var number1 = 1;
var number2 = 2;
function exampleFunction(){
    let a = 1;
    let b = 2;
    sum = a + b;
}
function exampleFunction2(number1, number2){
    sum = number1 + number2;
}
function exampleFunction3(number1, number2){
    return number1 + number2;
}   

//Ejemplo de funciones ya creadas en el lenguaje
console.log(Math.random());
//funcion dentro de funcion
function exampleFunction4(){
    function exampleFunction5(){
        console.log("Hola");
    }
    exampleFunction5();
}
exampleFunction4();
//variable global y local
console.log(sum);
exampleFunction();
console.log(sum);
exampleFunction2(number1, number2);
console.log(sum);
console.log(exampleFunction3(number1, number2));
//DIFICULTAD EXTRA
function exampleFunction6(text1, text2){
    let count = 0;
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(text1 + text2);
            count++;
        }else if(i % 3 == 0){
            console.log(text1);
            count++;
        }else if(i % 5 == 0){
            console.log(text2);
            count++;
        }else{
            console.log(i);
        }
    }
    return count;
}
