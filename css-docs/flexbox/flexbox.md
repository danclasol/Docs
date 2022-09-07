# flexbox

Flexbox es un modelo unidimensional de layout, que tiene como fin ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.

Flexbox maneja el layout en una sola dimensión a la vez, ya sea como fila o como columna. A diferencia del modelo bidimensional de `grid`, el cual controla columnas y filas a la vez.

- Consiste en un sistema de layout en 2 ejes, un eje principal al que llamaremos `main-axis` y un eje secundario al que llamaremos `cross-axis`
- Trabaja con un sistema de padres e hijos, es decir, un contenedor que tenga hijos, al contenedor lo llamaremos `flex-container` y a los hijos `flex-items`, un hijo puede ser a su vez contenedor de otros hijos y ser a la vez `flex-item` y `flex-container`.

Flexbox funciona a través de la propiedad `display`, y para crear un contenedor flexible pondremos: `display: flex` o `display: inline-flex`, dependerá de si queremos un contenedor de bloque o uno de línea

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
</div>
```

```css
.container {
  display: flex;
}
```

```css
.container {
  display: inline-flex;
}
```

# flex-direction

Esta es la propiedad que controla el flujo de los hijos sobre el eje principal.

Por defecto, su valor es `row`, es decir fila, por eso los elemento se colocan uno al lado del otro.

![flexbox-row](/css-docs//flexbox//images//flexbox_row.png)

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Otro valor que acepta es `column` y los elementos se apilarán en columna.

![flexbox-column](/css-docs//flexbox//images//flexbox_column.png)

```css
.container {
  display: flex;
  flex-direction: colum;
}
```

También tenemos las opciones `row-reverse` y `column-reverse`, con estas opciones invertimos el flujo del contenido.

Con `row-reverse` el eje principal irá de derecha a izquierda

![flexbox-row](/css-docs//flexbox//images//flexbox_row-reverse.png)

```css
.container {
  display: flex;
  flex-direction: row-reverse;
}
```

Con `column-reverse`, el eje principal irá de abajo arriba

![flexbox-column-reverse](/css-docs//flexbox//images//flexbox_column-reverse.png)

```css
.container {
  display: flex;
  flex-direction: column-reverse;
}
```

# flex-wrap

Con esta propiedad controlaremos qué pasa con el contenido si se desborda del contenedor.

En Flexbox, por defecto, los elementos que no quepan en el contenedor se encojeran para entrar en el contenedor. El valor por defecto, es `flex-wrap: no-wrap`

![flexbox-no-wrap](/css-docs//flexbox//images//flexbox_no-wrap.png)

```css
.container {
  display: flex;
  flex-wrap: no-wrap;
}
```

Pero si queremos evitar esto tenemos 2 valores que podemos usar.

![flexbox-wrap](/css-docs//flexbox//images//flexbox_wrap.png)

- `wrap`: Permitirá que el contenido que se desborde salte de línea

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
```

- `wrap-reverse`: Hace que el contenido salte de línea en la dirección opuesta al main axis, hacer esto cambiará la dirección del eje secundario.

