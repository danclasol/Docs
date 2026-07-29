## Binding attributes directives

### `v-bind`

Dynamically bind one or more attributes, or a component prop to an expression.

```html
<img v-bind:src="imageUrl" />
```

It can be shorthand as `:`.

```html
<img :src="imageUrl" />
<img :class="textClass" />
<p :style="{ color: textColor }">Styled Text</p>
<input type="text" :value="message" />
```

### `v-model`

Create a two-way binding on a form input element or a component.

```html
<input v-model="name" />
```