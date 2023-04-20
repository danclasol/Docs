# Side effects

Los side effects son:

- Desde el punto de vista del usuario es una accion secundaria.
- Desde el punto de vista del desarrollador son efectos secundarios de la accion principal.

Caracteristicas:

- Son consecuencias de otras acciones
- Se ejecutan despues de la accion principal
- El orden en que se ejecutan es irrelevante
- Implicaciones externas al DOM (por ejemplo, titulo pagina, windows.location, localStore, cookies)

Algunos side effects pueden provocar memory leak que afectan al rendimiento de la aplicacion, e incluso provocar que la aplicacion falle.

# Limpiar side effects

Dentro de la función del _useEffect_ podemos devolver una función, llamada _cleanup_, para limpiar los side effects que hayamos creado dentro del _useEffect_.

En la primera ejecución del _useEffect_, cuando se renderiza el componente, no se ejecutá esta funcion de _cleanup_.

- Se ejecuta el código del useEffect
- Devuelve la función de cleanup, para la siguiente ejecucion del _useEffect_

En las siguientes ejecuciones del useEffect:

- Se ejecuta primero este _cleanup_
- Se ejecuta el código del _useEffect_
- Devuelve de nuevo el _cleanup_ para la siguiente ejecucion del _useEffect_

Adicionalmente, este cleanup, tambien se ejecutará cuando se desmonte el componente.

## Cuando usar cleanup

- Siempre que tengamos setInterval, setTimeout
- Cuando asociemos eventos
- Cuando realizemos llamadas asincronas.

# Ejemplos

## Limpieza de tiempos de espera

Cuando usamos funciones de temporizadores como setInterval y necesitemos pararlo con la función clearTimeout.

Si no incluimos el clearTimeout en el cleanup, seguiria funcionando aunque el componente este desmontado.

```js
useEffect(() => {
  const intervalId = setInterval(() => {
    // do something
  }, 1000);

  // parar interval
  return () => clearInterval(intervalId);
}, []);
```

## Cancelación de una solicitud de recuperación

Cuando realizamos llamadas con fetch, podemos cancelar la peticion con _AbortController_.

Cuando se ejecute el cleanup, el controllador aboratará la ultima peticion realizada, y se generará una nueva petición.

Evitando realizar varias llamadas simultaneas.

```js
useEffect(() => {
  const signal = new AbortController();

  // asociamos el controlador con la solicitud
  fetch(url, { signal });

  return () => controller.abort();
}, []);
```

## Limpieza de oyentes de eventos

La limpieza de los oyentes se realiza a través de window _removeEventListener_. La llamada _removeEventListener_ debe hacer referencia a la misma función en la llamada _removeEventListener_ para eliminar el oyente correctamente.

Si no limpiamos este listener, el evento seguiria funcionando aunque el componente este desmontado

```js
useEffect(() => {
  const handleClick = () => {
    console.log("handleClick");
  };

  // añdimos un listener al evento click
  document.addEventListener("click");

  // eliminar el listener cuando el componente se desmonte
  return () => window.removeEventListener("click", handleClick);
}, []);
```
