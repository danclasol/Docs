# Eventos de ratón

## `click`

El evento "click" se dispara cuando se presiona el botón de un dispositivo de entrada (Mouse o Mousepad) sobre un elemento.

```js
button.addEventListener("click", () => {});
button.onclick = () => {};
```

## `dblclick`

Cuando pulsamos dos veces seguidas el botón izquierdo del ratón

```js
box.addEventListener("dblclick", () => {});
box.ondblclick = () => {};
```

## `mouseenter`

Cuando entramos en la zona que tiene el evento

```js
box.addEventListener("mouseenter", () => {});
box.ondblclick = () => {};
```

## `mouseleave`

Cuando salimos de la zona que tiene el evento

```js
box.addEventListener("mouseleave", () => {});
box.onmouseleave = () => {};
```

## `mousedown`

Cuando pulsamos el boton izquierdo del ratón

```js
box.addEventListener("mousedown", () => {});
box.onmousedown = () => {};
```

## `mouseup`

Cuando soltamos el boton izquierdo del ratón

```js
box.addEventListener("mouseup", () => {});
box.onmouseup = () => {};
```

## `mousemove`

Cuando movemos el ratón

```js
box.addEventListener("mousemove", () => {});
box.onmmousemove = () => {};
```

## `wheel`

Fires when the user rotates a wheel button on a pointing device (typically a mouse).

Don't confuse the wheel event with the scroll event. The default action of a wheel event is implementation-specific, and doesn't necessarily dispatch a scroll event.

### Properties

- `deltaX`: returns the horizontal scroll amount.

- `deltaY`: returns the vertical scroll amount.

- `deltaZ`: returns the scroll amount for the z-axis.

- `deltaMode`: returns the unit of the `delta` values' scroll amount.

```js
element.addEventListener("wheel", zoom, { passive: false });
element.onwheel = () => {};
```
