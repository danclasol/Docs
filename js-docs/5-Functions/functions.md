# Tipos

- Funciones con nombres o nombradas
- Funciones anónimas o function expression
- Callbacks
- Funciones autoejecutables
- Clausuras
- Generadoras

## Funciones con nombres o nombradas

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
