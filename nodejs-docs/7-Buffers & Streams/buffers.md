# Buffer

Normalmente, en JS manejamos la información en un formato legible (string, numeros, json, etc), pero hay veces que necesitamos manejar la información en formato binario (archivos, imagenes, videos, comunicacion sockets, etc).

Como no existe ningún tipo de dato binario, para manejar este tipo de información tenemos que usar los _buffer_.

Un _buffer_ es un objeto que representa un espacio de memoria con información, normalmente RAM, que almacena binarios.

# Class Buffer

La clase `Buffer` nos permite acceder a estos espacios de memoria.

```js
import { Buffer } from "buffer";
```

## Representacion

Cuando mostramos por pantalla un _buffer_, obtendremos una secuencia de valores.

Esta representación muestra cada una de las posiciones del _buffer_, de tamaño 1 bytes (8 bits), y con sus valores en hexadecimal.

```
<Buffer 00 00 00 00 00 00>
```

Por lo que en cada posición del buffer de 1 byte podemos representar:

- Numero: 0 -> 255
- Hexadecimal: 00 -> FF

# Methods

## Buffer.alloc()

Método que crea un buffer de cualquier tamaño.

### Parameters

- _size_: tamaño en bytes del _buffer_.
- _fill_: valor con el que se rellenará el buffer
- _encoding_: tipo de encoding caracteres.
  - Por defecto: _'utf8'_

Recibe como parametro el tamaño del buffer en bytes.

```js
const buffer = Buffer.alloc(10);
// <Buffer 00 00 00 00 00 00>

const buffer = Buffer.alloc(10, "a");
// <Buffer 61 61 61 61 61 61>
```

## Buffer.allocUnsafe()

Método que crea un buffer de cualquier tamaño,

La difencia es que este método solo reserva espacio de memoria, pero no la inicializa.

## Parameters

- _size_: tamaño en bytes del _buffer_.

```js
const buffer = Buffer.allocUnsafe(10);
// <Buffer 00 00 00 00 00 00>
```

## Buffer.from()

Método que crea un buffer a partir de un _string_.

### Parameters

- _string_: cadena
- _encoding_: tipo de encoding caracteres.
  - Por defecto: _'utf8'_

```js
const buffer = Buffer.from(10);
// <Buffer 10 10 00 00 00 00>
```

## write()

Método que escribe un string en un buffer.

```js
const buf = Buffer.alloc(10);
buffer.write("Hello");
console.log(buffer); // <Buffer 48 65 6c 6c 6f 00 00 00 00 00>
```

## toString()

Devuelve el valor del buffer convertido en un string según el tipo de encoding que le pasemos.

### Parameter

- _encoding_: tipo de encoding caracteres.
  - Por defecto: _'utf8'_
- start
- end

```js
console.log(buffer.toString()); // Hello
console.log(buffer.toString("hex")); // // <Buffer 48 65 6c 6c 6f 00 00 00 00 00>
```

# Buffer Constants

## MAX_LENGTH

Tamaño máximo permitido para una instancia de un Buffer:

- Sistemas 32-bit: 230 - 1 (about 1 GiB).
- Sistemas 64-bit: 232 (about 4 GiB).

## MAX_STRING_LENGTH

Tamaño máximo permitido para un string

Este valor depende del motod JS usado.
