# Render Props

En React, las `render props` es un patron de diseño que permite reutilizar código entre componentes e inyectar información en el renderizado de los componentes.

Consiste en delegar lo que un componente va a renderizar a otro componente.

Una `render prop` se refiere a una prop que se pasa a un componente, y cuyo valor es una función que devuelve un elemento _JSX_.

Es buena práctica nombrar a estas funciones empezando con `render`.

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
