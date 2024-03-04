# Generic interfaces

_TypeScript_ allows to declare generic interfaces and implement it in a class.

You can use generics in an interface declaration by replacing the type annotations with type variables.

```ts
interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}
```

Using the generic interface as an object type

```ts
let returnNumber: Identity<number, string> = {
  value: 25,
  message: "Hello!",
};
let returnString: Identity<string, number> = {
  value: "Hello!",
  message: 25,
};
```

## Generic interface as a function type

You can also declare a generic interface as a function type.

Notice that the method doesn't have a name. By doing this, you can apply it to any function with a matching type signature.

```ts
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;
}
```

Declare a function that has the same type signature as the generic interface

```ts
function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
```

Declare a function type variable with the generic interface as the variable type, passing in the generic types. Then, assign the function to it.

You can now use this variable as a function in your code and TypeScript will verify the types.

```ts
let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, "Hello!"); // OK
let returnString1 = processor("Hello!", 100); // Type check error
```

## Generic interface as a class type

You can also declare a generic interface and implement it in a class.

```ts
interface ProcessIdentity<T, U> {
  value: T;
  message: U;
  process(): T;
}
```

Create a class that implements the generic interface.

Note that the name of generic types of the interface (_T_, _U_) doesn't have to be the same as the generics of the class (_X_, _Y_)

```ts
class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
  value: X;
  message: Y;
  constructor(val: X, msg: Y) {
    this.value = val;
    this.message = msg;
  }
  process(): X {
    console.log(this.message);
    return this.value;
  }
}
```

You can now create an object passing in the variable types for `X` and `Y`. and also the argument values.

```ts
let processor = new processIdentity<number, string>(100, "Hello");
processor.process(); // Displays 'Hello'
processor.value = "100"; // Type check error
```

If we don't specif the types when declaring the class, Typ_eScipt will determinate the types using inference.

```ts
let processor = new processIdentity(100, "Hello");
processor.process(); // Displays 'Hello'
processor.value = "100"; // Type check error
```
