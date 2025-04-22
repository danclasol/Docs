# Java 11

## Type Inference

The `var` keyword was introduced to declare variables in a more concise way, allowing the compiler to infer the type of the variable based on the assigned expression.

```java
var name = "John";  // Inferred as String
var age = 25;       // Inferred as int
```

### `var` in Lambda Parameters

You can now use `var` in lambda expressions (helps with annotations or readability).

- enables you to annotate lambda parameters, which wasn’t possible before.

```java
(list.stream()
     .map((var item) -> item.toUpperCase())
     .forEach(System.out::println));
```

## New String Methods

Added some very useful string utility methods:

```java
" Hello ".strip();           // Removes whitespace (better Unicode handling)
" Hello ".stripLeading();    // Removes leading whitespace
" Hello ".stripTrailing();   // Removes trailing whitespace

"".isBlank();                // true
"hello\nworld".lines();      // Returns a Stream<String>
"Java".repeat(3);            // "JavaJavaJava"
```

## HTTP Client API (Standard)

A modern replacement for HttpURLConnection. Introduced as incubator in Java 9, now it's officially standard.

```java
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.example.com"))
    .build();

HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```

## `Files.readString()` and `Files.writeString()`

Simpler I/O operations:

```java
String content = Files.readString(Path.of("file.txt"));
Files.writeString(Path.of("file.txt"), "New content");
```

## Private Methods in Interfaces

Interfaces can now have private methods — a very useful feature when you want to share common code between default or static methods inside an interface.

Use Cases

- Avoid code duplication in default/static methods.
- Organize complex logic inside interfaces.
- Make your interface methods cleaner and easier to maintain.

## Reactive Streams

Flow is a reactive streams API in the JDK that provides a standardized way to handle asynchronous data streams with backpressure.

### Flow Interfaces

- `Flow.Publisher<T>`- Producer
  - Publishes data to subscribers
- `Flow.Subscriber<T>` - Consumer
  - Receives data from publishers
- `Flow.Subscription`
  - Link Manages request & cancellation of data
- `Flow.Processor<T, R>`
  - Middleman Both a subscriber and a publisher (transforms data)

## New Garbage Collector

The G1 Garbage Collector (G1 GC), introduced in Java 7 and becoming the default garbage collector starting from Java 9, is designed to meet the needs of large heap sizes and provide predictable pause times. G1 GC is especially useful for applications where latency and pause time control are important.

## Modules

A module is a named, self-describing collection of packages and resources. A module explicitly declares its dependencies on other modules and exposes specific packages that other modules can use.

- defined by a special file called `module-info.java`
- Encapsulation: Modules can specify which packages are accessible outside the module
- Dependencies: Modules explicitly declare dependencies on other modules
- Services: Modules can provide and consume services, enabling loose coupling

## New methods in Colections

### Immutable Collections (Java 9+)

Java 9 introduced factory methods to easily create immutable collections:

- immutable collections
- attempts to modify them (add, remove) will throw `UnsupportedOperationException`

```java
List<String> names = List.of("Alice", "Bob", "Charlie");
Set<Integer> numbers = Set.of(1, 2, 3, 4);
Map<String, Integer> ages = Map.of("Alice", 30, "Bob", 25);
```

### Unmodifiable Copy (Java 10+)

Creates an unmodifiable copy of the given collection.

If the original is already unmodifiable and of the same type, it may return the same instance.

```java
List<String> modifiable = new ArrayList<>();
List<String> unmodifiable = List.copyOf(modifiable);
```

### Collectors.toUnmodifiableList() (Java 10)

Used with streams to create immutable collections:

```java
List<String> result = List.of("A", "B", "C").stream()
.filter(s -> !s.equals("B"))
.collect(Collectors.toUnmodifiableList());
```
