# Array vs object

En Javascript, `array` no es un tipo de datos, si no que son `object`

A diferencias de los `objects`, los `arrays` son iterables, es decir, podemos recorrer un array utilizando los métodos `map`, `filter`, etc.

```js
const personaObj = {
  name: "Roberto",
  surname: "Hernández",
  age: 30,
  mail: "robertoher@gmail.com",
  favoriteColor: "blue",
};

for (const propiedad of personaObj) {
  console.log(propiedad); // Error: personaObj is not iterable
}

const personaArray = [
  "Roberto",
  "Hernández",
  30,
  "robertoher@gmail.com",
  "blue",
];

for (const propiedad of personaArray) {
  console.log(propiedad);
}
```

Los array son iterables debido a que poseen una función generadora.

Los objetos no poseen esta función.

```js
console.log(personaArray[Symbol.iterator]); // Devuelve undefined
console.log(personaArray[Symbol.iterator]); // Devuelve la funcion generadora
```

# Convertir objetos en iterables

Si creamos una función generadora para el objeto, podemos hacer que el objeto sea iterable.

```js
personaObj[Symbol.iterator] = function* () {
  yield personaObj.name;
  yield personaObj.surname;
  yield personaObj.age;
  yield personaObj.mail;
  yield personaObj.favoriteColor;
};
```

Ahora si podemos recorrer el objeto con un `for`

```js
for (const propiedad of personaObj) {
  console.log(propiedad); // Error: personaObj is not iterable
}
```

# Convertir objetos en iterables con iterador

Un iterador es un objeto que tiene definida una función dentro llamada `next()`

Esta función tiene que devolver un objeto con dos propiedades:

```js
{
  value, // valor que vamos a devolver en la llamada
    done; // Indicador de si es la última llamda
}
```

Por lo que podriamos hacer un objeto iterable usando un iterador en vez de una función generadora

```js
personaObj[Symbol.iterator] = function () {
  const values = Object.values(personaObj);

  return {
    next() {
      const value = values[index];
      index++;

      if (index > values.lenght) {
        return {
          value: undefined,
          done: true,
        };
      }

      return {
        value,
        done: false,
      };
    },
  };
};
```

Con la función generadora es más sencillo, ya que:

- No es necesario implementar el método next() .
- No es necesario devolver explícitamente el objeto {value, done} .
- No es necesario almacenar el estado del mismo modo que hacemos dentro del iterador.
