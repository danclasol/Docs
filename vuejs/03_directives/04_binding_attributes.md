# Binding attributes directives

## `v-bind`

Dynamically bind one or more attributes, or a component prop to an expression.

- data flows in one direction only 
- if the user change something, the attribute is not updated
- common use: bind image source, CSS class, pass props to a child component

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

## `v-model`

Create a two-way binding on a form input element or a component.

- when the data changes, the input updates
- when the user changes the input, the data updates

```html
<script setup>
import { ref } from 'vue'

const name = ref('')
</script>

<template>
  <input v-model="name">

  <p>Hello {{ name }}</p>
</template>
```

Internally, `v-model` is approximately equivalent to:

- binds the value
- listens for the input event
- updates your state

```html
<input
  :value="name"
  @input="name = $event.target.value"
>
```

### Common mistakes

#### ❌ Can't be us on a prop

Props are read-only.

```html
<input v-model="props.name">
```

#### ❌ Can't be use on any HTML attribute 
- like src, href, class, or style, 
- use `v-bind` instead

```html
<input v-model="src">
```

### Modifiers​

Vue provides modifiers that change how v-model behaves.

#### `.lazy​`

By default, `v-model` syncs the input with the data after each input event (with the exception of IME composition as stated above).

You can add the lazy modifier to instead sync after change events:

```html
<!-- synced after "change" instead of "input" -->
<input v-model.lazy="msg" />
```

#### `.number​`

If you want user input to be automatically typecast as a number, you can add the number modifier to your `v-model` managed inputs:

```html
<input v-model.number="age" />
```

If the value cannot be parsed with `parseFloat()`, then the original (string) value is used instead.

In particular, if the input is empty (for instance after the user clearing the input field), an empty string is returned.

This behavior differs from the DOM property valueAsNumber.

The number modifier is applied automatically if the input has `type="number"`.

#### `.trim​`

If you want whitespace from user input to be trimmed automatically, you can add the trim modifier to your v-model-managed inputs:

```html
<input v-model.trim="msg" />
```