# Functions

_TypeScript_ the option to make parameters required of optional.

- Prevent passing values that shouldn't be passed
- Benefits of type checking the values passed and return

Same declaration as JavaScript. The only difference with TypeScript is that you can provide a type annotation for the function's parameters and return value.

## Declaration

### Named functions

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);
```

### Anonymous functions

```ts
let addNumbers = function (x: number, y: number): number {
  return x + y;
};
addNumbers(1, 2);
```

### Arrow functions

```ts
let addNumbers2 = (x: number, y: number): number => {
  return x + y;
};
```

## Parameters

### Required parameters

All function parameters are required, unless otherwise specified, and the number of arguments passed to a function must match the nuymber of required parameters the function expects.

```ts
function addNumbers(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
```

### Optional parameters

`Optional` parameters can be defined by appending a question mark `?` to the end of the parameter name.

In the parameter list, optional parameters must follow all required parameters.

```ts
function addNumbers(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
```

### Default parameters

Default values can also be assign to optional parameters.

```ts
function addNumbers(x: number, y = 25): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26
```

### Rest parameters

`Rest` parameters can be use when you don't know how many parameters a function will ultimately take.

Rest parameters are treated as a boundless number of optional parameters.

```ts
let addAllNumbers = (
  firstNumber: number,
  ...restOfNumbers: number[]
): number => {
  let total: number = firstNumber;
  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }
    total += Number(restOfNumbers[counter]);
  }
  return total;
};
```

The function can now accept one or more values and return the result.

```ts
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
addAllNumbers(2, 3, "three"); // flags error due to data type at design time, returns 5
```

### Function parameters

You can pass a function as a parameter to another function by specifying the function's type signature.

For example, when we use _callbacks_.

```ts
// Define a function type for the callback
type MyCallback = (arg1: number, arg2: string) => void;

// Function that takes a callback function as a parameter
function processCallback(callback: MyCallback, num: number, str: string): void {
  // Perform some operations
  console.log(`Processing ${num} and ${str}`);

  // Call the callback function
  callback(num, str);
}

// Example callback function
function myCallbackFunction(arg1: number, arg2: string): void {
  console.log(`Callback received: ${arg1}, ${arg2}`);
}

// Call the function with the callback
processCallback(myCallbackFunction, 42, "Hello");
```

### Deconstructed object parameters

We can use `desconstructed` object parameters to use an object to defined named, rather than positional, parameters in your functions.

```ts
function displayMessage({ text, sender }: { text: string; sender: string }) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });
```

Or we can also use an interface to `descontructed` object parameters.

```ts
interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: "Christopher", text: "hello, world" });
```

## Return value type

We can specify the type value the funcion will return

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}

const result1 = addNumbers(1, 2); // Returns 3
const result2 = addNumbers(1, "2"); // Error type y
```

If we don't specify return type value, it will set `void` as return type

```ts
function sayHello(name: string) {
  console.log(`Hello ${name}`);
}

sayHello(); // return void
```

The `void` type return, doesn't force a function to return a `void` type. Only specify that the function can return whatever type.

```ts
function sayHello(name: string): void {
  return `Hello ${name}`;
}

sayHello(); // return void
```

### never

The use of `never` can be useful in situations where certain code paths are expected never to return.

Example of function that never returns (throws an error)

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```
