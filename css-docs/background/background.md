# Background

La propiedad background sirve para establecer el contenido y/o el comportamiento del fondo de un contenedor.

El fondo de un elemento es el tamaño total del mismo sin incluir el margen, es decir, el contenido, el padding y el borde.

# Background color

Esta propiedad aplica colores sólidos al fondo en un elemento. Admite cualquier código de color válido en css, rgb; hsl; hexadecimal y keywords.

```css
background-color: #333;
```

# Background image

Esta propiedad sirve para establecer imágenes o degradados al fondo de un elemento.

No es incompatible con background-color, pero hay que tener en cuenta que la imagen o el degradado siempre se colocará por encima del color de fondo.

Para usar una imagen usamos la función url() y dentro pondremos la ruta donde tenemos nuestra imagen.

Podemos utilizar cualquier formato de imagen válido en HTML.

```css
background-image: url(/assests/images/picture.png);
```

Se recomiendo utilizar un `background-image` en vez de la etiqueta `<img>` cuando:

- La imagen es solo de adorno
- No es necesaria para el contenido

# Background repeat

Esta propiedad controla si la imagen se repetirá para rellenar todo el fondo del contenedor. Los valores que admite esta propiedad son:

### `repeat`: valor por defecto

![background-repeat_repeat](/css-docs//background//images//background-repeat_repeat.PNG)

```css
background-image: url(/assests/images/picture.png);
background-repeat: repeat;
```

### `repeat-x`: Repite la imagen horizontalmente

![background-repeat_repeat-x](/css-docs//background//images//background-repeat_repeat-x.PNG)

```css
background-image: url(/assests/images/picture.png);
background-repeat: repeat-x;
```

### `repeat-y`: Repite la imagen verticalmente

![background-repeat_repeat-y](/css-docs//background//images//background-repeat_repeat-y.PNG)

```css
background-image: url(/assests/images/picture.png);
background-repeat: repeat-y;
```

### `no-repeat`: No repite la imagen

![background-repeat_no-repeat](/css-docs//background//images//background-repeat_no-repeat.PNG)

```css
background-image: url(/assests/images/picture.png);
background-repeat: no-repeat;
```

### `round`: repite la imagen en ambas direcciones, sin recortar la imagen

Si hay espacio sobrante para multiples imagenes, las imagenes se ajustan al espacio disponible.

Si el espacio sobrante es menos de la mitad del ancho de la imagen, se estrecha, si no, se estrecha.

![background-repeat_round](/css-docs//background//images//background-repeat_round.PNG)

### `space`: repite la imagen en ambas direcciones, sin recortar la imagen

Si hay espacio sobrante para repetir mas imágenes, las imagenes se separan hacia los lados.

![background-repeat_space](/css-docs//background//images//background-repeat_space.PNG)

```css
background-image: url(/assests/images/picture.png);
background-repeat: space;
```

```css
background-image: url(/assests/images/picture.png);
background-repeat: round;
```

# Background position

Esta propiedad nos permite mover una imagen de fondo dentro de su contenedor, por defecto sus valores son 0 0, que corresponden a la esquina superior izquierda, el primer valor corresponde al eje x y el segundo al eje y.

```css
background-position: 100px 100px;
```

![background-repeat_0](/css-docs//background//images//background-position_0.PNG)

Si solo especificamos uno de los ejes, el otro eje por defecto se establecera como `center`

```css
background-position: 200px /* center */;
```

![background-repeat_1](/css-docs//background//images//background-position_1.PNG)

Para mover la imagen podemos usar cualquier medida válida en css, pero si usamos porcentajes hay algo a tener en cuenta:

Si ponemos un `100%` la imagen se colocará a la derecha, alineará el último pixel de la imagen con el último pixel del contenedor.

```css
background-position: 100% 0;
```

![background-repeat_2](/css-docs//background//images//background-position_2.PNG)

También tenemos palabras clave que hacen más facil el control de la posición

- `top`: equivale a 0% verticalmente

![background-repeat_top](/css-docs//background//images//background-position_top.PNG)

- `right`: equivale a 100% horizontalmente

![background-repeat_right](/css-docs//background//images//background-position_right.PNG)

- `bottom`: equivale a 100% verticalmente

![background-repeat_bottom](/css-docs//background//images//background-position_bottom.PNG)

- `left`: equivale a 0 horizontalmente

![background-repeat_left](/css-docs//background//images//background-position_left.PNG)

- `center`: equivale a 50% tanto horizontal como verticalmente

![background-repeat_center](/css-docs//background//images//background-position_center.PNG)

Al utilizar palabras clave da igual poner `top center` que `center top`, esto es algo que sólo pasa al usar las palabras clave, al usar valores numéricos hay que respetar el orden.

```css
background-position: top center;
background-position: center top; // Mismo resultado
```

Aunque se puedan mezclar valores con estas palabras clave, no es recomendable, ya que solo funciona si el primer valor hace referencia al eje horizontal

```css
background-position: right 100px;
```

![background-repeat_3](/css-docs//background//images//background-position_3.PNG)

Esto no funcionaría como se esperaría, el `top` si que se aplicaría, pero el `100px` no se aplica

```css
background-position: top 100px;
```

![background-repeat_4](/css-docs//background//images//background-position_4.PNG)

# Background size

Esta propiedad nos permite controlar el tamaño de la imagen de fondo, por defecto su valor es `auto` y deja que el navegador calcule las medidas en función del tamaño real de la imagen y la relación de aspecto para no deformar la imagen.

Si queremos establecer la medida manualmente tenemos varias formas de hacerlo.

- Un valor: Se aplicará al ancho de la imagen

```css
background-size: 200px;
```

- Dos valores: El primero será el ancho de la imagen y el segundo el alto de la imagen.

```css
background-size: 200px 100px;
```

- Palabras clave:
  - cover: la imagen cubré todo el contenedor sin deformarse, pero cortando la imagen si fuera necesario.

![background-size_cover](/css-docs//background//images//background-size_cover.PNG)

- contain: la imagen se agrandará todo lo posible hasta llegar al máximo del ancho o del alto de la imagen. No se recorta la imagen

![background-size_contain](/css-docs//background//images//background-size_contain.PNG)

# Background attachment

Esta propiedad especifica cómo se comportará el fondo cuando hagamos scroll, hay tres valores que podemos utilizar:

- `scroll`: Es el valor por defecto. La imagen no se mueve aunque hagamos scroll

![background-attachment_scroll](/css-docs//background//images//background-attachment_scroll.PNG)

```css
background-attachment: scroll;
```

- `fixed`: La imagen no se mueve aunque hagamos scroll.

Se diferncia de `scroll` en que este se queda fijado al `viewport`, y el primero al contenedor.

![background-attachment_fixed](/css-docs//background//images//background-attachment_fixed.PNG)

```css
background-attachment: fixed;
```

- `local`: Si tenemos contenido con scroll en un contenedor hará que la imagen de fondo se mueva junto con el scroll.

![background-attachment_local](/css-docs//background//images//background-attachment_local.PNG)

```css
background-attachment: local;
```

# Background origin

Esta propiedad define en qué zona del `box-model` se empieza a pintar el fondo.

Esta propiedad sólo funciona cuando usamos `background-image`, con `background-color` no sirve para nada

Tenemos 3 valores posibles.

- `padding-box`: Este es el valor por defecto. El fondo se empieza a pintar desde la esquina superior izquierda de la zona que corresponda al padding

```css
background-origin: padding-box;
```

![background-origin_padding-box](/css-docs//background//images//background-origin_padding-box.PNG)

- `border-box`: El fondo se empieza a pintar desde la esquina izquierda superior del contenedor.

```css
background-origin: border-box;
```

![background-origin_border-box](/css-docs//background//images//background-origin_border-box.PNG)

- `content-box`: El fondo se empieza a pintar desde la esquina superior izquierda de la zona que corresponda al contenido

```css
background-origin: content-box;
```

![background-origin_content-box](/css-docs//background//images//background-origin_content-box.PNG)

# Background clip

Esta propiedad define en qué zona del `box-model` se pinta el fondo, ocultando lo que no entre dentro de lo establecido

Tenemos 3 valores posibles.

- border-box: Este es el valor por defecto, rellenará todo el box-model

```css
background-origin: border-box;
background-clip: border-box;
```

![background-clip_border-box](/css-docs//background//images//background-clip_border-box.PNG)

- padding-box: rellenará desde el contenido hasta la parte que corresponda al padding

```css
background-origin: border-box;
background-clip: padding-box;
```

![background-clip_padding-box](/css-docs//background//images//background-clip_padding-box.PNG)

- content-box: rellenará sólo la parte que corresponda a contenido

```css
background-origin: border-box;
background-clip: content-box;
```

![background-clip_content-box](/css-docs//background//images//background-clip_content-box.PNG)

# Background múltiples

Podemos incluir varias imágenes y/o degradados en el mismo contenedor, los tenemos que colocar separados por comas.

Las imagenes se van a dibujar segun el orden en que las declaremos, es decir, el último que ponemos es el último que se dibuja.

```css
background-image: url(logo.png), url(background-pattern.png);
```

Podemos aplicar propiedades podemos asignar distintos valores a cada imagen de la siguiente manera:

- La primera imagen, tendrá un tamaño del 50% y se colocará en la posición `bottom right`
- La segunda tendrá tamaño del 30% y posición `bottom left`

```css
background-size: 50%, 30%;
background-position: bottom right, bottom left;
```

# Background shorthand

Si utilizamos la propiedad background podemos asignar múltiples propiedades en una sola línea

```css
background: image position / size repeat attachment origin clip color;
```

No es necesario declarar todos los valores en la declaración, pero hay que recordar cuáles son los valores por defecto de las propiedades que no declaremos:

```css
- background-image: none;
- background-position: 0% 0%(esto es lo mismo que top left);
- background-size: auto;
- background-repeat: repeat;
- background-attachment: scroll;
- background-origin: padding-box;
- background-clip: border-box;
- background-color: transparent;
```

El orden de las propiedades por norma general no importa, pero hay 3 normas que no nos podemos saltar:

- `background-origin` y `background-clip` deben declararse en el orden correcto.

Esto se debe a que pueden compartir el mismo valor, si sólo ponemos un valor se aplicará a las dos propiedades, si ponemos dos valores, el primero será para background-origin y el segundo para background-clip

- `background-size` se debe declarar inmediatamente después `background-position`, y ambas propiedades deben estar separados por una barra (/).
- Si se usa el shorthand para declarar múltiples background sólo el último podrá tener la propiedad background-color.

Por ejemplo, todas estas propiedades se podrian acortar en un shorthand

```css
.box {
  background-image: url(image.png);
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: lightsalmon;
}
```

Asi quedaría usando el shorthand

```css
.box {
  background: no-repeat lightsalmon bottom right / contain url(image.png);
}
```
