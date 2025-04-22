# Java 8

## Functional Programming

### Lambdas Expressions

Enables functional programming by treating code as data. Makes it easier to write inline implementations of functional interfaces.

```
( params ) -> { body }
```

### Functional Interfaces

An interface with a single abstract method, annotated with `@FunctionalInterface`.

```java
@FunctionalInterface
interface MyFunc {
    void apply();
}
```

### Method References

A shorthand for calling methods using `::`.

```java
List<String> list = Arrays.asList("a", "b", "c");

list.forEach(System.out::println);
```

### Streams

Introducen una forma bastante óptima de trabajar con estructuras de datos que antes solía ser muy verbose y además difícil de paralelizar

### Default and Static Methods in Interfaces

Allows interfaces to have method implementations.

```java
interface MyInterface {
    default void sayHello() {
        System.out.println("Hello!");
    }

    static void staticMethod() {
        System.out.println("Static method");
    }
}
```

## Date and Time API (java.time)

A modern, immutable date/time API inspired by Joda-Time.

```java
LocalDate today = LocalDate.now();
LocalDate birthday = LocalDate.of(1990, Month.JANUARY, 1);
Period age = Period.between(birthday, today);
```

## Optional Class

A container that may or may not contain a non-null value. Helps to avoid NullPointerException.

```java
Optional<String> name = Optional.ofNullable("John");
name.ifPresent(System.out::println);
```

## CompletableFuture

It’s a tool for writing non-blocking, asynchronous code. Think of it as a better, more flexible version of Future.

```java
CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
    // Simulate some long-running task
    return "Hello, world!";
});

future.thenAccept(result -> System.out.println("Result: " + result));
```

## Nashorn JavaScript Engine

Runs JavaScript code from within Java applications.

- Deprecated from version 11

```java
ScriptEngine engine = new ScriptEngineManager().getEngineByName("nashorn");
engine.eval("print('Hello from JavaScript');");
```
