# Writable Stream

Stream para operaciones de escritura de datos.

### Examples

- process.stdout
- filesystem

# Events

- `close`: cuando el stream ha sido cerrado.
- `error`: cuando existe un error durante la escritura del stream
- `drain`: cuando sea posible seguir con la escritura de datos.
- `finish`: cuando se llame al método `stream.end()`
- `pipe`: cuando se llame al `stream.pipe()`
- `unpipe`: cuando se llame al `stream.unpipe()`

# Methods

- `write()`: escribe datos en el stream y ejecutura el callback una vez realizado la escritura.
- `end()`: indica que se realiza mas escrituras.
- `cork()`: provoca que las escrituras no sean directas si no que se almacen en memoria, para posteriormente confirmar guardas en conjunto.
- `uncork()`: desactiva almacenamiento en memoria realizado con _cork()_

# Implementing a Writeable Stream

```js
import { Writable } from "stream";

class StreamConcat extends Writable {
  constructor(opts) {
    super(opts);

    this.data = "";
  }

  _write(chunk, encoding, callback) {
    console.log("_WRITE", chunk, encoding, callback);

    this.data += chunk.toString();

    callback();
  }

  _writev(chunkList, callback) {
    const result = chunkList.map((chunkData) => chunkData.chunk).join("");

    this.data += result;

    callback();
  }
}

const streamConcat = new StreamConcat();
// streamConcat.cork();
// streamConcat.cork();

streamConcat.write("A");
streamConcat.write("B");
streamConcat.write("C");

// streamConcat.uncork();
// streamConcat.uncork();
streamConcat.end();

console.log("END", streamConcat.data);
```
