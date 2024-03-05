# Function Overloadings

> 🚩*Note that TypeScript function overloadings are different from the function overloadings supported by other statically-typed languages such as C# and Java.*

In TypeScript, function overloadings allows you to define multiple functions signatures with different parameters types, different number of parameters of different return type. However, there will only one implementation methods.

It can be understood as a way to establish the relationship between types and result types of a function.

For example, the function _add_ takes two parameters that can be either a _number_ or a _number_, and returns a _string_ with a conditional content.

```ts
function greet(person: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${person}! You are ${age} years old.`;
  } else {
    return `Hello, ${person}!`;
  }
}
```

In this case, we can use function overloading to ensure that we will only call this function with the following:

- person as string
- person as string and age as number

```ts
function greet(person: string): string;
function greet(person: string, age: number): string;
```

Usage

```ts
console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", 30)); // Hello, Bob! You are 30 years old.
console.log(greet("Bob", 30, "hello")); // Error: Expecte3d 1-2 arguments
```

## Multiple return types

With function overloading, we can also declare signatures with different return types.

```ts
// Function signature overloads
function add(a: string, b: string): string;
function add(a: number, b: number): number;

// Actual function implementation
function add(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") return a + b; // concat

  if (typeof a === "number" && typeof b === "number") return a + b; // sums

  return "Incompatible types";
}

// Usage
const cad = add("A", "B"); // AB
const num = add(1, 3); // 4

console.log(cad);
console.log(num);
```

## Advantages and disadvantages

✅ When to Use Function Overloading:

- _Diverse Input Types_: function overloading can provide a clear and type-safe way to express all the possible combinations.

- _Readability and Documentation_: can improve code readability by explicitly defining different method signatures.

- _Type Inference_: helps TypeScript infer more precise types based on the provided arguments, leading to better static type checking and improved IDE support.

❌ When Not to Use Function Overloading:

- _Simplicity_: using union types or optional parameters might be more concise and sufficient.

- _Code Verbosity_: Function overloading can lead to more verbose code

- _Maintainability_: While overloading can enhance code maintainability, an excessive number of overloaded signatures can also make the codebase harder to manage.

## Order overloads

TypeScript chooses the first matching overload when resolving function calls. When an earlier overload is “more general” than a later one, the later one is effectively hidden and cannot be called.

❌ Don’t put more general overloads before more specific overloads:

```ts
/* WRONG */
declare function fn(x: unknown): unknown;
declare function fn(x: HTMLElement): number;
declare function fn(x: HTMLDivElement): string;

const myElem: HTMLDivElement;
const x = fn(myElem); // x: unknown, wat?
```

✅ Do sort overloads by putting the more general signatures after more specific signatures:

```ts
/* OK */
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;
const myElem: HTMLDivElement;

const x = fn(myElem); // x: string, :)
```
