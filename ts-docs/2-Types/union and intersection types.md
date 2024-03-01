# Union types

A `union` type describes a value that can be one of several types.

The `union` type restricts the assignment of values to the specified types in the union, whereas the `any` type has no restrictions.

Another reason is Intellisense support.

A `union` type uses the vertical bar or pipe (|) to separate each type.

```ts
let multiType: number | boolean;
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = "twenty"; //* Invalid
```

Using type guards, you can easily work with a variable of a union type.

- _add_ function accepts two values that can be either a _number_ or a _string_
- if both values are _number_ types, it adds them
- if both values are _string_ types, it concatenates them

```ts
function add(x: number | string, y: number | string) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
  throw new Error("Parameters must be numbers or strings");
}
console.log(add("one", "two")); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add("one", 2)); //* Returns error
```

# Intersection types

An `intersection` type combines two or more types to create a new type that has all properties of the existing types.

An `intersection` allows you to add together existing types to get a single type that has all the features you need.

An Intersection type uses the ampersand `&` to separate each type.

```ts
type Employee = {
  employeeID: number;
  age: number;
};

type Manager = {
  stockPlan: boolean;
};

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};
```
