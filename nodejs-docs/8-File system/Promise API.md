# Promise API

El módulo `fs/promises` proporciona funcionalidades para la gestion de ficheros de forma asincrona.

# FileHandle

El `FileHandle` es un objeto que representa un archivo.

Las instancias de un `FileHandle` se crean mediante el metodo `fsPromises.open()`

```js
const fileHandle = await open(path);
```

## Methods

Proporciona métodos para realizar operaciones de lectura y escritura en el archivo abierto:

### `readFile()`

Metodo para leer el contenido de un fichero de forma asincrona.

Similar al método `fsPromise.readFile()`.

#### Parameters

- `options`
  - `encoding`: tipo de codificacion
  - `signal`: permite abortar la operacion

```js
fileHandle.readFile();
```

### `read()`

Metodo que lee el contenido de un fichero y lo almacena en un _buffer_.

#### Parameters

- `options`
  - `buffer`: _buffer_ donde se almacenará la informacion leida.
  - `offset`: posicion del buffer por la que empezar a rellenar.
  - `length`: numero de bytes a leer.
  - `position`: posicion por la que empezar a leer.

```js
const readBuffer = await fileHandle.read();
console.log(fileReadBuffer.buffer.toString());
```

### `readv()`

Método que lee el contenido de un fichero y lo almacena en un array de _buffers_.

#### Parameters

- `options`
  - `buffers`: array de*buffers* donde se almacenará la informacion leida.
  - `position`: posicion por la que empezar a leer

```js
const buffer1 = Buffer.alloc(10);
const buffer2 = Buffer.alloc(10);
const readVResult = await fileHandle.readv([buffer1, buffer2]);

console.log(readVResult.buffers[0].toString(), buffer1.toString());
console.log(readVResult.buffers[1].toString(), buffer2.toString());
```

### `createReadStream()`

Método que crea un stream de lectura.

Similar al `fs.createReadStream()` de Callback API.

#### Parameters

- `options`
  - `encoding`: tipo de codificación
  - `autoClose`: set to _true_ to avoid autoclose
  - `emitClose`: set to _true_ to avoid emitting the 'close' event
  - `start`: posicion por donde empezar a leer
  - `end`: hasta que posicion leer
  - `highWaterMark`: Default: 64kb

```js
const fileReadStream = await fileHandle.createReadStream();

fileReadStream.on("readable", () =>
  console.log(fileReadStream.read()?.toString())
);
```

### `write(string[, position[, encoding]])`

Método que escribe en un fichero.

Similar al `fs.write()` de Callback API.

#### Parameters

- `string`: informacion a escribir
- `position`: posicion en la que empezar a escribir
- `options`
  - `encoding`: tipo de codificación

```js
fileHandle.write("Test");
```

### `createWriteStream()`

Método que crea un stream de escritura.

Similar al `fs.createReadStream()` de Callback API.

#### Parameters

- `options`
  - `encoding`: tipo de codificación
  - `autoClose`: set to _true_ to avoid autoclose
  - `emitClose`: set to _true_ to avoid emitting the 'close' event
  - `start`: posicion por donde empezar a leer

```js
const fileWriteStream = await fileHandle.createWriteStream();

fileWriteStream.write("Test");
```

# Methods

## fsPromises.access()

Comprueba si un usuario tiene permiso para acceder a un fichero o directorio.

### Parameters

- `path`: path a testear
- `mode` (optional): tipo de acceso a comprobar
  - Por defecto: _fs.constants.F_OK_
  - Consultar constantes: https://nodejs.org/docs/latest-v16.x/api/fs.html#fspromisesconstants

```js
import { access } from "fs/promises";

try {
  await access(path, constants.F_OK);
  console.log("Permission OK");
} catch (err) {
  console.log("Do not have permission.");
}
```

## fsPromises.open()

Metodo que abre un fichero o directorio.

Devuelve un `FileHandle`.

### Parameters

- `path`: path del fichero a abrir
- `flag` (optional): tipo de operacion a realizar sobre el fichero.
  - Por defecto: 'r' lectura
  - Consultar listado de flags: https://nodejs.org/docs/latest-v16.x/api/fs.html#file-system-flags
- `mode` (optional): tipo de acceso
  - Por defecto: '0o666' (lectura y escritura)

```js
import { open } from "fs/promises";

try {
  const fileHandle = await open(path, "r");
} catch (err) {
  console.log(err);
}
```

## fsPromises.stat()

Devuelve un objeto `fs.stats` con la información del fichero.

### Parameters

- `path`: path del fichero a abrir
- `options` (optional)
  - `bigInt` (_boolean_): indica si devolver numero en _bigInt_
    - Por defecto: false

```js
import { stat } from "fs/promises";

try {
  const fileHandle = await stat(path);
} catch (err) {
  console.log(err);
}
```

## fsPromises.chmod()

Cambia los permisos de un fichero.

### Parameters

- `path`: path del fichero a cambiar
- `mode`: permiso a modificar
  - Dependerá del sistema operativa usado.

```js
import { chmod } from "fs/promises";

try {
  await chmod(path, 0o744);
} catch (err) {
  console.log(err);
}
```

## fsPromises.readFile()

Metodo para leer el contenido de un fichero de forma asincrona.

### Parameters

- `path`: path del fichero a cambiar
- `options`
  - `encoding`: tipo de codificacion
    - Si no indicamos nada, la informacion vendra en un _Buffer_
  - `flag`: tipo de operacion a realizar sobre el fichero.
    - Por defecto: 'r' lectura
    - Consultar listado de flags: https://nodejs.org/docs/latest-v16.x/api/fs.
  - `signal`: permite abortar la operacion

```js
import { readFile } from "fs/promises";

try {
  const contentFile = await readFile(path);
} catch (err) {
  console.log(err);
}
```

