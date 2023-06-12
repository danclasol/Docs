# Readable Stream

Streams para operaciones de lectura de datos.

### Examples

- process.stdin
- filesystem
- HTTP request

## Reading modes

- `flowing mode`: los datos son leidos automaticamente mediante eventos (_data_)
- `paused mode`: es necesario llamar explicitamente al `stream.read()` para leer los chunks.

## Events

- `close`: cuando el stream ha sido cerrado.
- `data`: cuando se solicite acceso a un chunk
- `end`: cuando no hay más datos a consumir.
- `pause`: cuando el stream sea pausado.
- `resume`: cuando el stream se continue.
- `error`: cuando existe un error durante la transmisión del stream.
- `readable`: cuando hay datos disponibles para ser leídos por el stream.

## Methods

- `read()`: devuelve un chunk de datos. Si ya no hay mas datos devuelve null
- `pause()`: causa que se pare de emitir eventos `data`
- `resume()`: retoma la emision de eventos `data`
- `pipe()`: añade un stream Writable al stream Readable

# Implementing a Readable Stream

```js
import { Readable } from "stream";

class MyStreamReadable extends Readable {
  constructor() {
    super();
    this.max = 10;
    this.index = 1;
  }

  _read() {
    if (this.index > this.max) this.push(null);
    else this.push(Buffer.from(this.index.toString()));

    this.index++;
  }
}

const stream = new MyStreamReadable();

// Flowing Mode
stream.on("data", (chunk) => {
  console.log(chunk);

  if (Number(chunk) === 5) stream.pause();
});

// Non-flowing mode
console.log(stream.read());
console.log(stream.readableFlowing);
console.log(stream.read());
```
