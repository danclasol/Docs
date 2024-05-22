# Parameters

## Orden parametros

El orden de los parametros importa, por lo que si cambiamos el orden, podemos tener comporamientos inesperados o errores.

## Obligatoriedad de parámetros

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

## Parámetros y argumentos

Los valores que recibe lla función se llaman parametros

```js
function sumar(a, b) {
  // parameters
  return a + b;
}
```

Los valores que pasamos a la función cuando la llamamos se llaman argumentos

```js
const resultadoSuma = sumar(2, 3);
```
