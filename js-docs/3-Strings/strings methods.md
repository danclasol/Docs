Todos los métodos devuelven una cadena nueva, la cadena original no será modificada.

# toUpperCase()

Devuleve la cadena a mayúsculas

```js
console.log("toUpperCase", cadena.toUpperCase());
```

# toLowerCase()

Devuelve la cadena a minúsculas

```js
console.log("toLowerCase", cadena.toLowerCase());
```

# indexOf(string)

Devuelve la posición en la que se encuentra el string, si no lo encuentra devuelve -1

```js
console.log('indexOf("o")', cadena.indexOf("o"));
console.log('indexOf("Hola")', cadena.indexOf("Hola"));
```

# replace(valor a buscar, valor nuevo)

Remplaza el fragmento de la cadena que le digamos y pone el valor nuevo

```js
console.log("replace", cadena.replace("Mundo", "Youtube"));
```

# replaceAll(valor a buscar, valor nuevo)

Remplaza todas las concurrencias de la cadena que le digamos y pone el valor nuevo

```js
console.log("replaceAll", cadena.replaceAll("Loro", "o")); // Lr
```

# substring(inicio [,fin])

Extrae los caracteres desde inicio hasta fin (el final no se incluye)
Si no se incluye el fin extrae hasta el final.

```js
console.log("subtring(3)", cadena.substring(3));
console.log("substring(3,7)", cadena.substring(3, 7));
```

# slice(inicio [,fin])

Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás

Si no se incluye el final extrae hasta el final

```js
// (2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
console.log("slice(-3)", cadena.slice(-3));
console.log("slice(2)", cadena.slice(2));
console.log("slice(0,-2)", cadena.slice(0, -2));
```

# split(text)

Función que divide un `string` en un array de cadenas mediante la separacion `text` que le pasemos.

```js
"1.2.3.4.5".split("."); // ["1", "2", "3", "4", "5"] (5 elementos)
"A,B,C,D,E".split(",", 3); // ["A", "B", "C"] (limitado a los 3 primeros elementos)
"88.12,44.123".split(/[.,]/); // tambien podemos usar una expresion regular
```

# trim()

Elimina los espacios al inicio y al final de la cadena

```js
let cadena2 = "Hola youtube, estamos trabajando con cadenas";
console.log("trim", cadena2.trim());
```

# padStart()

Rellena una cadena hasta la longitud indicada colocando al principio los caracteres pasados como parametro.

Se le puede indicar los caracteres con lo que rellenar la cadena.

```js
"123".padStart(6); // "   123"
"123".padStart(6, "0"); // "000123"
"abc".padStart(6, "123465"); // "123abc"
```

# padEnd()

Rellena una cadena hasta la longitud indicada colocando al final los caracteres pasados como parametro.

Se le puede indicar los caracteres con lo que rellenar la cadena.

```js
"123".padEnd(6); // "123   "
"123".padEnd(6, "0"); // "123000"
"abc".padEnd(6, "123465"); // "abc456"
```

# startsWith(valor [,inicio])

Sirve para saber si la cadena empieza con ese valor. Devuleve true o false

```js
console.log('startsWith("H")', cadena.startsWith("H"));
console.log('startsWith("h")', cadena.startsWith("h"));
console.log('startsWith("M", 5)', cadena.startsWith("M", 5));
```

# endsWith(valor [,longitud])

Sirve para saber si la cadena termina con ese valor. Devuleve true o false

```js
console.log('endsWith("o")', cadena.endsWith("o"));
console.log('endsWith("a", 4)', cadena.endsWith("a", 4));
console.log('endsWith("n", 8)', cadena.endsWith("n", 8));
console.log('endsWith("Mundo")', cadena.endsWith("Mundo"));
```

# includes(valor[,inicio])

Igual que indexOf pero devuelve true o false

```js
console.log('includes("n")', cadena.includes("n"));
console.log('includes("a", 5)', cadena.includes("a", 5));
console.log('includes("a", 2)', cadena.includes("a", 2));
```

# repeat(valor)

Repite el string el número de veces que le indiquemos.

```js
let cadena3 = "Hola";
console.log("repeat(3)", cadena3.repeat(3));
console.log("r".repeat(10));
```

# search(regexp)

Busca un patrón que encaje con `regexp` y devuelve la posicion encontrada

```js
const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

text.search(regexp); // 3, porque la primera coincidencia ocurre en la posición 3 (gato)
```

# match(regexp)

Busca un patrón que encaje con `regexp` y devuelve las coincidencias encontradas

```js
const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

text.match(regexp); // ["gato", "pato"], las dos coincidencias encontradas
```

# matchAll(regexp)

Busca un patrón que encaje con `regexp` y devuelve un iterador para iterar por cada coincidencia

```js
const text = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

const iterator = text.matchAll(regexp);
for (let ocurrence of iterator) {
  console.log(ocurrence);
}

// ['gato', index: 3, input: 'El gato, el perro y el pato.', groups: undefined]
// ['pato', index: 23, input: 'El gato, el perro y el pato.', groups: undefined]
```
