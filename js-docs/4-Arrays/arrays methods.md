# length

Devuelve la cantidad de elementos en array

```js
console.log("lenght", myArray.length);
```

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

Recorre un array elemento a elemento

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
const total1 = myArray.reduce((a, b) => a + b);
const total2 = newArray.reduce((a, b) => a + b);
console.log("total1", total1);
console.log("total2", total2);
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
