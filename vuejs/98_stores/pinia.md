# Pinia

https://pinia.vuejs.org/

Pinia started as an experiment to redesign what a Store for Vue could look like with the Composition API around November 2019.

Since then, the initial principles have remained the same and Vue 2 support has been dropped in 2025, but Pinia doesn't require you to use the composition API.

Is the recommended state management library for Vue.js 3, replacing Vuex. It is simpler, more flexible, and fully compatible with the Composition API.

## Install

```sh
npm install pinia
```

## Configure Pinia in the project

Create a pinia instance (the root store) and pass it to the app as a plugin:

```js
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

## Create Store

To define a Store use `defineStore()` that requires a unique name, passed as the first argument.

Name the return value of `defineStore()` surroundede with `use` and `Store`(e.g. `useUserStore`)

```js
import { defineStore } from "pinia";

export const useAlertsStore = defineStore("alerts", {
  // other options...
});
```

### Option Stores

We can pass an Options Object with state, actions, and getters properties.

- state: data of the store
- getters: computed properties of the store
- actions: as the methods

Option stores should feel intuitive and simple to get started with.

```js
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
```

### Setup Stores

We can also pass in a function that defines reactive properties and methods and returns an object with the properties and methods we want to expose.

More flexibility than Option Stores as you can create watchers within a store and freely use any composable

- `ref()` state properties
- `computed()` getters
- `function()` actions

```js
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, increment };
});
```

## Using the store

We need to defining the store because the store won't be created until `use...Store()` is called within a component `<script setup>` (or within setup() like all composables):

```html
<script setup>
  import { useCounterStore } from "@/stores/counter";

  // access the `store` variable anywhere in the component ✨
  const store = useCounterStore();
</script>
```

### Destructuring from a Store

```html
<script setup>
  import { useCounterStore } from "@/stores/counter";
  import { storeToRefs } from "pinia";

  const store = useCounterStore();
  // `name` and `doubleCount` are reactive refs
  // This will also extract refs for properties added by plugins
  // but skip any action or non reactive (non ref/reactive) property
  const { name, doubleCount } = storeToRefs(store);
  // the increment action can just be destructured
  const { increment } = store;
</script>
```
