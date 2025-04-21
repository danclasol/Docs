# Inherence

Inheritance allows one class (called a subclass or child class) to inherit the properties and methods of another class (called a superclass or parent class).

- code reusability
- hierarchy modeling
- polymorphism

## Implement inherence

Use the keyword `extends` to inherits from another class.

- child class gets all public/protected members from the parent class

### Superclass

```java
public class Animal {
    String name;

    public Animal(String name) {
        this.name = name;
    }

    public void eat() {
        System.out.println(name + " is eating.");
    }
}
```

### Subclass

```java
public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }

    public void bark() {
        System.out.println(name + " says: Woof!");
    }
}
```

Using Subclass

```java
Dog myDog = new Dog();
myDog.name = "Buddy";   // Inherited from Animal
myDog.eat();            // Inherited method
myDog.bark();           // Method from Dog class
```

## `super` keyword

Used the `super` keyword to:

- call the superclass's constructor

```java
public Dog(String name) {
    super(name); // Call constructor of Animal
    this.name = name;
}
```

- access superclass methods/fields

```java
public void display() {
    super.eat(); // call Animal’s version of eat()
    System.out.println("Dog-specific behavior.");
}
```
