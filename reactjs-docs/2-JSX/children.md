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
