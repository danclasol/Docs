# Operadores lógicos

## Operador lógico AND

Devuelve el primer valor si es `false`, o el segundo valor si el primero es `true`.

```js
a && b;
```

Es decir, devuelve `b` si `a` y `b` son verdaderos, sino `a`.

```js
false && false; // false (si ninguno de los dos es true, false)
true && false; // false (idem)
false && true; // false (idem)
true && true; // true (si ambos son true, true)
```

Tambien pueden ser aplicados a valores de cualquier tipo, no solo booleanos. El resultado también puede ser de cualquier tipo.

```js
0 && undefined; // 0 (se evalua como false && false, devuelve el primero)
undefined && 0; // undefined (se evalua como false && false, devuelve el primero)
55 && null; // null (se evalua como true && false, devuelve el segundo)
null && 55; // null (se evalua como false && true, devuelve el primero)
44 && 20; // 20 (se evalua como true && true, devuelve el segundo)
```

# Operador ternario

Es una especie de `if` compacto que permite escribir un 'if / else' de varías líneas en una sola.

```js
(condición) ? valor verdadero : valor falso;
```

Si la condición es true, devuelve el primer valor, sino devuelve el segundo.

```js
numero > 0 ? "Positivo" : "Negativo";
```

# Operador lógico OR

Devuelve el primer valor si es `true`, o el segundo valor si el primero es `false`.

```js
a || b;
```

Es decir, devuelve `a` si es verdadero, o si no, `b`

```js
false || false; // false (si ninguno de los dos es true, false)
true || false; // true (desde que uno sea true, true)
false || true; // true (idem)
true || true; // true (idem)
```

Tambien pueden ser aplicados a valores de cualquier tipo, no solo booleanos. El resultado también puede ser de cualquier tipo.

```js
0 || null; // null (se evalua como false || false, devuelve el segundo)
44 || undefined; // 44 (se evalua como true || false, devuelve el primero)
0 || 17; // 17 (se evalua como false || true, devuelve el segundo)
4 || 10; // 4 (se evalua como true || true, devuelve el primero)
```

Cuidado con el valor `0`, ya que puede que sea válido para nosotros pero en JS es `falsy`

# Operador lógico Nullish coalescing

Similar al operador `OR`, pero con valores como `false`, `0`, no devuelve el segundo valor.

Es decir, devuelve `b` si `a` es `null` o `undefined`, sino devuelve `a`.

```js
42 || 50; // 42
42 ?? 50; // 42 (ambos se comportan igual)
false || 50; // 50 (false es un valor falsy, devuelve el segundo)
false ?? 50; // false (la parte izquierda no es null ni undefined, devuelve el primero)
0 || 50; // 50 (0 es un valor falsy, devuelve el segundo)
0 ?? 50; // 0 (la parte izquierda no es null ni undefined, devuelve el primero)
null || 50; // 50 (null es un valor falsy, devuelve el segundo)
null ?? 50; // 50 (devuelve el primero)
undefined || 50; // 50 (undefined es un valor falsy, devuelve el segundo)
undefined ?? 50; // 50 (devuelve el primero)
```

# Operador de asignación lógica nula

Permite cambiar el valor de una variable solo si tiene valores null o undefined (valores nullish)

Es equivalente a a ?? (a = b)

Ejemplo, sin asignación lógica nula

```js
if (x === null || x === undefined) {
  x = 50;
}
```

El mismo ejemplo con asignación lógica nula

```js
x ??= 50;
```

# Operador de encadenamiento opcional (optional chaining)

Permite intentar acceder a una propiedad, aunque su padre no exista, de forma que podamos evitar un error.

Ejemplo:

```js
const user = {
  name: "Peter",
  role: "admin",
  attrs: {
    life: 100,
    power: 25,
  },
};
```

Si la propiedad esta definida podemos acceder a ella sin problemas, pero si no esta definida (`undefined`) dará error

```js
user.attrs.power; // 25
user.attrs.life; // 100
user.attrs.strength; // TypeError: Cannot read properties of undefined (reading 'strength')
```

Para evitar esto, sin usar `if` ni operadores lógicos o alguna forma similar de comprobar si existe la propiedad, podemos usar el `optional chaining`.

```js
user.attrs.power; // 25
user.attrs.life; // 100
user.attrs.strength; // undefined
```

# Operador unario lógico NOT

Invierte el valor. Si es `true` devuelve `false` y viceversa.

```js
!true; // false
!false; // true
!!true; // true
```

Tambien, podemos hacerlo con variables con otros tipos de datos

```js
!44; // false (se evalua como !true)
!0; // true (se evalua como !false)
!""; // true (se evalua como !0, que es !false)
!(10 || 23); // false (se evalua como !10, que es !true)
```
