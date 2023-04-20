# useEffect

El _hook_ `useEffect` se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.

El `useEffect` se ejecuta una vez que se ha completado el renderizado, por lo que el tiempo que tarde en ejecutarse el `useEffect` no afecta en nada visualmente a la aplicacion.

```js
useEffect(setup, dependencies?)
```

## Parameters

- `setup`: función que se ejecutará al cambiar las dependencias o al renderizar el componente.

- `dependencies`: array de dependencias. Si cambia el valor de alguna de estas dependencias, se ejecutará la función.

## Setup function

Esta es la función se ejecutará:

- Cada vez que se renderizé el componente.
- Cada vez que cambie el valor de alguna dependencias.

## Dependencies

Para comprobar si una dependencia ha cambiado, se compara el valor que tenía la dependencia antes del cambio con el nuevo valor que se haya asignado. Esta comparación la hace usando usando `Object.is`.

Existen 3 formas de declarar las dependencias:

- Si cambia el valor de alguna dependencia, se ejecutará la función del _useEffect_.

  En este caso, la primera vez tambien se ejecuta siempre.

  ```js
  useEffect(() => {
    document.title = count;
  }, [count]);
  ```

- Si no indicamos ninguna dependencia, se ejecutará con cada renderizado

  ```js
  useEffect(() => {
    document.title = count;
  });
  ```

- Si le pasamos un array vacio, solo se ejecutará una vez con el primer renderizado, y ya nunca más.

  ```js
  useEffect(() => {
    document.title = count;
  }, []);
  ```

- No existe ninguna forma de evitar esta primera ejecucion del _useEffect_ por defecto.

  Se podría conseguir controlando dentro de la ejecucion del _useEffect_.

  ```js
  useEffect(() => {
    if (count === 0) return;
    document.title = count;
  }, [count]);
  ```

# Async

1. Si necesitamos hacer cualquier llamada asincrona en un componente de React, debemos localizarlo en un _useEffect_, ya que no posible bloquear el proceso de renderizado con ningun proceso asincrono.

2. La funcion del _useEffect_, no debe ser asincrona, debido a que si tenemos una función de _cleanup_, esta no estará disponible hasta que no finalice la llamada asincrona.

   Por lo que si, por ejemplo, antes de que finalize la llamada asincrona, queremos utilizar el cleanup, no podremos, ya que el useEffect, no habrá devuelto todavía la funcion cleanup

```js
const getInitialValue =() => {
  new Promise(resolve => {
    setTimeout(()=> resolve(5),2000)
    });
}
const App =()=> {
...
useEffect(async() => {
  const initialValue = await getInitialValue();

  return ()=> console.log('cleanup')}, [])
...
}
```

Colocando el async en una función fuera del useEffect, conseguimos que el cleanup este disponible con el renderizado, y la llamada asincrona podra tomar el tiempo que necesite.

```js
const getInitialValue =() => {
  new Promise(resolve => {
    setTimeout(()=> resolve(5),2000)
    });
}

const App =()=> {
...
const setInitialValue = async() => {
  const initialValue = await getInitialValue();
  setCount(initialValue);
}

useEffect(() => {
   setInitialValue();

   return ()=> console.log('cleanup');
},[])
...
}
```
