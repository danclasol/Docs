# Polymorphism

The ability for a class to behave differently depending on the context.

- makes code flexible and extensible
- same method name can be used for different object types
- encourages interface-based programming

## Types of Polymorphism

### Compile-Time Polymorphism (Method overloading)

This happens within one class, when you define multiple methods with the same name, but different parameters.

- Decided at compile time based on the method signature

```java
class Printer {
    public void print(String text) {
        System.out.println("Printing text: " + text);
    }

    public void print(int number) {
        System.out.println("Printing number: " + number);
    }
}
```

### Runtime Polymorphism (Method overridding)

This happens when a subclass overrides a method from its superclass.

- decided at runtime which version to call based on the object's actual class

For example, we have 2 subclasses that inherit from a superclass

```java
// Superclass
class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound.");
    }
}

// Subclass 1
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog says: Woof!");
    }
}

// Subclass 2
class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat says: Meow!");
    }
}
```

Now, each

```java
public class Main {
    public static void main(String[] args) {
        Animal a1 = new Dog(); // Polymorphic reference
        Animal a2 = new Cat();

        a1.makeSound(); // Dog says: Woof!
        a2.makeSound(); // Cat says: Meow!
    }
}
```
