# Interfaces

An interface is an abstract type that contains a collection of abstract methods and constant variables.

Think of it as a contract: any class that "signs" the contract (implements the interface) agrees to provide specific behaviors (methods).

They help achieve:

- abstraction
- polymorphism
- multiple inheritance in Java

In an interface, we’re allowed to use:

- constants variables
- abstract methods
- static methods
- default methods

## Creating interfaces

```java
public interface Electronic {

    // Constant variable
    String LED = "LED";

    // Abstract method
    int getElectricityUse();

    // Static method
    static boolean isEnergyEfficient(String electtronicType) {
        if (electtronicType.equals(LED)) {
            return true;
        }
        return false;
    }

    //Default method
    default void printDescription() {
        System.out.println("Electronic Description");
    }
}
```

### Constant variables

All variables in an interface are public static final by default.

## Abstract Method

All abstract methods must be override in the class.

Any class that implements this interface must provide a body for makeSound()

## Static Method

Static methods in interfaces are not inherited, they belong to the interface itself.

```java
boolean efficient = Electronic.isEnergyEfficient("LED");
System.out.println(efficient);  // prints: true
```

## Default Method

Default methods are inherited, so you can call them directly from the object:

```java
myPC.printDescription();  // prints: Electronic Description
```

You can also override it in your class if you want a custom version:

```java
@Override
public void printDescription() {
    System.out.println("This is a Computer.");
}
```

## Implementing Class

We can implement an interface in a Java class by using the `implements` keyword.

```java
public class Computer implements Electronic {

    @Override
    public int getElectricityUse() {
        return 1000;
    }
}
```

## Abstract Class vs Interface

Both are used to achieve abstraction, allowing developers to define the structure of a class without providing full implementation.

- use:

  - abstract: reusable base class
  - interface: contract / capability

- fields:

  - abstract: any type
  - interface: only constants

- methods:

  - abstract: abstract and concrete
  - interface: only abstract

- inheritance:
  - abstract: a class can only extend one class abstract
  - interface: a class can implement multiple interface
