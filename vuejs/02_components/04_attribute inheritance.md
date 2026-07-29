# Attribute inheritance

In Vue, attribute inheritance means that attributes passed to a component that are not declared as props are automatically applied to the component's root element.

Works with any standard HTML attribute, for example:

- class
- id
- style
- title
- disabled
- aria-*
- data-*

### Example

#### Parent

```html
<MyButton class="primary" id="save-btn" />
```

#### Child

The child component doesn't received the class prop from parent

```html
<template>
  <button>
    Save
  </button>
</template>
```

#### Rendered HTML

Even though the child never declared class or id as props.

Vue automatically forwards them to the root element.

```html
<button
  class="primary"
  id="save-btn"
>
  Save
</button>
```

## `class` and `style` are merged

Automatically merged with the child's own class and style.

Child:

```html
<template>
  <button class="btn">
    Save
  </button>
</template>
```

Parent:

```html
<MyButton class="primary" />
```

The classes are merged, not replaced.

```html
<button class="btn primary">
```

## Props are NOT inherited

Suppose the child declares:

```html
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
```

Parent:

- *title* becomes a prop, not an HTML attribute
- Vue does not automatically place it on the root element

```html
<MyCard title="Vue Guide" />
```

## Accessing `$attrs` in `<script setup>`

You can also access them in JavaScript.

```html
<script setup lang="ts">
import { useAttrs } from 'vue'

const attrs = useAttrs()

console.log(attrs)
</script>
```

## Disabling inheritance

Sometimes you don't want Vue to automatically inherit attributes.

```html
<script setup lang="ts">
defineOptions({
  inheritAttrs: false
})
</script>
```