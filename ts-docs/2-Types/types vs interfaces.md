# Types Alias vs Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely.

TypeScriot Oficial documentation, recommens to use interface until you need to use features from type.

# Differences

Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

## Features only available on type alias

- Union types
  - There no way to achieve this with interfaces

```ts
type ManagementEmployee = Employee | Manager;
```

- Tuples
  - There no way to achieve this with interfaces

```ts
type Employees = [Employee, number];
```

## Features only available on interfaces

- Declaration merging
  - If we declare two interface with the same name, properties will be merged.
  - If we declare two types with the same name, it will cause an error.
  - Is not very clear the use of this feature

```ts
interface Employee {
  firstName: string;
  lastName: string;
}

interface Employee {
  age: number;
}
```

# Structural typing

Each one has a different declaring sintax but we can achieve the same result using types or interfaces.

### Types Alias

Each one has a different declaring sintax but we can achieve the same result using types or interfaces.

```ts
type Employee = {
  firstName: string;
  lastName: string;
  age: number;
};

const Manager: Employee = {
  firstName: "Peter",
  lastName: "Smith",
  age: 33,
};
```

### Interfaces

```ts
interface Employee {
  firstName: string;
  lastName: string;
  age: number;
}

const Manager: Employee = {
  firstName: "Peter",
  lastName: "Smith",
  age: 33,
};
```

# Declaring Functions

Each one has a different declaring sintax but we can achieve the same result using types or interfaces.

### Types alias

```ts
type sayHello = (name: string) => string;

const sayHelloFn: sayHello = (name) {
  return `Hello, my name is ${name}`;
};
```

### Interfaces

```ts
interface sayHello {
  (name: string): string;
}

const sayHelloFn: sayHello = (name) => {
  return `Hello, my name is ${name}`;
};
```

# Extending

### Types

Types can not be extended but we can use union and intersection types to merge different type alias.

The interface that extends contains all properties of both interfaces.

```ts
type Employee = {
  firstName: string;
  lastName: string;
  age: number;
};

type Manager = Employee & { team: string };
```

### Interfaces

The interface that extends contains all properties of both interfaces.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  age: number;
}

interface Manager extends Employee {
  team: string;
}
```

We can also mix interfaces and types

```ts
interface Employee {
  firstName: string;
  lastName: string;
  age: number;
}

type Manager =  Employee && {team: string}
```

# Class implements

### Types

```ts
type Employee = {
  firstName: string;
  lastName: string;
  age: number;
};

class Manager implements Employee {
  firstName: string;
  lastName: string;
  age: number;

  //...
}
```

### Interfaces

```ts
interface Employee {
  firstName: string;
  lastName: string;
  age: number;
}

class Manager implements Employee {
  firstName: string;
  lastName: string;
  age: number;

  //...
}
```
