# Vuex

Vuex is a state management library for Vue.js applications, helping to manage shared state across components efficiently.

However, as of Vue 3, Vuex has been largely replaced by Pinia, which is simpler and more performant.

## Installation

```sh
npm install vuex@4
```

## Create Store

```js
export default createStore({});
```

### State

Centralized data storage.

```js
state: {
  // Data
  counter: 0;
}
```

### Getters

Derived state, like computed properties.

```js
getters: {
  doubleCount: (state) => state.count * 2,
}
```

### Mutations

Synchronous state modifications.

```js
mutations: {
    increment(state) {
      state.count++;
    },
}
```

### Actions

Asynchronous operations that commit mutations.

```js
 actions: {
     asyncIncrement({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
 },
```

### Modules

Organizing store into smaller, manageable pieces.

```js
modules: {
}
```

## Configure store in the app

```js
const app = createApp(App);
app.use(store);
app.mount("#app");
```

## Consume Store

Without `mapState`

```html
<p>Count: {{ $store.state.count }}</p>
<p>Count: {{ $store.getters.doubleCount }}</p>
```

With `mapState`

```html
<script>
  import { mapState, mapMutations } from "vuex";

  export default {
    computed: {
      ...mapState(["count"]), // Map state to component
      ...mapGetters(["doubleTime"]),
    },
    methods: {
      ...mapMutations(["increment"]), // Map mutation to component
    },
  };
</script>
```

```html
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
```

## Example

```js
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
});
```

Example with Composition API

```html
<script setup>
  import { computed } from "vue";
  import { useStore } from "vuex";

  const store = useStore();

  // Access state directly
  const count = computed(() => store.state.count);

  // Access getters
  const doubleCount = computed(() => store.getters.doubleCount);

  // Commit mutation
  const increment = () => {
    store.commit("increment");
  };

  // Dispatch action
  const asyncIncrement = () => {
    store.dispatch("asyncIncrement");
  };
</script>
```
