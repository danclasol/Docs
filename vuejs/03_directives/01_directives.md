# Directives

Directives in Vue.js are special attributes prefixed with v- that provide reactive behavior to the DOM. They are used to manipulate elements dynamically.

## Conditional Directives

### `v-if`

Conditionally render an element or a template fragment based on the truthy-ness of the expression value.

```html
<p v-if="isVisible">Visible</p>
```

### `v-else`

Denote the `else` block for `v-if` or a `v-if` / `v-else-if` chain.

```html
<div v-if="Math.random() > 0.5">Now you see me</div>
<div v-else>Now you don't</div>
```

### `v-else-if`

Denote the "else if block" for v-if. Can be chained.

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

### `v-show`

Toggle the element's visibility based on the truthy-ness of the expression value.

With `v-if` the node is not loaded in the virutal DOM, and with `v-show` is loaded but hidden.

Recommend for cases when the visibility of an item is going to be updated serveral times. It offers better performance

```html
<p v-show="isVisible">I am visible</p>
```

## Loop Directives

### `v-for`

Loops through lists

```html
<li v-for="item in items" :key="item.id">{{ item.name }}</li>
```

## Events

### `v-on`

Attach an event listener to the element.

```html
<button v-on:click="sayHello">Click me</button>
```

It can be shorthand as `@`.

```html
<button @click="sayHello">Click me</button>
```

## Binding attributes

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
