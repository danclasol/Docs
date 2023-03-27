# Eventos del formulario

Los formularios funcionan ligeramente diferentes al resto del elementos del _DOM_, ya que el usuario puede interactuar directamente con los campos en el navegador.

No solo tienen que tener valores iniciales como un _div_ o un _h1_, si no que tambien tienen una serie de valores que pueden ir cambiando con el tiempo.

Por ejemplo, en un _input_ el usuario puede modificar directamente el _value_.

En React, la gestion de formulario se puede hacer de 2 formas:

## Formularios no controlados

- Tratar el formulario como un simple elementos del DOM
- Extraemos el valor del input mediante la API de JavaScript para manipular el DOM
- El valor del input no esta gestionado por React

En esta caso, solo tendremos acceso a los datos del formulario utilizando algun evento.

### onSubmit

Por defecto, el ultimo boton de un formulario hara submit y recargara la pagina

```js
<form
	onSubmit={ev => {
		ev.preventDefault();
		console.log(ev.target.search.value);
	}>
	<input></input>
	<button>Buscar</button>
</form>
```

### onChange

Si establecemos un useState para mostrar el valor del input, para actualizarlo tenemos que usar una vez mas un evento para obtener el valor introducir y en este evento actualizar el estado.

Un problema que da esto es que si establecemos un valor inicial al useState('Default value'), esto no se verá reflejado en el input. Para que esto ocurra deberíamos establecer tambien un defaultValue al input, aunque realmente no estaran realmente relacionados.

```js
const [search, setSearch] = useState('')

<form>
   <input
       type="text"
       name="search"
       onChange{ev => {
	   console.log(ev.target.search.value); // Obtener el valor del input, del objeto event
       }>
   </input>
   <button>Buscar</button>
</form>
```

## Formularios controlados

- React gestiona el valor directamente del input a traves de un estado
- Existe una relacion bilateral entre el estado y el valor del input.
  Si alguno de los 2 cambia, el otro tambien cambiará.

### onChange

Utilizaremos el atributo value del input para realizar el enlace

Si utilizamos el atributo value, ya no es necesario utilizar el defatulValue, simplemente usaremos el valor por defecto del estado
Ademas, React nos lo marcara con un error si usamos ambos value y defaultValue.

Otra consideracion, en los formularios controlados, es que es obligatorio que declaremos un evento para obtener el valor del input
Si no lo ponemos, React nos lo detecta como un error, ya que de esta manera es imposible modificar el input

```js
const [search, setSearch] = useState('')

<form>
   <input
       type="text"
       name="search"
       value={search} // Enlazamos el estado de react con el atributo valor del input
       onChange{ev => {
	   console.log(ev.target.search.value); // Obtener el valor del input, del objeto event
       }>
   </input>
   <button>Buscar</button>
</form>
```

## Controlados vs No controlados

### Formulario no controlado

- Cuando solo nos interese leer el valor de un formulario cuando se produzca el evento
  del formulario
  Ej.: Rellenar un formulario, llamar a una API y pintar el resultado

## Formulario controlado

- Cuando queramos un comportamiento mas dinámico
- Hacer validaciones cada vez que pulsemos una tecla
