# Generic Constraints

A `generic constraint` allo to restrict the types that can be used with generic parameter.

There are several ways to do this depending on the type variable:

- Use extends keyword to constrain the type parameter to a specific type.
- Use extends keyof to constrain a type that is the property of another object.

## Constrain the type parameter to a specific type

Define a custom `type` as a tuple and then `extend` the type variable with this custom type.

```ts
type ValidTypes = string | number;

function identity<T extends ValidTypes, U>(value: T, message: U): T {
  let result: T = value + value; // Error
  console.log(message);
  return result;
}
```

Now, you can only pass _number_ or _string_ types to the type variable

```ts
let returnNumber = identity<number, string>(100, "Hello!"); // OK
let returnString = identity<string, string>("100", "Hola!"); // OK
let returnBoolean = identity<boolean, string>(true, "Bonjour!"); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
```

## Constrain a type to the property of another object

Define a custom type and a generic function that extracts a property from an object.

This object can be a type alias, an interface or a class.

```ts
type NamedEntity = {
  name: string;
};

function getName<T extends NamedEntity>(entity: T): string {
  return entity.name;
}
```

This means that any object passed to _getName_ must have a 'name' property.
If not it would result in a compilation error.

```ts
console.log(getName({ name: "John" })); // Returns: "John"
console.log(getName({ age: 25 })); // compilation error, as `age` is not a property of NamedEntity
```

# Using type guards with generics

You can use the `typeof` type guard in an if block to check the type of the value parameter before performing an operation.

TypeScript can determine from the if statement if the operation will work with the values provided within the block.

```ts
type ValidTypes = string | number;
function identity<T extends ValidTypes, U>(value: T, message: U) {
  // Return type is inferred
  let result: ValidTypes = "";
  let typeValue: string = typeof value;

  if (typeof value === "number") {
    // Is it a number?
    result = value + value; // OK
  } else if (typeof value === "string") {
    // Is it a string?
    result = value + value; // OK
  }

  console.log(
    `The message is ${message} and the function returns a ${typeValue} value of ${result}`
  );

  return result;
}

let numberValue = identity<number, string>(100, "Hello");
let stringValue = identity<string, string>("100", "Hello");

console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
```
