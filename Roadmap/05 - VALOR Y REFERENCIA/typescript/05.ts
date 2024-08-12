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
  

// Ejemplo de asignación por valor
let b: number = 5;
let a: number = b;
b = 10;
console.log(a); // 5 (a no ha cambiado)
console.log(b); // 10 (b es independiente de a)

// Ejemplo de asignación por referencia
let obj1: any = { value: 5 };
let obj2: any = obj1;
obj1.value = 10;
console.log(obj2.value); // 10 (obj2 es una referencia a obj1)

// Ejemplo de función con parámetro por valor
function incrementValue(value: number): number {
    value++;
    return value;
}

let value: number = 5;
let newValue: number = incrementValue(value);
console.log(value); // 5 (value no ha cambiado)

// Ejemplo de función con parámetro por referencia
function incrementObjectValue(obj: any): void {
    obj.value++;
}

let obj: any = { value: 5 };
incrementObjectValue(obj);

console.log(obj.value); // 6 (obj ha cambiado)


//difcultad extra
/*
Explicación:
- La función swapValuesByValue recibe dos números y los intercambia entre ellos.
- La función swapValuesByReference recibe dos objetos y los intercambia entre ellos.
- En ambos casos, se devuelve un array con los valores intercambiados.
- Se comprueba que los valores de las variables originales no han cambiado, pero los de los arrays sí.

Nota: En el caso de los objetos, se intercambian las referencias, no los valores de los objetos.

Ejemplo:
- x = 5, y = 10
- objA = { value: 5 }, objB = { value: 10 }
- Se intercambian los valores de x e y, y de objA y objB.
- Se comprueba que x = 5, y = 10, objA.value = 10, objB.value = 5
- Se comprueba que swappedValues[0] = 10, swappedValues[1] = 5, swappedObjects[0].value = 10, swappedObjects[1].value = 5
  (los valores intercambiados)
*/
function swapValuesByValue(a: number, b: number): number[] {
    let temp: number = a;
    a = b;
    b = temp;
    return [a, b];
}

function swapValuesByReference(a: any, b: any): any[] {
    let temp: any = a;
    a = b;
    b = temp;
    return [a, b];
}

let x: number = 5;
let y: number = 10;
let swappedValues: number[] = swapValuesByValue(x, y);
console.log(x); // 5
console.log(y); // 10
console.log(swappedValues[0]); // 10
console.log(swappedValues[1]); // 5

let objA: any = { value: 5 };
let objB: any = { value: 10 };
let swappedObjects: any[] = swapValuesByReference(objA, objB);
console.log(objA.value); // 10
console.log(objB.value); // 5
console.log(swappedObjects[0].value); // 10
console.log(swappedObjects[1].value); // 5

//FIN del ejercicio