# Valores por defecto

Con el `display: block` eliminamos el borde inferior fantasma que el navegador le pone por defecto a las imagenes

Con el `max-width: 100%` conseguimos que la imagen se ajuste a tu contenedor, si no lo ponemos las imagenes se van a desbordar si son muy grandes.

```css
img {
  max-width: 100%;
  display: block;
}
```

# Problems with flexbox

Cuando usamos imagenes con flexbox es comun que se nos deformen las imagenes.

Esto ocurre porque no estamos teniendo en cuenta el valor por defecto es `align-items` es `stretch`, que hace que los elementos se estiren para ocupar todo el espacio disponible.

Para solucionarlo hay que declarar un `height` o `width` a las imagenes.

# `<img>` vs background-image

Se recomiendo utilizar un `background-image` en vez de la etiqueta `<img>` cuando:

- La imagen sea solo de adorno
- No es necesaria para el contenido

# How to fix CLS Issue

_Cumulative Layout Shift_ (CLS) is a metric that measures the visual stability of a webpage. It can be affected by elements shifting around during loading, which can be particularly problematic for images.

One way to address CLS issues with images in CSS is by using the aspect-ratio property.

The `aspect-ratio` property. Provides a stable space for the image to occupy, reducing the chances of layout shifts when the image loads.
