# Math

The Math class is part of the java.lang package and provides a collection of static methods for performing common mathematical operations.

The Math class is not a part of any object but instead is used directly through its static methods.

## Basic Arithmetic and Constants

### `Math.abs(double a)`

Returns the absolute value of a.

```java
double absValue = Math.abs(-5);  // 5.0
```

### `Math.max(double a, double b)`

Returns the larger of two numbers.

```java
double max = Math.max(3.5, 7.2);  // 7.2
```

### `Math.min(double a, double b)`

Returns the smaller of two numbers.

```java
double min = Math.min(3.5, 7.2);  // 3.5
```

## Power and Logarithmic Functions

### `Math.pow(double a, double b)`

Returns a raised to the power of b.

```java
double power = Math.pow(2, 3);  // 8.0
```

### `Math.sqrt(double a)`

Returns the square root of a.

```java
double sqrt = Math.sqrt(16);  // 4.0
```

### `Math.log(double a)`

Returns the natural logarithm (base e) of a number.

```java
Math.log(10);  // 2.302585092994046
```

### `Math.log10(double a)`

Returns the base-10 logarithm of a number.

```java
Math.log10(100); // 2.0
```

## Random Number Generation

### `Math.random()`

Returns a random double value between 0.0 (inclusive) and 1.0 (exclusive).

```java
Math.random();  // E.g., 0.4567
```

To generate a random number within a specific range:

```java
int randomNum = (int)(Math.random() * 100);  // Random number between 0 and 99
```

## Rounding Functions

### `Math.ceil(double a)`

Returns the smallest integer greater than or equal to the specified number.

```java
Math.ceil(4.3);  // 5.0
```

### `Math.floor(double a)`

Returns the largest integer less than or equal to the specified number.

```java
Math.floor(4.7);  // 4.0
```

### `Math.round(double a)`

Returns the closest long to the argument, rounding up or down based on standard rounding rules.

```java
Math.round(4.5);  // 5
```

## Constants

### `Math.PI`

The constant value of π (pi).

```java
Math.PI;  // 3.141592653589793
```

### `Math.E`

The constant value of Euler's number (e).

```java
Math.E;  // 2.718281828459045
```
