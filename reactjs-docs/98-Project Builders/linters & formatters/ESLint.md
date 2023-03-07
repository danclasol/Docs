# ESLint

Un `linter` es una herramienta de análisis de código estático en el código JavaScript, que utilizando un sistema de reglas permiten definir que es y que no es posible dentro del código.

- Garantiza que sigamos unas reglas en todo el código del proyecto.
- Mantener una misma estructura en todo el proyecto.

Estas reglas son configurables, por lo que lo podremos adecuar a nuestro proyecto o a nuestro equipo.

Existen mas linters pero el más usado en Javascript es `ESLint`, además existe amplia documentación sobre él. Escrito en `Node.js` y es posible instalarlo desde `npm`.

https://eslint.org/

## Rules

En ESLint cuenta con una serie de reglas que podemos configurar.

- Lista de todas las reglas existentes: https://eslint.org/docs/latest/rules/

Podemos distinguir 2 grupos de reglas:

- Reglas de formato
  - `"` o `'`
  - Usar `;` o no
  - Etc
- Reglas de buenas practicas
  - No usar `var`
  - Variables no usadas
  - Usar `===` y no `==`
  - Etc

Sin embargo, es más cómodo usar un conjunto de reglas predefinidas, lo que nos ahorrará tener que ir regla a regla estableciendo el valor.

## JavaScript Standard Style

_JavaScript Standard Style (standardjs)_ nos ofrece un conjunto de reglas predefinidas para usar con ESLint.

- Aqui podemos encontrar la lista de reglas predefinidas: https://standardjs.com/rules.html

Sin embargo, podemos cambiar alguna regla especifica según necesitemos.

# Configuracion

## Instalar ESLint

Lo instalamos como dependencia de desarrollo, ya que solo lo necesitaremos en esta fase.

```
npm i -D -E eslint
```

## Inicializar ESLINT

Existe el siguiente comando para realizar la inicialización que creará el fichero de configuración. Aunque tambien es posible crear este fichero manualmente.

```
npm eslint --init
```

A continuación, el asistente nos preguntará una seria de preguntas, que tendremos que contestar con las siguientes opciones:

1. _How would you like to use ESLint?_
   - To check sintax, find problems, and enforce code style
2. _What type of modules does your proyect use?_
   - JavaScript modules (import/export) esm
3. _Which framework does your project use?_ None
4. _Does your project use TypeScript?_ No
5. _Where does your code run?_ -> Node
6. _How would you like to define a style for your project?_
   - Use a popular style guide.
7. _Which style guide do you want to follow?_
   - Standard (Javascript Standar Style)
8. _What format do you want your config file to be in?_
   - JavaScript or JSON

Es posible que tengamos instalar alguna dependencia adicional necesaria para ejecutar la libreria.

## Fichero configuracion `.eslintrc.cjs`

Tras haber realizado la inicializacion, se deberá haber creado automáticamente el fichero de configuración `.eslintrc.cjs`.

Este fichero tiene sistema de módulos _CommonJS_, por lo que cuenta con un `module.export` que exporta el siguiente objeto:

- _env_: datos entorno (sistma de modulos, lenguaje, etc)
- _extends_: si establacemos una conjunto de reglas (standard,etc)
- _parserOptions_: propiedad interna de ESLint:
  - _ecmaVersion_: para indicar que version de ECMA estamos usando
  - _sourceType_: sistema de modulos usado
- _rules_: permite modificar, añadir o eliminar alguna regla

### Añadir reglas

Para configurar reglas independientemente, en el fichero de configuracion `.eslintrc.cjs`, tenemos que usar la propiedad `rules` para indicar por cada regla lo siguiente:

- Nivel de error

  - `0` = _off_ (desactivar regla)
  - `1` = _warn_
  - `2` = _error_

- Opcion: algunas reglas pueden tener alguna opcion para modificar

Por ejemplo, la regla `quotes`, para establecer si usamos `"` o `'`

- Establecemos nivel _error_, para que nos lo identifique como error.
- Como opcion, indicamos que queremos dobles comillas (_double_)

```json
"rules" {
    "quotes": ["error", "double"]
}
```

Aqui podemos encontrar la lista de todas las reglas que podemos modificar https://eslint.org/docs/latest/rules/

### Añadir Plugins

Existen plugin que incluyen las reglas mas comunes, que nos ahorran tener que estar todas las reglas.

- `'plugin: react/recommended'`: reglas recomendadas para react
- `'plugin: react/jsx-runtime'`: elimina el falso error por no importar React en JSX (este import ya no es necesario)
- `'standard'`: aplicar las reglas de JavaScript Standard Style
- `'eslint-config-prettier'`: corrige conflicto entre eslint y prettier, estableciendo a prettier como unico formateador

```js
extends: [
   'plugin: react/recommended',
   'plugin: react/jsx-runtime',
   'standard',
   'eslint-config-prettier'
]
```

## Añadir fichero de excepciones

Los ficheros incluidos en este fichero no se formatearan `.eslintignore`

Ejemplos:

```
dist
package-lock.json
```

## Ejecutar ESlint

Podemos ejecutar el ESLinter con el siguiente comando:

```
npx eslint src/**/*.js
```

## Script ESlint

Es recomendable crear un _script_ para lintear el proyecto, de modo, que si hay personas que no usen las mismas configuraciones o extensiones que nosotros, con esto conseguimos unificar el código.

Tambien será util para automatizar las subidas a algun control de versiones.

Para ello tenemos que crear el script en el `package.json`. Este comando estará compuesto de:

- _eslint_: comando a ejecutar
- _--fix_: corrige nuestro codigo. Solo cambiará errores de formato.
- _src/\*\*/_.js\*: directorio donde se va a aplicar las reglas del linter

```json
"script": {
    "lint": "eslint --fix src/**/*.js"
}
```

Ahora, podemos ejectar el script por una terminal de la siguiente manera:

```
npm run lint
```

# Extensiones utiles para Visual Studio Code

Existen 2 plugin utiles para usar junto con ESLint

## ESLint (Verificada por Microsoft)

Con esta extension Visual Studio Code detectará todos los errores de las reglas ESLint, sin necesidad de ejecutar el comando `eslint`.

## Error Lens

Mejora los errores y warnings, de modo que los errores salen directemente en nuestro código.
