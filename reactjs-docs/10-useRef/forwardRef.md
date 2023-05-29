# forwardRef

Técnica que permite acceder a una referencia de un componente hijo desde un componente padre.

Para la gran mayoría de componentes esto no es necesario pero puede ser útil para sistemas de diseño o componentes de terceros reutilizables.

Evitarlo en la medida de lo posible, ya que puede hacer mas dificil realizar cambios internos en los componentes.

## Parameters

- `render`: funcion de render del componente

```js
const SomeComponent = forwardRef(render);
```

```js
const SomeComponent = forwardRef((props, ref) => {
  <div>Component</div>;
});
```

# Ejemplo

## Componente hijo

```js
// Button.jsx
export const CustomInput = forwardRef((props, ref) => <input ref={ref} />);
```

## Componente padre

```js
// Parent.jsx
const Parent = () => {
  const inputRef = useRef();

  return (
    <>
      <CustomInput ref={inputRef} />
      <button onClick={()=> inputRef.current.focus()}>Focus</button>
  );
};
```
