# Exceptions

Las excepciones son situaciones anómalas que se producen en nuestro código y que nos obligan a desviar la ejecución desde el flujo principal a otro alternativo. Es decir, darles un tratamiento especial.

Las excepciones pueden ocurrir:

- Durante la compilacion
- Durante la ejecución

En Js, debido a que la compilacion y la ejecución se realizan en el mismo paso, solo podemos tener excepciones durante en tiempo de ejecución.

En otros lenguajes compilador como Java o C, podemos tener también excepciones durante tiempo de compilación.

# Handling exceptions

## throw

Con `throw` lanzamos una excepcion para romper el flujo de nuestro código.

```js
throw Error("Error");
```

## try...catch

Con un bloque `try...catch` podemos capturar una excepcion y controlar lo que pasará cuando se lance una excepcion

```js
try {
  validate(); // codigo que lanzará una excepcion
} catch (e) {
  // Capturar el error
}
```

En Js, no se pueden añadir multiples `catch` para manejar mas de un tipo de excepcion, por lo que tendremos que usar `instanceof` para identificar el tipo de excepcion que se ha lanzado

```js
try {
  validate(); // codigo que lanzará una excepcion
} catch (e) {
  if (e instanceof CustomError) {
    console.log("Custom error");
  } else if (e instanceof AnotherCustomError) {
    console.log("Another custom error");
  } else {
    throw Error("Unkwon Error");
  }
}
```

## finally

Los bloque `finally` se ejecutan siemre despues del `try` y del `catch`, aún cuando se lance o no una excepcion.

Esto es util cuando tengamos que cerrar algun recurso o conexión aunque falle el código.

```js
try {
    // code
} catch (ex) {
    // error
} finally () {
    // close connection to database
    // close open file
}
```

## Exceptions with promises

Al usar promesas podemos encadenar diferentes operaciones y capturar errores al final:

```js
doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch((err) => console.error(err));
```

## Error handling with async/await

Si usamos `async/await`, seguimos necesitando usar un bloque `catch` para capturar el error.

```js
async function someFunction() {
  try {
    await someOtherFunction();
  } catch (err) {
    console.error(err.message);
  }
}
```
