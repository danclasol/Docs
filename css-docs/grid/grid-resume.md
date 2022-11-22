# Grid

Establecer filas y columnas

```css
grid-template-columns: 100px 1fr;
grid-template-rows: 1fr 2fr;
```

Shorthand para grid-template-rows y grid-template-columns

```css
grid-template: none | <grid-template-rows> / <grid-template-columns>;
```

# Area

Declarar areas

```css
grid-template-areas:
  "head head"
  "nav  main"
  "nav  foot";
```

Asignar area a item

```css
grid-area: head;
```

# Gaps

Declarar los espacios entre columnas y filas

```css
column-gap: <line-size>;
row-gap: <line-size>;
gap: <grid-row-gap> <grid-column-gap>;
```

# Unidades de medida y funciones

Existen las siguientes unidades de medida y funciones para establecer las dimensiones de filas y columnas

## `fr`

Asigna fracciones del espacio disponible

```css
grid-template-columns: 1fr 3fr;
```

## `min-content`

Asignará el minimo tamaño del contenido

```css
grid-template-columns: 1fr min-content;
```

## `max-content`

Asignará el máximo disponible

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

# Alinear `grid-tracks`

- Alinear en el eje horizontal

```css
justify-content: start | end | center | stretch | space-around | space-between |
  space-evenly;
```

- Alinear en el eje vertical

```css
align-content: start | end | center | stretch | space-around | space-between |
  space-evenly;
```

```css
align-items: start | end | center | stretch;
```

- Shorthand align-content y justify-content

```css
place-content: <align-content> / <justify-content>;
```

# Alinear `grid-items`

- Alinear en el eje horizontal

```css
justify-items: start | end | center | stretch;
```

- Alinear en el eje vertical

```css
align-items: start | end | center | stretch;
```

- Shorthand align-items y justify-items

```css
place-items: <align-items> / <justify-items>;
```

# Alinaear `grid-tracks` por separado

- Alinear en el eje horizontal

```css
justify-self: start | end | center | stretch;
```

- Alinear en el eje vertical

```css
align-self: start | end | center | stretch;
```

- Shorthand align-self y justify-self

```css
place-self: <align-self> / <justify-self>;
```

# Cambiar posiciones

Mover o expandir celdas por columnas

```css
grid-column-start: <number> | <name> | span <number> | span <name> | auto;
grid-column-end: <number> | <name> | span <number> | span <name> | auto;
grid-column: <start-line> / <end-line> | <start-line> / span <value>;
```

Mover o expandir celdas por filas

```css
grid-row-start: <number> | <name> | span <number> | span <name> | auto;
grid-row-end: <number> | <name> | span <number> | span <name> | auto;
grid-row: <start-line> / <end-line> | <start-line> / span <value>;
```

# Generacion automatica de filas o columnas

Especificamos las dimensiones que tendran las filas o columnas generadas

```css
grid-auto-columns: <track-size>...;
grid-auto-rows: <track-size>...;
```

# Cambiar el flujo del grid

Seleccionar el modo en el que se colocaran nuevos elementos, si en una fila nueva (por defecto) o en una columna nueva

```css
grid-auto-flow: row | column | row dense | column dense;
```
