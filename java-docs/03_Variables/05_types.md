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
- without `static` keyword
- belong to each object (instance) of the class
- used to store object-specific data
- if declare as `private`:
  - methods can access this variable
  - not accessible from outside
- if declare as `public`:
  - accessible from every instance of the class
  - not recommended

```java
public class Person {
    String name; // instance variable
    int age; // instance variable
}
```

To access you need an instance of the class

```java
object.variable
```

## Class Variables (static variables)

- declared inside a class, but outside methods
- with `static` keyword
- shared across all instances of the class
- used for shared data, like counters or settings
- if declare as `private`:
  - belongs only to the class where it's declared
- if declare as `public`:
  - can be accessed from any class, as long as you import the class
  - utility functions, like in Math or Collections

```java
public class Counter {
    static int totalCount = 0; // class variable

    public Counter() {
        totalCount++;
    }
}
```

Accessed using

```java
ClassName.variable
object.variable
```
