# Formas de manejar eventos

## Eventos mediante HTML

Consiste en añadir en las etiquetas HTML los atributos de eventos y el código a ejecutar.

```html
<button onClick="alert('Hello!')">Saludar</button>
```

No es recomendable debido a que:

- Estamos mezclando código HTML con Javascript.
- Si la funcion esta en un fichero externo .js, y es modificada, rompería el HTML.

# Eventos mediante propiedades Javascrpit

Consiste en acceder desde Javascript a las atributos de eventos de los elementos y asociar el código a ejecutar.

Realmente lo que estamos haciendo es equivalente a añadir un atributo `onclick` en nuestro `<button>`, solo que lo hacemos a través de la API de Javascript (DOM).

```js
const boton = document.getElementById("boton");
boton.onclick = alert("El usuario ha pulsado el boton");
```

Si necesitamos añadir mas de una función al evento, este método se queda corto. La única forma sería añadir una funcion que ejecute varias funciones. Pero sin duda, utilizar el método `addEventListener` sera mucho mas fácil y legible.

# Eventos mediante addEventListener

Metodo mas recomendable, ya que son los más potentes y flexibles para la mayoría de los casos.

Consiste en añadir una escucha del evento indicado y, el caso de que ocurra, se ejecutará la función asociada indicada.

```js
const boton = document.getElementById("boton");
const clickBoton = () => console.log("El usuario ha pulsado el boton");

// Añadir el listener
boton.addEventListener("click", clickBoton);
```

## Eliminar funcionalidad añadidas previamente

Permite elimnar una funcionalidad previamente añadida.

```js
boton.removeEventListener("click", clickBoton);
```

Tener en cuenta, que solo podremos eliminar un listener si hemos guardado en una constante la función.

En este ejemplo, son funciones distintas aunque coincida el código de las funciones.

```js
boton.addEventListener("click", () => alert("Hello"));
boton.removeEventListener("click", () => alert("Hello"));
```

## Multiples listeners

Permiten añadir facilmente varias funcionalidades para un mismo evento.

En este ejemplo, cuando se haga click sobre el boton, se ejecutan ambas funciones.

```js
const boton = document.getElementById("boton");

const action = () => alert("Ha pulsado el boton");
const toggle = () => button.classList.toggle("red");

boton.addEventListener("click", action);
boton.addEventListener("click", toggle);
```

## Opciones de addEventListener

De forma opcional, se le puede pasar un tercer parámetro con ciertas opciones.

- `capture` - El evento se dispara al en la fase de captura, en lugar de la fase de `bubbling`.
- `once` - Sólo ejecuta la función la primera vez. Luego, elimina listener.
- `passive` - La función nunca llama a .preventDefault() (mejora rendimiento).

# Objeto Event

Cuando se disparan los eventos tenemos como parametro el objeto `event` con informacion relacionada con el evento.

Podemos obtener esta informacion si añadimos un primer parámetro a la funcion.

```js
const button = document.querySelector("button");
button.addEventListener("click", (event) => console.log(event));
```

Según el tipo de evento ejecutado, mostrará unas propiedades u otras.

Por ejemplo, el evento `click` es de tipo `PointerEvent`, que cuenta con las siguientes propiedades:

```js
// Objeto PointerEvent
{
  pointerType: "mouse" // Tipo de puntero
  altKey: false, // ¿La tecla ALT estaba presionada?
  ctrlKey: false, // ¿La tecla CTRL estaba presionada?
  shiftKey: false, // ¿La tecla SHIFT estaba presionada?
  target: button, // Referencia al elemento que disparó el evento
  clientX: 43, // Posición en eje X donde se hizo click
  clientY: 16, // Posición en eje Y donde se hizo click
  detail: 1, // Contador de veces que se ha hecho click
  path: [], // Camino por donde ha pasado el evento
  ... // Otros...
}
```

# Compatibilidad entre navegadores

Los evento en cada navegador tiene propiedades distintas

Por estandar, cada navegador tiene que cumplir como mínimo con una serie de propiedades en común.

Hay que tener cuidado con esta propiedades, ya que solo funcionaran en el navegador en el que existan
