# SCSS

## Install

### Vite

No need to install `sass-loader` because Vite do not use

```
npm install -D sass
```

## Use SCSS

Add `lang="scss"`

```html
<template>
  <div class="caja">Hola mundo</div>
</template>

<style lang="scss">
  .caja {
    background-color: #eee;
    padding: 1rem;

    &:hover {
      background-color: #ccc;
    }
  }
</style>
```

## Global Variables

Create the file with all the global variales

```scss
// src/styles/_variables.scss
$primary-color: #42b983;
$padding-base: 1rem;
```

Configure the file `vue.config.js` to make the variables available in the project

### CLI

```js
css: {
  loaderOptions: {
    sass: {
      additionalData: `
            @import "@/assets/scss/_global.scss"
            `;
    }
  }
}
```

### Vite

```ts
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_global.scss";`,
      },
    },
  },
```
