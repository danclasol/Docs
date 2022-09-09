# Transform

La propiedad `transform` nos permite transformar la posición, la rotación, la escala y el sesgo (inclinación) de un elemento.

Esta propiedad nos permite trabajar en los 3 ejes de un elemento, X horizontal, Y vertical, Z profundidad.

Los valores de transform se aplican desde el centro del elemento por defecto, pero podemos modificarlo con la propiedad `transform-origin`

Como último detalle, el uso de la propiedad transform SIEMPRE genera un contexto de apilamiento nuevo.

# Translate

Permite mover un elemento en cualquiera de sus 3 ejes, esta propiedad NO sustituye a position, nos permite mover un elemento igual que position, pero con algunas ventajas y desventajas, dependiendo de la situación será más recomendable usar una u otra.

`Translate` lo podemos utilizar como shorthand poniendo `translate(ejeX, ejeY)`

```css
.element {
  transform: translate(20px, 10px);
}
```

O podemos mover en un eje concreto usando `translateX()`, `translateY()`

```css
.element {
  transform: translateX(value);
  transform: translateY(value);
}
```

Los valores que admite esta función pueden ir en cualquier medida válida en CSS, aunque existe una pequeña particularidad si el valor se lo ponemos en `%`.

Cuando usamos `%` junto con `translate` la medida no se aplica respecto al contenedor padre, como estamos acostumbrados, si no que usará como valor la propia medida del elemento.

También podemos usar el valor translateZ() para mover el elemento en el eje Z.

```css
.element {
  transform: translateZ(z);
}
```

También existe una variante de translate que es `translate3D` que permite agrupar los 3 ejes, de esto hablaré más adelante en la sección cuando hablemos de transformaciones 3D

```css
.element {
  transform: translate3d(x, y, z);
}
```

# Rotate

Este valor nos va a permitir rotar un elemento alrededor de su `transform-origin` sobre cualquiera de los 3 ejes, el valor de rotación lo podemos poner en:

- Grados (20deg)
- Número de vueltas (0.5turn)
- Grados radianes (1.27rad)
- Radianes (-50grad)

Si usamos la función rotate por defecto rotaremos el elemento sobre el eje Z, `rotate(45deg)` equivale a `rotateZ(45deg)`.

```css
.box {
  transform: rotate(45deg);
}
```

Si queremos rotar sobre alguno de los otros dos ejes, utilizaremos `rotateX()` o `rotateY()`

```css
.box {
  transform: rotateX(45deg);
  transform: rotateY(45deg);
}
```

Tambien podemos cambiar el `transform-origin`, para cambiar el punto de rotacion por defecto, que es en el centro.

- Girar desde una esquina, por ejemplo, la superior izquierda.

```css
.box {
  transform: rotate(45deg);
  transform-origin: top left;
}
```

- Establecer las medidas exactas, por ejemplo:

```css
.box {
  transform: rotate(45deg);
  transform-origin: 10px 20px;
}
```

# Perspective

Con esta propiedad modificamos la distancia a la que se encuentra el usuario del elemento, consiguiendo así apreciear las transformaciones 3D.

Lo más común es establecer una distancia en píxeles, y dependiendo del tamaño del elemento pondremos más o menos distancia.

La propiedad `perspective` no se aplica sobre el elemento, si no que lo aplicaremos sobre el contenedor del elemento, aplicandose así a todos los hijos

```css
.container {
  perspective: 1000px;
}
```

Si queremos aplicar perspective a un elemento que no tiene padre o aplicarlo solo a un de los hijos, deberemos utilizar la función `perspective()` como valor añadido al transform.

Se recomienda ponerlo en primer lugar antes del resto de transformaciones.

```css
.item {
  transform: perspective(1000px) rotateY(55deg);
}
```

También podemos modificar la posición en la que se encuentra la perspectiva, por defecto será el centro, pero podemos usar la propiedad `perspective-origin` para modificar la posición.

Solo podemos modificar la propiedad `perspective-origin`, cuando aplicamos el `perspective` al contenedor padre, usando la funcion `perspective()` no funciona.

- Podemos usar palabras claves `top`, `bottom`, `left` y `right`

```css
.container {
  perspective: 1000px;
  perspective-origin: top right;
}
```

- O podemos establecer los valores con cualquier medida válida en CSS, lo más común es establecerlo en píxeles o en porcentaje

