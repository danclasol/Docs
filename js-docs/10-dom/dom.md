# DOM (Document Object Model)

Las siglas DOM significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML.

Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM.

# DOM y JavaScript

El DOM es una interfaz que nos permite interactuar con los elementos que forman nuestro sitio web desde Javascript. Podremos modificar tanto el HTML como el CSS.

El DOM le permite a JavaScript acceder, recorrer, crear, cambiar, remover elementos del documento y también agregar eventos a esos elementos para hacer más dinámica nuestra página.

# Jerarquia del DOM

El DOM esta compuesto por nodos.

Un nodo es cualquier elemento del DOM y podran ser de uno de los siguientes tipos:

- Document - es el nodo raiz del DOM
- Elements - el resto de nodos que son hijos del `document`

Ambos tipos de nodos son objetos de Javascript que tienen una serie de propiedades comunes:

- parentElement - elemento padre. El nodo `document` no tiene padre, porque será `null`
- children - lista de elementos hijos del elemento

# Objeto document

Es el nodo raiz del DOM, que representa el árbol DOM de la página o pestaña del navegador donde nos encontramos.

Con este objeto podemos acceder a los distintos elementos del DOM.

## Elementos HTML

Son los nodos que componen el documento.

Todos los elementos HTML, dependiendo del elemento que sean, tendrán un tipo de dato específico.

Algunos ejemplos:

- `<div>` - HTMLDivElement
- `<span>` - HTMLSpanElement
- `<img>` - HTMLImageElement
- `<audio>` HTMLAudioElement

Obviamente, existen muchos tipos de datos específicos, uno por cada etiqueta HTML y cada uno de ellos tendrá sus propiedades especificas.

# Objeto window

Es el objeto que esta por encima de `document` y es el elemento raiz del BOM (Browser Object Model).

```js
window.document.getElementById("header");
```

Nos permite utilizar funcionalidades propias del navegador, como por ejemplo:

- alert - show alerts
- console.log - show logs
- window.open() - open a new window
- window.close() - close the current window
- window.moveTo() - move the current window
- window.resizeTo() - resize the current window
