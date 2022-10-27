# Arrays

- Son estructuras que nos permiten almacenar varios datos y agruparlos.
- Se pueden llenar con cualquier tipo de dato válido en JavaScript y deben ir separados por comas
- Se pueden mezclar tipos de datos, pero no es recomendable.
- Se declaran con llaves cuadradas o corchetes []
- Pueden declararse vacíos o con un contenido ya establecido
- Pueden añadirse o eliminarse elementos en el momento que queramos
- En Javascript array no es un tipo de datos, si no que son objetos que poseen métodos para iterarlos. Los objetos no tienen estos métodos

Example of array creation

```js
const myArray = [
  "Hola",
  5,
  true,
  undefined,
  { a: 2, b: 3 },
  () => "Hola",
  [1, 2, 3],
];

console.log(myArray);
```

# Access to array elements

```js
console.log(myArray[0]); // Devuelve la primera posicion del array
```

# Modify array elements

```js
myArray[3] = "Pepe";
console.log(myArray);
```
