# Destructuring

La destructuración nos da una manera de extraer datos de objetos o arreglos y asignarlos a variables.

Hasta ahora, si quisiéramos asignar los valores a variables deberíamos hacerlo de la manera:

```js
const array = ["pato", "gato", "perro"];

const primer = array[0];
const segundo = array[1];
const tercero = array[2];
```

Con destructuring, podemos utilizar esta siguiente sintaxis mas sencilla:

```js
const array = ["pato", "gato", "perro"];

const [primer, segundo, tercero] = array;
```

Si no queremos destructurar algun elemento del array, deberamos respetar su posicion.

En este caso, dejando vacio la primera posición, solo obtendremos las variables segundo y tercero.

```js
const [, segundo, tercero] = array;
```

# Spread operator

Con el spread operator podemos obtener todos los elementos restantes de un array que no hayamas seleccionado en el destructuring.

De esta manera, crearemos las variables primero, segundo, tercero y restoElementos que será un array con el resto de elementos.

```js
const array = ["pato", "gato"];

const [primero, segundo, tercero = "perro"] = array;
```

# Default values

Podemos declarar valores por defecto al destructurar un array, para el caso de que la variable extraida sea `undefinded`.

```js
const array = { name: "Peter", surname: "Smith" };

const { name, surname, age = 18 } = person;

console.log(name); // {name: "Peter"}
console.log(surname); // {surname: "Smith"}
console.log(age); // {age: 18}
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

## Return de funciones

Si una funcion devuelve un objeto o un array, podemos destructurar el return.

```js
function getSalary() {
  return [970, 1020, 980, 1123];
}

const [salary1, salary2, salary3, salary4] = getSalary();
```
