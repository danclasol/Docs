# BigInt

`BigInt` values represent numeric values which are too large to be represented by the `number` primitive.

Only use a BigInt value when values greater than 2^53 are reasonably expected.

Don't coerce between BigInt values and Number values.

```js
const bigint = 1234567890123456789012345678901234567890n; // 1234567890123456789012345678901234567890n
const sameBigint = BigInt("1234567890123456789012345678901234567890"); // 1234567890123456789012345678901234567890n
const bigintFromNumber = BigInt(10); // 10n
```

## Typeof

When tested against typeof, a BigInt value (bigint primitive) will give "bigint":

```js
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
```

## Operations

The following operators may be used with BigInt values or object-wrapped BigInt values: `+ * - % **`

```js
1n + 2n; // 3n;
1n + 2; // Error
```

## Cast number to bigInt

```js
1n + BigInt(2); // 3n
```

## Cast bigInt to number

```js
Number(1n) + 2; // 3
```

# Comparisons

```js
0n === 0; // false
0n == 0; // true
1n < 2; // true
2n > 1; // true
2n > 2; // false
2n >= 2; // true
```

# Conditionals

Namely, only `0n` is falsy; everything else is truthy.

```js
Boolean(0n); // false
Boolean(12n); // true
```
