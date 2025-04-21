# Functional Programing

Functional Programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.

## Core Principles

- Pure Functions

  - A function that always returns the same result for the same input and does not cause side effects (like changing a global variable or writing to a file).

    ```java
    int add(int a, int b) {
    return a + b; // No side effects, pure function
    }
    ```

- Immutability

  - Data is never modified, only transformed or copied into a new version

- First-Class and Higher-Order Functions

  - Functions are treated as values: you can assign them to variables, pass them as parameters, or return them from other functions.

- No Side Effects

  - Functional code avoids changing anything outside its scope.

- Declarative Style
  - You focus on what to do, not how to do it (less control flow like loops or conditionals).

## Key Components in Java

### Lambda Expressions

Anonymous functions that can be treated as first-class citizens

```java
// Basic syntax: (parameters) -> { body }
Function<Integer, Integer> square = x -> x * x;
System.out.println(square.apply(5)); // Output: 25
```

### Functional Interfaces

These are interfaces with a single abstract method. They represent functions.

Common built-in ones:

- `Function<T, R>` – takes T, returns R
- `Predicate<T>` – returns true/false
- `Consumer<T>` – takes T, returns nothing
- `Supplier<T>` – returns T

### Stream API

Allows processing collections in a functional style using operations like map, filter, and reduce.

```java
List<String> names = List.of("Ana", "John", "Peter", "Lucy");

names.stream()
    .filter(name -> name.startsWith("P"))
    .map(String::toUpperCase)
    .forEach(System.out::println); // Output: PETER
```

### Immutability

In functional programming, you avoid modifying data. Instead, you create new values.

```java
// Example with records (introduced in Java 14)
record Person(String name, int age) {}

Person p1 = new Person("Ana", 30);
// You can't change p1 — it's immutable
```

### Method References

A shorter way to refer to existing methods.

```java
List<String> list = List.of("a", "b", "c");
list.forEach(System.out::println); // Method reference
```
