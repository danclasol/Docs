# `StringBuffer`

_StringBuffer_ is a class in Java that, like StringBuilder, represents a mutable sequence of characters.

However, StringBuffer is thread-safe, meaning it is designed to be used in multi-threaded environments without causing issues due to concurrent access.

## StringBuffer vs. StringBuilder

- Use StringBuffer when you need thread safety for modifying strings (e.g., in multi-threaded applications)

- Use StringBuilder for single-threaded applications where performance is more important than thread safety

## Creating a StringBuffer

You can create a StringBuffer in a few ways:

```java
StringBuffer sb = new StringBuffer();
StringBuffer sb = new StringBuffer("Hello");
StringBuffer sb = new StringBuffer(50);  // Sets the initial capacity to 50 characters
```

Example

```java
StringBuffer strBuffer1 = new StringBuffer();
strBuffer1.append("Test Buffer");
System.out.println("Reverse: " + strBuilder1.reverse());
```

## Methods

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
