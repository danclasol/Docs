# Anonymous Classes

An anonymous class is a class without a name, declared and instantiated in a single expression.

You use it when you need a one-time implementation of a class or interface.

- often used with abstract classes, interfaces, or listener events.
- cannot define constructors
- keep code short and localized

## Common Use

- Perfect for:

  - event handlers (e.g. GUI or Android code)
  - threads or tasks with custom behavior
  - quick behavior customization (instead of creating a full subclass)

- Avoid if:
  - code gets too long or complicated → create a named class instead
  - need reuse → anonymous classes cannot be reused

## Syntax

- Type can be an interface or an abstract class

```java
Type name = new Type() {
    // class body (override methods)
};
```

## Using with an Interface

- no need to create a separate Dog class
- the behavior is defined right where it's needed

```java
interface Animal {
    void makeSound();
}

public class Main {
    public static void main(String[] args) {
        Animal dog = new Animal() {
            @Override
            public void makeSound() {
                System.out.println("Woof!");
            }
        };

        dog.makeSound();  // Output: Woof!
    }
}
```

## Using an Abstract Class

```java
abstract class Greeting {
    abstract void sayHello();
}

public class Main {
    public static void main(String[] args) {
        Greeting g = new Greeting() {
            @Override
            void sayHello() {
                System.out.println("Hello, there!");
            }
        };

        g.sayHello();  // Output: Hello, there!
    }
}
```
