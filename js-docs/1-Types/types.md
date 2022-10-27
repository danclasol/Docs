# String

Valor de texto (cadenas de texto, carácteres, etc...)

```js
const cadena = "test";
```

# Number

Valor numérico (enteros, decimales, etc)

```js
const numero = 5;
const numero = 5.2;
```

# BigInt

Valor numérico grande.

```js
const bigNumber = 1234567890123456789n;
```

# Boolean

Valor booleano (valores verdadero o falso)

```js
const verdad = true;
const mentira = false;
```

# Function

Funcion guardada en una variable

```js
const miFuncion = function () {};
```

# Object

Objeto (estructura más compleja)

```js
const miObjeto = {};
```

# Symbol

Símbolo (valor único).

Nos permiten crear propiedades unicas e inmutables.

```js
const simbolo = Symbol(1);
```

# null

Representa un valor nulo o vacío

```js
const nulo = null;
```

# undefined

Valor sin definir (variable sin inicializar)

```js
const indefinido1 = undefined;
let indefinido2;

console.log("null", nulo);
console.log("undefined", indefinido1, indefinido2);
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
