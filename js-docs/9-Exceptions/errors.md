# Error object

El objeto `Error` es una instancia de la clase `Error`.

Los errores en JavaScript poseen unas propiedades estándar y personalizadas que ayudan a comprender la causa y los efectos del error.

Por defecto, los errores en JavaScript contienen las siguientes propiedades:

- `message`: string con el mensaje de error
- `name`: tipo de error que se ha producido

Existen otras propiedades no estandar:

- `stack`: rastro de la pila del código ejecutado cuando se produjo el error
- `fileName`: ruta del archivo que generó el error
- `lineNumber`: número de línea en el archivo que generó el error
- `columnNumber`: línea en el archivo que generó el error

## Crear objeto Error

```js
thow new Error("Algo malo ha pasado!");
```

# Tipos de error

Además del constructor genérico Error, hay otros siete constructores de errores en el núcleo de JavaScript.

- `EvalError`: crea una instancia que representa un error que ocurre con respecto a la función global eval() (en-US).
- `InternalError`: Crea una instancia que representa un error que ocurre cuando se produce un error interno en el motor de JavaScript. Por ejemplo: "demasiada recursividad".
- `RangeError`: crea una instancia que representa un error que ocurre cuando una variable numérica o parámetro está fuera de su rango válido.
- `ReferenceError`: crea una instancia que representa un error que ocurre cuando se quita la referencia a una referencia no válida.
- `SyntaxError`: crea una instancia que representa un error de sintaxis.
- `TypeError`: crea una instancia que representa un error que ocurre cuando una variable o parámetro no es de un tipo válido.
- `URIError`: crea una instancia que representa un error que ocurre cuando `encodeURI()` o `decodeURI()` pasan parámetros no válidos.
