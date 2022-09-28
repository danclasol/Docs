# Crear elementos

Estos métodos crean los elementos solo en memoria, es decir, no lo incluyen en el documento HTML

## `createElement(tag, options)`

Crea y devuelve un elemento HTML definido por el parametro tag que le pasemos

```js
const titulo = document.createElement("h2");
```

## `createTextNode(text)`

Crea y devuelve un nodo HTML con el text pasado por parámetro.

```js
const textTitulo = document.createTextNode("Texto para titulo creado");
```

## `createComment(text)`

Crea y devuelve un nodo de comentarios HTML `<!-- -->`.

Practicamente no se usa nunca.

```js
const commentarioTitulo = document.createComment("Comentario titulo");
```

# Clonar elementos

## cloneNode(deep)

Método que crear una copia de un nodeo. Acepta un parámetro opcional:

-true - copia también sus hijos
-false - por defecto. No copia sus hijos

```js
const articulo = document.getElementById("header");
const articuloCloned = document.cloneNode(true);
```

# Modificar atributos

## hasAttributes()

Indica si el elemento tiene atributos HTML.

```js
div.hasAttribute("data-number"); // true (data-number existe)
```

## hasAttribute(attr)

Indica si el elemento tiene el atributo HTML attr.

```js
div.hasAttributes(); // true (tiene 3 atributos)
```

## getAttributeNames()

Devuelve un con los atributos del elemento.

```js
div.getAttributeNames(); // ["id", "data-number", "class"]
```

## getAttribute(attr)

Devuelve el valor del atributo attr del elemento o si no existe.

```js
div.getAttribute("id"); // "page"
```

## removeAttribute(attr)

Elimina el atributo attr del elemento.

```js
div.removeAttribute("id"); // class="info data dark" y data-number="5"
```

## setAttribute(attr, value)

Añade o cambia el atributo attr al valor value.

```js
div.setAttribute("id", "page"); // Vuelve a añadir id="page"
```

## getAttributeNode(attr)

Idem a getAttribute() pero devuelve el atributo como nodo.

Devuelve el valor del atributo attr del elemento o si no existe.

```js
div.getAttributeNode("id"); // "page"
```

## removeAttributeNode(attr)

Idem a removeAttribute() pero devuelve el atributo como nodo.

```js
div.removeAttributeNode("id"); // class="info data dark" y data-number="5"
```

## setAttributeNode(attr, value)

Idem a setAttribute() pero devuelve el atributo como nodo.

```js
div.setAttributeNode("id", "page"); // Vuelve a añadir id="page"
```

# Insertar elementos

Añade los elementos HTML al documento HTML actual, es decir, los conecta al DOM

## `isConnected()`

Función para comprobar si un elemento existe solo en memoria o esta conectado al DOM, es decir, si esta insertado en el documento HTML

```js
articulo.isConnected();
```

## `appendChild(node)`

Añade como hijo el nodo `node`. Devuelve el nodo insertado.

Para insertar un elemento hay que asignamos dentro de otro elemento.

```js
const section = document.getElementById("container");
section.appendChild(articulo);
```

## `insertAdjacentElement(position, element)`

Inserta el elemento en la posición que le pasemos como parámetro. Si falla devuelve null

Posiciones posibles:

- `beforebegin`
- `beforeend` (funciona igual que appendChild)
- `afterbegin`
- `afterend`

```js
const section = document.getElementById("container");
section.insertAdjacentElement("afterend", articulo);
```

## `insertAdjacentText(position, text)`

Inserta un texto en la posición que le pasemos como parámetro:

Posiciones posibles:

- `beforebegin`
- `beforeend` (igual que appendChild)
- `afterbegin`
- `afterend`

```js
const section = document.getElementById("container");
section.insertAdjacentElement("afterend", articulo);
```

## `insertAdjacentHTML(position, string)`

Inserta el código HTML en la posición que le pasemos como parámetro:

Posiciones posibles:

- `beforebegin`
- `beforeend` (igual que appendChild)
- `afterbegin`
- `afterend`

```js
const section = document.getElementById("container");
const bloque = "<h3>Insertar HTML</h3>";
section.insertAdjacentElement("beforebegin", bloque);
```

## insertBefore(new, node)

Inserta el nodo new antes del node y como hijo del nodo actual.

El parámetro `newnode` es el nodo a insertar, mientras que `node` puede ser:

- null - insertar (equivalente a .appendChild())
- node o element - inserta el `newnode` antes de dicho `node` de referencia

```js
section.insertBefore(newNode, node);
```

# Eliminar elementos

Realmente no eliminamos el nodo o elemento HTML, si no que lo desconectamos del DOM, de modo que no están conectados, pero siguen existiendo.

## `remove`

Eliminar un nodo o elementos HTML

```js
section.remove();
```

## `removeChild(node)`

Eliminar y devuelve el nodo hijo `node`

```js
section.removeChild(node);
```

## `replaceChild(new, old)`

Replaza el nodo hijo `old` por `new`. Devuelve el `old`

```js
section.replaceChild(divNew, divOld);
```

# Modificar elementos

## `nodeName`

Propiedad que muestra el nombre del nodo (etiqueta si es un elemento HTML). Es de solo lectura.

```js
console.log(section.nodeName);
```

## `textContent`

Propiedad que muestra el texto de un elemento y esta puede ser sustituida por un texto nuevo.

```js
console.log(section.nodeName);
```

## `innerHTML`

Propiedad que muestra el contenido HTML de un elemento y esta puede ser sustituida por una contenido nuevo.

```js
section.innerHTML = "<h2>Modificando elementos</h2>";
```

## `outerHTML`

Propiedad que muestra tanto el elemento como el contenido de un elemento y puede también ser sustituida por una cadena nueva

```js
section.outerHTML = "<section><h2>Modificando elementos</h2></section>";
```

# Modificar clases CSS de los elementos

## className

Aunque es posible modificar estilos mediente el atributo `className` o mediante el `.setAttribute`, es mas recomendable usar objeto `classList`.

Trabajar con `className` tiene limitaciones con múltiples clases CSS, y es que puedes querer realizar una manipulación sólo de una clase concreta, dejando las demás intactas.

La propedad `className` contiene una cadena con la lista de clases css del elemento.

```js
section.className;
section.className += " new-class-css";
section.setAttribute("class", "bg-red big dark-theme new-class-css");
```

## classList

Es un objeto especial que contiene una serie de funciones que permiten trabajar mas comodamente con las clases.

`classList` contiene la lista de clases css que posee un elemento.

```js
section.classList;
section.classList.length;
section.classList.contains(class);
```

Metodos para añadir, eliminar, reemplazar y intercambiar clases

```js
section.classList.add("new-class-css", "new-class-css-2", ...);
section.classList.remove("new-class-css", "new-class-css-2", ...);
section.classList.remove("old-class-css", "new-class-css";
section.classList.toggle("new-class-css", );
```

# Fragments

Los fragmentos son una especie de documento paralelo, aislado de la página con la que estamos trabajando, que tiene varias características:

- No tiene elemento padre. Está aislado de la página o documento.
- Es mucho más simple y ligero (mejor rendimiento).
- Si necesitamos hacer cambios consecutivos, no afecta al reflow (repintado de un documento).

De esta forma, es una estrategia muy útil para usarlo de documento temporal y no realizar cambios consecutivos, con su impacto de rendimiento. Para crearlos, necesitaremos utilizar la siguiente función:

```js
const fragment = document.createDocumentFragment();
fragment.appendChild(div1);
fragment.appendChild(div2);
fragment.appendChild(div3);
document.body.appendChild(fragment);
```
