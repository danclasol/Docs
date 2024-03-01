# any

The `any` type is the one type that can represent any JavaScript value with no constraints.

The value is dynamic because the any type will allow you to reassign different types of values.

```ts
let randomValue: any = 10;
randomValue = "Mateo"; // OK
randomValue = true; // OK
```

This examples are valid _TypeScript_ and will not generate a compile-time error, but runtime errors may occur depending on the actual datatype of the variable.

```ts
console.log(randomValue.name); // Logs "undefined" to the console
randomValue(); // Returns "randomValue is not a function" error
randomValue.toUpperCase(); // Returns "randomValue is not a function" error
```

Using `any` should be avoided as we lose type safety, one of the main motivations for using _TypeScript_.

# unknown

The `unknown` type is similar to the `any` type in that any value is assignable to type `unknown`.

However, you can't access any properties of an unknown type, nor can you call or construct them.

```ts
let randomValue: unknown = 10;
randomValue = true;
randomValue = "Mateo";

console.log(randomValue.name); // Error: Object is of type unknown
randomValue(); // Error: Object is of type unknown
randomValue.toUpperCase(); // Error: Object is of type unknown
```

# boolean

The most basic datatype is the _true_ or _false_ value, known as a `boolean`.

```ts
let flag: boolean;
let yes = true;
let no = false;
```

# number

`Numbers` in _TypeScript_ are either floating point values or _BigIntegers_.

```ts
let x: number;
let y = 0;
let z: number = 123.456;
```

Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter X (0x or 0X). The digits after the 0x must be in the range (0123456789ABCDEF)

```ts
let hexadecimal: number = 0xa;
```

In addition to hexadecimal and decimal literals, _TypeScript_ also supports binary and octal literals introduced in _ECMAScript 2015_.

```ts
let bin = 0b100;
let octal: number = 0o10;
```

## bigint

The big integers represent the whole numbers larger than 253 – 1.

A Big integer literal has the n character at the end of an integer literal like this

```ts
let big: bigint = 100n;
```

# string

The `string` keyword represents sequences of characters stored as _Unicode_ _UTF-16_ code units.

```ts
let s: string;
let empty = "";
let abc = "abc";
let sentence: string = `My name is ${name}. I am new to TypeScript.`;
```

# enum

`Enums` allow a developer to define a set of named constants. In JavaScript, enums doesn't exists.

Using `enums` can make it easier to document intent, or create a set of distinct cases.

TypeScript provides both numeric and string-based enums.

## String enum

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```

## Numeric enum

```ts
enum ContractStatus {
  Permanent, // 0
  Temp, // 1
  Apprentice, // 2
}
```

## Declare a variable using enum values

```ts
let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
```

## Pass enum as a parameter in a function

```ts
function respond(employeeStatus: ContractStatus): void {}
```

## Modifying default values

By default, `enum` values begin with a value of 0, so _Permanent_ is 0, _Temp_ is 1, and _Apprentice_ is 2.

If you want the values to start with a different value, specify that in the enum declaration.

```ts
enum ContractStatus {
  Permanent = 1,
  Temp, // 2
  Apprentice, // 3
}
```

# void

`void` represents the absence of having any type of data. It is the opposite of the `any` type.

Use `void` type as the return type of functions that do noty return any value.

- ensures type-safe: cannot assign the function result to a variable

```ts
function log(message): void {
  console.log(messsage);
}
```

# null, undefined

The `null` and `undefined` types are subtypes of all other types.

It isn't possible to explicitly reference the `null` and `undefined` types. Only the values of those types can be referenced, using the `null` and `undefined` literals.
