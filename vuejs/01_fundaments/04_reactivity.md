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

## `reactive()`

There is another way to declare reactive state, with the `reactive()` API. Unlike a `ref` wich wraps the inner value in a special object, `reactive()` makes an object itself reactive.

- nested objects are also wrapped
- works with arrays, maps, etc

```js
import { reactive } from 'vue'

const state = reactive({ 
    count: 0, 
    user: { 
      name: 'Peter'
    } 
});
```

Now, you can directly modify the object and the UI will be updated

```js
state.count++
state.user.name = 'Ana'
```

### Limitations

It has some limitations, so it is recommended to use `ref()` as the primary API for reactive states.

- cannot hold primitive types
- cannot replace entire objects
- not destructure-friendly

#### Cannot replace entire objects

If we replace the entire object, we lose reactivity of the object


```js
let state = reactive({
  count: 0
})

state = {
  count: 10
}
```

#### Not destructure-friendly

When we destructure a reactive object's primitive type property into local variable, or when we pass that property into a function, we will lose the reactivity connection.

```js
const state = reactive({ count: 0 });

// count is disconnected from state.count when destructured
let { count } = state;
// does not affect original state
count++;

// the function receives a plain number and won't be able to track changes to state.count
// we have to pass the entire object in to reatin reactivity
```