# String

String is a sequence of characters.

- not a primitive type
- String is a class from the java.lang package
- behaves like a basic type because it's so commonly used
- Strings are immutable, meaning once a String object is created, its value cannot be changed

## Creating strings

String literal is the preffered method, and is more efficient

```java
String name = "Alice";
```

Using the new keyword:

```java
String name = new String("Alice");
```

## Concatenation

You can join strings using the + operator:

```java
String fullName = "John" + " " + "Doe";  // "John Doe"
```

Or use `concat()`

```java
String result = "Java".concat(" Rocks");
```
