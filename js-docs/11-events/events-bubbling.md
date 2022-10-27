# Event Bubbling

Cuando se activa el evento de un elemento se producen 3 fases:

- capturing
  - se empieza por la raiz `<html>` hacia abajo buscando el elemento mas profundo en el DOM que tenga regsitrado un evento en su listener
- target
  - comprobar si el elemento en el que se ha encontrado el evento tiene un listener asociado
  - si existe ejecuta el evento del elemento
- bubbling
  - va mirando si en los elementos padres tiene un mismo listener para el mismo tipo de evento ejecutado y los va ejecutando de manera automática
  - no todos los eventos tienen la fase de bubbling

## Ejemplo

En este caso si hacemos click en el boton, se ejecutará el `onclick` del boton.

Despues en la fase de `bubbling` encontrará que el `div` padre tambien tiene un listener de onclick y lo ejecutará también.

```html
<div onclick="console.log('event div')">
  <button onclick="console.log('event button')"></button>
</div>
```

## event.bubbles

Comprobar si un evento tiene bubbling con la propiedad `bubles`

```js
const eventHandler = (event) => {
  constole(event.bubbles);
};
```

## event.stopPropagation

Podemos parar manualmente la fase de bubbling con el método `stopPropagation`

```js
const eventSubmitHandler = (event) => {
  event.stopPropagation();
};
```

## event.cancelBubble

Con esta propiedad podemos comprobar si se ha parado manualmente la fase de bubbling.

Con `bubbles` obtenemos si originalmente un evento tiene bubbling y con `cancelBubble` si hemos provocado manualmente que se pare

```js
const eventSubmitHandler = (event) => {
  constole(event.bubbles);
  constole(event.bubbles);
};
```

# Delegación de eventos

Si tenemos una lista de elementos en un contendor padre, podemos delegar un evento al padre y al ejecutarse el evento comprobar a que elemento corresponde.

Así nos evitamos tener que asociar un listener a cada elemento de la lista.

- `target` - es el contenedor padre
- `currentTarget` - es el elemento hijo que ha provocado el evento

```js
const eventSubmitHandler = (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
};
```

# Eventos en capture

En ocasiones puede ser util ejecutar el evento en la fase de `capturing`.

Esto puede ser util para:

- Evitar asi la fase de `bubbling`
- Que se ejecute los evento en orden inverso, primero el padre y despues el hijo

```js
const clickBoton = () => {
  console.log("El usuario ha pulsado el boton");
};
const boton = document.getElementById("boton");

boton.addEventListener("click", clickBoton, { capture: true });
```
