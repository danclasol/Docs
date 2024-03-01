# Readonly properties

Properties can be made readonly by using the `readonly` modifier.

`Readonly` properties may only be set when initialized at their declaration or in the constructor.

```ts
class Car {
  readonly _make: string;
  private _color: string;
  private _doors: number;
  // ...
}
```

Any attempt to reassign the readonly property fill result in an error:

```ts
let myCar1 = new Car("Cool Car Company", "blue", 2);
myCar1._make = "Coolest Car Company";
```
