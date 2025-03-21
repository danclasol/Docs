# Props

Vue components require explicit _props_ declaration so that Vue knows what external props passed to the component should be treated as fallthrough attributes.

The prop is used to pass in an initial value, props are readonly.

## Passing Details

To pass props to a child as static values

```html
<BlogPost title="My journey with Vue" />
```

You can also seen assigned dynamically with `v-bind` or `:` shortcut

```html
<BlogPost :title="post.title" />
```

## Declaration

Using `<script setup>`, props can be declared using the `defineProps`

```html
<script setup>
  const props = defineProps(["foo"]);

  console.log(props.foo);
</script>
```

We can also use the object syntax

```html
<script setup>
  const props = defineProps({
    title: String,
    likes: Number,
  });
</script>
```

Use props in the template

```html
<template>
  <div>
    <h3>{{ props.title }}</h3>
    <p>{{ props.content }}</p>
  </div>
</template>
```

Use props in a methods

```js
const handleOnClick = () => {
  alert(`Hello from ${props.title}`);
};
```

## Validation

To specify prop validations, you can provide an object with validation requirements to the `defineProps()` macro, instead of an array of strings.

### Type validation

Basic type validation

```js
propName: Number;
```

Multiple possible types

```js
propName: [String, Number];
```

### Require validation

```js
propName: {
    type: String,
    required: true
  },
```

Required but nullable string

```js
propName: {
  type: [String, null],
  required: true
}
```

### Default value

```js
  propName: {
    type: Number,
    default: 100
  },
```

### Object with a default value

Object or array defaults must be returned from a factory function.

The function receives the raw props received by the component as the argument.

```js
propName: {
  type: Object,
  default(rawProps) {
    return { message: 'hello' }
  }
},
```

### Custom validator function

Full props passed as 2nd argument in `3.4+`

```js
propName: {
  validator(value, props) {
    // The value must match one of these strings
    return ['success', 'warning', 'danger'].includes(value)
  }
},
```

### Function with a default value

Unlike object or array default, this is not a factory.

This is a function to serve as a default value

```js
propName: {
  type: Function,
  default() {
    return 'Default function'
  }
}
```
