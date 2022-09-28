# Selectores Methods

Métodos tradicionales que nos permiten hacer búsquedas de elementos en el document.

Los métodos de búsqueda de elementos devuelven:

- Un objeto que representa un elemento del DOM
- Listas de elementos (no devuelve un `arrays`)

  - `NodeList` - Lista estática, si se modifica algun elemento del DOM, esta lista no se actualizará
  - `HTMLCollection` - Lista dinámica, si se modifica algun elemento del DOM, esta lista se actualizará

Sin embargo, podemos convertir estos tipos de listas a `array` para poder hacer uso de los métodos

```js
const listArray = [...listNodes];
const listArray = [...collectionHTML];

listaArray.forEach();
```

## getElementById

Busca el elemento HTML por su id. Si no encuentra nada devuelve `null`

En HTML, es recomendable no repetir ningún `id`, ya que este selector solo cogera el primero elemento que encuentre.

```js
document.getElementById("nodoId");
```

## getElementsByClassName

Busca elementos por la clase css. Devuelve una lista `HTMLCollection`. Si no encuentra nada devuelve HTMLCollection[].

```js
document.getElementsByClassName("btn-black");
```

## getElementsByName

Busca elementos por el atributo name. Devuelve una lista `NodeList`. Si no encuentra nada devuelve NodeList[].

```js
document.getElementsByName("elementName");
```

## getElementsByTagName

Busca elementos por el tag. Devuelve una lista `HTMLCollection`. Si no encuentra nada devuelve HTMLCollection[].

```js
document.getElementsByTagName("li");
```

# Selector Query

Con estos métodos podemos hacer lo mismo que con los métodos tradicionales, e incluso muchas más cosas, ya que son muy flexibles y potentes gracias al uso de selectores css

Como parametros podemos pasarle cualquier selectores de CSS:

- #id - selector por id
- .header - selector de clase
- `li` - selector de etiqueta
- `[name=nombre]` - select por tag

## querySelector

Devuelve el primero elemento que encuentre que coincide con el selector CSS. Si no encuentra nada devuelve null

```js
document.querySelector("#header");
document.querySelector(".element");
document.querySelector("li");
document.querySelector("[name=nombre]");
```

## querySelectorAll

Devuelve todos los elementos que coincidan con el selector CSS, devuelve un `NodeList`

```js
document.querySelector(".element");
document.querySelector("li");
document.querySelector("[name=nombre]");
```
