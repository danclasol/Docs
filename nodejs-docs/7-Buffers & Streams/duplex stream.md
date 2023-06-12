# Duplex

Streams que son Readable y Writable, es decir, poseeen todos las funcionalidades de ambos Streams.

### Examples

- Sockets

# Implementing a Duplex Stream

```js
import { Duplex, Transform } from "stream";

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

streamDuplex.on("data", (chunk) => {
  streamDuplex.write(chunk);
});

streamDuplex.on("end", () => console.log(streamDuplex.data));
```
