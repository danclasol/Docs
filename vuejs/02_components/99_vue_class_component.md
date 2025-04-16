# Vue Class Component

Vue Class Component is a library that lets you make your Vue components in class-style syntax.

https://class-component.vuejs.org/

```js
<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
```

# Vue Property Decorator

There are several decorators and 1 function (Mixin):

### @Prop

### @PropSync

### @Model

### @ModelSync

### @Watch

### @Provide

### @Inject

### @ProvideReactive

### @InjectReactive

### @Emit

### @Ref

### @VModel

### @Component (provided by vue-class-component)

### Mixins (the helper function named mixins provided by vue-class-component)
