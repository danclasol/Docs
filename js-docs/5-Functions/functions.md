# Tipos

- Funciones con nombres o nombradas
- Funciones anónimas
- Callbacks
- Funciones autoejecutables
- Clausuras
- Generadoras

# Funciones con nombres o nombradas

Este tipo de función exisitirá a lo largo de todo el código.

Sera posible ejecutar la función incluso antes de haberla creado y funcionará correctamente, ya que Javascript primero busca las declaracioens de funciones y luego procesa el resto del código.

```js
function saludar(nombre) {
  return `Hola ${nombre}`;
}
```

```js
saludar("Juan");
```

# Obligatoriedad de parámetros

En Javascript, no es obligatorio pasar todos los parametros a una funcion.

Los parámetros que no mandemos a la funcion, los recibira como `undefined`

```js
function saludar(nombre, apellidos) {
  return `Hola ${nombre} ${apellidos}`;
}

const resultado1 = saludar("Juan"); // El segundo parametro llegara como undefined
const resultado2 = saludar("Pepe", "Mellado");
const resultado3 = saludar("Pepe", "Mellado", "España"); // Ignora el ultimo parametros3
```
