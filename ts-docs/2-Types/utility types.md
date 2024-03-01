# Record<Keys, Type>

Constructs an object type whose property keys are Keys and whose property values are Type. This utility can be used to map the properties of a type to another type.

```ts
interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris;
```

# ReturnType<Type>

Constructs a type consisting of the return type of function Type.

```ts
declare function f1(): { a: number; b: string };

type T0 = ReturnType<() => string>; // type T0 = string
type T1 = ReturnType<(s: string) => void>; // type T1 = void
type T2 = ReturnType<<T>() => T>; // type T2 = unknown
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; //type T3 = number[]

type T4 = ReturnType<typeof (): { a: number; b: string }>; // type T4 = {a: number;b: string;}
type T5 = ReturnType<any>; // type T5 = any
type T6 = ReturnType<never>; // type T6 = never
type T7 = ReturnType<string>; //Type 'string' does not satisfy the constraint '(...args: any) => any'.
type T8 = ReturnType<Function>; // Type 'Function' does not satisfy the constraint '(...args: any) => any'.
```
