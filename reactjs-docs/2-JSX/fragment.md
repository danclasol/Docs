# React Fragment

Los Fragments son una forma de agrupar elementos sin añádir un elemento extra al DOM, ya que no se terminan renderizando en nada.

```js
import {Fragment} from 'react';

const content =
    <Fragment>
        <h2></h2>
        <p><p>
    </Fragment>;
```

React tambien nos ofrece una sintaxis para usarlo sin impotart nada
mediante una etiqueta vacia seria lo mismo que usar Fragment

```js
const content =
    <>
        <h2></h2>
        <p><p>
    </>
```

# Ventajas

Las razones por las que es recomendable usar Fragment en vez de un div a la hora de envolver varios elementos son:

- Los div añaden un elemento extra al DOM, mientras que los Fragments no. Esto hace que el número de elementos HTML y la profundidad del DOM sea menor.
- Los elementos envueltos con Fragment son afectados directamente por las propiedades flex o grid de CSS de su elemento padre. Si usas un div es posible que tengas problemas con el alineamiento de los elementos.
- Los Fragments son más rápidos que los div ya que no tienen que ser renderizados.
- Los div aplican CSS por defecto (hace que lo que envuelve el div se comporte como un bloque al aplicar un display: block) mientras que los Fragment no aplican ningún estilo por defecto.
