# ECMAScript Modules (ESM)

Sistema oficial estandar para gestion de modulos en Javascript.

Propuesto con la especificacion ECMAScript 2015.

Este sistema de módulos nativo por fin nos permite cargar módulos externos con una sintaxis simple y de forma síncrona y asíncrona.

```js
// module.js
export const data = 42;
export const method = () => console.log("Hello");

// index.js
import { data, method } from "./module.js";
```

## Rutas absolutas al módulo

En ESM no existen las variables globales `__dirname` y `__filename`.

Tenemos que usar `import.meta.url` para conseguir el nombre del fichero y la ruta

```js
console.log(import.meta.url);
// file:///C:/Users/MyUser/vs-workspace/curso-node/index.js
```

# export

Existen 2 formas de exportar módulos

## Named Exports

- Cada funcion tiene su propio export.
- Permite la desestructuracion al importar, permitiendo importar solo las funciones que necesitemos. Esto mejora la optmización.
- Permite poner un alias a la funcion importada.

```js
export const sumar = () => {};
export const restar = () => {};
export const multiplicar = () => {};
```

Se puede escribir tambien así, ambas formas son equivalentes

```js
const sumar = () => {};
const restar = () => {};
const multiplicar = () => {};

export { sumar, restar, multiplicar };
```

Para importar los módulos lo haremos así:

```js
import { sumar, multiplicar as mult } from "./operaciones"; // no importamos restar

console.log(sumar(2, 2));
console.log(multiplicar(2, 2));
```

En el caso de que queramos importar todas la funciones de un fichero:

```js
import * as funciones from "./operaciones";
```

## Default Export

- No permite la destructuración al importar
- Permite establecer cualquier nombre de la funcion importada.
- Uso mas comun cuando el fichero solo exporta una funcion.

```js
const sumar = () => {};
const restar = () => {};
const multiplicar = () => {};

export default sumar;
```

Para importar los módulos lo haremos así:

```js
import sumar from "./operaciones"; //Importar la funcion por defecto 'sumar'
import pepito from "./operaciones"; //Importar la funcion por defecto 'sumar'
```

## Combinar Named and Default Exports

Podemos tener un mismo fichero exportaciones nombradas y a su vez un export default.

```js
export const sumar = () => {};
export const restar = () => {};
export const multiplicar = () => {};

export default sumar;
```

Podremos importar ambos tipos a la vez, sin problemas:

```js
import sumar, { sumar, restar, multiplicar } from "./operaciones";
```

# Import JSON

En ESM no podemos hacer import directo de JSON, como se podia en CommonJS.

## 1. Import assertions (experimental)

Esta todavía en fase experimental.

```js
// An import assertion in a static import
import info from `./package.json` assert { type: `json` };

// An import assertion in a dynamic import
const { default: info } = await import("./package.json", {
    assert: {
        type: "json",
  },
});
```

## 2. Crear funcion de `require` en ESM

La unica forma actual es accediendo al `require` de CommonJs disponible en el core de Node.js

Y una vez creada, podemos hacer uso del import de JSON de CommonJS

```js
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const jsonData = require("./data.json");
```
