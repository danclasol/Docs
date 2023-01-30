# setInterval()

Method that repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

This method returns an interval ID which uniquely identifies the interval, so

## Syntax

```js
setInterval(code);
setInterval(code, milliseconds);
```

## Example

```js
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log("Hello: " + count);

  if (count === 5) {
    console.log("Good Bye");
    clearInterval(intervalId);
  }
}, 1000);
```

## clearInterval()

Method that can cancel the interval previously established by `setInterval()`

```js
clearInterval(intervalId);
```

## Syntax

```js
setTimeout(code);
setTimeout(code, milliseconds);
```

## Example

# setTimeout()

Method that sets a timer which executes a function or specified piece of code once the timer expires.

```js
let count = 0;

const setTimeoutId = setTimeout(() => {
  count++;
  console.log("Hello: " + count);

  if (count === 5) {
    console.log("Good Bye");
    clearTimeout(setTimeoutId);
  }
}, 1000);
```

## clearTimeout()

Method that can cancel the interval previously established by `setTimeout()`

```js
clearTimeout(intervalId);
```
