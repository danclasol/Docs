# Import mapping

Al importar módulos, podemos crear alias de las rutas de las carpertas de nuestro proyecto para acortar la ruta de los imports.

Esto es util por:

- Transforma los imports largos en lines mas cortas y faciles de entender
- Si movemos una carpeta a otra localizacion, nos ahorramos tener que modificar todos los módulos.

## Crear alias

Estos alias se tienen que definir en el `package.json`, creando la propiedad 'imports'.

```json
{
  "imports": {}
}
```

Se recomienda que los alias que creemos empiecen por `'#'`, de modo que, no se cree ningun conflicto con alguna librería.

```json
"imports": {
    "#Lib/*": "./src/lib/*"
  }
```

## Importar usando alias

Podemos transformar el siguientes import:

```js
import { printHello } from ".src/hello.js";
```

En lo siguiente:

```js
import { printHello } from "#Lib/hello.js";
```

## Habilitar el autocompletado

Para que VSC nos detecte y autocomplete automáticamente los alias de las rutas, necesitamos crear el fichero `jsconfig.json`, en el que añadiremos estas rutas.

Las propiedades mínimas que necesitamos son las siguientes:

- _exclude_: solo debe afectar a nuestro codigo
- _compilerOptions_
  - _module_: indicar el sistema de módulos del proyecto
  - _baseUrl_: indicar la ruta base
  - _paths_: array donde añadiremos todos nuestros alias

```json
{
  "exclude": ["node_modules"],
  "compilerOptions": {
    "module": "es6",
    "baseUrl": "./",
    "paths": {
      "#Lib/*": ["./src/lib/*"]
    }
  }
}
```
