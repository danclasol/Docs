# Direccion

Esta es la propiedad que controla el flujo de los hijos sobre el eje principal.

```css
flex-direction: row | row-reverse | column | column-reverse;
```

# Wrap

Con esta propiedad controlaremos qué pasa con el contenido si se desborda del contenedor.

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

Esto es un shorthand que engloba flex-direction y flex-wrap.

```css
flex-flow: column wrap;
```

# Alineamiento

Con esta propiedad podremos alinear los elementos en el main-axis.

```css
justify-content: flex-start | flex-end | center | space-between | space-around |
  space-evenly | start | end | left | right... + safe | unsafe;
```

Con esta propiedad vamos a poder alinear los elementos en el cross-axis o eje secundario.

```css
align-items: stretch | flex-start | flex-end | center | baseline | first
  baseline | last baseline | start | end | self-start | self-end +... safe |
  unsafe;
```

Esta propiedad funciona de una forma similar a justify-content, sólo la podremos utilizar junto con flex-wrap cuando los elementos generen varias líneas.

```css
align-content: flex-start | flex-end | center | space-between | space-around |
  space-evenly | stretch | start | end | baseline | first baseline | last
  baseline +... safe | unsafe;
```

Esta propiedad nos va a permitir alinear un elemento de forma independiente en el cross-axis.

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

# Espacios

Propiedades para declarar los espacios entre columnas y filas

```css
gap: 10px;
gap: 10px 20px;
row-gap: 10px;
column-gap: 20px;
```

# Redimensionar

Propiedades para indicar como deben de crecer o encojer los items

```css
flex-grow: 4; /* default 0 */
flex-shrink: 3; /* default 1 */
flex-basis: | auto; /* default auto */
```

# Cambiar orden

Esta propiedad nos permite alterar el orden en el que se dibujarán los elementos

```css
order: 5; /* default is 0 */
```
