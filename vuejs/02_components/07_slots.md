# Slots

A slot is a placeholder inside a child component that allows the parent component to inject content.

- make components more reusable
- same component can display different content

## Props vs slots

Use slots when

- using complex layouts 
- when pasing HTML
- need flexible template content 

## Example 

The `<slot>` element is a placeholder.

```html
<!-- Child (MyButton.vue)-->
<template>
  <button>
    <slot />
  </button>
</template>
```

Parents can send any content

```html
<MyButton>
  Save
</MyButton>
```

Now send text an icon, but the component it is the same

```html
<MyButton>
  <span class="icon">🗑️</span>
  <strong>Delete</strong>
</MyButton>
```

## Default content

If the parent don't provide any slot content, we can set a default content.

```html
<template>
  <button>
    <slot>
        Default content
    </slot>
  </button>
</template>
```

## Conditional Slots

Sometimes you want to render something based on whether or not content has been passed to a slot.

You can use the `$slots` property in combination with a `v-if` to achieve this.

```html
<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    
    <div v-if="$slots.default" class="card-content">
      <slot />
    </div>
    
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>
```

## Named Slots

A component can have multiple slots.

- if we don't set a name to a slot, it will automatically set as 'default'

### Child

```html
<template>
  <div class="card">
    <header>
      <slot name="header" />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
```

### Parent

- `v-slot`: can be used the shorthand `#`

```html
<Card>
  <template v-slot:header>
    <h1>Book Details</h1>
  </template>

  <p>This is the main content.</p>

  <template v-slot:footer>
    <button>Close</button>
  </template>
</Card>
```

## Scoped Slots

Sometimes the child wants to pass data back to the parent.

- child provides data, and parent decides how to render it

### Child

```html
<template>
  <slot :book="book" />
</template>

<script setup lang="ts">
const book = {
  title: 'Dune',
  author: 'Frank Herbert'
}
</script>
```

#### Parent

```html
<BookCard v-slot="{ book }">
  <h2>{{ book.title }}</h2>
  <p>{{ book.author }}</p>
</BookCard>
```
