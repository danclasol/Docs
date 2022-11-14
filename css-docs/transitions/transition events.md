## Eventos de transición en JavaScript

Para tener mayor control sobre las transiciones a través de JavaScript tenemos cuatro eventos que se lanzan.

- `transitionrun`: Este evento se lanza cuando se crea la transición, ignora el delay

```js
const box = document.getElementById("box");

box.addEventListener("transitionrun", (e) => {
  console.log(e);
});
```

- `transitionstart`: Este evento se lanza cuando empieza a transicionar el elemento, respeta el delay

```js
const box = document.getElementById("box");

box.addEventListener("transitionstart", (e) => {
  console.log(e);
});
```

- `transitionend`: Este evento se lanza al terminar la transición.

```js
const box = document.getElementById("box");

box.addEventListener("transitionend", (e) => {
  console.log(e);
});
```

- `transitioncancel`: Este evento se lanza cuando se cancela la transición.

```js
const box = document.getElementById("box");

box.addEventListener("transitioncancel", (e) => {
  console.log(e);
});
```

El evento que más veces se suele utilizar es `transitionend`, ya que lo podemos utilizar para lanzar una acción cuando termine la transición.

Por ejemplo:

```js
const box = document.getElementById("box");

box.addEventListener("transitioncancel", (e) => {
  console.log(e);

  if (e.elapsedTime === 1) {
    box.classList.add("aqua");
  }
});
```
