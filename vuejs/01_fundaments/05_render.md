## Rendering the App

Every Vue application starts by creating a new application instance with the `createApp` function

The object we are passing into createApp is in fact a component. Every app requires a `root component` that can contain other components as its children.

```js
import { createApp } from "vue";

const app = createApp(App);
```

## Mounting the App

An application instance won't render anything until its `.mount()` method is called.

It expects a _container_ argument, which can either be an actual _DOM_ element or a selector string

```html
<div id="app"></div>
```

```js
app.mount("#app");
```

The content of the app's root component will be rendered inside the container element. The container element itself is not considered part of the app.

The `.mount()` method should always be called after all app configurations and asset registrations are done.

Also note that its return value, unlike the asset registration methods, is the root component instance instead of the application instance.
