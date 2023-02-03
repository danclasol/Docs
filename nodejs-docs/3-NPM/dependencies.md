# Dependencies

En el fichero `package.json` podemos tener 2 tipos de dependencias:

- _dependencies_: esenciales para el funcionamiento del proyecto
- _devDependencies_: solo necesarias en la fase de desarrollo

# Instalar dependencias

Ejecutar en la terminal del proyecto el siguiente comando.

```
npm install [nombre_libreria]
npm i [nombre_libreria]
```

La librería se añadira en el `package.json`, con la version que hayamos indicado.

```json
"dependencies": {
    "jsonwebtoken": "^8.5.1"
}
```

Por defecto, se instala la ultima version, pero podemos instalar una version distinta o podemos cambiar la version manualmente en el fichero `package.json`

```js
npm i [nombre_libreria]@[version_number]
npm i jsonwebtoken@7.0.0
```

# Instalar dependencias de desarrollo

```
npm i -D [nombre_libreria]
npm i -D nodemon
```

La librería se añadira en el `package.json`, pero en la propiedad de dependencias de desarrollo

```json
"devDependencies": {
    "jsonwebtoken": "^8.5.1"
}
```

# Descargar dependencias del proyecto

Cuando descargamos un proyecto, las dependencias no estan instaladas si no que debemos descargalas e instalarlos.

Para ello podemos usar el siguiente comando, que instalará todas las dependencias indicadas en el `package.json`.

```
npm i
```

# Instalar dependencias de manera global

En vez de instalar las dependencias en la carpeta `node_modules`, podemos instalar la librería directamente en nuestro ordenador.

De este modo tendremos acceso a la librería desde cualquier proyecto, no será necesario instalar esa dependencia en cada proyecto.

```js
npm i -g localtunnel
```

# Eliminar dependencias

Al eliminar dependencias borrarmos tanto del `package.json`, como su contenido en el arbol `node_modules`

```
npm rm [nombre_libreria]
npm rm nodemon
```

Eliminar dependencias instaladas de forma global

```
npm rm [nombre_libreria]
npm rm -g localtunnel
```

# Buscar librerías

Podemos buscar las librerías:

- En su pagina web: https://www.npmjs.com/
- https://openbase.com/
- https://bestofjs.org/
