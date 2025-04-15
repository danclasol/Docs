# Using CDN

You can use Vue directly from a CDN via a script tag:

```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

When using Vue from a CDN, there is no "build step" involved. This makes the setup a lot simpler, and is suitable for enhancing static HTML or integrating with a backend framework.

# Using CLI

## Vue CLI

```sh
vue create [PROJECT_NAME]
```

Pick a preset:

- Default: [Vue 3] babel, eslint
- BasicTypeScript: [Vue 3] babel, typescript, eslint
- Manually select features

## Vite

The created project will be using a build setup based on Vite and allow us to use Vue Single-File Components (SFCs).

This command will install and execute create-vue, the official Vue project scaffolding tool.

You will be presented with prompts for several optional features such as TypeScript and testing support

```sh
npm create vue@latest
```

Once the project is created, follow the instructions to install dependencies and start the dev server

```sh
npm install
npm run dev
```
