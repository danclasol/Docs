# Transform

Son Duplex Streams que pueden modificar o transformar los datos a medida que se escriben o leen.

Al igual que el Duplex, implementan las interfaces Readable y Writable.

### Ejemplos

- Compression de ficheros (comprimir en escritura y descomprimir en lectura)

- Encriptado de ficheros (encriptar en escritura y desencriptar en lectura)

# Implementing a Transform Stream

```js
import { Duplex, Transform } from "stream";

class StreamUpperCase extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
}

class StreamDuplex extends Duplex {
  constructor(input, opts) {
    super(opts);

    this.index = 0;
    this.input = input.split("");
    this.data = "";
  }

  _read() {
    if (this.index > this.input.length - 1) this.push(null);
    else this.push(this.input[this.index]);

    this.index++;
  }

  _write(chunk, encoding, callback) {
    this.data += chunk;
    callback();
  }
}

const streamDuplex = new StreamDuplex("Hola que tal", { objectMode: true });
const streamUpperCase = new StreamUpperCase({ objectMode: true });

streamDuplex.on("data", (chunk) => {
  streamUpperCase.write(chunk);
});

streamUpperCase.on("data", (chunkTransformed) => {
  streamDuplex.write(chunkTransformed);
});

streamDuplex.on("end", () => console.log(streamDuplex.data));
```
