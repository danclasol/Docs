# Generics

Java Generics enable us to gain type safety in situations where classes and methods that are designed to be able to work with any type would otherwise be designed to work with `Object` instances.

- List, Set or Map instances that work on specific types

Benefits

- Code reusability and improved performance
- No scarification of type-safety
- No requirement of type-casting
- Compile-time checking

Generics allow to add type parameters to:

- classes
- interfaces
- methods
- variables

## Generic Classes

It is possible to generify your own Java classes

- `<T>` is a type token that signals that this class can have a type set when instantiated

```java
public class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}
```

Now, each instance of the class can be generified with different types

```java
Box<String> stringBox = new Box<>();
stringBox.set("Hello");
String s = stringBox.get(); // No casting needed

Box<Integer> integerBox = new Box<>();
integerBox.set(1234);
int i = integerBox.get(); // No casting needed
```

## Generic Methods

You can specify generic types for parameters as well as return types of Java methods

```java
public static <T> void printArray(T[] array) {
    for (T item : array) {
        System.out.println(item);
    }
}
```

We can call the method with different types

```java
Integer[] nums = {1, 2, 3};
printArray(nums);

String[] string = {"red", "blue", "yellow"};
printArray(string);
```

## Class Objects as Type Literals

Class objects can be used as type specifications.

### Creating new instances of unknown types

With generics, you can't do this. Because the type `T` is erased at runtime, Java has no idea what `T` actually is.

```java
public T create() {
    return new T(); // ❌ Compile error
}
```

Using `Class<T>` we can achieve this

```java
public class Factory<T> {
    private Class<T> clazz;

    public Factory(Class<T> clazz) {
        this.clazz = clazz;
    }

    public T create() throws Exception {
        return clazz.getDeclaredConstructor().newInstance();
    }
}
```

You can call this method with different classes

```java
Factory<User> factory = new Factory<>(User.class);
User user = factory.create();

Factory<Employee> factory = new Factory<>(Employee.class);
Employee employee = factory.create();
```
