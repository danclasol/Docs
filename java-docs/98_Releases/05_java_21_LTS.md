# Java 21

- String Templates

## Pattern Matching for switch

Allows type checks and smart casting in switch.

```java
static String handle(Object obj) {
    return switch (obj) {
        case String s -> "Text: " + s;
        case Integer i -> "Number: " + i;
        default -> "Something else";
    };
}
```

## Virtual Threads

💡 Virtual threads simplify writing scalable, non-blocking applications without reactive frameworks.

- Lightweight threads built on the JVM
- Can handle millions of concurrent tasks
- Great for web servers, APIs, microservices

```java
Thread.startVirtualThread(() -> {
    System.out.println("Hello from a virtual thread!");
});
```

## Record Patterns

Deconstruct records directly in pattern matching.

```java
record Point(int x, int y) {}

static void print(Point p) {
    if (p instanceof Point(int x, int y)) {
        System.out.println("x = " + x + ", y = " + y);
    }
}
```

## Sequenced Collections

New interfaces: SequencedCollection, SequencedSet, SequencedMap

Adds consistent `first()` and `last()` access to ordered collections.

```java
SequencedSet<String> set = ...;
String first = set.getFirst();
String last  = set.getLast();
```

## String Templates (Preview)

Safer and more expressive string formatting.

- replaces `String.format()`
- cleaner and safer than manual concatenation

```java
String name = "Alice";
int age = 30;
String msg = STR."Hello, my name is \{name} and I am \{age} years old.";
```
