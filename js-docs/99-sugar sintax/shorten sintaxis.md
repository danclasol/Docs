# Objects

Si el `key` y la variable asignada en el `value` tienen el mismo nombre.

```js
const data = {
  id: userId,
  name: username,
  picture: picture,
};
```

Podemos transformar `picture: picture` por solo `picture`.

```js
const data = {
  id: userId,
  name: username,
  picture,
};
```

# Arrow functions

Las arrow functions poseen un return implicito, que permite devolver el valor de la expresión sin usar la palabra clave `return` cuando son de una sola línea.

Por lo que cuando nuestras funciones solo tengan una sola línea, gracias al _return_ implicito de las _arrow functions_, podemos reducir el codigo omitiendo el `return` de la funcion y los `{}`.

```js
const sum = (a, b) => {
  return a + b;
};
```

Acortamos al utilizar al return implicito.

```js
const sum = (a, b) => a + b;
```
