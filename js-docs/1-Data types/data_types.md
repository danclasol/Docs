# Tipos primitivos

En Javascript existen dos tipos de datos: **primitivos** y **objetos**.

Los **primitivos** representan un dato en la implementación más baja posible, es decir, son la manera más básica de representar un dato.

Se diferencian con los **objetos** en que:

- **Son inmutables**. Esto quiere decir que si cambiamos el valor a un primitivo, al ser esta la forma más basica de representar un dato, realmente no lo mutamos si no que lo convertimos en otro primitivo.
  ```js
  let a = "cadena";
  a[0] = "T"; // No podemos mutarlo parcialmente
  a = "T"; // Tenemos que cambiar el valor total
  ```
- Cuando se crea una variable no se guarda por referencia
- Las variables se pasan por valor en funciones
- Las comparaciones se hacen por valor

Existen 7 tipos primitivos:

## String

Valor de texto (cadenas de texto, carácteres, etc...)

```js
const cadena = "test";
```

## Number

Valor numérico (enteros, decimales, etc)

```js
const numero = 5;
const numero = 5.2;
```

## BigInt

Valor numérico grande.

```js
const bigNumber = 1234567890123456789n;
```

## Boolean

Valor booleano (valores verdadero o falso)

```js
const verdad = true;
const mentira = false;
```

## Symbol

Símbolo (valor único).

Nos permiten crear propiedades unicas e inmutables.

```js
const simbolo = Symbol(1);
```

Nunca va a haber 2 Symbols iguales

```js
Symnbol() == Symbol(); // false
```

## null

Representa un valor nulo o vacío.

```js
const nulo = null;
```

Aunque `null` sea un tipo primitivo, la función `typeof` devuelve que es un `object`. Esto es debido a un bug historico de Javascript, que nunca se ha llegado a corregir.

```js
console.log("typeof null", typeof null); // devuelve object
```

Por lo que para comprobar si una variable es `null`, debemos usar la comparacion estricta `===`

## undefined

Valor sin definir (variable sin inicializar).

Por ejemplo, si creamos una variable sin asignarle ningún valor:

```js
let indefinido;

console.log("indefinido", indefinido); // undefined
```

O podemos asignarle directamente el valor `undefined`:

```js
const indefinido = undefined;

console.log("indefinido", indefinido);
```

# Objects Types

A diferencia de los tipos **primitivos**, los **objetos** son almacenados y copiados por referencia.

Todo lo que no sea un tipo primitivo sera un objeto:

- Objetos, arrays
- Map, Set
- Error, promise, JSON, Date
- Etc

Los primitivos pueden parecer que son objetos porque tienen propiedades y métodos.

```js
const string = "This is a string.";
string.length;
string.toUpperCase();

const number = 5;
number.toString();
number.toFiced(2);

const bool = false;
bool.toString();
bool.valueOf();
```

Sin embargo, lo que ocurre es que JavaScript hace una coerción del primitivo automáticamente y crea una instancia del objeto String, sin necesidad que lo debas hacer tú manualmente.

Esto pasa con _String_, _Number_, _Boolean_ pero no con _null_, _undefined_, _Symbol_ y _BigInt_.

Como podemos ver, el primitivo de string no es lo mismo que usar el objeto _String_.

```js
"hello" === new String("hello"); // false
2 === new Numnber(2); // false
true === new Boolean(true); // false
```

## Function object

En Js, las funciones se llaman `function objects` porque son objetos especiales, los cuales cuentan con propiedades y métodos especiales.

Pueden ser almacenadas en una variable o array y pueden recibir parametros.

```js
function message() {
  console.log("Greetings!");
}

console.log(typeof message); // => function
console.log(message instanceof Object); // => true
```
