# Abstrac Classes

An abstract class in Java is a class that cannot be instantiated, they are meant to be inherited from

- define common properties/methods for related classes
- force subclasses to implement specific behavior
- reuse code without instantiating the base class

- cannot be `private`

## Creation

### Properties

Abstract class can have properites.

- should be `protected` so only subclasses can access them.

### Constructor

Although an abstract class cannot be instanciate, they can have constructors. But are only goning to be used by the subclasses

- should be `protected`, only subclasses should execute the constructor

### Methods

Methods in abstract classes can be:

- abstract methods:
  - without a body
  - subclasses must override them
  - at least one method must be abstract
- concrete methods:
  - regular method with a body
  - shared behavior that subclasses can use
  - can be override in subclass (optional)

```java
public abstract class Animal {
    protected String name;

    protected Animal(String name) {
        this.name = name;
    }

    // Abstract method (no body)
    public abstract void makeSound();

    // Concrete method (with body)
    public void sleep() {
        System.out.println(name + " is sleeping...");
    }
}
```

## Inherit abstract class

```java
class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    // Must implement the abstract method
    @Override
    public void makeSound() {
        System.out.println(name + " says: Woof!");
    }
}
```

## Using class

```java
public class Main {
    public static void main(String[] args) {
        // Animal a = new Animal("Creature"); // ❌ Error! Can't instantiate abstract class

        Dog d = new Dog("Buddy");
        d.makeSound();  // Buddy says: Woof!
        d.sleep();      // Buddy is sleeping...
    }
}
```
