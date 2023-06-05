# HOFs: High Order Functions

En JS, las _High Order Functions_ son funciones que cumplen al menos una de las siguientes condiciones:

- 1 o mas funciones como entrada
- Devolver una funcion como salida
- Ambas

# HOC: High Order Components

En React, los componentes son funciones, por lo que podemos usarlas como _HOFs_, y hacer uso del patron de diseño _HOC_.

_HOC_ es un patrón de diseño en React que se utiliza para reutilizar la lógica de los componentes.

Con la ayuda de la composición podemos tomar un componente, añadirle funcionalides y luego devolver el componente.

## Example

Crear funcionalidad para trackear cuando se hace click en un componente. En lugar de agregar la lógica en cada componente, podemos crear un HOC que envuelva ambos componentes y les proporcione dicha funcionalidad.

### Hoc con funcionalidad de tracking

Por convencion, las HOC se nombran empezando con `with...`.

Este HOC añade al _onClick_ la funcionalidad añadida de mostrar por consola el _trackId_.

```js
const withTrack = (Component) => {
  const WithTrack = ({ onClick, trackId, ...props }) => {
    const onClickWithTrack = (ev) => {
      console.log("Click", trackId);

      if (onClick) onClick(ev);
    };

    return <Component onClick={onClickWithTrack} {...props} />;
  };

  return WithTrack;
};
```

### Componentes sin funcionalidad de conteo

```js
const Button = ({ handleClick, children, ...props }) => {
  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

const Link = ({ handleClick, children, ...props }) => {
  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
};
```

## Envolver Componentes con el HOC

```js
const ButtonWithTrack = WithTrack(Button);
const LinkWithTrack = WithTrack(Link);
```

## Componentes con funcionalidad de tracking agregada

```js
const App = () => {
  return (
    <>
      <ButtonWithTrack trackId='button1'>Button Counter</ButtonWithTrack>
      <LinkWithTrack trackId='link1'>Link Counter</LinkWithTrack>
    </Button>
  );
};
```

### Añadir mas de un HOC

Podemos añadir mas de una funcionalidad, por ejemplo, vamos a crear un HOC para que haga logging cada vez que se cree el componente.

```js
const withLog = (Component) => {
  const WithLog = (props) => {
    console.log(props);

    return <Component {...props} />;
  };

  return WithLog;
};
```

### Encadenamos el nuevo HOC a los componentes

```js
const ButtonWithTrackWithLog = withLog(withCounter(Button));
const ButtonWithTrackWithLog = withLog(ButtonWithTrack); // equivalente arriba
const LinkWithTrackWithLog = withLog(withCounter(Link));
```

Podemos realizar cualquier combinacion de funcionalidades.

```js
const ButtonWithLog = withLog(Button);
```
