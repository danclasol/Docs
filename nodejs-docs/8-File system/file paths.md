# File Paths

## CommonJS

En CommonJs existen 2 propiedades para obtener las rutas absolutas de los módulos.

### \_\_dirname

Obtiene la ruta absoluta del directorio del módulo

```js
console.log(__dirname); // C:\Users\MyUser\vs-workspace\curso-node
```

### \_\_filename

Obtiene la ruta absoluta del módulo

```js
console.log(__filename); // C:\Users\PC-Dani\vs-workspace\curso-node\index.js
```

## ECMAScript

En ESM no existen las variables globales `__dirname` y `__filename`.

Tenemos que usar `import.meta.url` para conseguir el nombre del fichero y la ruta.

```js
console.log(import.meta.url);
// file:///C:/Users/MyUser/vs-workspace/curso-node/index.js
```

A diferencia de _\_\_dirname_, que devuelve un _path_, el `import.meta.url` devuelve una _url_.

Podríamos transformalo en un `path` de la siguiente manera:

```js
import { dirname } from "path";
import { fileURLToPath } from "url";

const direnameECMAS = dirname(fileULRToPath(import.meta.url));
// C:\Users\MyUser\vs-workspace\curso-node
```

# Path

Node proporciona el modulo `path` con funcionalidades para trabajar con ficheros y directorios.

## Methods

### `path.join()`

Método que une los segmentos que le pasemos por parametros, usando como separador el apropiado para la plataforma.

Podemos acceder a rutas relativas mediante `'..'`.

```js
path.join("/foo", "bar", "baz/asdf", "quux", "..");
// Returns: '/foo/bar/baz/asdf'

path.join("foo", {}, "bar");
// Throws 'TypeError: Path must be a string. Received {}
```

### `path.resolve()`

Método que construye una ruta absoluta a partir de la rutas relativas.

Primero detecta la ruta absoluta, y va ordenando las rutas relativas.

Si no encuentra ruta absoluta, usa el directorio de trabajo actual (`process.cwd()`).

```js
path.resolve("/foo/bar", "./baz");
// Returns: '/foo/bar/baz'

path.resolve("wwwroot", "static_files/png/", "../gif/image.gif");
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
```

### `path.dirname`

Devuelve el nombre del directorio de un _path_.

```js
path.dirname("/foo/bar/baz/asdf/quux");
// Returns: '/foo/bar/baz/asdf'
```

### `path.extname`

Devuelve la extensión del _path_.

```js
path.extname("index.html"); // Returns: '.html'
path.extname("index"); // Returns: ''
path.extname(".index"); // Returns: ''
path.extname(".index.md"); // Returns: '.m
```

# URL

Node dispone de un modulo para utilidades resolver y parsear URL.

## Methods

### `url.fileURLToPath(url)`

Transforma una _url_ a formato _path_, asegurando que el formato sea correcto para la plataforma en la que estemos.

Podemos usarlo para transformar el `import.meta.url` de ECMAScript para trabajar con _path_.

```js
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);

new URL("file:///C:/path/").pathname; // Incorrect: /C:/path/
fileURLToPath("file:///C:/path/"); // Correct:   C:\path\ (Windows)
```

### `url.pathToFileURL(path)`

Transforma una _path_ a formato _utl_, asegurando que el formato sea correcto.

```js
import { pathToFileURL } from "node:url";

new URL("/foo#1", "file:"); // Incorrect: file:///foo#1
pathToFileURL("/foo#1"); // Correct:   file:///foo%231 (POSIX)
```
