# Bounded Type Parameters

There may be times when you'll want to restrict the kinds of types that are allowed to be passed to a type parameter.

To declare a bounded type parameter, list the type parameter's name, followed by the `extends` keyword, followed by its upper bound.

- `T` must be SomeClass or a subclass

```java
<T extends SomeClass>
```

## Example Upper Bound

```java
public class Calculator<T extends Number> {
    public double add(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }
}
```

You can now do

```java
Calculator<Integer> intCalc = new Calculator<>();
Calculator<Double> doubleCalc = new Calculator<>();
```

If will show an error if you try a type than is not a Number

```java
Calculator<String> stringCalc = new Calculator<>(); // ❌ Compile error
```

## Multiple Bounds

You can also specify multiple bounds. Class first, then interfaces

- `T` must be a subclass of Animal
- implement Runnable and Serializable

```java
<T extends Animal & Runnable & Serializable>
```
