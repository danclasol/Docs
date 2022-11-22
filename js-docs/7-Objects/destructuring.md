# Destructuring

La destructuración nos da una manera de extraer datos de objetos o arreglos y asignarlos a variables.

Hasta ahora, si quisiéramos asignar los valores a variables deberíamos hacerlo de la manera:

```js
const person = { name: "Peter", surname: "Smith", age: 30 };

const name = person.name;
const surname = person.surname;
const age = person.age;
```

Con destructuring, podemos utilizar esta siguiente sintaxis mas sencilla:

```js
const person = { name: "Peter", surname: "Smith", age: 30 };

const { name, surname, age } = person;

console.log(name); // Peter
console.log(surname); // Surname
console.log(age); // Ag
```

Tambien podemos renombrar las variables de la siguiente forma:

```js
const person = { name: "Peter", surname: "Smith", age: 30 };

const { peterName: name, peterSurname: surname, peterAge: age } = person;

console.log(peterName); // Peter
console.log(peterSurname); // Surname
console.log(peterAge); // Age
```

# Spread operator

Con el spread operator podemos obtener todos los elementos restantes de un objeto que no hayamas seleccionado en el destructuring.

De esta manera, crearemos las variables primero, segundo, tercero y restoElementos que será un objeto con el resto de elementos.

```js
const person = { name: "Peter", surname: "Smith", age: 30 };

const { age, ...restPerson } = person;

console.log(name); // 30
console.log(restPerson); // {name: "Peter", surname: "Smith"}
```

# Nested objects

Cuando tenemos objetos que tienen como propiedades otro objeto, podemos 2 opciones para destructurarlos:

- Podemos destructar primero el objecto y despues destructuramos la propiedad objeto

```js
const person = {
  name: "Peter",
  surname: "Smith",
  age: 30,
  address: {
    street: "Fake Street, 123",
    postalCode: 88686,
  },
};

const { name, address } = person;

console.log(name); // Peter
console.log(address); //  {street: "Fake Street, 123", postalCode: 88686}

const { street, postalCode } = address;

console.log(street); // Fake Street, 123
console.log(postalCode); // 88686
```

Otra forma que tenemos es hacerlo en una sola linea.

Tener en cuenta que si tenemos objetos con mas de un nivel de anidamiento, se puede volver un poco ilegible.

```js
const {
  name,
  address: { street, postalCode },
} = person;

console.log(name); // Peter
console.log(street); // Fake Street, 123
console.log(postalCode); // 88686
```

# Casos útiles

## Intercambio de variables

La forma normal, sería crear una variable intermedia para almacener el primer objeto para no perder sus datos.

```js
let var1 = "Dog";
let var2 = "Cat";

let aux = var1;
var1 = var2;
var2 = aux;

console.log(var1); // Cat
console.log(var2); // Dog
```

Con destructuring podemos hacerlo en una sola línea y sin utilizar variables intermedias.

```js
let var1 = "Dog";
let var2 = "Cat";

[var2, var1] = [var1, var2];

console.log(var1); // Cat
console.log(var2); // Dog
```

## Parámetros de funciones

Tambien podemos destructurar los parametros objeto de una funcion.

Con esta destructuracion tendremos las variables creadas para usarlas directamente, ahorrandonos tener que utilizar el `person.`

```js
const person = {
  name: "Peter",
  surname: "Smith",
  age: 30,
  address: {
    street: "Fake Street, 123",
    postalCode: 88686,
  },
};

function getFullName (persona) {
    return `${persona.name} ${persona.surname}`;
}

function getFullNameWithDestructuring ({name, surname}, anotherParam) => {
    return `${name} ${surname}`;
}

console.log(getFullName(person));
console.log(getFullNameWithDestructuring(person, "Another param"));
```

## Return de funciones

Si una funcion devuelve un objeto o un array, podemos destructurar el return.

### Array

```js
function getSalary() {
  return [970, 1020, 980, 1123];
}

const [salary1, salary2, salary3, salary4] = getSalary();
```

### Objects

```js
function getSalary() {
  return { name: "Peter", surname: "Smith" };
}

const { name, surname } = getSalary();
```
