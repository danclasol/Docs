# Numbers

## byte

Used for small integers where memory is a concern.

- Size: 1 byte
- Range: -128 to 127

```java
byte b = 100;
```

## short

Used for slightly larger integers than byte.

- Size: 2 bytes
- Range: -32,768 to 32,767

```java
short s = 32000;
```

## int

The most commonly used type for integers.

- Size: 4 bytes
- Range: -2^31 to 2^31 - 1 (-2,147,483,648 to 2,147,483,647)

```java
int i = 100000;
```

## long

Used for very large integers.

- Size: 8 bytes
- Range: -2^63 to 2^63 - 1

```java
long l = 10000000000L; // Note the 'L' to denote a long literal
```

## float

Used for single-precision floating-point numbers.

- Size: 4 bytes
- Range: ±3.4 × 10^38 (7 decimal digits precision)

```java
float f = 3.14f; // Note the 'f' to denote a float literal
```

## double

Used for double-precision floating-point numbers, which offer higher precision.

- Size: 8 bytes
- Range: ±1.8 × 10^308 (15 decimal digits precision)

```java
double d = 3.141592653589793;
```
