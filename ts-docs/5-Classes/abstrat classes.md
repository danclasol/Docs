# Abstract Classes

An abstract class is a way to define common characteristics for a group of related clases.

Serve as a base class for subclasses which will implement all the abstract members.

Use the `abstract` keyword to define an abstract class.

```ts
abstract class Employee {
  private name: string;
  private salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }
}
```

## Abstract methods

An abstract method is one that hasn't had an implemention provided. It only defines the signature of the method without including the method body.

- An abstract method must be implemented in the derived class.
- An Abstract class has at least one abstract method
- Only can exists inside an abstract class

```ts
abstract calculateBonus(): number;
```

An abstract class can also have non-abstract methods that have the implementation in this abstract class.

```ts
displayDetails(): void {
  console.log(`Name: ${this.name}, Salary: $${this.salary}`);
}
```

## Inherit from abstract class

Abstract classes cannot be instantiated. They need to be inherit to a subclass.

- The fields will be inherited from the abstract class
- The abstract methods must be implemented in the subclass

```ts
class Developer extends Employee {
  private technology: string;

  constructor(name: string, salary: number, technology: string) {
    super(name, salary);
    this.technology = technology;
  }

  calculateBonus(): number {
    // Developers get a fixed bonus based on their technology
    return this.technology === "JavaScript" ? 500 : 300;
  }
}
```
