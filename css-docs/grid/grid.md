# grid

`Grid` es un modelo de layout, al igual que `flexbox` se creó para ayudar con la maquetación en diferentes dispositivos, pero funciona con un sistema bidemensional, mientras que `flex` es unidimensional.

- Trabaja con un sistema de padres e hijos. Al igual que `flexbox`
- Tendremos el `grid-container` como padre y los `grid-items` como hijos. También es posible que un `grid-item` sea un `grid-container` aunque esta situación no se da tan a menudo como en `flexbox`.

Grid se utiliza a través de la propiedad display, y al igual que en `flexbox` tenemos la siguientes opciones:

- grid – generates a block-level grid
- inline-grid – generates an inline-level grid

```css
.container {
  display: grid;
}
```

```css
.container {
  display: inline-grid;
}
```

# Terminología

Hay cuatro conceptos asociados a grid que hace falta conocer para entender cómo funciona internamente grid:

- `Grid-line`: Cada una de las líneas que se colocan a los lados de las columnas y filas, son líneas virtuales que crea el navegador.

![grid-line](/css-docs//grid//images//grid-line.png)

- `Grid-track`: Cada una de las filas y columnas de nuestro grid.

![grid-track](/css-docs//grid//images//grid-track.png)

- `Grid-cell`: Cada una de las celdas donde podemos poner contenido.

![grid-cell](/css-docs//grid//images//grid-cell.png)

- `Grid-area`: Agrupación de grid cells que no formen ni una fila ni una columna.

![grid-area](/css-docs//grid//images//grid-area.png)

# Establecer filas y columnas

Para establecer filas y columnas tenemos dos propiedades que se le asignan al `grid-container`

Tenemos `grid-template-columns` para establecer columnas y `grid-template-rows` para establecer filas.

Como valor / valores pondremos tantos como columnas y filas queramos es decir, si queremos una grilla de 4 columnas y 3 filas pondremos 4 valores en `grid-template-columns` y 3 valores en `grid-template-rows`, los valores establecerán la medida el ancho de cada columna y el alto de cada fila.

Los valores se pueden indicar en px, em, rem, porcentajes, o cualquier medida valida de css.

Por ejemplo, creamos 4 columnas con las siguientes medidas:

```css
grid-template-columns: 100px 200px 150px 100px;
```

Y creamos 2 filas con las siguientes medidas:

```css
grid-template-rows: 150px 100px 100px;
```

# Gap

Si queremos dar espaciado entre celdas tenemos la propiedad nativa `grid-gap`, en flexbox tenemos la propiedad `gap` que sive para todos los sitemas de layout.

```css
grid-column-gap: 1rem;
grid-row-gap: 2rem;
```

Tenemos el shorthand `gap` para el espaciado en filas y columnas y admite dos valores, primer valor para filas y segundo para columnas, si queremos dar un solo valor se aplicará tanto a filas como a columnas.

```css
gap: 1rem 2rem;
```

También existe la opción de usar `row-gap` y `column-gap` para dar la separación individualmente a filas y columnas respectivamente.

```css
row-gap: 1rem;
column-gap: 2rem;
```

# Unidades de medida y funciones

Grid nos da una serie de palabras clave para que sea el navegador el que calcule las medidas y el número de tracks en función del espacio disponible.

## `fr`

Esta medida sirve para que se calcule automáticamente la medida de los `grid-tracks`.

`fr` viene de fracción, y lo que hace el navegador es sumar el número total de fracciones que tenemos, dividirlo entre el número de filas o columnas que tenemos, y asignar a cada uno el número de fracciones que le corresponden.

```css
grid-template-columns: 25% 50% 25%;
```

Es "equivalente" a

```css
grid-template-columns: 1fr 2fr 1fr;
```

Es muy habitual confundir `fr` con `auto`, el comportamiento es muy distinto, cuando usamos `fr` se divide el espacio disponible, si usamos `auto` la celda tendrá únicamente el ancho que necesite el elemento.

## `min-content`

Asignará el minimo tamaño del contenido

```css
grid-template-columns: 1fr min-content;
```

## `max-content`

Asignará el máximo disponible. Es el equivalente a `auto` ocupará lo maximo necesario

```css
grid-template-columns: 1fr max-content;
```

## `auto`

Parecido a `max-content` ocupara lo máximo necesario

```css
grid-template-columns: 1fr auto;
```

## `fit-content`

Es una mezcla entre `min-content` y `max-content`. Como parámetro le dirémos cual es su máximo, y como mínimo será `min-content`

```css
grid-template-columns: 1fr fit-content(200px);
```

## `min`

Establece la dimension mínima que tendrá la columna o fila

```css
grid-template-columns: min(100px) 3fr;
```

## `max`

Establece la dimension máxima que tendrá la columna o fila

```css
grid-template-columns: max(100px) 3fr;
```

## `minmax`

Establece un mínimo y un máximo que tendrá la columna o fila. Combina las funciones de `max()` y `min()`

```css
grid-template-columns: minmax(100px, 1fr) 3fr;
```

## `repeat`

Función para repetir patrones de filas o de columnas.

```css
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-columns: repeat(8, 1fr);
```

Si quisiéramos un patron de 6 columnas de 100px 50px 200px 100px 50px 200px, podemos poner:

```css
`grid-template-columns: repeat(2, 100px 50px 200px) `;
```

Cuando usamos `repeat()` también podemos añadir columnas o filas antes o después

```css
`grid-template-columns: 100px repeat(2, 1fr) `;
```

Podemos combinar repeat() con `auto-fill` y `auto-fit`

### `auto-fill`

Genera tracks vacíos de las medidas establecidas para rellenar el espacio restante.

```css
grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
```

### `auto-fit`

Expande o hace saltar de línea los items en función del espacio disponible.

```css
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
```

# Cambiar posiciones

Con las propiedades `grid-column-start`, `grid-column-end`, `grid-row-start` y `grid-row-end`, o con el shorthand `grid-column` y `grid-row` podemos establecer en qué columna y fila empieza y termina un elemento.

Por ejemplo, si tenemos 4 columnas y 2 filas podemos colocar cualquier elemento donde queramos estableciendo en qué columna y fila queremos que comience y termine.

Si queremos que un elemento empiece en la `grid-line` 2 y llegue hasta la 4 sólo tendremos que poner:

```css
grid-column-start: 2;
grid-column-end: 4;
```

O lo podemos simplificar con el shorthand `grid-column` separando los valores con una `/`

```css
grid-column: 2 / 4;
```

Si queremos indicarle a un elemento que ocupe varias columnas no es necesario que contemos las `grid-lines`, tenemos la opción de usar la palabra clave `span` para indicarle el número de columnas o filas que queremos que ocupe.

```css
grid-column: 2 / 6;
```

Es equivalente a:

```css
grid-column: 2 / span 4;
```

Si queremos que un elemento ocupe todas las columnas disponibles, podemos utilizar '-1' para que empize a contar desde la derecha

```css
grid-column: 1 / -1;
```

En el caso de que queramos que ocupe todas las columnas o filas disponibles podemos usar como valor `-1` para que llegue hasta la última `grid-line` disponible.

# Grid áreas

Para colocar contenido dentro de nuestro grid también tenemos la opción de definir áreas, y para darle tamaño a nuestro grid seguiremos usando `grid-template-columns` y `grid-template-rows`

En este ejemplo estamos diciendo que nuestro layout tiene 3 columnas y 3 filas, cada fila irá encerrada entre comillas y cada nombre que pongamos separado por espacios será una columna.

```css
grid-template-areas:
  "header header header"
  "aside main main"
  "footer footer footer";
```

Si el nombre de la columna se repite podemos usar `.` o `-` para indicar que esa columna tiene el mismo nombre.

Es muy importante mantener la coherencia entre filas y columnas, no podemos tener una fila con 3 columnas y otra con 4, todas las filas deben tener el mismo número de columnas.

Después para colocar los elementos sólo tendremos que poner `grid-area: nombre en el template`

```css
.item1 {
  grid-area: header; // nombre area
}
```

# Alineamiento de grid-tracks

Para alinear los `grid-tracks` respecto al `grid-container` tenemos las siguientes propiedades:

## `justify-content`

Para alinear elementos en el eje horizontal.

- `start`: los elementos se colocarán al principio del eje horizontal (izquierda). Valor por defecto

![grid-justify-content_start](/css-docs//grid//images//grid-justify-content_start.PNG)

```css
.container {
  justify-content: start;
}
```

- `end`: Los elementos se colocan al final del eje horizontal (derecha).

![grid-justify-content_end](/css-docs//grid//images//grid-justify-content_end.PNG)

```css
.container {
  justify-content: end;
}
```

- `center`: Los elementos se colocan en el centro del contenedor.

![grid-justify-content_center](/css-docs//grid//images//grid-justify-content_center.PNG)

```css
.container {
  justify-content: center;
}
```

- `stretch`: ajusta el tamaño para que ocupen el ancho total del contenedor

![grid-justify-content_stretch](/css-docs//grid//images//grid-justify-content_stretch.PNG)

```css
.container {
  justify-content: stretch;
}
```

- `space-around`: Los elementos se colocan horizontalmente con el mismo espacio entre ellos, pero cada elemento tendrá la misma separación por los lados, ésto ocasiona que el primer y último elemento tengan menos separación.

![grid-justify-content_space-around](/css-docs//grid//images//grid-justify-content_space-around.PNG)

```css
.container {
  justify-content: space-around;
}
```

- `space-between`: Los elementos se colocan horizontalmente con el mismo espacio entre ellos, colocando el primer hijo al principio del eje y el último al final del eje, sin escpacios en los bordes

![grid-justify-content_space-between](/css-docs//grid//images//grid-justify-content_space-between.PNG)

```css
.container {
  justify-content: space-between;
}
```

- `space-evenly`: Los elementos se colocan horizontalmente con el mismo espacio entre ellos, y cada elemento tendrá la misma separación tanto entre ellos como el primero y el último.

![grid-justify-content_space-evenly](/css-docs//grid//images//grid-justify-content_space-evenly.PNG)

```css
.container {
  justify-content: space-evenly;
}
```

## `align-content`

Para alinear elementos en el eje vertical.

Se admiten los mismos valores que en flexbox, el funcionamiento y el algoritmo que usan para colocar los elementos es exactamente el mismo.

- `stretch`: los elementos se ajustan al alto maximo del contenedor. Valor por defecto

![grid-align-content_stretch](/css-docs//grid//images//grid-align-content_stretch.PNG)

```css
.container {
  justify-content: stretch;
}
```

- `start`: los elementos se colocan en la parte de arriba del eje vertical (arriba).

![grid-align-content_start](/css-docs//grid//images//grid-align-content_start.PNG)

```css
.container {
  justify-content: space-evenly;
}
```

- `end`: los elementos se colocan en la parte de abajo del eje vertical (abajo)

![grid-align-content_end](/css-docs//grid//images//grid-align-content_end.PNG)

```css
.container {
  justify-content: end;
}
```

- `center`: los elementos se colocan en el medio del contenedor

![grid-align-content_center](/css-docs//grid//images//grid-align-content_center.PNG)

```css
.container {
  justify-content: center;
}
```

- `space-around`: Los elementos se colocan verticalmente con el mismo espacio entre ellos, pero cada elemento tendrá la misma separación por los lados, ésto ocasiona que el primer y último elemento tengan menos separación.

![grid-align-content_space-around](/css-docs//grid//images//grid-align-content_space-around.PNG)

```css
.container {
  justify-content: space-around;
}
```

- `space-between`: Los elementos se colocan verticalmente con el mismo espacio entre ellos, colocando el primer hijo al principio del eje y el último al final del eje, sin escpacios en los bordes

![grid-align-content_space-between](/css-docs//grid//images//grid-align-content_space-between.PNG)

```css
.container {
  justify-content: space-between;
}
```

- `space-evenly`: Los elementos se colocan verticalmente con el mismo espacio entre ellos, y cada elemento tendrá la misma separación tanto entre ellos como el primero y el último.

![grid-align-content_space-evenly](/css-docs//grid//images//grid-align-content_space-evenly.PNG)

```css
.container {
  justify-content: space-evenly;
}
```

# Alineamiento de grid-items

Por otro lado para alinear los `grid-items` respecto al `grid-track` tenemos las propiedades:

Para alinear elementos en el eje horizontal.

## `justify-items`

- `stretch`: los elementos se ajustan al ancho total de la celda. Valor por defecto

![grid-justify-items_stretch](/css-docs//grid//images//grid-justify-items_stretch.PNG)

```css
.container {
  justify-items: stretch;
}
```

- `start`: los elementos se colocan al prinicipio del eje horizontal (izquierda)

![grid-justify-items_start](/css-docs//grid//images//grid-justify-items_start.PNG)

```css
.container {
  justify-items: start;
}
```

- `end`: los elementos se colocan al final del eje horizontal (derecha)

![grid-justify-items_end](/css-docs//grid//images//grid-justify-items_end.PNG)

```css
.container {
  justify-items: end;
}
```

- `center`: los elementos se colocan horizontalmente en centro de la celda

![grid-justify-items_center](/css-docs//grid//images//grid-justify-items_center.PNG)

```css
.container {
  justify-items: center;
}
```

Para alinear elementos en el eje vertical.

## `align-items`

- `stretch`: se ajustan a la altura total de la celda. Valor por defecto

![grid-align-items_stretch](/css-docs//grid//images//grid-align-items_stretch.PNG)

```css
.container {
  align-items: stretch;
}
```

- `start`: los elementos se colocan al principio del eje vertical (arriba)

![grid-align-items_start](/css-docs//grid//images//grid-align-items_start.PNG)

```css
.container {
  align-items: start;
}
```

- `end`: los elementos se colocan al final del eje vertical (abajo)

![grid-align-items_end](/css-docs//grid//images//grid-align-items_end.PNG)

```css
.container {
  align-items: end;
}
```

- `center`: los elementos se colocan verticalmente en el centro de la celda

![grid-align-items_center](/css-docs//grid//images//grid-align-items_center.PNG)

```css
.container {
  align-items: center;
}
```

- `baseline`: los elementos se alinean verticalmente por la linea del texto

```css
.container {
  align-items: baseline;
}
```

# Grid flow

Cuando trabajamos con grid los items se colocan por defecto de izquierda a derecha empezando desde arriba y generando filas en función del número de columnas.

Esto es algo que podemos modificar a traves de la propiedad `grid-auto-flow`.

Por defecto tiene el valor `row`. Es decir, cuando no haya sitio para el siguiente elemento se creara una fila nueva

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row;
}
```

Tambien podemos establecerlo en `column` para que los items se coloquen de arriba abajo generando columnas en lugar de filas.

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column;
}
```

Cuando tenemos items que ocupan 2 o más tracks, grid sigue manteniendo el orden de colocación, lo que ocasiona que queden huecos vacíos, para que grid intente rellenar esos huecos tenemos el valor `dense`

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: row dense;
}
```

```css
.container {
  display: grid;
  grid-template-columns: 60px 60px 60px 60px 60px;
  grid-template-rows: 30px 30px;
  grid-auto-flow: column dense;
}
```

# Grid auto columns/rows

Es común que se generen más tracks de los que hemos establecido en un comienzo, los que hemos establecido es lo que se denomina grid explícito,
y el resto de tracks que crea el navegador de forma automática es el grid implícito.

Para controlar las medidas de los tracks impícitos tenemos las propiedades `grid-auto-columns` y `grid-auto-rows`

```css
grid-auto-columns: <track-size>...;
grid-auto-rows: <track-size>...;
```
