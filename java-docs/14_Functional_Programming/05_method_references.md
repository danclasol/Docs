# Method References

A method reference is a concise way to refer to a method without using a lambda or a function interface.

It’s used as a lambda shortcut when the lambda only calls a method.

There are 4 types of Method References

- Static Method:
  - method belong to class, not to an object
- Instance Method (on any object of a class):
  - non-static method of a class object
  - when you're working with different objects
  - `ClassName::method`
- Instance Method (on a specific object):
  - non-static method of an existing object
  - called on that specific object
  - `object::instanceMethod`
- Constructor Reference:
  - creates a new object referencing a constructor

## Static Method

In this example, we will use the static method `abs` from `Math` class.

This is how we implement the build-in function interface `Function` with lambdas

```java
Function<Double, Double> absFunc = x -> Math.abs(x);
```

However, _lambdas_ can be replace with a method reference

- no need to pass the parameter

```java
Function<Double, Double> absFunc = Math::abs;
```

Then, you can call the `apply()` method from `Function`

```java
System.out.println(absFunc.apply(-3.14)); // Output: 3.14
```

## Instance Method (on any object of a class)

In this example, we will use the instance method `toLowerCase` from `String` class.

In this example, we use a instance method of the class `String` with a `Consumer` function interface

```java
Consumer<String> greeter = str -> str.toLowerCase();
```

Lambda expression can be replace with a method reference

```java
Consumer<String> greeter = String::toLowerCase;
```

Then, you can call the `apply()` method from `Function`

```java
System.out.println(greeter.accept("Hello World")); // Output: 3.14
```

## Instance Method (on a specific object)

For example, a custom object that handles formatting, and you want to call a method on that exact object every time.

```java
Formatter myFormatter = new Formatter();

List<String> raw = List.of("a", "b", "c");

List<String> formatted = raw.stream()
    .map(myFormatter::format)  // always uses the same formatter object
    .toList();
```

## Constructor Reference

In this example, we will use the constructor method an `ArrayList<>` without parameters

```java
Supplier<ArrayList<String>> listSupplier = () -> new ArrayList<>();
```

`ArrayList::new` Refers to `new ArrayList<>()`

```java
Supplier<ArrayList<String>> listSupplier = ArrayList::new;
```

Then, you can call the `get()` method from `Supplier`

```java
ArrayList<String> list = listSupplier.get();
```

Example of constructor with parameters

```java
Function<Integer, ArrayList<String>> listSupplier = ArrayList::new;
ArrayList<String> list = listSupplier.apply(20);
```
