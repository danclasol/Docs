# Funcionamiento tipos en JS

- En Lenguajes fuertemente tipados, no se pueden realizar operaciones entre distintos tipos
- En JS al ser de tipado dinamico si se puede, en JS se va a intentar convertir los 2 tipos en uno comun y realizar la operacion
- JS determina que el tipo comun es String

Por ejemplo, si intentamos sumar un string con un numero, JS por defecto los trata ambos como cadena.

```js
console.log("2" + 2); // 22
```

Sin embargo, si intentamos multiplicar, como los string no tienen la operacion \*, esta vez los trata como tipo comun un numero, ya que el operador \* esta destinado para numeros.

```js
console.log("2" + 2); // 4
```

# Conversion Implicita

## String

```js
console.log("5" + 5); // 55
console.log("5" + true); // 5true
console.log("5" + null); // 5null
console.log("5" + undefined); // 5undefined
```

## Number

```js
console.log(5 + "5"); // 55 (Como la suma si existe para String, Js lo trata como cadena)
console.log(5 - "5"); // 0 (Como la resta no existe para String, Js lo tranforma a Number)
console.log(5 - "Hola"); // NaN (En este caso como en el anterior Js lo trata como numero, pero como "Hola" no es numero que se pueda restar, devuleve NaN)
console.log(5 + true); // 6 (5 + true=1)
console.log(5 + false); // 6 (5 + true=0)
console.log(5 + null); // 5 (5 + null=0)
console.log(5 + undefined); // NaN (Not a number)
```

`NaN` (Not a number) es un valor de tipo Number, pero es un valor especial para indicar que lo que estamos sumando/restando etc no es un numero

## Booleans

```js
console.log(5 / true); // 5 (5 / true=1)
console.log(5 / false); // Infinity (5/0=?)
```

# Conversion Explicita

## String()

```js
console.log(String(5)); // 5 como String
console.log(String(true)); // true como String
console.log(String(null)); // null como String
console.log(String(undefined)); // undefined como String
```

## Number()

```js
console.log(Number("5")); // 5 como Number
console.log(Number("Hola")); // NaN "Hola" no es convertible a Number
console.log(Number(true)); // 1 como Number
console.log(Number(false)); // 0 como Number
console.log(Number(null)); // 0 como Number
console.log(Number(undefined)); // NaN ya que no se puede convertir en Number
```

## Boolean()

```js
console.log(Boolean("5")); // true
console.log(Boolean("0")); // true
console.log(Boolean("Hola")); // true
console.log(Boolean("true")); // true
console.log(Boolean("false")); // true (solo mira si la cadena no esta vacia)
console.log(Boolean("")); // false (cadena vacia)
console.log(Boolean(5)); // true
console.log(Boolean(-5)); // true
console.log(Boolean(0)); // false (el unico caso que devuelve false es para 0)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
```

# Cast

## parseInt()

```js
console.log(parseInt("5.5")); // 5
console.log(parseInt(5.5)); // 5
```

## parseFloat()

```js
console.log(parseFloat("5.5")); // 5.5
console.log(parseFloat("5")); // 5 (Como no tiene decimales, no pone 5.00)
```
