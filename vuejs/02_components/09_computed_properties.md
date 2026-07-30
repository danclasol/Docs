# Computed Properties

Computed properties are special reactive values that depend on other reactive data.

They are cached, and only re-evaluate when their dependencies change, making them perfect for expensive calculations or derived data.

```html
<template>
  <p>{{ fullName }}</p>
</template>
```

The property _fullName_ updates automatically when _firstName_ or _lastName_ changes.

```js
const firstName = ref("John");
const lastName = ref("Doe");

// Computed property
const fullName = computed(() => `$ {firstName.value} ${lastName.value}`);
```
