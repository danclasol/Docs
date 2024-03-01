# Inheritance

`Inheritance` inovles inheriting properties and methods from a parent class to another child class. This allows you to reuse the functionality of an existing class without rewriting it.

_JavaScript_ uses prototypal inheritance, not classical inheritance like _Java_ or _C#_. _ES6_ introduces the class syntax that is simply the syntactic sugar of the prototypal inheritance. TypeScript supports inheritance like _ES6_.

### Advantages

- Code reusability. code cand be reuse in many places and reduce redundancy
- Class base can derive to any number of subclasses in a hierarchy
- Instead of having to make code changes in many different classes that have similar functionality, you just need to make the changes once in the base class.

# Extend a class

You can extend the _Car_ class to create a new class called _ElectricCar_.

```ts
class ElectricCar extends Car {}
```

### Properties

You can declare unique properties

```ts
private _range: number;
```

### Constructor

The constructor for the subclass is different from the constructor for the base class in a few ways:

- The parameter list can include any of the properties of both the base class and the subclass.

- You must add the `super()` keyword to include the parameters from the base class.
  - The super keyword executes the constructor of the base class when it runs.
  - The super keyword must appear before any references to `this.` when referring to properties in the subclass.

```ts
// Constructor
constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
}
```

## Override a method

When you have a child class that _extends_ a parent class, and you want the child class to provide its own implementation for a method that is already defined in the parent class, you can override that method.

```ts
class ElectricCar extends Car {
  // Override the greet method
  charge() {
    console.log("Charging electricity!");
  }
}
```

Now, when you call the _charge()_ method on the _ElectricCar_ object, the _charge()_ method invoke is the overriden method declare in _ElectricCar_ class.

```ts
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.charge());
```
