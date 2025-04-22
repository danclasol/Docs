# Functional Interfaces

A functional interface is an interface that has exactly one abstract method.

This single method can be implemented using a lambda expression, making the interface the bridge between object-oriented and functional programming.

## Creating Functional Interfaces

Create a regular interface with exactly one abstract method.

- `@FunctionalInterface` annotation is optional, but recommended
- compiler error if you accidentally add more than one abstract method

```java
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);
}
```

Using the functional interface

- by passing the lambda expression, the interface overrides the abstract method with this lambda
- as there is only one abstract method, the method is correctly overriden

```java
public class Calculator {
    public static void main(String[] args) {
        MathOperation add = (a, b) -> a + b;
        MathOperation multiply = (a, b) -> a * b;

        System.out.println(add.operate(2, 3));       // 5
        System.out.println(multiply.operate(2, 3));  // 6
    }
}
```

## Adding default or static methods

You’re allowed to add default or static methods (because they are not abstract)

```java
@FunctionalInterface
interface MathOperation {
    int operate(int a, int b);

    // OK — default method
    default void printExample() {
        System.out.println("Example: convert(42)");
    }

    // OK — static method
    static void description() {
        System.out.println("This is a converter interface.");
    }
}
```

## Lambas vs Anonymous Classes

Implementing functional interfaces with lambdas have the following benefits:

- need less code
- more expressive code
- lambdas use invokedynamic bytecode (lighter, more optimized)

```java
Runnable task = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running from anonymous class");
    }
};
task.run();
```

```java
Runnable task = () -> System.out.println("Running from lambda");
task.run();
```
