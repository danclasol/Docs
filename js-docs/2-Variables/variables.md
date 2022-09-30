# Variables

En JavaScript, el tipado de las variables es dinámico.

Esto quiere decir que cuendo declaramos una variable no especificamos su tipo sino que vendrá en funcion del valor que le asignemos.

# Tipos de variables

## var

Deprecated type of variables. Use `let` or `const` instead. Solo usar por motivos de compatibilidad con navegadores muy antiguos.

```js
var test = 0;
```

## let

Varibales `let` pueden ser modificadas. No es obligatorio asignar valor al declararse.

Si no especificamos un valor, la variable tendra un valor `undefined`

```js
let test = "abc";
```

## const

Varibales `const` NO pueden ser modificadas, además es obligatorio asignar un valor al declararse

```js
const test = [1, 2, 3];
```

# Ambito de variables

A partir de las versiones modernas de Javascript (ES6 o ECMAScript 2015), se introduce `let` en sustitución de var.

Con ella, en lugar de utilizar los ámbitos globales y a nivel de función (var), utilizamos los ámbitos clásicos de programación: ámbito global y ámbito local.

```js
/** Opción 1: Bucle con let **/
console.log("Antes: ", p); // Antes: undefined
for (let p = 0; p < 3; p++) {
  console.log("- ", p);
} // Durante: 0, 1, 2
console.log("Después: ", p); // Después: undefined

/** Opción 2: Bucle con var **/
console.log("Antes: ", p); // Antes: undefined
for (var p = 0; p < 3; p++) {
  console.log("- ", p);
} // Durante: 0, 1, 2
console.log("Después: ", p); // Después: 3 (WTF!)
```

Vemos que utilizando `let` la variable `p` sólo existe dentro del bucle, ámbito local, mientras que utilizando `var` la variable `p` sigue existiendo fuera del bucle, ya que debe tener un ámbito global o a nivel de función.

# Buenas practicas

- No usar nunca `var`. Esta obsoleto
- Por defecto usar `const`. Si no se va a modificar el valor utilizar siempre `const`.
- Escribir los nombres de las variables en `camelCase`
- Utilizar mayusculas para constantes de calculo como por ejemplo numero PI, IVA, etc. En este caso, usar '\_' en vez de camelCase

# Ejemplo

Ejemplo declarando variables y constantes

```js
const IVA = 1.21;

let precio = 25;
precio = precio \* IVA;

let cantidad = 2;
let total = precio \* cantidad;
console.log(total);
```
