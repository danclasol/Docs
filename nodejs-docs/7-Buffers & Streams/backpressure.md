# Backpressure

Cuando trabajamos con _Streams_, puede haber situaciones en las que la velocidad de escritura es más rápida que la velocidad de lectura. Esto puede ocurrir cuando los recursos de lectura son más lentos que los recursos de escritura.

Si tenemos esta situación, se puede producir:

- Saturación de memoria.
- Perdida de información.
- Otros errores.

El `backpressure` es un mecanismo de control de flujo que permite a un consumidor (lector) indicar a un productor (escritor) que reduzca temporalmente la velocidad de producción de datos. Cuando un consumidor no puede procesar los datos tan rápido como se están produciendo, puede emitir señales de `backpressure` al productor para que se detenga o ralentice temporalmente.

Normalmente, este control estará gestionado por la librería que usemos.

# Implement Backpressure

En Node.js, el `backpressure` podemos controlar usando el evento `data` y los métodos `read()` y `pause()`.

```js
import { Readable, Writable } from "stream";

class StreamConcatWritable extends Writable {
  constructor(opts) {
    super(opts);
    this.data = "";
  }

  _write(chunk, encoding, callback) {
    console.log("CALL _WRITE");

    setTimeout(() => {
      console.log("CALLBACK _WRITE", chunk.toString());
      if (encoding === "buffer") chunk = chunk.toString();

      this.data += chunk;

      callback();
    }, 4000);
  }
}

class StreamCounterReadable extends Readable {
  constructor(opts) {
    super(opts);
    this.max = 10;
    this.index = 1;
  }

  _read() {
    console.log("CALL _READ");

    setTimeout(() => {
      console.log("CALLBACK _READ", this.index);
      if (this.index > this.max) this.push(null);
      else this.push(Buffer.from(this.index.toString()));

      this.index++;
    }, 2000);
  }
}

const streamConcatWritable = new StreamConcatWritable({
  highWaterMark: 2,
  objectMode: true,
});

const streamConcatReadable = new StreamCounterReadable({
  objectMode: true,
});

streamConcatReadable.on("data", (data) => {
  console.log("DATA");
  const ok = streamConcatWritable.write(data, (err) => err && console.log(err));

  if (!ok) {
    streamConcatReadable.pause();
    console.log("READ PAUSE");
    streamConcatWritable.once("drain", () => {
      console.log("DRAIN");
      streamConcatReadable.resume();
    });
  }
});

streamConcatReadable.on("close", () => {
  streamConcatWritable.end();
});

streamConcatWritable.on("close", () => {
  console.log("END DATA", streamConcatWritable.data);
});
```
