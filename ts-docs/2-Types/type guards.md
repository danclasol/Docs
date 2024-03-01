# Type guards

`Type Guards` are a way to narrow down the type of a variable based on some runtime condition.

It's recommended to use `Type Guards` rathen than `Type Assertion`, because they provide actual runtime checks and make the code safer.

Inside a condicional `if` block, if we check the correct data type, TypeScript will assume the type we want to work with and won't mark it as error.

```ts
type Alphanumeric = string | number;

function add(a: Alphanumeric, b: Alphanumeric) {
  // TypeScript assume that both are string and concat can be executed
  if (typeof a === "string" && typeof b === "string") {
    a.concat(b);
  }

  // TypeScript assume that both are number and they can be added
  if (typeof a === "number" && typeof b === "number") {
    a + b;
  }
}
```

## typeof

Use `typeof` for checking primitive types.

```ts
typeof s === "string";
typeof n === "number";
typeof b === "boolean";
typeof undefined === "undefined";
typeof f === "function";
Array.isArray(a);
```

## instanceof

Use `instanceof` for checking class instances

```ts
if (pet instanceof Dog) {
  pet.bark();
}
```
