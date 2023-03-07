# useState

El estado es un objeto que contiene datos que pueden cambiar en el tiempo. En React, el estado se usa para controlar los cambios en la interfaz.

En React existe el _hook_ `useState`, para manejar el estado de nuestros componentes.

Este _hook_ devuelve un array de 2 posiciones:

- La primera es el valor del estado
- La segunda es la funcion que permite modificar el valor del estado

```js
const [state, setState] = useState(true);
```

# Valor inicial del estado

Si le pasamos un parametro al `useState`, le indicamos el estado inicial que queremos que tenga el componente

Al renderizarse el componente, sera el estado que se le asigne.

```js
useState(true);
```

## Tipo de valor inicial

Los posibles valores que acepta son los siguientes:

### useState()

Si no ponemos nada, se asignara como _undefined_

```js
const [state, setState] = useState();
```

### useState(boolean)

Si pasamos como valor un _boolean_, se asignará ese valor:

```js
const [state, setState] = useState(true);
```

### useState(function)

Si queremos utilizar una funcion para calcular el estado inicial, podemos pasarle una funcion como parámetro.

React guarda como estado el valor que devuelve la funcion, no la función en sí.

```js
const [state, setState] = useState(() => {});
const [state, setState] = useState(myFunction);
```

Es importante que le pasemos la funcion no la ejecución de la funcion. Ya que si le pasamos la ejecucion, la funcion se ejecutará con cada renderizado (cada vez que se ejecuta la funcion del componente).

```js
const [state, setState] = useState(myFunction());
```

## Inicializar con valor de una prop

Es posible inicializar un estado con el valor de una prop. Pero hay que tener en cuenta que, si la prop cambia, el estado no se actualizará automáticamente. Esto es porque el estado se inicializa una vez, cuando el componente se monta por primera vez.

```js
const Count = ({ count }) => {
  const [number, setNumber] = useState(count);

  return <p>{number}</p>;
};
```

Es un error muy común pensar que la prop actualizará el estado, así que tenlo en cuenta.

En el caso que necesites inicializar un estado con una prop, es una buena práctica es añadir el prefijo de initial a la prop para indicar que es el valor inicial del estado y que luego no lo usaremos más:

```js
const Input = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
};
```

# setState

Solo es posible modificar el estado con la funcion modificadora `setState()`.

```js
setState(newState);
```

Al llamar a esta funcion, si el valor es distinto al actual, provocamos un renderizado. Si le pasamos el mismo valor que tenga actualmente, React no detecta ningun cambio y no realiza el renderizado.

En realidad, si le pasamos el mismo valor a _setState()_, React hace un renderizado de comprobación para verficar si realmente hemos llamado a setState con el mismo valor. Esto lo hace porque realmente no deberíamos de llamar a _setState_ con el mismo valor que el actual.

Lo correcto sería evitar llamar a setState si es posible.

```js
if (activeState !== newActiveState) {
  setActiveState(newActiveState);
}
```

Si modificamos el estado directamente, sin usar la funcion, solo estariamos modificando el valor de la variable del estado pero no veríamos ningun cambio visual en la pagina.

```js
state = newValue; // No veríamos ningun cambio de renderizado
```

Realmente, hace un renderizado de comprobacion, que consiste en relanzar la funcion del componente, pero no de sus hijos.

Esto lo hace para comprobar si realmente, estamos llamando al setState con el mismo valor.

## Valor del estado durante el render

Cuando se llama a _setState_ el valor del estado no se actualiza al instante, sino que primero se ejecuta todo el codigo de la accion realizada.

Entendiendo como accion cualquier evento que se produce en nuestra aplicación y para la que debemos de realizar una tarea como respuesta.

Una acción puede ser de varios tipos en funcion de quien los provoque:

- Eventos por acciones del usuario: click boton, etc.
- Eventos externos: llega un mensaje en un chat, llega notificacion, etc.
- Eventos de React: renderizado provocado por actualizacion de un estado

En React estas acciones se procesan en cola, es decir, antes de pasar a la siguiente accion, la anterior debe de haber finalizado.

En este ejemplo, cuando se ejecuta la línea del _setState_, no se actualiza al instante el estado y se produce el renderizado. Si no que este cambio de mete en la cola, y no es hasta que haya terminado toda la ejecucion de la accion, cuando se produce el ejecuta el _setState_ y el renderizado.

```js
const UserRow = () => {
  const [active, setActive] = useState(false);

  <button
    onClick={() => {
      console.log(active); // false
      setActive(!active);
      console.log(active); // false -> todavía tiene el valor anterior
    }}
  ></button>;
};
```

Si en una misma accion, incluimos mas de una llamada al _setState_, solo se tendra en cuenta la ultima y solo provacará un renderizado.

```js
const UserRow = () => {
   const [active, setActive] = useState(false);

  <button
    onClick={()=> {
      console.log(active); // false
      setActive(false); // No produce renderizado
      setActive(true); // No produce renderizado
      setActive(!active); // No se actualiza todavía el valor del active
      console.log(active); // false
      // Una vez terminada toda la ejecucion de la accion, se produce el renderizado
  }}
  ></button>
```

## prevState

El _setState_ tambien acepta una funcion que tiene como parametro el _prevState_.

El _prevState_ tiene el valor real anterior, teniendo en cuenta otras llamadas a setState.

```js
const UserRow = () => {
  const [active, setActive] = useState(false);

  <button
    onClick={() => {
      console.log(active); // false

      setActive(true);
      // El prevState tiene true, ya que es el ultimo valor que se le ha asignado
      setActive((prevState) => {
        console.log(prevState);
        return !prevState;
      });

      console.log(active); // false
      // Una vez terminada toda la ejecucion de la accion, se produce el renderizado
    }}
  ></button>;
};
```

## setState con objetos

Cuando el estado sea un objeto hay que procurar que estemos asignando una nueva referencia como valor nuevo, ya que si le pasamos simplemente el mismo objeto cambiado, no lo detectará como cambio.

```js
const [activeState, setActiveState] = useState({ active: true });
```

Si pasamos la misma referencia, aunque modifiquemos alguna propiedad, se considerará que no hay cambios.

```js
const newState = activeState; // Estamos copiando la referencia
newState.active = false; // Tanto newState como activeState tienen el mismo valor
setState(newState); // Misma referencia, no se detectan cambios
```

La forma correcta, sería creando una copia del objeto con las propiedades con los nuevos valores, que tendrá una nueva referencia.

```js
const newState = { ...activeState }; // Asi se hace una copia con nueva referencia
newState.active = false; // Tanto newState como activeState tienen el mismo valor
```

## setState con arrays

Al igual que con los objetos, no podemos pasarle la referencia como valor nuevo, hay que hacer una copia con una nueva referencia

```js
const [activeState, setActiveState] = useState([true]);
```

Si pasamos la misma referencia, aunque modifiquemos algun elemento, se considerará que no hay cambios.

```js
const newActiveState = activeState; // Estamos copiando la referencia
newActiveState[0] = !activeState[0];
```

La forma correcta, sería creando una copia del array con los nuevos elementos, que tendrá una nueva referencia.

```js
const newState = [...activeState]; //Asi se hace una copia con nueva referencia
newState[0] = !activeState[0];
```
