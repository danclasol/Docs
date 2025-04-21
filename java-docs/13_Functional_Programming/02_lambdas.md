# Lambda Expressions

A _lambda_ expression is a short, anonymous function, a concise way to represent a function

- let you write functions without declaring a full class or method
- can be passed around like an object
- can only be used with a functional interface
- introduced in Java 8 to support functional programming

## Basic Syntax

- parameters: inputs to the function
- arrow `->`: separates parameters from the body
- body: function logic (can be a single expression or a block)

```java
(parameters) -> { body }
```

## Examples

Function with no parameters

```java
() -> System.out.println("Hello!")
```

Function with one parameter

- `()` can be ommitted

```java
name -> System.out.println("Hello, " + name)
```

Multiple parameters

```java
(a, b) -> a + b
```

Function with data types

```java
(int x, int y) -> x * y
```

Function with more than one sentences, you need to use `{}`

- if the lambda returns a value, need to use `return` keyword

```java
(a, b) -> {
    int result = 0;

    result = result + a;
    result = result + b;

    return result;
}
```
