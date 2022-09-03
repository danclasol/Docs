# Diseño en multiples columnas

Módulo de CSS que define un diseño multicolumna, permitiendo indicar cómo debe fluir el contenido a través de las columnas y cómo manejar reglas y separaciones.

Permite hacer un diseño de columnas en el que solo especificando las propiedades `column-count` y `column-width` el navegador se va a encargar de hacer los calculos para que las columnas encajen de forma responsive.

Existen las siguientes propiedades para configurar los estilos de las columnas

## column-count

Con esta propiedad estableceremos el número de columnas que queremos en nuestro diseño.

```css
.columns {
  column-count: 3;
}
```

## column-width

Esta propiedad establece el ancho MÍNIMO deseado, si no se especifica será el navegador el que divida el espacio disponible entre el número de columnas establecido.

```css
.columns {
  column-width: 200px;
}
```

Tambien existe este shorthand para establecer ambas propiedades en una línea

```css
.columns {
  columns: 3 200px;
}
```

## column-gap

Con esta propiedad podemos establecer la separación entre columnas.

```css
.columns {
  column-gap: 20px;
}
```

## column-rule

Esta propiedad es un shorthand nos permite generar una línea vertical entre columnas, tiene la misma sintaxis que border y podemos dividir esta propiedad en `column-rule-width`, `column-rule-style` y `column-rule-color`

Ejemplo de las 2 formas posibles de establecer esta propiedad

```css
.columns {
  column-rule-width: 2px;
  column-rule-style: dashed;
  column-rule-color: red;
}

.columns {
  column-rule: 2px dashed red;
}
```

## column-span

Esta propiedad hace posible que un elemento se extienda sobre todas las columnas.

Por ejemplo si tenemos un titulo entre las columnas y queremos que se haya un salto de línea por cada titulo

```html
<div class="columns">
  <h2 class="title">Colum1</h2>
  Lorem ipsum dolor...

  <h2 class="title">Colum2</h2>
  Lorem ipsum dolor...

  <h2 class="title">Colum3</h2>
  Lorem ipsum dolor...
</div>
```

Si establecemos la propiedad `column-span: all` cpnseguimos dividir las columnas por los titulos

```css
.columns {
  columns: 3 200px;
}
.title {
  column-span: all;
}
```

# Uso

- Diseños sencillos de columnas en el que no necesitemos controlar el orden o los saltos de lineas
- Por ejemplo, podemos hacer columnas de un periódico de forma sencilla y sin tener que hacer uso de JavaScript para hacer cálculos de viewport ni meter saltos de línea innecesarios.
