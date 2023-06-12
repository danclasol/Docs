# File system

Nos permite operar con archivos y directorios del sistema.

- Obtener propiedades de los archivos (fecha creacion, ultima lectura, tamaño, etc).
- Crear, leer, escribir, copiar, mover y eliminar archivos.
- Consultar y cambiar permisos.
- Vigilar cambios.

# Filesystem API

En Node existe el modulo `fs` para interactuar con ficheros del sistema.

Esta API nos ofrecen 2 formas de trabajar con ficheros:

## Sincrona

### Sincronous API

```js
import { unlinkSync } from "node:fs";

try {
  unlinkSync("/tmp/hello");
  console.log("successfully deleted /tmp/hello");
} catch (err) {
  // handle the error
}
```

## Asincrona

### Callback API

```js
import { unlink } from "node:fs";

unlink("/tmp/hello", (err) => {
  if (err) throw err;
  console.log("successfully deleted /tmp/hello");
});
```

### Promises API

```js
import { unlink } from "node:fs/promises";

try {
  await unlink("/tmp/hello");
  console.log("successfully deleted /tmp/hello");
} catch (error) {
  console.error("there was an error:", error.message);
}
```

# Common objects

# Methods

# Consideraciones

- Al realizar varias veces la llamada de lectura/wscritura de un fichero, hay que tener en cuenta, que en la segunda llamada, no se volverá a empezar a leer desde el prinicipio, si no desde donde se quedo en la primera lectura.

- Los parametros de permisos de lectura y escritura, pueden variar en funcion del sistema operativo en el que estemos trabajando.

- Aunque existe la posibilidad de optar por manejar los ficheros de forma sincrona o asincrona, la mayoria de funcionales son iguales.
