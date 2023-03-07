# Prettier

`Prettier` es un formateador de código que permite homogeneizar el código de nuetros proyectos obligandonos a utilizar el mismo formato en todo el proyecto o equipo.

Cuando se trabaja en un proyecto en equipo con mas personas, es importante que todos usen el mismo tipo de formateador, evitando asi herramientas de version de controles (como Github), detecten cambios de formato de código como cambios de codigo (cambios fantasma).

Soporta muchos lenguajes y IDEs distintos (entre ellos Visual Studio Code).

Las reglas de formateo se puede configurar para cada proyecto o equipo.

https://prettier.io/

## ESLint + Prettier

Aunque estemos utilizando un linter, que ya nos formatea el codigo, sigue siendo recomendable usar tambien prettier.

De forma que, el linter se encargue solo de revisar las buenas prácticas y el prettier del formato del código.

Por lo que cuando instalamos Prettier, desactivamos las reglas que afectan al formteo del código.

# Configuracion

## Instalar Prettier en el proyecto

Lo instalamos como dependencia de desarrollo, ya que solo lo necesitaremos en esta fase.

```
npm i -E -D prettier
```

## Configuracion de reglas

https://prettier.io/docs/en/configuration.html

Tenemos que crear un fichero JSON '.prettierrc', donde iremos incluyendo las reglas que queramos configurar.

Por defecto, las reglas tienen un valor inicial, que será el que se aplique si no lo modificamos.

Aqui podemos encontrar una lista con las reglas disponibles https://prettier.io/docs/en/options.html

Algunos ejemplos:

- useTabs: Usar tabs en ver de espacios
- semi: Añadir punto y coma al final de cada línea
- singleQuote: Usar '' en vez de ""
- arrowParens: Si una arrow function solo tiene un parametro, eliminar los parentesis
- bracketSameLine: El fin de etiqueta '>' siempre en la misma linea

```json
{
  "useTabs": true,
  "semi": true,
  "singleQuote": true,
  "arrowParens": "avoid",
  "bracketSameLine": true
}
```

## Añadir fichero de excepciones

Los ficheros incluidos en este fichero no se formatearan `.prettierignore`

Ejemplos:

```
dist
package-lock.json
(node_modules) \* Lo excluye por defecto, no es necesario incluirlo
```

## Ejecutar Prettier

Podemos ejecutar el formateador de prettier con el siguiente comando:

Por defecto, la salida sera por `stdout`.

```
npm prettier
npm prettier --check
```

## Script Prettier

Es bueno añadir una opcion extra para poder ejecutar Prettier desde la consola,
por si hay personas que no esten usando las mismas configuraciones o extensiones que nosotros

Tambien será util para automatizar las subidas a algun control de versiones.

Para ello tenemos que crear el script en el `package.json`. Este comando estará compuesto de:

- _prettier_: comando a ejecutar
- _--write_: corrige nuestro código. Si no incluimos, solo mostrara el codigo a cambiar
- _._: con esto afectará al proyecto entero, evitando los directorios indicados en el fichero de exclusion

```json
"scripts": {
 "format": "prettier --write ."
}
```

Ahora, podemos ejectar el script por una terminal de la siguiente manera:

```
npm run format
```

## Resolver conflictos ESLint + Prettier

Al usar ambos a la vez, hay que indicar a ESLint que para el formateo del código sigua las reglas de prettier. Si no cada uno prodria mostrar errores distintos.

Para ello tenemos que instalar la dependencia de desarrollo:

```
npm i -D -E eslint-config-prettier
```

Una vez instalada, en el fichero de configurar de ESLint `.eslintrc.cjs` en la propiedad `extends` tenemos que añadir `prettier` a la lista. Es importante ponerlo en ultima posicion.

```
extends: ['standard', 'prettier']
```

## Prettier con otros formatos

En Visual Studio Code, podemos configurar por cada fichero que formateador queremos que se aplique.

Abrimos el `settings.json` y añadimos los formatos que queramos configurar

```json
 "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```

## Organizar imports automaticamente

Visual Studio Code tambien nos da la posilibidad de automáticamente ordenar los imports, y de eliminar import no usados.

Para ello abrimos el `settings.json` y añadimos para cada formato que queramos configurar

```json
 "[javascript]": {
    ...
    "editor.codeActionsOnSave": {
      "source.organizeImports": true
    }
    ...
  },
  "[javascriptreact]": {
    ...
    "editor.codeActionsOnSave": {
      "source.organizeImports": true
    }
    ...
  },
```

# Extensiones utiles para Visual Studio Code

## Eslint (Verificada por Microsoft)

Con esta extension Visual Studio Code detectará todos los errores de las reglas ESLint

## Establecer Prettier como formateador predeterminado

1. File > Preferences > Settings
2. Buscar por: "formatter"
3. Editor: Default Formater -> Seleccionar Prettier

Solo nos saldrá como opcion Prettier, si lo tenemos instalado.

## Habilitar que se formate cada vez que guardemos cambios

1. File > Preferences > Settings
2. Buscar por: "formatter"
3. Editor: Formater On Save -> Habilitar "Format a file on save"

Settings > Text Editor > Formatting > Format On Save: Habilitar
