# Type inference

In _TypeScript_, you can associate types with variables through explicit type annotations or through implicit type inference.

## Implicit type inference

_TypeScript_ automatically guesses the type based on the value assigned to a variable.

- Default behaviour when you don't explicity specify a type
- Leads to a more concise code
- Use it as much as possible:
  - reduce amount of redundant type information
  - easier refactoring
  - adaptability to changes

```ts
let x = 1; // Implicitly declares x as a number type
```

## Explicit type annotations

You explicitly tell TypeScript the type using type annotations.

- Explicit type annotations are optional in TypeScript
- Provides clarity and sometimes preventing unintended type inference
- Useful when:
  - you want to enforce a specific type
  - working on larger codebases
  - when type is not immediately obvious
  - when working on interfaces and public APIs

```ts
let x: number; // Explicitly declares x as a number type
let x: number = 10;
```
