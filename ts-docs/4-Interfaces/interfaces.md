# interface

`Interfaces` can describe an object, name and parameteres object's types, and to compose existing named object types into new ones.

Interfaces have no run-time representation; they are purely a compile-time construct.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

Implement an interface by declaring a variable of the type of the `Interface`

```ts
let employee: Employee = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

employee.firstName = 10; //* Error - Type 'number' is not assignable to type 'string'
```

## Optional properties

Properties can be marked as _optional_ by adding a question mark `?` to the end of their names.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
  age?: number;
}
```

## Readonly properties

Add the `readonly` keyword in front of the property name to ensure that it can only be assigned a value when the object is first created.

```ts
interface Employee {
  id: readonly string;
  firstName: string;
  lastName: string;
  fullName(): string;
}
```
