# util

The `node:util` module supports the needs of Node.js internal APIs.

Many of the utilities are useful for application and module developers as well.

To access it:

```js
const util = require("node:util");
```

## callbackify()

Takes an asynchronous function and returns a function following the error-first callback style.

In the callback, the first argument will be the rejection reason (or null if the Promise resolved), and the second argument will be the resolved value.

```js
const util = require("node:util");

async function fn() {
  return "hello world";
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});
```

## promisify()

Takes a function following the common error-first callback style and returns a version that returns promises.

```js
const util = require("node:util");

async function fn() {
  return "hello world";
}
const callbackFunction = util.callbackify(fn);

// We use `callbackFunction` that is already a error-first callback
const promisifyFunction = util.promisify(callbackFunction);

promisifyFunction
  .then((value) => console.log(value))
  .catch((err) => console.error(err));
```

## types

`util.types` provides type checks for different kinds of built-in objects

### types.isDate(value)

```js
types.isDate(new Date()); // true
```

## types.isStringObject(value)

```js
util.types.isStringObject("foo"); // Returns false
util.types.isStringObject(new String("foo")); // Returns true
```

## types.isPromise(value)#

```js
util.types.isPromise(Promise.resolve(42)); // Returns true
```

## isDeepStrictEqual(val1, val2)

Returns true if there is deep strict equality between val1 and val2. Otherwise, returns false.

```js
const { isDeepStrictEqual } = require("node:util");

const obj1 = { a: 54, b: { c: "Peter" } };
const obj2 = { a: 54, b: { c: "Peter" } };

console.log(obj1 === obj2); // false
console.log(isDeepStrictEqual(obj1, obj2)); // true
```
