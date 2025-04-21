# Common Built-in Functional Interfaces

Java has a set of built-in functional interfaces in the package `java.util.function`

## Functions

### `Function<T, R>`

Returns a value (apply())

```java
Function<String, Integer> length = str -> str.length();
System.out.println(length.apply("Hello")); // Output: 5
```

### `Bifunction<T, U, R>`

Returns a value (apply()) and accept two parameters

```java
BiFunction<Integer, Integer, Double> biFunc = (x1, x2) -> Math.pow(x1, x2);
System.out.println(biFunc.apply(2, 3); // 5
```

### `BinaryOperator<T>`

Two operands of the same type, producing a result of the same type as the operand

```java
BinaryOperator<Integer> binaryOperator = (x1, x2) -> x1 + x2;
Integer result5 = binaryOperator.apply(2, 3);
System.out.println(result5); // 5
```

### `UnaryOperator<T>`

Single operand that produces a result of the same type as its operand

```java
UnaryOperator<Integer> unaryOperator = x -> x * 2;
Integer result6 = unaryOperator.apply(2);
System.out.println(result6);  // 4
```

## Predicates

### `Predicate<T>`

Returns boolean (test())

```java
Predicate<Integer> isEven = num -> num % 2 == 0;
System.out.println(isEven.test(4)); // Output: true
```

### `BiPredicator<T, U>`

```java
BiPredicate<String, Integer> filter = (x, y) ->  x.length() == y;
System.out.println(filter.test(4, "hello"));
```

## Consumers

### `Consumer<T>`

Performs action, returns nothing (accept())

```java
Consumer<String> greeter = name -> System.out.println("Hi, " + name);
greeter.accept("Alice"); // Output: Hi, Alice
```

### `BiConsumer<T, U>`

```java
BiConsumer<Integer, Integer> addTwo = (x, y) -> System.out.println(x + y);
addTwo.accept(1, 2);    // 3
```

## Suppliers

### `Supplier<T>`

Supplies a value (get())

```java
Supplier<Double> randomValue = () -> Math.random();
System.out.println(randomValue.get()); // Output: (some random number)
```
