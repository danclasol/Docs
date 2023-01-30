# Tipos primitivos

En Javascript existen dos tipos de datos: primitivos y objetos.

Los primitivos representan un dato en la implementación más baja posible, es decir, son la manera más básica de representar un dato.

Se diferencian con los objetos en que:

- Cuando se crea una variable no se guarda por referencia
- Las variables se pasan por valor
- Las comparaciones se hacen por valor

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

Representa un valor nulo o vacío

```js
const nulo = null;
```

Aunque `null` sea un tipo primitivo, la función `typeof` devuelve que es un `object`. Esto es debido a un bug historico de Javascript, que nunca se ha llegado a corregir.

```js
console.log("typeof null", typeof null); // devuelve object
```

## undefined

Valor sin definir (variable sin inicializar)

```js
const indefinido1 = undefined;
let indefinido2;

console.log("null", nulo);
console.log("undefined", indefinido1, indefinido2);
```

# Objects Types

A diferencia de los tipos primitivos, los objetos son almacenados y copiados por referencia.

Los objetos serían todos lo demás.

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

Esto pasa con String, Number, Boolean pero no con null, undefined, Symbol y BigInt.

Como podemos ver, el primitivo de string no es lo mismo que usar el objeto String.

```js
"hello" === new String("hello"); // false
2 === new Numnber(2); // false
true === new Boolean(true); // false
```

# typeof

Función que devuelve el tipo de datos de la variable que le pasemos como parametro.

```js
console.log("typeof hola", typeof "hola"); // string
console.log("typeof 5", typeof 5); // number
console.log("typeof true", typeof true); // boolean
console.log("typeof undefined", typeof undefined); // undefined
console.log("typeof null", typeof null); // devuelve object
console.log("typeof {}", typeof {}); // devuelve object
console.log("typeof []", typeof []); // devuelve object
console.log("typeof function", typeof function () {}); // devuelve function
```
