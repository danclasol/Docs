# Valores por defecto

Con el `display: block` eliminamos el borde inferior fantasma que el navegador le pone por defecto a las imagenes

Con el `max-width: 100%` conseguimos que la imagen se ajuste a tu contenedor, si no lo ponemos las imagenes se van a desbordar si son muy grandes.

```css
img {
  max-width: 100%;
  display: block;
}
```

# flexbox

Cuando usamos imagenes con flexbox es comun que se nos deformen las imagenes.

Esto ocurre porque no estamos teniendo en cuenta el valor por defecto es `align-items` es `stretch`, que hace que los elementos se estiren para ocupar todo el espacio disponible.

Para solucionarlo hay que declarar un `height` o `width` a las imagenes.

# `<img>` vs background-image

Se recomiendo utilizar un `background-image` en vez de la etiqueta `<img>` cuando:

- La imagen sea solo de adorno
- No es necesaria para el contenido

# object-fit

Propiedad que establece como el contenido de un elemento (img, video, embed, iframe) debe de redimensionarse para ajustarse a su contenedor.

## fill

The replaced content is sized to fill the element's content box. The entire object will completely fill the box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be stretched to fit.

```css
object-fit: fill;
```

## contain

The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box. The entire object is made to fill the box, while preserving its aspect ratio, so the object will be "letterboxed" if its aspect ratio does not match the aspect ratio of the box.

```css
object-fit: contain;
```

## cover

The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. If the object's aspect ratio does not match the aspect ratio of its box, then the object will be clipped to fit.

```css
object-fit: cover;
```

## none

The replaced content is not resized.

```css
object-fit: none;
```

## scale-down

The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size.

```css
object-fit: scale-down;
```
