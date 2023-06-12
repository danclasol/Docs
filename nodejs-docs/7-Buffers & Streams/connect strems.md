# Connect streams

Los métodos `pipe()` y `pipeline()` ofrecen una forma eficiente de conectar y redigir _streams_ de datos. Permiten transferir datos de manera eficiente de un stream a otro sin tener que gestionar manualmente la lectura y escritura de datos.

## Ventajas

- Falicidad de uso
- Control del backpressure, se encarga automaticamente de pausar o reanudar

# with pipe

El método `pipe()` se utiliza para redirigir la salida de un Readable Stream a un Writable. Permite transferir datos de manera eficiente de un stream a otro sin tener que gestionar manualmente la lectura y escritura de datos.

```js
readableStream.pipe(writableStream);
```

## Example

```js
import { Readable, Writable, Transform } from "stream";

class StreamConcatWritable extends Writable {
  constructor(opts) {
    super(opts);
    this.data = "";
  }

  _write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log("CALLBACK _WRITE", chunk.toString());

      this.data += chunk.toString();
      callback();
    }, 200);
  }
}

class StreamTextReadable extends Readable {
  constructor(input, opts) {
    super(opts);

    this.index = 0;
    this.input = input.split("");
  }

  _read() {
    setTimeout(() => {
      console.log("CALLBACK _READ", this.input[this.index]);
      if (this.index > this.input.length - 1) this.push(null);
      else this.push(this.input[this.index]);

      this.index++;
    }, 100);
  }
}

class StreamUpperCase extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
}

const streamUpperCase = new StreamUpperCase({
  objectMode: true,
});

const streamConcatWritable = new StreamConcatWritable({
  objectMode: true,
  highWaterMark: 2,
});

const streamConcatReadable = new StreamTextReadable("Bienvenidos a todos", {
  objectMode: true,
  highWaterMark: 1,
});

streamConcatReadable.pipe(streamUpperCase).pipe(streamConcatWritable);
streamConcatWritable.on("close", () => console.log(streamConcatWritable.data));
```

# with pipeline

Version más avanzada de `pipe()`, que permite redirigir multiples streams en secuencia, lo que facilita la creación de streams mas complejas.

Tambien se maneja automáticamente la limpieza y cierre adecuado de los streams.

```js
pipeline(readableStream1, readableStream2, ..., writableStream, callback);
```

## Example

```js
import { Readable, Writable, Transform, pipeline } from "stream";

class StreamConcatWritable extends Writable {
  constructor(opts) {
    super(opts);
    this.data = "";
  }

  _write(chunk, encoding, callback) {
    setTimeout(() => {
      console.log("CALLBACK _WRITE", chunk.toString());

      this.data += chunk.toString();
      callback();
    }, 200);
  }
}

class StreamTextReadable extends Readable {
  constructor(input, opts) {
    super(opts);

    this.index = 0;
    this.input = input.split("");
  }

  _read() {
    setTimeout(() => {
      console.log("CALLBACK _READ", this.input[this.index]);
      if (this.index > this.input.length - 1) this.push(null);
      else this.push(this.input[this.index]);

      this.index++;
    }, 100);
  }
}

class StreamUpperCase extends Transform {
  _transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
}

const streamUpperCase = new StreamUpperCase({
  objectMode: true,
});

const streamConcatWritable = new StreamConcatWritable({
  objectMode: true,
  highWaterMark: 2,
});

const streamConcatReadable = new StreamTextReadable("Bienvenidos a todos", {
  objectMode: true,
  highWaterMark: 1,
});

pipeline(
  [streamConcatReadable, streamUpperCase, streamConcatWritable],
  (err) => {
    if (err) console.error("Pipeline fallido", err);
    else console.log(streamConcatWritable.data);
  }
);
```
