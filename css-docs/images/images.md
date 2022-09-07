# Valores por defecto

Con el `display: block` eliminamos el borde inferior fantasma que el navegador le pone por defecto a las imagenes

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
