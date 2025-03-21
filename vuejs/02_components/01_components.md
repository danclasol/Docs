# Components

Vue.js provides two ways to define components:

- Options API
  - Used in Vue 2 and still available in Vue 3
- Composition API
  - Introduced in Vue 3

## Option API

With Options API, we define a component's logic using an object of options such as data, methods, and mounted.

Properties defined by options are exposed on this inside functions, which points to the component instance.

More structured but can become hard to maintain in large components.

```js
<script>
export default {
  name: "ComponentName",

  // Props
  props: {},

  // Data variables
  data() {
    return { count: 0 };
  },

  // Computed Props
  computed: { }

  //Functions
  methods: {
    increment() {
      this.count++;
    }
  }

  // Mounted Hooks (lifecycle)
  mounted() { }
};
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

## Composition API

With Composition API, we define a component's logic using imported API functions

Organizes component logic by functionality, not options.

Uses `setup()` function to handle state and methods.

Makes code more modular and reusable.

```js
<script setup>
import { ref } from "vue";

export default {
  name: "ComponentName",

  // Props
  props: {},

  // Init logic, lifecycle hooks, etc
  setup() {
    // Data, methods, computed, etc
    const count = ref(0);
    const increment = () => count.value++;

    return { count, increment};
  },
};
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```

### `<script setup>`

Composition API is typically used with `<script setup>`.

The setup attribute is a hint that makes Vue perform compile-time transforms that allow us to use Composition API with less boilerplate.

Using `<script setup>`, imports and top-level variables / functions declared are directly usable in the template.

- Recommended for Vue 3
- Less boilerplate code
- Auto-imports for Vue's functions (ref, computed, etc)
- Variables and functions are directly available in the template

```js
<script setup>
import { ref } from 'vue';

const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <button @click="increment">Count: {{ count }}</button>
</template>
```