```css
.container {
  perspective: 1000px;
  perspective-origin: x-position;
  perspective-origin: x-position y-position;
}
```

# Scale

Este valor nos permite escalar un elemento en los ejes X e Y.

Podemos escalar los 2 ejes simultáneamente usando la función `scale()`, si sólo ponemos un valor se usará ese valor para los dos ejes y si ponemos dos valores el primero será el eje X y el segundo el eje Y

```css
.item {
  transform: scale(1.5, 2);
}
```

Si queremos escalar independientemente tenemos las funciones `scaleX()` y `scaleY()`.

```css
.item {
  transform: scaleX(1.5);
  transform: scaleY(1.5);
}
```

También podemos modificar la posición desde la que se aplica la escala, que por defecto será el centro, pero podemos usar la propiedad `transform-origin` para modificarlo.

- Podemos usar palabras claves `top`, `bottom`, `left` y `right`

```css
.item {
  transform: scaleX(1.5);
  transform-origin: top left;
}
```

- Establecer las medidas exactas.

```css
.box {
  transform: rotate(45deg);
  transform-origin: 10px 20px;
}
```

Un error muy común es escalar un elemento que contiene más elementos, eso hará que los elementos hijos se deformen, para solucionarlo hay que aplicar la escala opuesta a los hijos.

-Si al padre lo aumentamos 4 unidades, al hijo hay que reducirlo 1/4 => 0.25

```css
.box {
  transform: scaleX(4);
}

.text {
  transform: scaleX(0.25);
}
```

# Skew

Con skew podemos sesgar un elemento en el eje X o en el eje Y. Pasaremos un valor en grados para establecer el ángulo de inclinación.

Al igual que en el resto de funciones tenemos `skew()` como shorthand.

```css
skew(x-axis)
skew(x-axis, y-axis)
```

`skew` lo podemos utilizar como shorthand poniendo `skewX(ejeX, ejeY)`

```css
.element {
  transform: skew(25deg, 25deg);
}
```

O podemos sesgar en un eje concreto usando `skewX()`, `skewX()`

```css
.element {
  transform: skewX(value);
  transform: skewY(value);
}
```

# Transformaciones múltiples

Se pueden aplicar varias transformaciónes a un mismo elemento, pero hay que tener en cuenta se aplicarán en el orden que se declaren.

Por ejemplo, si mezclamos `rotate` y `translate`, el orden influira en el resultado final.

En este ejemplo, primero el elemento se rotará 45 grados y despues se movera 100px hacia abajo en el eje X. Pero la cosa es que el eje X tambien ha girado 45 grados en la rotación, por lo que cuando se mueva no lo hará hacia abajo, si no tambien en 45 grados.

```css
.element {
  transform: rotate(45deg) translateX(100px);
}
```

Sin embargo, en este caso, primero se movera 100px hacia abajo en el eje X y despues se rotará 45 grados.

```css
.element {
  transform: translateX(100px) rotate(45deg);
}
```

En resumen, cuando se realiza un `transform` que cambie la posicion de los ejes:

- Afecta a posteriores `transform` ya que estos se realizarán segun el cambio de ejes
- Los valores de `position` no se ven afectados, aunque los ejes se hayan girado, el `top`, `botom`, `left` y `right` no se veran afectados.
- El box model si se ve afectado, por lo que si tenemos, por ejemplo, un `border-top` y un `rotate(90deg)` el borde que se pintara sera el derecho

# Matrix

`Matrix` es un shorthand para combinar todas las transformaciones en una.

Un ejemplo de como representar una 2 transformaciones con una matriz

```css
rotate(45deg) translate(24px, 25px)
```

Puede ser representado tambien de la siguiente manera:

```css
matrix(0.7071067811865475, 0.7071067811865476, -0.7071067811865476, 0.7071067811865475, -0.7071067811865497, 34.648232278140824)
```

Explicación: https://dev.opera.com/articles/understanding-the-css-transforms-matrix/

Hacer el cálculo es una tarea compleja y para ello tenemos generadores de matrices.

https://angrytools.com/css-generator/transform/

# Problemas comunes al utilizar transform

- Las transformaciones NO se pueden aplicar a elementos en línea.
  - Esto se puede solucionar convirtiendo los elementos en bloque
- Utilizar transform genera un nuevo contexto de apilamiento.
  - Esto puede dar problemas aplicando transformaciones a contenedor padre.
  - La solucion mas sencilla es separar los elementos en contenedores distintos.
