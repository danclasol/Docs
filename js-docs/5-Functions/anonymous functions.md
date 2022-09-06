# Funciones anonimas

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
