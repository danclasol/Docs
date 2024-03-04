# Generics

`Generics` allow you to write reusable and type-safe code by creating components that can work with a variety of data types.

They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.

Create generic functions when your code is a function or class that:

- Works with a variety of data types
- Uses that data type in several places

Generics can:

- Provide more flexibility when working with types
- Enable code reuse
- Reduce the need to use the any type

## Using generics

`Generics` define one or more type variables to identify the type or types that you will pass to the component, enclosed in angle brackets `<` `>`

Example of a function using `generics`.

- type variable in the function is called `<T>` (convention name for generics)
- type variable can be used in place of the type in parameters or the return types
- type variable can be placed anywhere else in the function where you would add a type annotation

```ts
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
```

This function accepts any type that you specify when calling the function

```ts
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25); // OK
numberArray.push("This is not a number"); // Generates a compile time type check error

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits"); // OK
stringArray.push(30); // Generates a compile time type check error
```

## Using multiple type variables

You are not limited to using a single type variable in your generic components.

```ts
function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
```

When using these variables, _TypeScript_ can type check the values and return a compile-time error if there is a conflict.

```ts
let returnNumber = identity<number, string>(100, "Hello!");
let returnString = identity<string, string>("100", "Hola!");
let returnBoolean = identity<boolean, string>(true, "Bonjour!");

returnNumber = returnNumber * 100; // OK
returnString = returnString * 100; // Error: Type 'number' not assignable to type 'string'
returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'
```
