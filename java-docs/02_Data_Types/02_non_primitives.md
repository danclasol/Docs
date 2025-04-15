# Non primitives Data Types

## String

Sequence of characters (text)

```java
String name = "Java";
```

## Arrays

Collection of elements of same type

```java
int[] nums = {1, 2, 3};
```

## Classes

Custom types (Objects)

```java
MyClass obj = new MyClass();
```

## Interfaces

Abstract type for contracts

```java
Runnable r = () -> {};
```

## Enums

An enum is a special type used to define a collection of constants.

- classes under the hood
- can have fields, methods, and constructors
- improve type safety (you can't assign random values like strings or ints)

```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}
```

## Records

A record is a concise way to create immutable data classes, when you just want a simple class to store data (like a DTO or value object), and don’t want to write boilerplate code.

- records are implicitly final (cannot be extended)
- fields in records are private and final by default
- automatically generates a constructor, equals(), hashCode(), and toString()
- available in Java 14+

```java
record Person(String name, int age) {}
```
