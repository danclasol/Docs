# Object types

The object types are all `class`, `interface`, `array`, and `literal` types (anything that isn't a primitive type).

# class

`Classes` can model data, encapsulate functionality, provide templates, and numerous other uses.

As such, the components listed above are not required in every class you create. You may only need methods and a constructor for a utility object, or solely properties to manage data.

```ts
class Car {
  // Properties
  // Constructor
  // Accessors
  // Methods
}
```

# interface

`Interfaces` can describe an object, name and parameteres object's types, and to compose existing named object types into new ones.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

`Interfaces` are open-ended and can be extended, so when you declare two interfaces with the same name, TypeScript autommatically merges them.

```ts
interface Example {
  prop1: string;
}

interface Example {
  prop2: number;
}

const obj: Example = {
  prop1: "Hello",
  prop2: 42,
};
```

# type

A `type alias` is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.

`Type aliases` can act like interfaces; however, there are some subtle differences.

- type alias cannot be reopened to add new properties whereas an interface is always extendable.
- cannot declare two type alias with the same name, whereas an interface you can (extend interface)
- union or tuple can only be done by using a `type alias`

```ts
type Employee = {
  firstName: string;
  lastName: string;
  fullName(): string;
};
```

# array

Arrays can be written in one of two ways.

Using square brackets _[ ]_ to denote an array of that element type

```ts
let list: number[] = [1, 2, 3];
```

Using a generic Array type.

```ts
let list: Array<number> = [1, 2, 3];
```

We can use `union type` to create an array type where each element can be either a _number_ or a _string_.

```ts
let list: (number | string)[] = [1, "2", 3];
let list2: Array<number | string> = [1, "2", 3];
```

We can also represent matrices using arrays.

```ts
const list: number[][] = [
  [1, 2, 3],
  [1, 2, 3, 4],
];
```

# tuples

`Tuples` is an ordered collection of elements, where each element can have its own data type.

The difference with `arrays` is that, in tuples, you specify the type of each element individually, whereas in arrays each element has the same type.

```ts
let person1: [string, number] = ["Marcia", 35];
```

The element in the `tuple` array are fixed. The _person1_ tuple is an array that contains exactly one _string_ value and one _number_ value in that specific order.

```ts
let person1: [string, number] = [35, "Marcia"]; // Error
let person1: [string, number] = ["Marcia", 35, true]; // Error
```

Actually, `Tuples` can be mutated. Is possible to add element to the array using push.

```ts
type RGB = [number, number, number];

const rgb: RGB = [255, 255, 255];
rgb.push(4); // this is allowed
```

However, we can solved it using the property `readonly`

```ts
type RGB = readonly [number, number, number];

const rgb: RGB = [255, 255, 255];
rgb.push(4); // error
```

`Tuples` can contain more than two elements.

```ts
type CellValue = "X" | "0" | "";
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];
```

# literals

A `literal` is a more concrete subtype of a collective type. A literal type can be _string_, _number_, or _boolean_

`Literal` types are written as object, array, function, or constructor type literals and are used to compose new types from other types.

```ts
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid
```

```ts
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
```
