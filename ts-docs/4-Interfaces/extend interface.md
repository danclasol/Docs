# Extend an interface

`Interfaces` can _extend_ each other. This enables you to copy the members of one interface into another, giving you more flexibility in how you separate your interfaces into reusable components.

When _extending_ an `interface` with one or more interfaces, these rules apply:

- You must implement all the required properties from all interfaces.
- Two interfaces can have the same property if the property has the exact same name and type.
- If two interfaces have a property with the same name but different types, you must declare a new property such that the resulting property is a subtype of both interfaces.

```ts
interface IceCream {
  flavor: string;
  scoops: number;
}

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: boolean;
}
```

# Extend multiple interfaces

An interface can extend multiple interfaces, creating a combination of all the interfaces.

In this example, the interface _C_ extends the interfaces _A_ and _B_. So _C_ has all the methods of _A_ and _B_ interfaces, which are _a()_, _b()_, and _c()_ methods.

```ts
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface C extends A, B {
  c(): void;
}
```

# Interfaces extending classes

An _interface_ can also extend a class. The interface inherits the properties and methods of the class. And also, private and protected members of the class, not just the public members.

It means that when an interface extends a class with private or protected members, the interface can only be implemented by that class or subclasses of that class from which the interface extends.

By doing this, you restrict the usage of the interface to only classes or subclasses of the class from which the interface extends.

If you attempt to implement the interface from a class that is not a subclass of the class that the interface inherited, you’ll get an error.

```ts
// Parent class
class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log("Generic animal sound");
  }
}

// Interface extending a class
interface Pet extends Animal {
  play(): void;
}

// Child class implementing the interface
class Dog extends Animal implements Pet {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Woof woof!");
  }

  play() {
    console.log("Dog is playing fetch.");
  }
}
```
