# Event Directives

In Vue, event directives allow you to listen for DOM events (such as clicks, keyboard input, or form submissions) and execute JavaScript code in response.

## `v-on`

Attach an event listener to the element.

```html
<button v-on:click="sayHello">Click me</button>
```

It can be shorthand as `@`.

```html
<button @click="sayHello">Click me</button>
```

## `@click`

#### `.left`

```html
<button @click.left="leftClick">
```

#### `.right`

```html
<button @click.right="rightClick">
```

#### `.middle`

```html
<button @click.middle="middleClick">
```

## `@submit`

Form submission

```html
<form @submit="save">
```

## Modifiers

### `.stop`

Stops event propagation.

- equivalent to `event.stopPropagation()`

```html
<button @click.stop="save">
```

### `.prevent`

Prevents the default browser behavior.

- equivalent to `event.preventDefault()`

```html
<form @submit.prevent="save">
```

### Combine modifiers

You can combine multiple modifiers

```html
<form @submit.prevent.stop="save">
```