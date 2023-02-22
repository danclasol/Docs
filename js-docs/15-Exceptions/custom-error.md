# Custom errors

Para crear nuestras propios clases de error, debemos extender la clase `Error`.

Nuestra clase heredará las propiedades mensaje, nombre y la pila, pero podremos añadir más propiedades.

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
  }
}
```

Tambien podemos sobreescribir propiedades heredadas

```js
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
    this.stack = ""; // eliminar stack
  }
}
```

Lanzar excepcion con nuestro error personalizado

```js
throw CustomError("Este es mi error custom");
```

Podemos identificar nuestra excepción con la `instanceof`

```js
try {
  validate();
} catch (e) {
  if (e instanceof CustomError) console.log("Ha ocurrido un custom error");
}
```
