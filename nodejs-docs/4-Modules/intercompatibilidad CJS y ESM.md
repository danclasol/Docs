# Intercompatiblidad CJS y ESM

Independientemente del sistema de módulos que tengamos configurado en el proyecto (`package.json` `type:commonjs/module`), podemos trabajar con ficheros que utilicen un sistema de módulos distinto.

Esto se puede conseguir nombrando al fichero con la extension del sistema de modulo correspondiente

- `.cjs` - CommonJS será el sistema para el fichero
- `.mjs` - ESModules será el sistema para el fichero

## Utilizando como sistema ESM operar con ficheros CommonJS

Podemos hacerlo de 2 formas:

### 1. Importar directamente el fichero CommonJS

- El Default Export es el tipo por compatibilidad que, por defecto, debe de funcionar, aunque no siempre.
- El export default importará todos las funciones del módulo.
- En algunos casos, tambien estará disponible el export nombrado.

```js
import operaciones, { suma, multiplicar } from "./operaciones.cjs";
operaciones.suma(1, 1);
operaciones.multiplicar(2, 1);
sumar(1, 1);
multiplicar(2, 1);
```

### 2. Crear funcion de `require` en ESM

- Al estar CommonJs en el core de Node.js, podemos crear la funcion `createRequire` del core `module`.
- A esta funcion hay que pasarla la ruta del modulo actual, que podemos obtner de la propiedad `import.meta.url`
- A diferencia la opcion anterior, este export siempre va a funcionar.

```js
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { sumar, restar, multiplicar } = require("./operaciones.cjs");
```

## Utilizando como sistema CommonJs operar con ficheros ESM

Hay que tener en cuenta que CommonJs funciona de forma sincrona, mientras que ESM lo hace asincrona.

Esto lo complica ya que tenemos que usar Promesas.

```js
import("./operaciones.mjs").then(({ suma }) => {
  suma(1, 2);
});
```

No es una cosa habitual que haya que hacer, ya que lo mas normal será que trabajemos con ESM como sistema de módulos.
