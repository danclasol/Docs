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
