# useImperativeHandle

Se utiliza junto con `forwardRef`.

Acceder a una referencia de un componente hijo desde el padre provocar un problema de seguridad, ya que le estamos dando acceso a la totalidad de propiedades y métodos de este elemento.

Con `useImperativeHandle` podemos controlar lo que queremos que sea accesible desde el componente padre.

```js
useImperativeHandle(ref, createHandle, dependencies?)
```

## Parameters

- `ref`: referencia que recibimos del segundo parametro de _forwardRef_.

- `createHandle`: funcion que devuelve las referencias que queremos exponer.

  - Estas referencias pueden ser de cualquier tipo.
  - Normalmente, se devuelve un objeto con los metodos a exponer.

- `dependencies` (optional): lista de dependencias que se usa en la funcion _createHandle_,
  - Evita que se vuelvan a generar el código con cada renderizado.
  - Similar a dependencias de _useEffect_

# Example

Exponer solo los métodos _focus_ y _scrollIntoView_ al componente padre.

```js
const CustomInput = forwardRef((props, ref) => (
    const inputRef = useRef(null);

    useImperativeHandle(ref, ()=> ({
        focus() {
            inputRef.current.focus();
        },
        scrollIntoView() {
            inputRef.current.scrollIntoView();
        },
    }));

    return <input typoe='text' ref={inputRef} />;
));
```

De esta manera, el componente padre, solo podrá acceder a los métodos _focus_ y _scrollIntoView_, y no tendrá acceso completo al nodo del DOM.

```js
const Parent = () => {
  const inputRef = useRef(null);

  return (
    <>
        <CustomInput ref={inputRef} />
        <button onClick={()=>inputRef.current.focus()}>Focus</button>;
    </CustomInput>
  );
};
```
