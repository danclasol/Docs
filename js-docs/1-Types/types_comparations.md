# Comparation LOOSE (o abstracta)

Practica no se utiliza, es mas recomendable usar SIEMPRE la comparacion `STRICT`</P>
Esta comparacion intenta:

- Si son del mismo tipo, comparar los valores</li>
- Si NO son de distinto tipo, intenta pasarlos el mismo tipo. Para ello sigue unas reglas especiales que tienen que ver con los métodos `toNumber` y `toPrimitive`</li>

```js
console.log(1 == 1);
console.log(1 != 1);
```

# Comparation STRICT

Primero si el tipo no es igual devuelve `false`
Si conincide el tipo, entonces compara el valor

```js
console.log(a === b);
console.log(a !== b);
```

# Mayor y menor

```js
console.log(2 <= 12); // TRUE -> Ambos son numeros, por lo tanto 2 es menor que 12
console.log(2 <= "12"); // TRUE -> Js entiende que "12" es un numero
console.log("2" <= "12"); // FALSE -> Al ser ambos string, lo que hace es comparar alfabeticamente. 12 es anterior a 2, porque 1 es anterior que 2
console.log("b" <= "ab"); // FALSE -> Mismo caso que arriba. 'ab' es anterior a 'b', porque 'a' es anterior que 'b'
```

# Comparaciones compuestas

Operador AND (`&&`) -> Que ambos se cumplan

```js
console.log(a < b && b === c); // TRUE -> Ambas condiciones se cumplen
console.log(a < b && b > c); // FALSE -> La segunda condicion no se cumple
```

Operador OR (`||`) -> Que al menos uno de los 2 se cumpla

```js
console.log(a < b || b > c); // TRUE -> La primera condicion se cumple
console.log(a > b || a > c); // FALSE -> Ninguna de las condiciones se cumple
```

Operador NOT (`!`) -> Que no se cumpla una condicion

```js
console.log(!(1 === 2)); // TRUE -> La condicion NO se cumple
console.log(!(1 === 1)); // FALSE -> La condicion SI se cumple
```
