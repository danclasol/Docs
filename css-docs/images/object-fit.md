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
