# CommonJs (CJS)

Sistema por defecto de Node.js. Antes de la llegada de ESMAScript modules, era el único que soportaba la implementacion de módulos.

_CommonJS_ surge cerca de 2009 con el objetivo de implemantar una serie de pautas para crear un sistema de módulos en el ecosistema Javascript.

Usado mayormente en lado del servidor, ya que no esta soportado para navegadores.

```js
// module-name.js
module.exports = {
  /* ... */
};

// index.js
const module = require("./module-name.js");
const package = require("package");

module.method();
```

# Rutas absolutas al directorio y al módulo

En CommonJs existen 2 propiedades para obtener las rutas absolutas de los módulos.

## \_\_dirname

Obtiene la ruta absoluta del directorio del módulo

```js
console.log(__dirname); // C:\Users\MyUser\vs-workspace\curso-node
```

## \_\_filename

Obtiene la ruta absoluta del módulo

```js
console.log(__filename); // C:\Users\PC-Dani\vs-workspace\curso-node\index.js
```

# module

La variable global `module` es un objeto que representa el modulo en el que lo estamos ejecutando, es decir, el propio archivo en sí.

Este objeto tiene los siguientes propiedades:

### _id_

The identifier for the module. Typically this is the fully resolved filename.

### _path_

The directory name of the module. This is usually the same as the `path.dirname()` of the module.id.

### _filename_

The fully resolved filename of the module.

### _loaded_

Whether or not the module is done loading, or is in the process of loading.

Indica si el modulo ha sido importado en algun otro módulo.

### _children_

The module objects required for the first time by this one.

Indica los modulos que se hayan importado en el modulo actual.

### _paths_

Rutas de busquedas del sistema de módulos en las que revisará a la hora de importar otros módulos.

### _exports_

Define la información del módulo que vamos se va a exportar y que hace que sea accesible desde `require()`.

```js
const myFunction = () => {};

exports = { myFunction };
```

Tambien podemos renombrar la funcion importada.

```js
const { normalizeName: normalize } = require("./normalizeName.js");
console.log(normalize("Hello"));
```

Existe un shortcut para `module.exports` -> `exports`.

```js
module.exports = { myFunction };
exports = { myFunction };
```

- NO RECOMENDABLE
- Al hacer esto nos cargamos la referencia y no exportaremos nada

# require

Función para importar modulos, JSON o ficheros locales.

Según el origen de ños módules tendremos que hacerlo de la siguiente forma:

## Modulos locales

Para importar modulos o recursos locales, debemos indicar la ruta local del módulo en nuestro proyecto.

### Importar funcion de un módulo local

```js
const { myLocalModule } = require("./path/myLocalModule");
```

### Importar JSON.

Nos devolverá el JSON transformado a un objeto Javascript (array o objeto).

```js
const jsonData = require("./path/filename.json");
console.log(jsonData);
```

## Modulos Core Node.js

Para importar módulos del core, debemos pasarle una string con el nombre del módulo.

```js
const util = require("util");
```

Cuando al `require` no le pasamos una ruta, lo que primero intentará será buscar si existe en el core un módulo con este nombre y si no existe, intenrá buscar en los módulos de terceros.

Es posible, indicar una ruta interna del módulo para acceder a funcionalidades especificas. Pero siempre el inicio será el nombre del módulo sin ruta.

```js
const util = require("util/function");
```

Podemos usar el prefijo `"node:"`, para que omita el `require.cache`. Esta cache recuerda los módulos que hayamos importado, por lo que puede que se nos quede en cache un modulo de terceros con el mismo nombre de un modulo core.

```js
const util = require("node:util");
```

A partir de la version `v.18`, los nuevos módulos core de Node.js llevarán este prefijo, evitando así problemas de incompatibilidad entre modulos core y de terceros.

## Modulos de terceros

Para importar módulos de terceros, que previamente hayamos instalado en la carpeta `node_modules`, debemos pasarle el nombre del modulo.

El `require` primero buscará el módulo en el core de Node.js, y si no existe, buscará el modulo en `node_modules`.

```js
const crypto = require("crypto");
```

Es posible, indicar una ruta interna del módulo para acceder a funcionalidades especificas. Pero siempre el inicio será el nombre del módulo sin ruta.

```js
const crypto = require("crypto/function");
```
