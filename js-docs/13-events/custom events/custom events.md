# Custom events

Custom events can be created in two ways:

- Using `Event` constructor
- Using `CustomEvent` constructor

# Events

Hay que crear una instacia del objeto `Event`.

```js
const myEvent = new Event("myevent", options);
```

Como opciones podemos encontrar las siguiente opciones:

- bubbles: indica si el evento debe de hacer bubbling o no.
- composed: indica si la propagación puede atravesar Shadow DOM o no.
- cancelable: indica si el comportamiento se puede cancelar o no (`preventDefault`)

## Ejemplo

Creamos nuestro evento personalizado

```js
const myEvent = new CustomEvent("myevent", {
  bubbles: true,
  cancelable: true,
  composed: false,
});
```

Establecemos lo que queremos que ocurra cuando se ejecute el evento.

```js
document.addEventListener("myevent", (ev) => {
  console.log("Event triggered");
});
```

Así, podemos lanzar directamente nuestro evento.

```js
document.dispatchEvent(myEvent);
```

# CustomEvent

Hay que crear una instancia objeto `CustomEvent`.

La diferencia con los `Event` es que permite añadir información adicional en el objeto de opciones con la propiedad `detail`.

```js
const myCustomEvent = new CustomEvent("message", options);
```

Como opciones podemos encontrar las siguiente opciones:

- detail: contiene la información que queremos transmitir. Only recommended simple data as strings or primitive properties.
- bubbles: indica si el evento debe de hacer bubbling o no.
- composed: indica si la propagación puede atravesar Shadow DOM o no.
- cancelable: indica si el comportamiento se puede cancelar o no (`preventDefault`)

## Ejemplo

Creamos nuestro evento personalizado

```js
const myEvent = new CustomEvent("mycustomevent", {
  detail: "Hello!",
});
```

Establecemos lo que queremos que ocurra cuando se ejecute el evento.

```js
document.addEventListener("myCustomEvent", (ev) => {
  console.log(ev.detail); // mostrar detail: "Hello!"
});
```

Así, podemos lanzar directamente nuestro evento.

```js
document.dispatchEvent(myEvent);
```

# Event vs CustomEvent

- Los `Event` se usan solamente para eventos reales del navegador, mientras que los `CustomEvent`, los usaremos para controlar alguna acción determinada con un nombre y funcionamiento personalizado
- Los `CustomEvent` permiten añadir información adicional al crear el objeto, mientras que el objeto `Event` no lo permite.