## fsPromises.writeFile()

Metodo para escribir un fichero de forma asincrona.

- Si no existe el fichero, lo crea.
- Si ya existe el fichero, se reemplazará por completo.

### Parameters

- `data`: contenido a escribir
- `options`
  - `encoding`: tipo de codificacion

```js
import { writeFile } from "fs/promises";

try {
  await writeFile(path, "Test");
} catch (err) {
  console.log(err);
}
```

## fsPromises.appendFile()

Metodo para escribir escribir en un fichero de forma asincrona.

- Si no existe el fichero, lo crea.
- Si ya existe, no sobreescribe, solo añade al final.

### Parameters

- `path`: contenido a escribir
- `data`: path del fichero a cambiar
- `options`
  - `encoding`: tipo de codificacion
  - `mode` (optional): tipo de acceso
    - Por defecto: '0o666' (lectura y escritura)
  - `flag`: tipo de operacion a realizar sobre el fichero.
    - Por defecto: 'r' lectura
    - Consultar listado de flags: https://nodejs.org/docs/latest-v16.x/api/fs.

```js
import { appendFile } from "fs/promises";

try {
  await appendFile(path, "Test");
} catch (err) {
  console.log(err);
}
```

## fsPromises.readdir()

Metodo para leer el contenido de un directorio de forma asincrona.

### Parameters

- `path`: path del directorio a leer
- `options`
  - `encoding`: tipo de codificacion
    - Si no indicamos nada, la informacion vendra en un _Buffer_
  - `withFileTypes`: set to _true_ to show file types
  - `recursive`

```js
import { readdir } from "fs/promises";

try {
  const contentDir = await readdir(path);
} catch (err) {
  console.log(err);
}
```

## fsPromises.opendir()

Metodo para abrir un directorio de forma asincrona.

Crea un objeto `fs.Dir`, que contiene las funciones de lectura del directorio.

### Parameters

- `path`: path del directorio a leer
- `options`
  - `encoding`: tipo de codificacion
    - Si no indicamos nada, la informacion vendra en un _Buffer_
  - `bufferSize`: numero de directorios colocados en buffer
  - `recursive`
- `callback`: funcion de callback

```js
import { opendir } from "fs/promises";

try {
  const dirObject = await opendir(path);
} catch (err) {
  console.log(err);
}
```

## fsPromises.mkdir()

Metodo para crear un directorio de forma asincrona.

### Parameters

- `path`: path donde crear el directorio
- `options`
  - `recursive`: indicar si queremos crear los subdirectorios
  - `mode` (optional): tipo de acceso
    - Por defecto: '0o666' (lectura y escritura)

```js
import { mkdir } from "fs/promises";

try {
  const createDir = await mkdir(path, { recursive: true });

  console.log(`created ${createDir}`);
} catch (err) {
  console.error(err.message);
}
```

## fsPromises.unlink()

Metodo para elimiar un fichero de forma asincrona.

### Parameters

- `path`: path del fichero a eliminar

```js
import { unlink } from "fs/promises";

try {
  await unlink(path);
} catch (err) {
  console.error(err.message);
}
```

## fsPromises.rmdir()

Metodo para elimiar un directorio de forma asincrona.

Solo se elimina el directorio si no tiene ningun fichero.

### Parameters

- `path`: path del fichero a eliminar
- `options`:
  - `maxRetries`: numero de reintentos
  - `recursive`: eliminar subdirectorios
  - `retryDelay`:

```js
import { rmdir } from "fs/promises";

try {
  await rmdir(path);
} catch (err) {
  console.error(err.message);
}
```

## fsPromises.rm()

Metodo para elimiar un directorio y los ficheros que contenga el directorio de forma asincrona.

### Parameters

- `path`: path del fichero a eliminar
- `options`:
  - `force`: ignorar excepciones.
  - `maxRetries`: numero de reintentos
  - `recursive`: eliminar subdirectorios
  - `retryDelay`:

```js
import { rmdir } from "fs/promises";

try {
  await rmdir(path);
} catch (err) {
  console.error(err.message);
}
```

## fsPromises.copyFile()

Metodo para copiar un fichero de forma asincrona.

### Parameters

- `src`: path del fichero a copiar
- `dest`: destino
- `mode` (optional): permite controlar que fichero se puede copiar

```js
import { copyFile } from "fs/promises";

try {
  await copyFile(src, dest);
} catch (err) {
  console.error(err.message);
}
```

## fsPromises.rename()

Metodo para renombrar un fichero de forma asincrona.

- Se puede renombrar el nombre del fichero
- Se puede renombrar el path, que sería lo mismo que mover el fichero.

### Parameters

- `src`: path del fichero a copiar
- `dest`: destino
- `mode` (optional): permite controlar que fichero se puede copiar

```js
import { rename } from "fs/promises";

try {
  await rename(src, dest);
} catch (err) {
  console.error(err.message);
}
```

## fsPromises.wath()

Metodo para observar cambios producidos un fichero de forma asincrona.

Devuelve un objeto `AsyncIterator` que tiene 2 propiedades:

- `eventType`: tipo de cambio
- `filename`: nombre del fichero cambiado

Similar a `fs.watch`

### Parameters

- `filename`: fichero que queremos observar
- `options`
  - `persistent`: indica si continuar el proceso durante la escucha
  - `recursive`: indica si escuchar tambien subdirectorios
  - `encoding`: frecuencia en al que se revisara si hay cambios
  - `signal`: permite abortar la escucha
- `listener`: function

```js
import { watch } from "fs/promises";

(async () => {
  try {
    const watcher = watch(__filename, { signal });

    for await (const event of watcher) {
      console.log(event);
    }
  } catch (err) {
    if (err.name === "AbortError") return;
    throw err;
  }
})();
```
