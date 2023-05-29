# useRef

Hook de React que permite referenciar un valor que no es necesario para el renderizado.

- No provoca nuevos renderizados.
- Es único para cada instancia del componente.
- Persistente entre renderizados.

```js
const ref = useRef(initialValue);
```

## ref.current

Para obtener el valor de la referencia debemos acceder a la propiedad `current`.

Inicialmente, tiene el valor pasado como parametro _initialValue_.

```js
console.log(ref.current);
```

Támbien, es posible modificar el valor de la referencia

```js
ref.current = newValue;
```

## Parámetros

- _initialValue_: valor inicial que tendrá la propiedad `current`
  - Puede ser de cualquier tipo.
  - Este argumento se ignora despues del renderizado inicial.

## Return

Devuelve un objeto con una sola propiedad:

- _current_: , pero puede ser modificado posteriormente

## Example

```js
const Counter = (name) => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
  };
};

return <button onClick={handleClick}>Referencia {countRef.current}</button>;

const App = () => {
  <div>
    <Counter name="A" />
    <Counter name="B" />
  </div>;
};
```

# State vs Ref

- Referencia
  - No provoca nuevos renderizados. Ya que React no es consciente de que de estos cambios .
  - Es mutable, es posible modificar el valor de _current_ de manera directa e inmediato.
- Estado
  - Produce automaticamente un nuevo renderizado.
  - No es mutable, si modificamos un estado con un _setState_, no veremos el valor actualizado hasta que se producza el siguiente renderizado.

# Usage

## Referencia

Solo usar referencias como ultima opción:

- Con referencias tenemos que tomar un enfoque imperativo, perdiendo los beneficios de estados, props y jsx de React.
- Esta pensado solo para aquellos casos que no pueden ser gestionados por React.

Cuando se quiera almacenar algun tipo de valor que no provocan un renderizado porque no tiene nada que ver con este render.

No utilizar cuando este valor tenga algun impacto con lo que visualiza en la pantalla.

## Estados

Cuando el valor deba provocar un renderizado
