# Access Modifiers

In _TypeScript_, you can control the visibility of class members by adding the following keywords before the member name:

- `public`: default access modifier. Allows access from any location
- `private`: allows access only within the same class
- `protected`: allows access within the same class and subclasses

## public

If you don’t specify any access modifier for properties and methods, they will take the public modifier by default.

```ts
class Car {
  _make: string;
  _color: string;
  _doors: number;

  getDescription(): string {
    return `${this._make} ${_color} ${_doors}`;
  }
}
```

The direct access to the property is allowed.

```ts
let myCar1 = new Car("Cool Car Company", "blue", 2);
console.log(myCar1._make);
```

## private

To add the protected modifier to a property or a method, you use the protected keyword.

```ts
class Car {
  private _make: string;
  private _color: string;
  private _doors: number;
  // ...
}
```

The direct access to the property is not allowed.

```ts
let myCar1 = new Car("Cool Car Company", "blue", 2);
console.log(myCar1._make); // compile error
```

## protected

A property set as `protected` will be only accessible within the _Car_ class or a class that inherits from _Car_ class

```ts
class Car {
  protected _make: string;
  _color: string;
  _doors: number;
  // ...
}
```
