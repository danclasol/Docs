# Abort Requests

Con `AbortController` y `AbortSignal` podemos cancelar peticiones.

Primero hay que crear una instancia de la clase AbortController.

```js
const controller = new AbortController();
const signal = controller.signal;
```

A continuación establecer un timeout de modo que el método `abort()` del objeto controller se ejecute, por ejemplo, a los seis segundos:

```js
setTimeout(() => controller.abort(), 6000);
```

Ahora bastará pasar con la señal como uno de los parámetros de configuración de la función fetch:

```js
fetch("./archivo.json", { signal });
```

En caso de que no hayas obtenido respuesta a la petición al cabo de seis segundos, esta se cancelará. En caso de obtenerla, la petición se ejecutará normalmente.

Es posible diferenciar este error de cualquier otro que haya ocurrido; útil a la hora de gestionar los errores de la petición. Cuando la petición sea abortada, se producirá un error en la promesa de tipo DOMException que tendrá el nombre AbortError:

```js
fetch("./archivo.json", { signal })
  .then((response) => response.text())
  .then((contenido) => console.log(contenido))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.error("Petición abortada");
    } else {
      console.error("Cualquier otro error", error);
    }
  });
```
