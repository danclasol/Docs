# Componentes

Un componente es una pieza de código que renderiza una parte de la interfaz. Los componentes sirven como modelo para generar elementos de _React_ en*JSX*.

Los componentes pueden:

- Recibir una serie de propiedades (_props_)
- Declararse directamente como etiquetas _JSX_
- Pueden contener su propio estado.
- Puede ser reutilizados

En React los componentes se crean usando:

- funciones: mas recomendable
- clases (obsoleto)

## Sintaxis

### Funciones

Como funciones que devuelven _JSX_ y que pueden ser usadas como una etiqueta JSX.

```js
const User = (props) => {
  return (
    <div className="User">
      <span>{props.name}</span>
      <span>{props.active}</span>
      <span>{props.rol}</span>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <User name="Peter" active rol="admin" />
      <User name="Marie" active={false} rol="admin" />
      <User name="John" active rol="user" />
    </div>
  );
};
```

### Clases

Como clases que devuelven _JSX_ y que pueden ser usadas como una etiqueta JSX.

```js
import { Component } from "react";

class User extends Component {
  render() {
    return (
      <div className="User">
        <span>{props.name}</span>
        <span>{props.active}</span>
        <span>{props.rol}</span>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <User name="Peter" active rol="admin" />
      <User name="Marie" active={false} rol="admin" />
      <User name="John" active rol="user" />
    </div>
  );
};
```

# Nomenclatura JSX

Es importante que el nombre del componente este en _PascalCase_, esto es porque cuando el codigo se traspila a _Javascript_ si el componente esta en minusculas se tratará como una etiqueta _HTML_ normal y no habrá manera de distinguir cuando es _HTML_ y cuando un componente.

## Ejemplos:

En este caso, no crearia el componente, sino una etiqueta `<title>`

```js
`<title />`; // React.createElement("title",null)
```

Aqui si se interpreta que se trata de una funcion de un componente

```js
`<Title />`; // React.createElement(Title,null)
```

# Estructura Componentes JSX

## Reglas

### Nombre Componente

Siempre en PascalCase-> MyComponente

### Fichero

- Nombre:

  - PascalCase-> MyComponente.jsx
  - kebab-case-> my-componente.jsx

- Ubicación:

  - Solo un componente por archivo
  - Se suele colocar todos los componentes en una carpeta ‘components’
  - El componente principal App.jsx se suele poner fuera de la carpeta ‘components’, aunque no sería incorrecto ponerlo dentro

- Contenido:
  - Los componentes deben tener una sola responsabilidad
  - Deben de devolver un único nodo, envolviendo si fuese necesario dentro de un div
  - Podemos usar la etiqueta Fragment de React en vez de utilizar un div.
  - Esta etiqueta al renderizarse no crea realmente ningún nodo.
  - Esto es útil para no tener largas cadenas de divs.
