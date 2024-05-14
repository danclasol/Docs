# Comparador igualdad

JavaScript proporciona tres operaciones distintas para comparar la igualdad de dos elementos:

- === (en-US) - Igualdad estricta (o "triple igual" o "identidad")
- == (en-US) - igualdad débil o relajada ("doble igual")
- Object.is proporciona SameValue (nuevo en ES2015).

## Comparation de igualdad abstracta (`==`)

Esta comparación funciona de la siguiente forma:

- Si son del mismo tipo, comparar los valores
- Si NO son de distinto tipo, intenta pasarlos el mismo tipo. Para ello sigue unas reglas especiales que tienen que ver con los métodos `toNumber` y `toPrimitive`.

En la practica no se utiliza, es mas recomendable usar siempre la comparacion `strict`.

```js
console.log(1 == 1);
console.log(1 != 1);
```

## Comparation de igualdad Estricta (`===`)

En este modo, la comparación funciona de la siguiente forma:

- Si el tipo no coincide devuelve `false`
- Si conincide el tipo, entonces se compara el valor.

```js
console.log(a === b);
console.log(a !== b);
```

## Object.is()

Se diferencia del operador `===` en como trata los ceros y los _NaN_

```js
console.log(Object.is("1", 1)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
console.log(Object.is(-0, 0)); // false
console.log(-0 === 0); // true
console.log(Object.is(-1, 1)); // false
console.log(-1 === 1); // false
```

Los objetos tendran el mismo valor, si tienen la misma referencia de memoria.

```js
const obj1 = {};
const obj2 = {};
console.log(Object.is(obj1, obj2)); // false

const obj1 = {};
const obj2 = obj1;
console.log(Object.is(obj1, obj2)); // true
```

# Comparacion mayor o menor

## Numeros

```js
console.log(2 <= 12); // TRUE -> Ambos son numeros, por lo tanto 2 es menor que 12
console.log(2 <= "12"); // TRUE -> Js entiende que "12" es un numero
```

## String

JavaScript comparará las cadenas de texto según el valor de su código Unicode.

```js
console.log("2" <= "12"); // FALSE -> Al ser ambos string, lo que hace es comparar alfabeticamente. 12 es anterior a 2, porque 1 es anterior que 2
console.log("b" <= "ab"); // FALSE -> Mismo caso que arriba. 'ab' es anterior a 'b', porque 'a' es anterior que 'b'
```

# Comparaciones compuestas

Podemos usar los operadores lógicos para realizar varias comparaciones conjuntas.

## Operador AND (`&&`)

Ambos comparaciones deben de cumplirse.

```js
console.log(a < b && b === c); // TRUE -> Ambas condiciones se cumplen
console.log(a < b && b > c); // FALSE -> La segunda condicion no se cumple
```

## Operador OR (`||`)

Al menos una de las comparaciones debe de cumplirse.

```js
console.log(a < b || b > c); // TRUE -> La primera condicion se cumple
console.log(a > b || a > c); // FALSE -> Ninguna de las condiciones se cumple
```

## Operador NOT (`!`)

Si colocamos este operador al inicio, la condicion no debe cumplirse.

```js
console.log(!(1 === 2)); // TRUE -> La condicion NO se cumple
console.log(!(1 === 1)); // FALSE -> La condicion SI se cumple
```
