# Context

Un contexto es un mecanismo para compartir un valor entre componentes sin tener que pasar las props de un componente a otro (prop drilling).

## createContext

Para crear un contexto usaremos la funcion `createContext`

- Solo hay que crearla una primera vez
- No se puede crear dentro de ningun componente, ya que al volver a renderizar un componente volveriamos a crear este contexto
- Es posible pasar como parámetro un valor por defecto, aunque no tenga mucho sentido, ya que será sustiudo cuando establecemos el valor del contexto.

```js
const context = createContext(defaultValue);
```

### props

- `context.displayName`: solo sirve para depuracion de codigo
- `context.Consumer`: forma antigua de consumir un contexto, obsoleta
- `context.Provider`: nos permite delimitar que componentes tienen acceso a este contexto nos permite establecer el valor del contexto

## Provider

Todos los componentes que pongamos dentro de un `Provider` tendrán acceso al contexto.

### props

- `value`: valor que tendrá el contexto y que será accessible por los componentes.
  - Puede ser cualquier valor, numero, string, array u objeto, aunque lo mas comun seran objetos que dentro tendran estados y setState, que al modificarse provocar nuevos renderizados.
  - Si no establecemos esta propiedad valor, por defecto, será `undefined`.

```js
<ThemeContext.Provider value={theme}>
  <Page />
</ThemeContext.Provider>
```

Tambien es posible tener mas de un contexto a la vez.

- No afecta el orden en el que pongamos los providers.

```js
<ThemeContext.Provider value={theme}>
  <AuthContext.Provider value={currentUser}>
    <Page />
  </AuthContext.Provider>
</ThemeContext.Provider>
```

Aunque no sea comun, es posible tener mas de un provider del mismo contexto.

En este caso el componente que use `useContext` buscará el Provider mas cercano en el árbol.

## useContext

Desde un componente podemos leer el contexto con el hook `useContext`.

Cuando se llama al `useContext`, lo que ocurre es que va a ir subiendo por sus padres hasta llegar al padre que tenga declarado un Provider.

Si no encuentra ninguno porque no tiene un _Provider_ por arriba, es decir, el componente no esta delimitado en el _provider_, se obtendría el valor por defecto que hayamos pasado al _createContext(defaultValue)_.

```js
function Button() {
  const theme = useContext(ThemeContext);
  // ...
}

function Profile() {
  const currentUser = useContext(AuthContext);
  // ...
}
```

# Renderizando

Cuando se modifica el valor del contexto, si es un estado, se renderizan todos los componentes que esten usando el contexto. Da igual que no se utilize el valor en ningun estado para nada, simplemente se renderiza si se llama a _useContext_.

Por otro lado, con el _prop drilling_, solo se renderizá por los compontes por los que se han pasado las _props_.

# Buenas prácticas

- No meter en el contexto mas cosas de lo necesario, ya que provocaremos renderizados indeseados. Es mejor separar en distintos contextos.

- Delimitar al máximo el alcance del Provider. Solo meter dentro los componentes que no van a utilizar el provider.

# Casos de uso

- _Theming_: Podemos situar el provider en lo alto del arbol, y usar el contexto en los componentes que necesitemos ajustar los estilos.

  - eg: (dark/light mode)

- Sesion del usuario: almacenar en el contextlo la informacion del usuario autenticado.

- _Routing_: la mayoria de librerías para el routado utiliza contexto internamente. De este manera cada _link_ sabe si esta activo o no.

- Manejar estados:
  - Es comun usar un _reducer_ junto con _context_ para manejar estados complejos y pasarlos a componente que estan muy abajo en el árbol.
