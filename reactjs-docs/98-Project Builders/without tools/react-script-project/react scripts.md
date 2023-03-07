La forma mas sencilla de usar React en nuestra página web es añadir los scripts que nos ofrecen 

https://reactjs.org/docs/add-react-to-a-website.html

## 1. Añadir un contenedor para React

```html
<!-- ... existing HTML ... -->
<div id="root"></div>
<!-- ... existing HTML ... -->
```

## 2. Añadir etiquetas con los scripts de React

Script con las librería de React y ReactDOM

```html
<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  crossorigin
></script>
```

Para usar la sintaxis JSX, además debemos añadir el siguiente script

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Añadir etiquetas scripts a nuestra pagina

```html
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel" src="./index.js"></script>
  </body>
</html>
```

## 3. Crear componente de React

```js
const App = () => (
  <div>
    <h1>Hello World!</h1>
    <button className="button">Like</button>
  </div>
);

export default App;
```

## 4. Renderizar componente en el contenedor root

`index.js`

```js
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```
