# Generic classes

_TypeScript_ allows you to create generic classes with one or multiple generic types in the paremeter list.

Placing the type parameter on the class allows you to develop methods and properties that work with the same type.

```ts
class className<T, U> {
  private _value: T;
  private _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }
  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}
```

Also, can be applied generic constraints to the class

```ts
class className<T extends TypeA> {
  //...
}
```

To create an object of the class you have to pass in the variable types for the generic types, and also the argument values.

```ts
let processor = new processIdentity<number, string>(100, "Hello");
processor.getIdentity(); // Displays 'Hello'
```
