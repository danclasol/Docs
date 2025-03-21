# Emits

In Vue, child components _emit_ events to communicate upward to parent components, and parent components _listen_ to those events.

- Parent → Child
  - Parent listen to events
  - by passing data as `props`
- Child → Parent
  - Child notify parent of an action (e.g click)
  - using `$emit()`

## Parent

The parent can listen to an event using `v-on`:

Where _handleEvent_ is a method defined in the parent that will be executed once the child notifies

```html
<Child @custom-event="handleEvent" />
```

## Child

Define the emits to access the emit from the parent

```js
const emit = defineEmits(["custom-event"]);
```

On the child, we can call the emit from the parent

```html
<template>
  <button @click="emitMessage">Click Me</button>
</template>
```

```js
const emitMessage = () => {
  emit("custom-event", "Hello from child!");
};
```
