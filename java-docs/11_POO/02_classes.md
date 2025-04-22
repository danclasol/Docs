# Classes

Classes are blueprints for creating objects, which are instances of those classes

A class defines the characteristics (attributes) and behaviors (methods) that objects of that class will possess

- modularity
- rusability
- support abstraction

```java
public class Car {
}
```

## Attributes

Represent the state or properties of the object.

```java
private String color;
private int speed;
```

### `static`

Variables belong to the class itself, rather than to any specific instance of the class.

- only one copy of a static variable shared by all objects of that class
- can be accessed directly using the class name without needing to create an object

```java
private static int COUNT = 0;
```

### `final`

When applied to a variable, it makes the variable's value constant after initialization.

```java
private final MAX_WIDTH = 999;
```

## Constructors

A constructor is a special method that is called when an object is created

```java
public Car() {

}

public Car(String color, int speed) {

}
```

Calling the constructor

```java
Car myCar = new Car("red", 200); // Calls the constructor
```

## Getter and setters

We can create public methods used to access (get) or modify (set) private fields of a class.

- control access to data
- keeping the fields private but still usable from outside

```java
public String getName() {
    return name;
}

// Setter for name
public void setName(String name) {
    this.name = name;
}
```

## Methods

Represent the behavior or actions that the object can perform.

They are defined as functions or procedures inside the class.

Can be static or non-static

### Instance Methods (Non-static)

They require an object to be called.

```java
public class Car {
    public void start() {
        System.out.println("Car started.");
    }
}
```

```java
Car myCar = new Car();
myCar.start(); // Call instance method 2. Static Methods
```

### Static Methods

Belong to the class, not the object.

only one copy of a static variable shared by all objects of that class

```java
public class MathHelper {
    public static int square(int x) {
        return x * x;
    }
}
```

```java
int result = MathHelper.square(5); // Call static method
```

## Object

Objects are instances of classes, meaning they are created based on the blueprint provided by the class.

```java
Car myCar = new Car("red", 200); // Calls the constructor
```
