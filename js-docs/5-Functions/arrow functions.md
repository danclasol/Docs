# Arrow functions

Nueva forma de escribir las funciones creadas a partir de ECMAScript 6, que ofrecen varias formas de simplicar la sintaxis

```js
const sumarOld = function (a, b) {
  return a + b;
};

const duplicarOld = function (numero) {
  return numero * 2;
};
```

# Sintaxis de las arrow functions

Ambas formas de escribir las funciones son equivalentes, obtienen el mismo resultado

```js
const sumar = (a, b) => {
  return a + b;
};

const duplicar = (numero) => {
  return numero * 2;
};
```

Si solo tenemos un parametro, podemos obviar los parentesis

\* Visual Studio Code, te pone automaticamente los parentesis, pero se puede configurar para que lo haga

```js
const duplicarSimple = (numero) => {
  return numero * 2;
};
```

Si la funcion solo tiene una linea, podemos obviar los corchetes y el return

```js
const sumarMasSimple = (a, b) => a + b;
const duplicarMasSimple = (numero) => numero * 2;

const suma = sumar(2, 3);
const multiplicacion = multiplicarPorDos(suma);

console.log(multiplicacion);
```
