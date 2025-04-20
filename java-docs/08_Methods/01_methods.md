# Methods

Methods are blocks of code that perform specific tasks and can be reused.

```java
public void greet() {
    System.out.println("Hello, world!");
}
```

Methods can be call:

```java
greet();
```

## Parameters

Information can be passed to methods as a parameter. Parameters act as variables inside the method.

```java
public void greet(String name) {
    System.out.println("Hello " + name);
}
```

When you pass something to a function, you are passing a copy of the data to the method. Any changes made inside the method do not affect the original value.

This is known as passing by value. In Java, everything is pass by value:

- primitive: pass directly a copy of the value
  - value can be changed
  - original value is not afected
- objects: pass a reference of the object, but also by value
  - can modify the object’s contents
  - cannot change the original reference to point somewhere else

## Return value

If you want the method to return a value using the return keyword inside the method

```java
public int sum(int x, int y) {
    return x + y;
  }
```
