# Props en JSX

Al igual que en _HTML_, podemos añadir atributos a nuestras etiquetas JSX para modificar su comportamiento.

En _JSX_ existen las mismas etiquetas que existen para _HTML_, pero escritas en _camelCase_, como por ejemplo:

- `onclick` -> `onClick`
- `tabindex` -> `tabIndex`

Existen 2 propiedades que se ha respetado su nombre de _HTML_, son las siguientes:

- `aria-*`
- `data-*`

Existen solo dos etiquetas cuyo nombre han tenido que ser modicadas, debido a que entraban en conflicto con las palabras reservadas de _Javascript_:

- `class` -> `className`
- `for` -> `htmlFor`

## Valores por defecto

Al igual que en _HTML_, algunos atributos tienen un valor por defecto.

Por ejemplo, el atributo _disabled_ por defecto es _true_.

```HTML
<button disabled>Click</button>
```

Por lo que en JSX, tambien podriamos simplemente añadirlo:

```js
<button disabled={true}></button>
<button disabled></button>
```

Sin embargo, si le asignamos un valor `undefined` o `null`, el atributo se eliminará

```js
<button disabled={undefined}></button>
<button disabled={null}></button>
```

# Propiedades especiales

Existen una serie de propiedades cuyo comportamiento varia considerablemente con respecto a _HTML._

## Propiedad _style_

A diferencia de en _HTML_, en el que solo hay que añadir un _string_, en _JSX_ hay que pasarle un objeto.

En _HTML_:

```html
<h1 style="color:red; font-size: 1rem"></h1>
```

En _JSX_, es obligatorio crear un objeto con las propiedades en _camelCase_.

Se ha hecho asi para facilitar el algoritmo para detectar cambios en el _VirtualDOM_, ya que si fuera un _string_ en vez de un objeto, un simple espacio lo detectaria como un cambio.

```js
<h1 style={{
	color: red;
	fontSize: 1rem
}}></h1>
```

## Propiedad defaultValue

En _HTML_, el _value_ de un `input` es un atributo que establece el valor inicial del _input_.

```html
<input type='text' id='text' value='Por defecto'></input>
```

Pero en el _DOM_, los nodos _input_ tienen la propiedad _value_ con valor actual. Es decir, la **propiedad** `input.value` tiene el valor acutal del `input`, mientras que el **atributo** `value` tiene el valor inicial.

Sin usar _JSX_, esto no da ningun conflicto, porque con uno obtenemos el valor inicial y con el otro obtenemos el valor actual.

Pero en _JSX_, si tenemos un conflicto, ya que al tratarse de un objecto JS, en la propiedad _value_, se solaparán el valor inicial y el valor actual. Es decir, en _JSX_, estamos modificando directamente la propiedad _value_ del _input_.

```js
<input type="text" id="text" value="Por defecto"></input>
```

En _JSX_, si usamos la etiqueta _value_, pasa lo siguiente:

- El valor se pinta en el input correctamente
- Pero el _input_ no se pude modificar, el campo se pone como _readOnly_
- Tambien sale un error por consola diciendo que no hemos creado el _onChange_ handler

Para solucionarlo tenemos que usar la propiedad _defaultValue_

Esto tambien afecta a los _select_

```html
<select>
  <option value="a">A</option>
  <option value="b" selected>B</option>
  <option value="c">C</option>
</select>
```

En _JSX_, el _selected_ tampoco se puede usar, tendremos que usar el _defaultValue_.

```html
<select defaultValue="b">
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
</select>
```

El comportamiento de los _textarea_, es igual que los _input_

```js
<textarea default='Default'>Texto</texarea>
```

## Propiedad defaultChecked

Mismo caso que con el _value_, pero para _inputs_ de tipo _checkbox_

```html
<input type='checkbox' id='text' checked></input>
```

En _JSX_, usamos la propiedad _default_

