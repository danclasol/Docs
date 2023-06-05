# Flexibilizar el renderizado

## Usando slots

Establecemos en el componente un slot o espacio en el que podremos injectar cualquier cosa que le llegue como parametro.

Podrá ser otro componente, un elemento JSX, una cadena, etc.

- Opcion muy flexible, ya que podemos pasarle cualquier cosa para que se inserte en el slot.
- Si tenemos que pasarle muchas props al componente, puede volverse un poco menos legible.

```js
const IconButton = ({ icon, children }) => {
  <button className="button">
    {icon}
    {children}
  </button>;
};

const App = () => {
  <div className="wrapper">
    <IconButton icon={<PlusIcon className="icon" />}>Add</IconButton>
    <IconButton icon={<MinusIcon className="icon" />}>Remove</IconButton>
  </div>;
};
```

## Usando HOCs

El componente recibirá como parametro la funcion del componente, y dentro del componente podemos añadir el formato (props) que debe queramos que compartan todos los componentes.

- Mas reutilizable y sencillez de uso, ya que no tenemos que pasarle el componente como prop.
- Perdemos flexibilidad, ahora solo podemos pasar la funcion del componente, y este debe adecuarse al formato definido.

Si necesitamos pasar props adicionales, podemos pasarselo en una prop aparte (_iconProps_).

```js
const IconButton = ({ icon: Icon, iconProps, children }) => {
  <button>
    <Icon className="icon" {...iconProps} />
    {children}
  </button>;
};

const App = () => {
  <div className="wrapper">
    <IconButton icon={PlusIcon}>Add</IconButton>
    <IconButton icon={MinusIcon}>Remove</IconButton>
  </div>;
};
```

## Usando Render Props

Combinación de 2 casos anteriores.

Pasar como _prop_ una funcion de render, que injectará cualquier cosa en el componente. A esta función podemos pasarle parámetros, de modo que podemos establecer props en comun.

- Es muy flexible, ya que podemos injectar cualquier cosa en el slot.
- Es configurable, ya que podemos pasar todas las prop que necesitemos.

```js
const IconButton = ({ renderIcon, children }) => {
  const className = "icon";

  <button>
    {renderIcon(className)}
    {children}
  </button>;
};

const App = () => {
  <div className="wrapper">
    <IconButton renderIcon={(className) => <PlusIcon className={className} />}>
      Add
    </IconButton>
    <IconButton renderIcon={(className) => <MinusIcon className={className} />}>
      Remove
    </IconButton>
  </div>;
};
```
