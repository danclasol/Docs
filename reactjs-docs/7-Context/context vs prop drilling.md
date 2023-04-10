# Context vs Prop drilling

## Ventajas de usar Context

- Nos evita tener que pasar las props por todos los componentes intermedios.
- Nos evita renderizados innecesarios, solo renderiza los que usen el contexto.

## Incovenientes de usar Context

- Perdemos control de quien usa los context, ya que cualquier componente dentro del provider podra utilizarlo. En el prop drilling sabemos exactamente los componentes que estan usando las props.

  Si hacemos algun cambio en el context, habrá que revisar manualmente cada uno de los componentes ya que no sabemos exactamente que componentes usan el contexto.

  En _prop drilling_, solo habra que ir bajando hasta que no haya mas paso de props.

- Usar context en un componente, puede hacerlo menos reutilizable, ya que estamos acoplando completamente el componente al contexto.

  Pasar el valor a un componente por props permite que el componente pueda ser llamado desde cualquier sitio.

  Mientras que si el componente obtiene el valor del contexto, no podremos pasarle nada por props.

# Razones para usar Context

Cuando tengamos que pasar un valor de un componente o otro que este muy por debajo en el arbol.

- Evitamos el renderizado innecesario de todos los componentes intermedios.

Cuando un componente este fuertemente acoplado a un determimado valor, lista u objeto.

- El componente solo tiene sentido junto a este valor del contexto, no va a ser reutilizado en ningun sitio.
- El componente será mas escalable, ya que todos los componentes nuevos que se creen por debajo del provider tendran acceso al valor del contexto.

  En el _prop drilling_, habrá que pasar los _props_ por cada componente nuevo.

# Razones para usar prop drilling

Cuando necesitemos que un componente sea reutilizable es mejor pasarle la _prop_ que obtener el contexto

- Permite llamar al componente desde cualquier sitio, pasando el valor de cualquier fuente.
- El componente no esta acoplado al contexto.

Cuando tengamos que pasar un valor de un componente o otro y este no este muy por debajo en el arbol

- Tenemos control de los componentes exactos que utilizan las props.
- Si los componentes intermedios aumentan, valorar si componensa o no utilizar un contexto.
