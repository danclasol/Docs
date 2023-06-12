# Zlib

En Node.js, existe el módulo `zlib` que nos ofrece funcionalidades de compresion de ficheros.

Implementado usando _Gzip_, _Deflate/Inflate_, y _Brotli_.

## Example

```js
import { createGzip } from "zlib";
import { pipeline } from "stream";
import { createReadStream, createWriteStream } from "fs";

const gzip = createGzip();
const source = createReadStream("input.txt");
const destination = createWriteStream("input.txt.gz");

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error("An error occurred:", err);
    process.exitCode = 1;
  }
});
```

## Example Promisified

```js
import { promisify } from "util";

const pipe = promisify(pipeline);

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
}

do_gzip("input.txt", "input.txt.gz").catch((err) => {
  console.error("An error occurred:", err);
  process.exitCode = 1;
});
```
