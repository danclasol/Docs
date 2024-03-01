# Type assertion

If you need to treat a variable as a different data type, you can use a `type assertion`. Instruct the TypeScript compiler to treat a value as a specific type.

Similiar to type cast in other languages, but it performs no special checking or restructuring of data.

`Type assertions` should be used cautiously, and it's generally better to rely on TypeScript's type inference and checking as much as possible.

Type assertions can be declare in two forms:

### as-syntax

```ts
(randomValue as string).toUpperCase();
```

### angle-bracket syntax

```ts
(<string>randomValue).toUpperCase();
```
