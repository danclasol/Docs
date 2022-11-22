# Object Window

En un entorno JS tiene que haber un objecto padre, en el navegador este objecto es `window`

Este objeto window siempre existe en el navegador sin nosotros crear nada

En nodejs el objeto global no es `window`, sino `global`.

Este objeto contiene una seria de propiedades y métodos que estan a nuestra disposicion y que podemos utilizar directamente.

## Mas ejemplos

```js
window.alert("Hola");
window.Number();
window.Boolean(5);
```

# Objeto console

Es el objeto que contiene la consola del navegador

- `console` es un objeto dentro de window, que tiene dentro una funcion `log`
- Funciona sin poner window por como funciona js.
- En primer lugar busca en nuestros codigo si existe alguna variable con ese nombre
- Sino encuentra nada, sigue buscando hacia arriba ahsta llegar al window
- Si tampoco existiera nada en window ya daria un error de que no encuentra no existe

```js
console.log("Hola");
window.console.log("Hola");
```

# Objeto location

Es el objeto que contiene la barra de direcciones

https://developer.mozilla.org/es/docs/Web/API/Location

```js
location.href;
location.protocol;
location.host;
location.pathname;
location.hash;
location.reload();

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash);
location.reload();

location.href = "https://google.com";
```

# Objeto history

https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

```js
back();
forward();
go(n | -n);

length;
```
