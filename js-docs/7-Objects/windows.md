# Object Window

En un entorno JS tiene que haber un objecto padre, en el navegador este objecto es `window`

Este objeto window siempre existe en el navegador sin nosotros crear nada

En nodejs el objeto global no es `window`, sino `global`

Por ejemplo el `console.log()`

- `console` es un objeto dentro de window, que tiene dentro una funcion `log`
- Funciona sin poner window por como funciona js.
- En primer lugar busca en nuestros codigo si existe alguna variable con ese nombre
- Sino encuentra nada, sigue buscando hacia arriba ahsta llegar al window
- Si tampoco existiera nada en window ya daria un error de que no encuentra no existe

```js
console.log("Hola");
window.console.log("Hola");
```

## Mas ejemplos

```js
window.alert("Hola");
window.Number();
window.Boolean(5);
```
