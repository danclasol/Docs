# Eventos nativos de elementos HTML

## `<a/>`

Cuando un enlace tiene definido un `src`, al pulsar sobre el nos redireccionará hacia la ruta del enlace.

```html
<a src="www.web.com" />
```

Podemos evitar este comportamiento de las siguientes maneras:

- Desde HTML - simplemente devolviendo false evitamos el comportamiento nativo

```html
<a href="www.google.es" onclick="alert('Navegando') return false;"></a>
```

- Desde Js

Mediante la función `preventDefault()` evitamos que se ejecute el comportamiento nativo del evento.

```js
const eventHandler = (event) => {
  event.preventDefault();

  // custom behaviour
};
```

## <form>

Por defecto, el ultimo botón de un formulario será de tipo `type='submit'`.

Por lo que al pulsarlo, se lanzará automáticamente el evento `submit` del formulario que provocará que se recargue la página.

Esto puede ser un problema con formularios, ya que se resetearán todos los campos.

Podemos evitar este comportamiento de las siguientes maneras:

- Desde HTML - cambiando el `type` del boton a uno diferente de `submit`

```html
<form>
  <input type="text" name="name" />
  <input type="text" name="email" />
  <input type="password" name="password" />
  <button type="button">Save</button>
</form>
```

- Desde Js

Mediante la función `preventDefault()` evitamos que se ejecute el comportamiento nativo del evento.

```js
const submitFormHandler = (event) => {
  event.preventDefault();

  const { name, email, password } = event.target;
};
```

# Drag and Drop

Al arrastrar ficheros a un elemento marcado como zona de `drop`, el navegador,por defecto, intentará abrir el fichero en una nueva pestaña.

Para evitar este comportamiento, tenemos que uso del evento `dragover`, que detecta cuando pasamos el fichero sobre la zona de `drop`.

```js
dropZone.addEventListener("dragover", (ev) => {
  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
});
```
