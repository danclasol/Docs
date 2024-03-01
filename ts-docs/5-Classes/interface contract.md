# Declare an interface to ensure class shape

`Interfaces` can define the shape or contract that a class should adhere to. This helps ensure that a class implements specific properties and methods.

```ts
interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}
```

Notice that the _interface_ includes the parameters of the constructor, not the properties.

- Including a private properties will raise an error, because the interface can only describe the public-facing side of the class and may not include private members.
- This prohibits you from using them to check that a class also has the correct types for the private side of the class instance.

## Implement interface

You can now implement the _Vehicle_ interface in the _Car_ class.

If a class doesn't implement all the required properties or methods defined in the interface, TypeScript will raise a compilation error.

```ts
class Car implements Vehicle {
  // ...
}
```

A _class_ can implement multiple interfaces to validate that it must provide implementations for all the properties and methods defined in those interfaces.

```ts
class Car implements Vehicle, Navigation, Engine {
  // ...
}
```
