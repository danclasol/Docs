# Types

In Java, based on how and where they are declared there 3 types of variables:

## Local Variables

- declared inside a method, constructor, or block
- only accessible within that method or block
- must be initialized before use
- short-lived, used for temporary data

```java
public void greet() {
    String message = "Hello!"; // local variable
    System.out.println(message);
}
```

## Instance Variables (non-static fields)

- declared inside a class, but outside any method
- belong to each object (instance) of the class
- have default values if not initialized
- used to store object-specific data

```java
public class Person {
    String name; // instance variable
    int age; // instance variable
}
```

## Class Variables (static variables)

- declared with the static keyword inside a class, but outside methods
- shared across all instances of the class
- get default values
- used for shared data, like counters or settings

```java
public class Counter {
    static int totalCount = 0; // class variable

    public Counter() {
        totalCount++;
    }
}
```
