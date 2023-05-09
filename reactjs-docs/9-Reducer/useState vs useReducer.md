# useState vs useReducer

## useState

- Mas sencillo. Con una sola linea tenemos un estado y una funcion para modificar el estado directamente
- Menos trazabilidad. El setState se puede usar en cualquier parte de la aplicacion y no tenemos control de donde se hace
- Mas dificil de testear.
- Util para estados sencillos, con pocos setters

## useReducer

- Mas complejo. Hay que escribir un reducer, seguir estandar, etc
- Mas trazabilidad. Sabemos perfectamente cual es la funcion en la que se modifica el estado y tenemos centralizada en el reducer todas las posibles modificaciones
- Mas facil de testear
- Recomendados para estados complejos.
