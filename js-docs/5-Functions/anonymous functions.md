# Funciones anonimas

Las funciones anónimas o function expressions son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable y haciendo referencia a ella cada vez que queramos utilizarla.

```js
const saludarFunction = function (nombre, apellidos) {
  return `Hola ${nombre} ${apellidos}`;
};

const resultado1 = saludarFunction("Juan"); // El segundo parametro llegara como undefined
const resultado2 = saludarFunction("Pepe", "Mellado");
const resultado3 = saludarFunction("Pepe", "Mellado", "España"); // Ignora el ultimo parametros3
```

# Ventajas frente a funciones nominales

Las funciones anominas pueden ser pasadas como parametro a otras funciones, mientras que las nominales no

```js
const obtenerSaludo = function (nombre) {
  return `Hola ${nombre} ${apellidos}`;
};

const imprimirSaludo = function (mensaje) {
  console.log(mensaje);
};

const alertSaludo = function (mensaje) {
  alert(mensaje);
};

const saludar = function (obtenerSaludo, imprimirSaludo) {
  const saludo = obtenerSaludo("Pablo");
  imprimirSaludo(saludo);
};
```

Utilizamos la funcion anomina que imprime por consola

```js
saludar(obtenerSaludo, imprimirSaludo);
```

Utilizamos la funcion anomina que muestra una alerta

```js
saludar(obtenerSaludo, alertSaludo);
```

# Hoisting

El _hoisting_ es un término que se usa para describir cómo _JavaScript_ parece que mueve las declaraciones funciones al principio del código, de forma que las puedes usar incluso antes de declararlas.

En este caso, no se produce error al llamar a la funcion, debido a que _JavaScript_ durante la fase de compilación asigna en memoria las declaraciones de funciones. Por eso al ejecutarse el código tiene acceso a esa posicion de memoria a la que referiste la función.

```js
sum(1, 2); // 3

function sum(a, b) {
  return a + b;
}
```

Sin embargo, si usamos una function expression, el hoisting no se aplica y si se produciría un error al llamar a la función.

```js
sum(1, 2); // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b;
};
```
