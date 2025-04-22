# Methods

## Inspection Methods

### `isPresent()`

Returns true if a value is present (not null)

```java
Optional<String> name = Optional.of("Alex");
System.out.println(name.isPresent());  // true
```

### `ifPresent(Consumer)`

Allows you to execute some logic only if a value is present, without needing to write an if statement.

```java
Optional<String> name = Optional.of("Alice");

name.ifPresent(n -> System.out.println("Hello, " + n));
```

### `isEmpty()`

Returns true if no value is present. (Java 11+)

```java
Optional<String> emptyName = Optional.empty();
System.out.println(emptyName.isEmpty());  // true
```

## Access Methods

### `get()`

Returns the value

- avoid without checking

```java
if (optional.isPresent()) {
    name = optional.get().getName();
}
```

## `orElse(value)`

Returns value or default

```java
Optional<String> opt = Optional.empty();
String value = opt.orElse("Default");  // Output: Default
```

## `orElseGet(Supplier)`

Returns value or runs Supplier for default

```java
Optional<String> opt = Optional.empty();
String value = opt.orElseGet(() -> "Generated");
```

## `orElseThrow()`

Throws exception if value is missing

- return data

```java
Optional<String> opt = Optional.of("Data");
String val = opt.orElseThrow();
```

- throws `NoSuchElementException` exception

```java
Optional<String> empty = Optional.empty();
empty.orElseThrow();
```

## Transforming Methods

### `map(Function)`

Transforms the value if present

- return an Optional object

```java
Optional<String> name = Optional.of("Optional");

Optional<String> upper = name.map(String::toUpperCase);
System.out.println(upper.orElse(""));
```

### `flatMap(Function)`

Like map but for nested Optionals

```java
Optional<String> name = Optional.of("flat");

// Without flatMap: nested optional
Optional<Optional<String>> nested = name.map(n -> Optional.of(n.toUpperCase()));

// With flatMap: flattened
Optional<String> flat = name.flatMap(n -> Optional.of(n.toUpperCase()));  // Output: FLAT
```

### `filter(Predicate)`

Keeps the value only if it passes the condition

- return an Optional object

```java
Optional<String> name = Optional.of("Alice");

Optional<String> result1 = name.filter(n -> n.startsWith("A"));  // still "Alice"
```
