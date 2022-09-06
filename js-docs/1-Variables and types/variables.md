# Variables

En JavaScript, el tipado de las variables es dinámico.

Esto quiere decir que cuendo declaramos una variable no especificamos su tipo sino que vendrá en funcion del valor que le asignemos.

# Tipos de variables

## var

Deprecated type of variables. Use `let` or `const` instead

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

# Buenas practicas

- No usar nunca VAR. Esta obsoleto
- Por defecto usar CONST. Si no se va a modificar el valor utilizar siempre CONST.
- Escribir los nombres de las variables en camelCase
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