![flexbox-wrap-reverse](/css-docs//flexbox//images//flexbox_wrap-reverse.png)

```css
.container {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

# flex-flow

Esto es un shorthand que engloba `flex-direction` y `flex-wrap`.

```css
body {
  flex-direction: column;
  flex-wrap: wrap;
}
```

Su equivalente es:

```css
body {
  flex-flow: column wrap;
}
```

# justify-content

Con esta propiedad podremos alinear los elementos en el `main-axis`, esto no significa horizontalmente, significa que los podremos alinear en la dirección y orientación del eje principal.

El valor por defecto es `flex-start`, es decir, los elementos se colocarán al principio del eje principal, pero tenemos más valores posibles.

![flexbox-justify-content_flex-start](/css-docs//flexbox//images//flexbox_justify-content_flex-start.png)

```css
body {
  display: flex;
  justify-content: flex-start;
}
```

- `flex-end` (end): Los elementos se colocan al final del eje principal.

![flexbox-justify-content_flex-end](/css-docs//flexbox//images//flexbox_justify-content_flex-end.png)

```css
body {
  display: flex;
  justify-content: flex-end;
}
```

- `center`: Los elementos se colocan en el centro del eje principal.

![flexbox-justify-content_center](/css-docs//flexbox//images//flexbox_justify-content_center.png)

```css
body {
  display: flex;
  justify-content: center;
}
```

- `space-between`: Los elementos se colocan con el mismo espacio entre ellos, colocando el primer hijo al principio del eje y el último al final del eje

![flexbox-justify-content_space-between](/css-docs//flexbox//images//flexbox_justify-content_space-between.png)

```css
body {
  display: flex;
  justify-content: space-between;
}
```

- `space-around`: Los elementos se colocan con el mismo espacio entre ellos, pero cada elemento tendrá la misma separación por los lados, ésto ocasiona que el primer y último elemento tengan menos separación.

![flexbox-justify-content_space-around](/css-docs//flexbox//images//flexbox_justify-content_space-around.png)

```css
body {
  display: flex;
  justify-content: space-around;
}
```

- `space-evenly`: Los elementos se colocan con el mismo espacio entre ellos, y cada elemento tendrá la misma separación tanto entre ellos como el primero y el último.

![flexbox-justify-content_space-evenly](/css-docs//flexbox//images//flexbox_justify-content_space-evenly.png)

```css
body {
  display: flex;
  justify-content: space-evenly;
}
```

# align-items

Con esta propiedad vamos a poder alinear los elementos en el `cross-axis` o eje secundario.

El valor por defecto es `stretch`, que hace que los elementos se estiren para ocupar todo el espacio disponible, siempre y cuando no tengan un `height` o `width` declarado, dependiendo de la dirección del `main-axis`. (\*Solo para contenedores e imagenes)

No conocer esto es el motivo principal por el que se deforman las imágenes cuando usamos flexbox.

![flexbox-align-items_stretch](/css-docs//flexbox//images//flexbox_align-items_stretch.png)

```css
body {
  display: flex;
  align-items: stretch;
}
```

Aparte de `stretch` tenemos más valores disponibles

- `flex-start`: Coloca los elementos al principio del `cross-axis`

![flexbox-align-items_flex-start](/css-docs//flexbox//images//flexbox_align-items_flex-start.png)

```css
body {
  display: flex;
  align-items: flex-start;
}
```

- `flex-end`: Coloca los elementos al final del `cross-axis`

![flexbox-align-items_flex-end](/css-docs//flexbox//images//flexbox_align-items_flex-end.png)

```css
body {
  display: flex;
  align-items: flex-end;
}
```

- `center`: Coloca los elementos en el centro del `cross-axis`

![flexbox-align-items_center](/css-docs//flexbox//images//flexbox_align-items_center.png)

```css
body {
  display: flex;
  align-items: center;
}
```

- `baseline`: Todos los elementos flexibles son ajustados de modo que sus bases queden alineadas.

![flexbox-align-items_baseline](/css-docs//flexbox//images//flexbox_align-items_baseline.png)

```css
body {
  display: flex;
  align-items: baseline;
}
```

# align-content

Esta propiedad funciona de una forma similar a `justify-content`, sólo la podremos utilizar junto con `flex-wrap` cuando los elementos generen varias líneas. Si no generamos ningun salto de línea no tendrá ningun efecto.

El valor por defecto es `stretch` al igual que en `align-items`

![flexbox-align-content_stretch](/css-docs//flexbox//images//flexbox_align-content_stretch.png)

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
}
```

Pero tenemos disponibles los mismos valores que en `justify-content`:

- `flex-start`: Los elementos se colocan al final del eje secundario.

![flexbox-align-content_flex-start](/css-docs//flexbox//images//flexbox_align-content_flex-start.png)

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
```

- `flex-end`: Los elementos se colocan al final del eje secundario.

![flexbox-align-content_flex-end](/css-docs//flexbox//images//flexbox_align-content_flex-end.png)

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
}
```

- `center`: Los elementos se colocan en el centro del eje secundario.

![flexbox-align-content_center](/css-docs//flexbox//images//flexbox_align-content_center.png)

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
```

- `space-between`: Los elementos se colocan con el mismo espacio entre ellos, colocando el primer hijo al principio del eje y el último al final del eje

![flexbox-align-content_space-between](/css-docs//flexbox//images//flexbox_align-content_space-between.png)

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
```

- `space-around`: Los elementos se colocan con el mismo espacio entre ellos, pero cada elemento tendrá la misma separación por los lados, ésto ocasiona que el primer y último elemento tengan menos separación.

![flexbox-align-content_space-around](/css-docs//flexbox//images//flexbox_align-content_space-around.png)

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
}
```

- `space-evenly`: Los elementos se colocan con el mismo espacio entre ellos, y cada elemento tendrá la misma separación tanto entre ellos como el primero y el último.

```css
body {
  display: flex;
  flex-wrap: wrap;
  align-content: space-evenly;
}
```

# column-gap

Esta propiedad nos permite establecer espaciado entre columnas

```css
body {
  display: flex;
  column-gap: 20px;
}
```

# row-gap

Esta propiedad nos permite establecer espaciado entre filas

```css
body {
  display: flex;
  column-gap: 10px;
}
```

# gap

Esta propiedad nos permite establecer espaciado entre filas y columnas, el primer valor será para filas y el segundo para columnas, si sólo ponemos un valor, se aplicará a filas y columnas

```css
body {
  display: flex;
  gap: 20px 10px;
}
```

# flex-grow

Esta propiedad nos permite controlar el factor de crecimiento de un elemento, es decir, del espacio restante disponible, cuanta parte le corresponde a él.

El valor de `flex-grow` tiene que ser un número positivo y ese valor será el factor de creciemiento.

El valor por defecto de `flex-grow` es 0

![flexbox-flex-grow_default](/css-docs//flexbox//images//flexbox_flex-grow_default.png)

```css
.item {
  flex-grow: 0;
}
```

Ejemplo de 3 columnas con proporcion 1 - 2 - 1

![flexbox-flex-grow](/css-docs//flexbox//images//flexbox_flex-grow.png)

```css
.item {
  flex-grow: 1;
}

.container:nth-child(2) {
  flex-grow: 2;
}
```

Estos serían los calculos que se estan haciendo el navegador por detras:

- Si tenemos un contenedor de 1000px con 3 elementos de 250px dentro
- El espacio restante disponible son 1000px - 750px (3 \* 250px) => 250px
- El cálculo que hace el navegador es 250 dividido entre la suma total de los valores de `flex-grow`, de forma que:
  - Para `flex-grow:0` -> `250 / 0 = 0`, es decir, los elementos no crecen
  - Para `flex-grow:1` -> `250 / 1 = 250`, crecerá 250px.
  - Para `flex-grow:2` -> `250 / 2 = 500`, crecerá 500px.

# flex-shrink

Con esta propiedad vamos a controlar el factor de reducción de los elementos, funciona a través del mismo algoritmo que `flex-grow`, la diferencia es que en lugar de utilizar el espacio restante disponible, utiliza el espacio que falta entre el tamaño total de los elementos y el espacio disponible

El valor de `flex-shrink` tiene que ser un número positivo y ese valor será el factor de reducción.

El valor por defecto de `flex-shrink` es 1, por eso los elementos encogen automáticamente cuando no caben.

```css
.item {
  flex-shrink: 1;
}
```

Ejemplo de 5 columnas y la del medio queremos que encoja 3 unidades de reducción:

```css
.item {
  flex-shrink: 1;
  width: 250px;
}

.item:nth-child(3) {
  flex-shrink: 3;
}
```

Estos serían los calculos que se estan haciendo el navegador por detras:

- Si tenemos un contenedor de 1000px con 5 elementos de 200px dentro, en este contexto los elementos caben perfectamente.
- Si ahora reducimos el espacio disponible a 700px los elementos se ven forzados a encogerse para caber en el contenedor, si hicieramos un cálculo de cuanto se han reducido, la suma total nos daría 300px, los elementos ocupan 1000px totales y se tienen que ajustar a los 700px actuales, 1000 - 700 = 300px

- El cálculo que hace el navegador es el mismo que cuando trabajamos con `flex-grow`, la diferencia es que ahora para hacer el cálculo usará esos 300px que faltan para conseguir que todos los elementos puedan caber sin reducirse.
- El factor de reduccion sera 300 / 5 -> 60px
  - Para `flex-shrink: 1` -> 60px \* 1 cada item se habrá reducido en 60px.
  - Para `flex-shrink: 3` -> 60px \* 3, item se reducirá en 180px.

# flex-basis

Esta propiedad nos sirve para especificar cual es el tamaño inicial de un elemento flexible en el `main-axis`, si utilizamos `width` o `height` prevalecerá el valor de `flex-basis` que le corresponda dependiendo de la orientación del `main-axis`

El valor por defecto es `auto`.

```css
.item {
  flex-basis: auto;
}
```

Ejemplo de un menu, en el que queremos que todos los items tengan el mismo ancho.

```html
<div class="menu">
  <div class="item">Inicio</div>
  <div class="item">Informacion Personal</div>
  <div class="item">Contacto</div>
</div>
```

```css
.menu {
  margin: 0;
  padding: 0;
  width: 700px;
  display: flex;
  justify-content: center;
  text-align: center;
  column-gap: 10px;
}
```

Si no especificamos el `flex-basis: 0` antes el ``flex-grow` hará que los elementos crezcan tomando como referencia el ancho real del item, que en este caso cada item del menu tiene una anchura distinta.

```css
.item {
  padding: 1rem;
  flex-basis: 0;
  background: tomato;
}
```

El `flex-grow: 0`, hace que todos crezcan tomanto como referencia la misma anchura

```css
.item {
  padding: 1rem;
  flex-basis: 0;
  flex-grow: 3;
  background: tomato;
}
```

# order

Esta propiedad nos permite alterar el orden en el que se dibujarán los elementos, es MUY IMPORTANTE que recordéis que NO CAMBIA el flujo del HTML, sólo la parte visual, eso significa que propiedades como `:nth-child()` funcionarán exáctamente igual aunque visualmente los elementos aparezcan en otro orden.

El valor inicial de `order` es 0, y acepta números enteros positivos y negativos, visualmente los elementos se colocarán en orden ascendente en el flujo del `main-axis`

Por ejemplo, como todos los items por defecto tienen `order: 0`, el `order: 1`, hace que este item se ponga el ultimo.

Visualmente, quedarian los items -> 2, 3, 4, 1

```css
.item:nth-child(1) {
  order: 1;
}
```

## Mas ejemplos

![flexbox-order1](/css-docs//flexbox//images//flexbox_order1.png)

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.item:nth-child(1),
.item:nth-child(2),
.item:nth-child(3) {
  order: 1;
}

.item:nth-child(4) {
  order: 2;
}

.item:nth-child(5) {
  order: 3;
}
```

![flexbox-order2](/css-docs//flexbox//images//flexbox_order2.png)

```html
<div class="container">
  <div class="item">-1</div>
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">5</div>
</div>
```

```css
.item:nth-child(1) {
  order: -1;
}

.item:nth-child(2) {
  order: 1;
}

.item:nth-child(3) {
  order: 2;
}

.item:nth-child(4) {
  order: 5;
}
```

![flexbox-order3](/css-docs//flexbox//images//flexbox_order3.png)

```html
<div class="container">
  <div class="item">2</div>
  <div class="item">2</div>
  <div class="item">99</div>
</div>
```

```css
.item:nth-child(1),
.item:nth-child(2) {
  order: 2;
}

.item:nth-child(3) {
  order: 99;
}
```

# align-self

Esta propiedad nos va a permitir alinear un elemento de forma independiente en el `cross-axis`. Es una propiedad de los `flex-items`

Por ejemplo, si tenemos todos los items de este contenedor alineados centrados, podemos establecer que un solo item tenga otro alineado

```css
.container {
  display: flex;
  align-items: center;
}
```

```css
.item:nth-child(2) {
  align-self: end;
}
```

# Margin auto en contenedor `flex`

El `margin: auto` tiene un comportamiento especial si se lo asignamos a un hijo de un contendor `flex`.

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex;
}
```

Si aplicamos `margin: auto` a todos los items, funciona igual que si al contenedor le pusieramos `justify-content: space-around`

```css
.item {
  margin: auto;
}
```

Pero si se lo ponemos solo a un elemento, podemos conseguir separarlo del resto.

Se aplica el margin al primero elemento y empuja al resto a la derecha

![flexbox-margin-auto](/css-docs//flexbox//images//flex-margin-auto.PNG)

```css
.item:nth-child(1) {
  margin: auto;
}
```
