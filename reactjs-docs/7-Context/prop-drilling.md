# prop drilling

Tecnica de pasar propiedades entre uno o mas componente.

## Ventajas

- Control explicito de lo que se hace con las props:
  - Sabemos exactamente donde y como se utiliza
  - Podemos seguir la traza de los componentes por lo que va pasando

## Desventajas

- En los componentes intermedios, las _props_ solo sirven para pasarselo al otro componente:
  - En el componente estas props no se utilizan para nada
  - Es una perdida de memoria
  - Empeora la legibilidad, si se acumulan muchas props
