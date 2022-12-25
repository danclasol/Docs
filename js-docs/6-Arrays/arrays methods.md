# push

Añade uno o más elementos al final de un array y devuelve la nueva longitud del array

```js
myArray.push(7);
myArray.push(8, 9);
console.log("push", myArray);
```

# pop

Elimina el último elemento de un array y lo devuelve

```js
const lastElement = myArray.pop(0);
console.log("pop", myArray);
console.log("last element", lastElement);
```

# shift

Elimina el primer elemento del array y lo devuelve

```js
const firstElement = myArray.shift(0);
console.log("shift", myArray);
console.log("last element", firstElement);
```

# unshift

Agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array

```js
myArray.unshift(0);
myArray.unshift(-1, -2);
console.log("unshift", myArray);
```

# splice

Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

Parametros:

- 1º: indice
- 2º: numero elementos a eliminar
- 3º: array de elementos a insertar

```js
myArray.splice(3, 0, 4, "Hola", "Adios");
console.log("slice", myArray);
```

const myArray = [1, 2, 3, 4];

# forEach

Recorre el array y ejecuta la función indicada una vez por cada elemento del array

```js
myArray.forEach((element, index, array) => {
  console.log(element, index);
});
```

# map

Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
const newArray = myArray.map((element) => element + 1);
console.log("newArray", newArray);
```

# reduce

Tranforma un array en un unico valor

```js
const total = myArray.reduce((total, currentValue) => total + currentValue, 0);
console.log("total", total);
```

# map + reduce

```js
const facturas = [
  { precio: 20, cantidad: 1 },
  { precio: 5, cantidad: 2 },
  { precio: 1, cantidad: 3 },
];

const total = facturas
  .map((factura) => factura.precio * factura.cantidad)
  .reduce((a, b) => a + b);

console.log("total facturas", total);
```

# filter

Crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
```

# find

Devuelve el valor del primer elemento del array que cumple la condición

```js
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);

console.log(found); // OUTPUT: 12
```

# sort

Ordena los elementos de un array alfabéticamente(valor Unicode)

```js
const letters = ["b", "c", "z", "a"];
console.log(letters.sort());
```

Si le pasamos un callback los ordena en función del algoritmo que le pasemos.

```js
console.log(numbers.sort((a, b) => a - b));
```

Ordenar una lista de objetos, por una propiedad en concreto.

```js
const objs = [
  { name: "John", surname: "Smith" },
  { name: "Peter", surname: "Parker" },
  { name: "Marie", surname: "Curie" },
];

console.log(objs.sort((a, b) => (a.name > b.name ? 1 : -1)));
```

# some

Comprueba si al menos un elemento del array cumple la condición del callback

```js
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // OUTPUT: true
```

# every

Comprueba si todos los elementos del array cumplen la condición

```js
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // OUTPUT: false
```

# from

Crea una nueva instancia de Array a partir de un objeto iterable.

```js
Array.from("foo"); // ["f","o","o"]
Array.from(new Set(["foo", "bar", "baz", "foo"])); // [ "foo", "bar", "baz" ]
Array.from(
  new Map([
    [1, 2],
    [2, 4],
    [4, 8],
  ])
); // [[1, 2], [2, 4], [4, 8]]
```

Pasandole una arrow function al `from`, podemos manipular cada elemento insertado

```js
Array.from(Array(5), (v, index) => index + 1); // [1,2,3,4,5]
```

# slice

Crea una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido).

```js
const array = [1, 2, 3, 4, 5];
const myArray = array.slice(1, 3); // [2,3]

console.log("slice", myArray);
```
