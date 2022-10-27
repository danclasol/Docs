# Funciones nativas de eventos

## <a>

Cuando un enlace tiene definido un `src`, al pulsar sobre el nos redireccionará hacia la ruta del enlace.

```html
<a src="www.web.com" />
```

## <form>

Por defecto, el ultimo botón de un formulario será de tipo `type='submit'`.

Por lo que al pulsarlo, se lanzará el evento `submit` del formulario.

```html
<form>
  <input type="text" name="name" />
  <input type="text" name="email" />
  <input type="password" name="password" />
  <button>Save</button>
</form>
```

```js
const submitFormHandler = (event) => {
  const { name, email, password } = event.target;
};
```

Cuando se produce el `submit` automáticamente se recarga la página.

Esto puede ser un problema con formularios, ya que se resetearán todos los campos.

## Evitar comportamiento nativo

- Desde HTML - simplemente devovliendo false evitamos el comportamiento nativo

```html
<a href="www.google.es" onclick="alert('Navegando') return false;"></a>
```

- Desde Js

Mediante la función `preventDefault()` evitamos que se ejecute el comportamiento nativao del evento.

Si lo ponemos al prinicipio, no se ejecutará nada y podremos controlar completamente lo que ocurra.

```js
const eventSubmitHandler = (event) => {
  event.preventDefault();

  // custom code for submit
};
```
