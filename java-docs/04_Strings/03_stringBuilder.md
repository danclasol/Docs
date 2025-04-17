# `StringBuilder`

_StringBuilder_ is a mutable sequence of characters.

Unlike String, which is immutable, a StringBuilder allows you to modify the content of the string without creating new objects each time.

This is more efficient when you perform many string operations like appending, inserting, or modifying strings.

## String vs StringBuilder

The main advantage of StringBuilder over String is performance. Since String is immutable, every modification (like appending or replacing text) creates a new string object, which is less efficient.

In contrast, StringBuilder modifies the existing object in memory, so it’s better for operations inside loops or when you need to build large strings dynamically.

- Use StringBuilder when you need to perform many modifications on strings (e.g., appending, inserting, or replacing)

- Use String when you're dealing with fixed strings or performing only a few operations, as it is simpler and more readable

## Creating a StringBuilder

You can create a StringBuilder in a few ways:

```java
StringBuilder sb = new StringBuilder();
StringBuilder sb = new StringBuilder("Hello");
StringBuilder sb = new StringBuilder(50);  // Sets the initial capacity to 50 characters
```

Example

```java
StringBuilder strBuilder1 = new StringBuilder();
strBuilder1.append("Test Builder");
System.out.println(strBuilder1);
System.out.println("Reverse: " + strBuilder1.reverse());
```

## Methods

### `append(String str)`

Adds a string to the end of the StringBuilder

```java
sb.append(" World") // "Hello World"
```

### `insert(int offset, String str)`

Inserts a string at a specified position

```java
sb.insert(5, ",") // "Hello, World"
```

### `delete(int start, int end)`

Removes characters between start and end

```java
sb.delete(5, 12) // "Hello"
```

### `replace(int start, int end, String str)`

Replaces characters in a range

```java
sb.replace(5, 10, "Planet") // "Hello Planet"
```

### `reverse()`

Reverses the characters in the StringBuilder

```java
sb.reverse() // "olleH"
```

### `toString()`

Converts the StringBuilder to a regular String

```java
sb.toString() // "Hello"
```
