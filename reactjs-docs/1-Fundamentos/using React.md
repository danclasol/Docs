# Add React to a website

## Add script to html

Development version

```html
<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  crossorigin
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Production version

```html
<script
  src="https://unpkg.com/react@18/umd/react.production.min.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"
  crossorigin
></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

## Install npm dependencies

```
npm install react
npm install reactDOM
```

# Render elements with React

En React, la aplicación va a partir de un elemento raiz, del cual va a colgar el arbol de componentes.

Este arbol solo tendrá un nodo principal, que estará compuesto por componentes hijos que a su vez tendran sus propios hijos y así sucesivamente.

En el fichero HTML principal crearemos este div root

```html
<div id="root"></div>
```

Desde JS, obtendendreos este root, donde cargaremos al arbol de componentes.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

Con `render`, renderizamos el arbol en la raiz

```js
const app = <h1>Hello World!</h1>;
container.render(app);
```

Es importante, saber que a `render` si le pasamos un string, lo que renderizará sera ese string.

```js
container.render("Hello world!");
```

Esto evita que podamos inyectar un string con codigo malicioso.

```js
container.render("<button>Hack</button");
```
