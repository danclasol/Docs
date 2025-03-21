# Reactivity Fundamentals

## Declaring Reactive State​

### `ref()​`

In Composition API, the recommended way to declare reactive state is using the `ref()` function:

```js
import { ref } from "vue";

const count = ref(0);
```

`ref()` takes the argument and returns it wrapped within a ref object with a .`value` property.

```js
const count = ref(0);

console.log(count); // { value: 0 }
console.log(count.value); // 0

count.value++;
console.log(count.value); // 1
```

## `<script setup>​`

Manually exposing state and methods via `setup()` can be verbose. Luckily, it can be avoided when using _Single-File Components_ (SFCs).

Top-level imports, variables and functions declared in `<script setup>` are automatically usable in the template of the same component.

```html
<script setup>
  import { ref } from "vue";

  const count = ref(0);

  function increment() {
    count.value++;
  }
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```
