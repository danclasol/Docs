```html
<p class="overflow-visible">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<p class="overflow-clip">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<p class="overflow-ellipsis">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
<p class="overflow-string">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</p>
```

```css
p {
  width: 200px;
  border: 1px solid;
  padding: 2px 5px;

  /* BOTH of the following are required for text-overflow */
  white-space: nowrap;
  overflow: hidden;
}

.overflow-visible {
  white-space: initial;
}

.overflow-clip {
  text-overflow: clip;
}

.overflow-ellipsis {
  text-overflow: ellipsis;
}

.overflow-string {
  /* Not supported in most browsers,
     see the 'Browser compatibility' section below */
  text-overflow: " [..]";
}
```

Utilizando webkit
https://www.youtube.com/watch?v=OhCzEjXvY9A

<p class="overflow">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.  
</p>

```css
.overflow {
  --max-lines: 5;

  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--max-lines);
}
```

Otra opcion sin usar webkit, es calculando la altura maxima segun el tamaño de la fuente (por defecto: 1em) y el `line-height`

```css
.overflow {
  --max-lines: 5;
  --line-height: 1.4;

  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  line-height: var(--line-height);

  overflow: hidden;
}
```
