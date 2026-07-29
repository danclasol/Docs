# Conditional Directives

## `v-if`

Conditionally render an element or a template fragment based on the truthy-ness of the expression value.

```html
<p v-if="isVisible">Visible</p>
```

## `v-else`

Denote the `else` block for `v-if` or a `v-if` / `v-else-if` chain.

```html
<div v-if="Math.random() > 0.5">Now you see me</div>
<div v-else>Now you don't</div>
```

## `v-else-if`

Denote the "else if block" for v-if. Can be chained.

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

## `v-show`

Toggle the element's visibility based on the truthy-ness of the expression value.

With `v-if` the node is not loaded in the virutal DOM, and with `v-show` is loaded but hidden.

Recommend for cases when the visibility of an item is going to be updated serveral times. It offers better performance

```html
<p v-show="isVisible">I am visible</p>
```
