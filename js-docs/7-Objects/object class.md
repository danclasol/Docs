# Static Methods

## Object.keys

Devuelve un array con las propiedades del objeto pasado como parámetro.

```js
const person = {
    name="Peter",
    surname="Clark",
    age= 30
};

console.log(Object.keys(person)); // ['name','surname','age']
console.log(Object.keys(person).lenght); // lenght: 3
```

## Object.values

Devuelve un array con los valores de las propiedades del objeto pasado como parámetro.

```js
const salaries = {
    january=1000,
    february=1200,
    march= 2000
};

console.log(Object.values(salaries)); // [1000,1200,2000]
```

Ejemplo. Obtener el salario total

```js
console.log(
  Object.keys(person).reduce((total, actual) => {
    return total + actual;
  }, 0)
); // lenght: 4200
```

## Object.entries

Devuelve un array con las propiedades y valores en `[clave, valor]` del objeto pasado como parámetro.

```js
const person ={
    name="Peter",
    surname="Clark",
    age: 30
};

console.log(Object.entries(person)); // ['name','Peter'],['surname','Clark'],['age','30']
```

Ejemplo. Transformar a mayusculas todas las cadenas del objeto.

```js
Object.keys(person).forEach((par) => {
  const clave = par[0];
  const valor = par[1];

  if (typeof valor === "string") {
    persona1[clave] = valor.toUpperCase();
  }
});

console.log(person); // {name: 'PETER, surname: 'CLARK', age: 30}
```

## Object.fromentries

Transforma una lista de clave-valor en un objeto

```js
const person = [
    ["name"="Peter"],
    ["surname"="Clark"],
    ["edad"=30]
];

console.log(Object.fromEntries(person)); // {name: "Peter", surname: "Clark", age: 30}
```

## Object.assign

Copia todas las propiedades de un objeto.

Tener en cuenta, que no hace una copia profunda de las propiedades que sean objetos.

```js
const person ={
    name="Peter",
    surname="Clark",
    age: 30,
    address: {
        street: "Fake Street, 123",
        city: "Springfield",
        country: "USA"
    }
};

const personCopy ={};

Object.assign(personCopy, person);

```
