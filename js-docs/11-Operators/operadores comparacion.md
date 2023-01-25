# Operadores de comparación

Operadores para realizar comprobaciones. Devuelve un booleano

En Js, existe la comparación estricta (igualdad) y la no estricta (identidad). Mientras que el primero solo comprueba el valor de la comparación, el segundo comprueba el valor y el tipo de dato de la comparación.

## Operador de igualdad no estricto

Comprueba si el valor de a es igual al de b. No comprueba tipo de dato.

```js
5 == 5; // true (ambos son iguales, coincide su valor)
"5" == 5; // true (ambos son iguales, coincide su valor)
```

## Operador de desigualdad no estricto

Comprueba si el valor de a es igual al de b. No comprueba tipo de dato.

```js
5 != 5; // true (no coincide el mismo valor)
"5" != 6; // true (no coincide el mismo valor)
```

## Operador de igualdad estricto

Comprueba si el valor de a es igual al de b. No comprueba tipo de dato.

```js
5 === 5; // true (ambos son idénticos, coincide su valor y su tipo de dato -número-)
"5" === 5; // false (no son idénticos, coincide su valor, pero no su tipo de dato -string y número-)
```

## Operador de desigualdad estricto

Comprueba si el valor de a es igual al de b. No comprueba tipo de dato.

```js
5 !== 5; // true (no coincide el mismo valor)
"5" !== 5; // true (no coincide el mismo valor)
```

## Operador mayor que >

Comprueba si el valor de a es mayor que el de b.

```js
5 > 3; // true
```

## Operador mayor/igual que >=

Comprueba si el valor de a es mayor o igual que el de b.

```js
5 >= 5; // true
5 >= 3; // true
```

## Operador menor que <

Comprueba si el valor de a es menor que el de b.

```js
5 < 6; // true
```

## Operador menor/igual que <=

Comprueba si el valor de a es menor o igual que el de b.

```js
5 <= 5; // true
5 <= 6; // true
```
