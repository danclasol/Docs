# EventEmiter

Al igual que los eventos en _JavaScript_ en la web, en _Node.js_, también tenemos un sistema similar para eventos, usando el módulo `events`.

Este módulo, nos ofrece la clase `EventEmitter`, que nos permite manejar eventos en _Node.js_.

Gran cantidad de librerias de _Node.js_ extienden de esa clase para manejar eventos.

## Parameters

- `captureRejections` (boolean): habilita la captura de los _rejects_ de las promesas.
  - Por defecto, es _false_

```js
import { EventEmitter } from "events";

const eventEmitter = new EventEmitter();
const eventEmitter = new EventEmitter({ captureRejections: true });
```

# Métodos

## events.on()

Método para agregar una funcion de listener que se ejecutará cuando se dispare el evento.

Es posible declar los parámetros que le llegarán al listener.

```js
eventEmitter.on('start'. (parameter1, paremetro2, etc) => console.log('started',parameter));
```

Es lo mismo que usar el `addEventListener`

```js
event.addEventListener('start'. (parameter1, paremetro2, etc) => console.log('started',parameter));
```

## events.emit()

Método que hace que el evento se ejecute.

Es posible pasarle parámetros al listener.

```js
eventEmitter.emit("start", parameter);
```

## events.once()

Método que hace que el evento se ejecute una sola vez.

A diferencia del `emit`, si emitimos el evento varias veces seguidas, este solo se ejecutará una vez.

```js
eventEmitter.emit("start", parameter); // solo se ejecuta el primero
eventEmitter.emit("start", parameter);
eventEmitter.emit("start", parameter);
```

## events.removeListener

Permite eliminar un listener asignado a un evento.

Para que la funcion identifique el listener a eliminar, es necesario que esté declarado previamente.

```js
const eventHandler = () => console.log("started");
eventEmitter.removeListener("start", eventHandler);
```

## events.removeAllListener

Permite eliminar todos los listeners asignados a un evento.

```js
eventEmitter.removeListener("start");
```

# Errors

Cuando un error ocurre en un `EventEmitter`, lo normal es que el evento `error` se emita. Si este evento no tiene registrado ningun listener, cuando se emita, se producirá la interrupción del proceso de _Node_.

Podemos controlar los errores, añadiendo un listener al evento _error_, de esta manera se ejectura la función, si se produce un error.

```js
const myEmitter = new MyEmitter();
myEmitter.on("error", (err) => {
  console.error("whoops! there was an error");
});
myEmitter.emit("error", new Error("whoops!"));
// Prints: whoops! there was an error. Node process does not stop.
```

## errorMonitor

Podemos usar el _symbol_ errorMonitor para monitorear el evento `error`.

Los listeners asociados a este symbol son ejecutados antes de los listeners normales de `error`.

Usar estos symbols no altera el comportamiento del los listeners normales.

```js
import { EventEmitter, errorMonitor } from "events";

const emmiter = new EventEmitter();

emitter.on(errorMonitor, (err)=> console.log("Enviar error al monitor");)
```

## asynchronous error

Al crear el objeto `EventEmitter`, debemos pasarle el parámetro `captureRejections` como `true`, para activar que capture los _rejects_ de las promesas.

```js
eventEmitter.on(
  "async",
  (message) =>
    new Promise((resolve, reject) => {
      const random = Math.random();

      if (random < 0.5) reject(new Error("Fatal Error!"));
      else resolve(console.log(message));
    })
);

eventEmitter.emit("async", "My message");
```
