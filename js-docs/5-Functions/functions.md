# Funciones con nombres o nominales

```js
function saludar(nombre, apellidos) {
  return `Hola ${nombre} ${apellidos}`;
}

const resultado1 = saludar("Juan"); // El segundo parametro llegara como undefined
const resultado2 = saludar("Pepe", "Mellado");
const resultado3 = saludar("Pepe", "Mellado", "España"); // Ignora el ultimo parametros3
```
