# console

https://nodejs.org/dist/latest-v18.x/docs/api/console.html

Provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers.

## log()

Print a message on the console

```js
console.log("Hello world");
console.log("Hello world %s", name);
console.log(`Hello world ${name}`);
```

## error()

Prints a error message on the console

```js
console.error("Error");
```

## warn()

Prints a warning message on the console

```js
console.warn("Warn");
```

## trace()

Prints a message and the stack trace to the current position in the code.

```js
console.trace("Warn");
```

## dir()

Similar to log(), but we can pass an object with the following _options_:

- `showHidden` (boolean): Default: false.
  - If true then the object's non-enumerable and symbol properties will be shown too.
- `depth` (number): Default: 2
  - Tells `util.inspect()` how many times to recurse while formatting the object.
  - This is useful for inspecting large complicated objects.
  - To make it recurse indefinitely, pass null.
- `colors` (boolean): Default: false.
  - If true, then the output will be styled with ANSI color codes.
  - Colors are customizable; see customizing `util.inspect()` colors.

```js
console.dir(global, { showHidden: true, depth: 4 });
```

## clear()

Clears the output in the current terminal.

This operation can vary across operating systems and terminal types.

```js
console.clear();
```

## assert()

Writes a message if value is falsy or omitted.

```js
console.assert(value[, ...message]);
console.assert(true, 'does nothing'); // nothing is printed
console.assert(false, 'Something wen`t wrong'); // Assertion failed: Something wen`t wrong
console.assert(); // Assertion failed
```

## time()

Starts a timer that can be used to compute the duration of an operation.

Timers are identified by a unique label.

```js
console.time("Counter");
```

## timeLog()

For a timer that was previously started by calling console.time(), prints the elapsed time and other data arguments.

```js
console.timeLog("Counter", "First step");
```

## timeEnd()

Stops a timer that was previously started by calling console.time() and prints the result.

```js
console.timeEnd("Counter");
```
