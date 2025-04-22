# Optionals

Optional<T> is a container object that may or may not hold a non-null value.

- if the value is present: ✅ it returns it
- if the value is missing: ❌ you handle it safely

Was introduced in Java 8

Don’t use Optional:

- in class fields (because it adds memory overhead)
- as method parameters (just use null or method overloading)

## Understanding Optionals

It may looks similar to a null check but with optionals we indicate:

- value may be null
- know that you have to deal with this possible null value

```java
if (optional.isPresent()) {
    name = optional.get().getName();
}
```

However, using `get()` is not really recommended, use instead other functions

```java
Optional<String> name = optional.getName();
name.ifPresent(System.out::println);
```

## Creating Optional

Creates an Optional with a non-null value. - throws `NullPointerException` if value is null

```java
Optional<String> name = Optional.of("Alice");
```

Creates an Optional that may be null

```java
Optional<String> maybeName = Optional.ofNullable("hello");
Optional<String> maybeName = Optional.ofNullable(null);
```

Create an empty optional

```java
Optional<String> empty = Optional.empty();
```