```js
<input type="checkbox" id="text" defaultChecked></input>
```

## Propiedad dangerouslySetInnerHTML

Propiedad correspondiente a la etiqueta innerHTML, para injectar html por JS

No es nada recomendable utilizarlo, y asi lo indica el nombre 'dangerousely', ya que puede provocar un fallo de seguridad
en nuestra aplicacion ante un ataque por injección.

Es mucho mas seguro utilizar simplemente, código _JSX_ ya que esta preparado para no renderizar codigo injectado

Por ejemplo, con _HTML_ desde la consola del navegador, podemos injectar en esta imagen este codigo atacante que se ejecutaria:

```js
const div = document.getElementById("div");
div.innerHTML = '<img src="fake.jpg" onerror=(alert([CODIGO_ATAQUE]))>';
```

Con JSX, el codigo atacante no se ejecutaria porque React no renderizaria este `<img>`, si no que lo pintaria como una cadena.

Así, con _React_ se evitar cualquier tipo de ataque por injeccion.

```js
const codigoInjectado = '<img src="fake.jpg" onerror=(alert([CODIGO_ATAQUE]))>';
const app = <div>{codigoInjectado}</div>;
```

De todas formas, si aun así, necesitamos user la propiedad dangerouslySetInnerHTML, bajo nuestra responsabilidad
Habría que hacerlo de la siguiente forma:

```js
const codigoHtml = '<img src="image.jpg" />';
const app = (
  <div id="div" dangerouslySetInnerHTML={{ __html: codigoHtml }}></div>
);
```

## Custom attributes

React ha añadido la posibilidad de que se puedan crear atributos con cualquier nombre.

Esto permite que podamos usar cualquier nueva funcionalidad que todavía no se haya implementado en React JSX.

Por lo que no obtenemos error de sintaxis JSX, y funcionara la funcionalidad en el navegador.

Estos deberan estar escritos siempre en _lowercase_, para diferenciarlos de las propiedades en _JSX_. Ademas de que en _HTML_, las etiquetas son siempre en lowercase.

```HTML
<h1 class='title'>Titulo</h1>
```

Ese class no es una etiqueta valida para JSX, sin embargo, al ponerlo en el navegador funciona correctamente.

Este es debido a que class lo trata como un custom attribute. Es decir, para el navegador es una etiqueta correcta para aplicar la clase css

# Spread de props

Podemos usar el spread operator en las etiquetas de _JSX_, para que al destructurar asignemos todas las props o keys al elemento.

Por ejemplo, a este _input_ se le aplicaran todas los atributos resultantes de la desestructuración.

Por ejemplo:

```js
const app = <input type="text" name="name" placeholder="Name"></input>;
```

De esta manera quedaría mas limpio y sencilla:

```js
const inputs = { type: "text", name: "name", placeholder: "Name" };
const app = <input {...inputs}></input>;
```

Tener en cuenta, que si aparte usamos un atributo extra, depende de donde lo coloquemos, podemos sobreescribirlo y que se aplique o no.

En este caso, el `type=checkbox` sobreescribe al _type_ de la desestructuracion, por lo que el _input_ sera un _checkbox_.

```js
const inputs = { type: "text", name: "name", placeholder: "Name" };
const app = <input {...inputs} type="checkbox"></input>;
```

En este caso, el `type=checkbox` se sobreescribe con el _type_ que viene de la destructuración, quedando el _input_ de tipo _text_.

```js
const inputs = { type: "text", name: "name", placeholder: "Name" };
const app = <input type="checkbox" {...inputs}></input>;
```

# Keys

Cuando en un elemento JSX esta compuesto por una lista de elementos, tenemos que indicar un _key_ unico que cada uno de ellos.

Esta _key_ ayuda a React a identificar el elemento que ha sido modificado.

```js
<ul>
  <li key="1">Peter</li>
  <li key="2">Marie</li>
  <li key="3">John</li>
</ul>
```
