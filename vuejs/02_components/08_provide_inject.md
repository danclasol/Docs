# Provide / Inject

When we need to pass data from the parent to a child component, we use props. However, imagine the case where we have a large component tree, and a deeply nested component needs something from a distant ancestor component. 

With only props, we would have to pass the same prop across the entire parent chain.

We can solve props drilling with provide and inject. 

- a parent component can serve as a dependency provider for all its descendants
- any component in the descendant tree can inject dependencies provided by components up in its parent chain

## Provide

To provide data to a component's descendants, use the `provide()` function:

```html
<script setup>
import { provide } from 'vue'

provide(/* key */ 'message', /* value */ 'hello!')
</script>
```

Providing reactive values allows the descendant components using the provided value to establish a reactive connection to the provider component.

```html
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>
```

In injector component

```html
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

## Inject

To inject data provided by an ancestor component, use the `inject() `function:

```html
<script setup>
import { inject } from 'vue'

const message = inject('message')
</script>
```

We can set a default value if no data was provided

```js
const value = inject('message', 'default value')
```