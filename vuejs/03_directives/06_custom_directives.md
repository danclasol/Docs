# Custom Directives

A custom directive is defined as an object containing lifecycle hooks similar to those of a component.

The hooks receive the element the directive is bound to.

## Example

Example of a directive that adds a class to an element when it is inserted into the DOM by Vue

```html
<script setup>
  const vHighlight = {
    mounted: (el) => {
      el.classList.add("is-highlight");
    },
  };
</script>
```

Now, enables _v-highlight_ in templates

```html
<template>
  <p v-highlight>This sentence is important!</p>
</template>
```

## Declaring

To globally register custom directives declare it at the app level, making usable in all components

```js
const app = createApp({});

app.directive("highlight", {
  /* ... */
});
```

## Hook Arguments​

Directive hooks are passed these arguments:

- `el`: element the directive is bound to
  - can be used to directly manipulate the DOM.
- `binding`: object containing the following properties

  - `value`: value passed to the directive
    ```js
    v-my-directive="2"
    ```
  - `oldValue`: previous value
    - only available in `beforeUpdate` and `updated`
    - available whether or not the value has changed
  - `arg`: argument passed to the directive, if any
    ```js
    v-my-directive:foo // binging.arg
    ```
  - `modifiers`: object containing modifiers
    ```
    v-my-directive.foo.bar // { foo: true, bar: true }
    ```
    ```
    binding.modifiers.foo
    binding.modifiers.bar
    ```
  - `instance`: instance of the component where the directive is used
  - `dir`: directive definition object

- `vnode`: the underlying VNode representing the bound element
- `prevVnode`: the VNode representing the bound element from the previous render
  - only available in the beforeUpdate and updated hooks
