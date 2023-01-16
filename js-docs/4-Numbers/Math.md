# Math Object

Unlike many other global objects, Math is not a constructor. All properties and methods of Math are static.

# Static properties

```js
Math.PI; // Ratio of a circle's circumference to its diameter; approximately 3.14159.
```

# Math.abs()

Returns the absolute value of x.

```js
Math.abs(-23); // 23
Math.abs(2 - 4); // 2
```

# Math.sign()

Returns the sign of the x, indicating whether x is positive, negative, or zero.

```js
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign(0); // 0
Math.sign("-3"); // -1
```

# Math.ceil()

Returns the smallest integer greater than or equal to x.

```js
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(-7.004); // 7
```

# Math.floor()

Returns the largest integer less than or equal to x.

```js
Math.floor(5.95); // 5
Math.floor(5.05); // 5
Math.floor(5); // 5
Math.floor(-5.05); // -6
```

# Math.round()

Returns the value of the number x rounded to the nearest integer.

```js
Math.round(0.9); // 1
Math.round(5.95), Math.round(5.5), Math.round(5.05); // 6 6 5
Math.round(-5.05), Math.round(-5.5), Math.round(-5.95); // -5 -5 -6
```

# Math.fround()

Returns the nearest single precision float representation of x.

```js
Math.fround(5.5); // 5.5
Math.fround(5.05); // 5.050000190734863
Math.fround(5); // 5
Math.fround(-5.05); // -5.050000190734863
```

# Math.max()

Returns the largest of zero or more numbers.

```js
Math.max(1, 3, 2); // 3
Math.max(-1, -3, -2); // -1
Math.max(...[1, 3, 2]); // 3
```

# Math.min()

Returns the smallest of zero or more numbers.

```js
console.log(Math.min(2, 3, 1)); // Expected output: 1
console.log(Math.min(-2, -3, -1)); // Expected output: -3
console.log(Math.min(...[1, 3, 2])); // Expected output: 1
```

# Math.trunc()

La función Math.trunc() devuelve la parte entera de un numero removiendo cualquier dígito decimal (dígitos situados después de la coma).

```js
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(0.123); //  0
Math.trunc(-0.123); // -0
Math.trunc("-1.123"); // -1
Math.trunc(NaN); // NaN
Math.trunc("foo"); // NaN
Math.trunc(); // NaN
```

# Math.random()

Returns a pseudo-random number between 0 and 1.

```js
Math.random(); // a number from 0 to <1
Math.random() * 10; // a number from 0 to <10
```
