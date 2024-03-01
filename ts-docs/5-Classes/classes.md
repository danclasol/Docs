# Classes

`Classes` enable you to express common object-oriented patterns in a standard way, making features like inheritance more readable and interoperable.

A `class` encapsulates data for the object. Data and behavior are included in the class but the details of both can be hidden from the person who is working with the object in code.

# Class components

A class contains the following members: properties, a constructor, accessors, and methods.

```ts
class Car {
  // Properties
  // Constructor
  // Accessors
  // Methods
}
```

## Properties

Also referred to as fields, are the data (or attributes) for the object.

These are the defining characteristics of the object that you can set or return from your code.

```ts
// Properties
_make: string;
_color: string;
_doors: number;
```

## Constructor

Is a special function used to create and initialize objects based on the class.

When you create a new instance of the class, the constructor creates a new object with the class shape and initializes it with the values passed to it.

- A class may contain at most one constructor declaration.
- If a class contains no constructor declaration, an automatic constructor is provided.
- Multiple constructor declarations are not allowed.

```ts
constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
}
```

### Parameter list

Defines the parameters that will be passed to the new object when an instance is created

- It's not required to define a parameter for every property in the class.
- Parameters can be required or optional, have default values, or be rest parameters.

### Property assignment

Each statement assigns the value of a parameter to the value of a property.

- To indicate that you're accessing a member of the class (in this case, the property), apply the `this.` keyword.

- The underscore `_` before the property name isn't required in the property declaration but it provides a way to distinguish the property declaration from the parameters that are accessible through the constructor, while still tying the two together visually.

## Accessors

Are a type of function that you use to get or set the value of properties.

```ts
get color() {
    return 'The color of the car is ' + this._color;
}
set color(color) {
    this._color = color;
}
```

Properties can be read-only by simply omitting the set accessor in the class, or inaccessible by omitting the get accessor (the property will return undefined if you attempt to access it, even if it's assigned a value during initialization.)

## Methods

Are functions that define the behaviors or actions that the object can do.

You can call these methods to invoke the behavior of the object.

You can also define methods that are only accessible from within the class itself and are typically called by other methods in the class to perform a task.

```ts
// Methods
accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`
}
brake(): string {
    return `${this.worker()} is braking with the standard braking system.`
}
turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
}
// This function performs work for the other method functions
worker(): string {
    return this._make;
}
```

# Instantiate a class

Instantiates the _Car_ object with all parameters.

To instantiate a class declare a variable and assign a `new` _Car_ object to it, passing in values for the _make_, _color_, and doors parameters.

```ts
let myCar1 = new Car("Cool Car Company", "blue", 2);
```

You can now access the properties of the new instance.

```ts
console.log(myCar1.color); // This will call the accesor getColor
console.log(myCar1._color); // This will retrieve the property defined in the class
```
