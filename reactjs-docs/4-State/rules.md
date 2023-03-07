# Reglas

## Reglas del estado

- Usar estado cuando tenemos que cambiar algo del componente.

- Nunca modificar directamente elementos del DOM.

- Siempre hacerlo utlizando el VirtualDOM, es decir, usando useState cuando necesitemos cambiar dinamicamente algo.

- Si modificamos el DOM lo que hacemos es que React, no sea notificado de este cambio. El virtualDOM no sera notificado de este cambio, pudiendo provocar errores e incongruencias.

## Reglas de lo hooks

- Los _hooks_ solo pueden ser declarados dentro del cuerpo de un componente. De esta forma queda asociado el _hook_ con el componente.

- Aunque se declare dentro, el valor de un _useSate_ (o de cualquier otro _hook_) se mantiene durante los distintos renderizados de un componente.

  El valor no se pierde porque React detecta si es la primera vez que se llama o se trata de llamadas posteriores. Esto lo hace almacenando el estado en un store (almacenamiento externo a estos componentes).

  - Cuando declaramos el useState(active), estamos creando ese estado en el store.
  - Cuando se ejecuta por segunda vez, lo que hacemos es modificar este estado creado.
