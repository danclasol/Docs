# readline

The node:readline module provides an interface for reading data from a Readable stream (such as process.stdin) one line at a time.

It can be accessed using:

```js
const readLine = require("nnode:readline");
```

## createInterface(options)

Creates a new readline.Interface instance.

Options:

- _input_ :The Readable stream to listen to. This option is required.
- _output_: The Writable stream to write readline data to.

```js
const consoleInteface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

## question()

Displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.

```js
consoleInterface.question("What's your name?", (answer) =>
  consoleInterface.write(`Your name is ${answer}`);
);
```

## close()

Closes the `readline.Interface` instance and relinquishes control over the input and output streams.

When called, the 'close' event will be emitted.

```js
consoleInterface.close();
```

## emitKeypressEvents()

Metodo que provoca que el _stream_ pasado por parametro empieze a emitir eventos de 'keypress'.

### Parameters

- stream
- interface

```js
consoleInterface.emitKeypressEvents(readStream);
```
