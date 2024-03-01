### Create indexable types

We can use `indexable types` to define data structures that allow dynamic access to their properties through indices.

Useful when working with objects that may have an unknown set of properties, or when you want to provide a more dynamic interface for accessing data.

```ts
interface MyIndexableType {
  [key: string]: number;
}

const myObject: MyIndexableType = {
  a: 1,
  b: 2,
  c: 3,
};
```

Access to properties dynamically

```ts
console.log(myObject.a); // Salida: 1
console.log(myObject.b); // Salida: 2
console.log(myObject.c); // Salida: 3
```

Access to properties dynamically using an index

```ts
const dynamicKey = "b";
console.log(myObject[dynamicKey]); // Salida: 2
```
