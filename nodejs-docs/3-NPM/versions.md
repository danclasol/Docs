# Versionado semántico

La forma más habitual de versionar nuestros paquetes es usando versionado semántico, muy frecuentemente abreviado como semver.

La mayoría de librerías siguen este versionado, aunque es posible que alguno tenga su propio sistema.

## Tipos de versiones

Dado un número de versión de un proyecto, este número está formado por 3 partes, por ejemplo:

```js
express: 4.0.0
```

### major version

- implica cambios importantes en la API
- posibilidad de incompatibilidad con nuestro proyecto (breaking changes)
- es recomendable revisar la documentacion de la librería para ver si nos afectan estos cambios y como adaptarlos a nuestro codigo.
  - CHANGELOG.md - documentacion de cambios entre versiones
  - releases - podemos consultar las releases que van saliendo y sus cambios
  - guia de migracion - Menos comun

### minor version

- nuevas funcionalidades
- compatible con anteriores

### patch

- bug fixes

### fases desarrollo

Tambien nos podemos indicar las fases que todavía no estan en producción:

```js
express: 4.0.0-alpha.3
```

- prelanzamiento: alpha, beta, etc
- nº de compilacion

# Politica de actualizaciones

Por defecto, junto con la version de la dependencia, podemos incluir una de las siguientes politicas para indicar como queremos que se busque por nuevas versiones al instalar las dependencias de un proyecto.

Estas politicas quedarán fijadas en el `package.json`, pero la versión mas reciente siguiendo la politica, la encontraremos en el `package-lock.json`.

- `1.2.4` - No indicar nada.

  - No se actualizará a ninguna otra version.
  - Instalará siempre la versión indicada (1.2.4)

- `^1.2.4` - Buscar versión minor y patch más reciente

  - Es la opción por defecto.
  - Aunque en el `package.json` tengamos una version con el `^`, será en el `package-lock.json` donde tendremos indicado la version realmente instalada en nuestro proyecto. Por ejemplo:
    - `package.json` -> `express ^4.0.0`
    - `package-lock.json` -> `express 4.3.1`
  - Nunca instalaría una major versión superiores. (2.0.0)
  - Podría instalar las versiones (1.3.6, 1.2.7)

- `~1.2.4` - Buscar version patch mas reciente

  - Nunca instalaría una major o pacth version. (2.0.0, 1.3.6)
  - Por ejemplo, podría instalar la version (1.2.7)

- `>, <, >=, =`:

  ```js
  express: ^4.0.0
  express: ~4.0.0
  ```
