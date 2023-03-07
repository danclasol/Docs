# Eventos

Para añadir eventos sobre un nodo de un componente tenemos
que usar las propiedades correspondientes de _JSX_

- _onClick_
- _onFocus_
- etc

Si en vez de utilizar las propiedades de _JSX_, utilizaramos directamente la API del DOM de Javascript, React no sería enteraría de estos eventos.

```js
<button onClick={() => alert("Click")}></button>
```

React por detrás transforma esta funcion en un _addEventListener_ y mediante la _API_ del _DOM_, la añade al nodo raiz de nuestra aplicacion `<div id='root'>`;

Por lo que el nodo raiz sería el que esta escuchando el evento.

```js
rootNode.addEventListener();
```

Esto es solo un tema de como esta implementado en React, no nos afecta realmente.

## Eliminar eventos

En Javascript tendriamos que usar un _removeEventListener_ y quitarlo manualmente, pero en React, este proceso lo hace automaticamente si le pasamos _undefined_ por parametro.

React por detras hace un _removeEventListener_, por lo que no se queda nada activado del evento.

```js
<button onClick={active ? () => alert("Click") : undefine}> </button>
```

# SyntheticEvent

Las propiedades de los eventos pueden variar de un navegador a otro. Por ejemplo, un evento en Chrome pueden variar a los que existen en Firefox.

El _SyntheticEvent_ es un objeto contendor que ha creado React para envolver las propiedades estandar que cada evento debe poseer en todos los navegadores.

De esta forma, se consigue asegurar que todo lo que hagamos con react sera compatible con todos los navegadores.

Si hiciera falta utilizar alguna propiedad especifica de un navegador, podemos usar el atributo _nativeEvent_, que almacena el objeto original del evento para ese navegador.

Documentacion React: https://es.reactjs.org/docs/events.html

# PreventDefault

Para elementos que tengan un comportamiento por defecto, podemos evitar este comportamiento de la siguiente forma. Realmente, es como se hace en JS

```js
<a
  href="https://reactjs.org"
  onClick={(ev) => {
    ev.preventDefault();
    alert("Redirigiendo...");
  }}
></a>
```

# Target vs CurrentTarget

Si ponemos el evento en un elemento distinto del que genera el evento

- target -> sera el elemento original
- currentTarget -> nodo que tiene el evento

```js
<div
	onClick={ev => {
		console.log(ev.target) -> <button>
		console.log(ev.currentTarget)> -> <div>
	}
	<button>Click</button>
</div>
```
