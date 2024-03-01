# Function parameter type

You can define function types and then use them when creating your functions.
This design is useful if you want to apply the same function type signature to more than one function.

You can define a function type using a `type` alias or an `interface`:

- _type alias_: if you want to use unions or tuples.
- _interface_: if you want to have the option of extending the function type.

# Type Function

## Defining function types

```ts
type calculator = (x: number, y: number) => number;
```

## Using function types as a type signature for functions

```ts
let addNumbers: calculator = (x: number, y: number): number => x + y;
let subtractNumbers: calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
```

The names of the function parameters don't need to match the names in the function type.

```ts
let addNumbers: Calculator = (number1: number, number2: number): number =>
  number1 + number2;
```

You can leave off the parameter types and return type because _TypeScript_ will infer these types from the function type definition.

```ts
let addNumbers: calculator = (x, y) => x + y;
let subtractNumbers: calculator = (x, y) => x - y;
```

You can also use the `type function` to pass values from another function.

```ts
let doCalculation = (operation: "add" | "subtract"): calculator => {
  if (operation === "add") {
    return addNumbers;
  } else {
    return subtractNumbers;
  }
};
```

# Interface

## Defining interface

```ts
// type calculator = (x: number, y: number) => number;
interface Calculator {
  (x: number, y: number): number;
}
```

## Using interface as a type signature for functions

```ts
let addNumbers: Calculator = (x, y) => x + y;
let subtractNumbers: Calculator = (x, y) => x - y;
```
