# JSX

JSX es una extensión de JavaScript que permite escribir un código más cercano visualmente a HTML, que mejora la legibilidad del código y hace que sea más fácil de entender.

JSX y React son independientes. A menudo se usan en conjunto, pero se pueden usar de forma separada. JSX es una extensión de sintaxis, mientras React es una biblioteca de JavaScript.

## Sintaxis

Sin JSX, deberíamos usar `React.createElement` para crear los elementos de la interfaz manualmente de esta forma:

```js
import { createElement } from "react";

function Hello() {
  return React.createElement(
    "h1", // elemento a renderizar
    null, // atributos del elemento
    "Hola Mundo!" // contenido del elemento
  );
}
```

Esta sería el código equivalente utilizando JSX.

```js
function Hello() {
  return <h1>Hola Mundo!</h1>;
}
```

Aunque parezcan etiquetas de HTML, realmente son objetos de Javascript, que serán transpilados para que sea compatible con el navegador.

Por lo que podremos asignarlos a variables, pueden ser el resultado de una función, son tendran propiedades, etc.

```js
const element = <h1>Hola Mundo!</h1>;
```

# Reglas JSX

En JSX, disponemos de las mismas etiquetas que en HTML con el mismo nombre, pero JSX es más estricto y tiene algunas restricciones más que HTML.

## 1. Devolver un solo elemento raíz

Para devolver múltiples elementos de un componente, envuélvelos con una sola etiqueta principal. Por ejemplo, un `<div>` o un _Fragment_

## 2. Cierra todas las etiquetas

JSX requiere que todas las etiquetas se cierren explícitamente, incluso las etiquetas de cierre automático como `<img>` deben convertirse en <img />.

## 3. Atributos en camelCase

JSX se convierte en JavaScript y los atributos escritos en JSX se convierten en keys de objetos JavaScript. Por lo que tenemos las limitaciones de JS en los nombre de variables:

- no pueden tener guiones: `stroke-width` -> `strokeWidth`
- palabras reservadas: `class` -> `className`

Por razones históricas, los atributos `aria-*` y `data-*` se escriben como en HTML, con guiones.

# Usando código JS dentro de JSX

Dentro de JSX, podemos escribir codigo JS con lógica de renderizado o para hacer referencia a una propiedad dinámica.

Hay que tener en cuenta, que solo se renderizará si lo que haya dentro es un _string_ u otro elemento _JSX_, que a su vez se renderiza si es un `string` o un elemento _JSX_ y así sucesivamente.

```js
const element = <p>Hola {name}</p>;
const element = <p>{Math.random()}</p>;
```
