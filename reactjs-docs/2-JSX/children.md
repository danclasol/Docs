# Propiedad children

La propiedad `children`, en un objeto JSX, serían los nodos hijos de este.

Sería lo que existente entre las etiquetas de apertura y cierre de del objecto.

```js
const content = (
  <div>
    <h1>Titulo</h1> // children
    <p>Parrafo</p> // children
  </div>
);
```

## Expresion evaluables en los children

A diferencia de HTML, JSX es un lenguaje de plantillas y es posible user expresiones evaluables.

Estas expresiones se evaluan, y se renderiza segun el resultado de la expresion

```js
const content = (

<div>
	<h1>Titulo {title}</>
	<p>Parrafo {25}</p>
</div>
);
```

Todo lo que hagamos en JSX acabara renderizandose en HTML, y en HTML solo puede haber como children otra etiqueta o una string.

Por lo que segun que le pasemos como children puede pasar lo siguiente:

- `{25}` -> se evalua que es un numero, y pinta '25' como un string
- `{undefine}` -> como no es ni etiqueta ni cadena, no pinta nada al renderizarse
- `{null}` -> como no es ni etiqueta ni cadena, no pinta nada al renderizarse
- `{true}` -> como no es ni etiqueta ni cadena, no pinta nada al renderizarse
- `{{name: 'John', surname: 'Smith'}}` -> Si le pasamos un simple objeto de Js, tampoco se renderizará

- `{<h1>Text</h1>}` -> Sin embargo, si le pasamos un objeto compuesto por una etiqueta JSX si que se
  renderizará corrrecamente

- `{myFuncion()}` -> si metemos una funcion asi, lo que pasa es que se esta ejecutando la funcion directamente y no da error

- `{() => {}}` -> si metemos una funcion asi, nos da error, ya que no es valido porque no es ni una etiqueta ni un string

- `{['R','A','T']}` -> Si le pasamos un array como children, el resultado es que se intenta concatenar
  todo el contenido del array

- `{['R',null,'A',undefined,'T',true]}` -> en este array, los null, undefined y true no se renderizaran.

# Methods Children

El objeto `Children` cuenta con una serie de métodos que permite manipular y transformar el JSX recibido en la prop `children`.

_No es recomendables usarlos_. Son métodos que eran utiles en versiones antiguas de React, pero que con las nuevas funcionalidades han hecho que queden deprecadas.

## Children.count(children)

Devuelve el numero de hijos.

```js
const RowList = ({ children }) => {
  return (
    <>
      <h1>Total rows: {Children.count(children)}</h1>
      ...
    </>
  );
};
```

## Children.only(children)

Comprueba si el `children` es un solo elemento. Devuelve el elemento si se cumple.

```js
const Box = ({ children }) => {
  const element = Children.only(children);
  // ...
```

## Children.toArray(children)

Transofmra el objeto `children` en un array de JS.

```js
const ReversedList = ({ children }) => {
  const result = Children.toArray(children);
  result.reverse();

  return result;
};
```

## Children.forEach(children, fn, thisArg?)

Similar to `Array.forEach`.

Por cada elemento de `children`, ejecuta la función.

```js
const SeparatorList = ({ children }) => {
  const result = [];

  Children.forEach(children, (child, index) => {
    result.push(child);
    result.push(<hr key={index} />);
  });
  // ...
```

## Children.map(children, fn, thisArg?)

Similar to `Array.map`.

Devuelve un array con los elementos de `children` transformados.

```js
const RowList = ({ children }) => {
  return (
    <div className="list">
      {Children.map(children, (child) => (
        <div className="row">{child}</div>
      ))}
    </div>
  );
};
```
