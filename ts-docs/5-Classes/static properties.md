# Static Properties

The properties and methods of the _classes_ defined so far are instance properties, meaning that they are instantiated and called on each instance of the _class_ object.

There is another type of property called a `static` property. `Static` properties and methods are shared by all _instances_ of a class.

## Static properties

```ts
class Car {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    Car.numberOfCars++; // Increments the value of the static property
  }
  // ...
}
```

## Static methods

A `static` method is also shared across instances of the class.

To declare a static method, you use the static keyword before the method name.

```ts
public static getNumberOfCars(): number {
    return Car.numberOfCars;
}
```

We don't need to instanciate any class object to access to a static method.

```ts
console.log(Car.getNumberOfCars); // 2
```
