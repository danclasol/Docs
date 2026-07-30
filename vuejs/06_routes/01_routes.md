# Routes

Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze

https://router.vuejs.org/

## Install

```sh
npm install vue-router@5
```

## Creating the router instance

The router instance is created by calling the function `createRouter()`

```js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/about",
      component: AboutView,
    },
  ],
});
```

## Named routes

When creating a route, we can optionally give the route a name.

```js
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});
```

We can then use the name instead of the path when passing the to prop to <RouterLink>

```html
<RouterLink :to="{ name: 'home' }">
  User profile
</RouterLink>
```

For router with params, we can pass them as arguments

```html
<RouterLink :to="{ name: 'profile', params: { username: 'erina' } }">
  User profile
</rRouterLink>
```

### Lazy load routes

To improve performance, we can instead of importing the component, use a dynamic import.

- components are loaded only when the user visits that route
- avoid being included in the initial JavaScript bundle

```js
{
      path: "/about",
      name: "about",
      component: import('../views/AboutView.vue'),
}
```

## Registering the router plugin

Once we've created our router instance, we need to register it as a plugin by calling `use()` on our application:

```js
const app = createApp(App);
app.use(router);
app.mount("#app");
```

## Links

Use the custom component `RouterLink` to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation, encoding, and various other features.

```html
<RouterLink to="/">Home</RouterLink> <RouterLink to="/about">About</RouterLink>
```

When creating a route, we can optionally give the route a _name_. We can then use the name instead of the path when passing the to prop "to"

```html
<RouterLink :to="{ name: 'home' }">Home</RouterLink>
<RouterLink :to="{ name: 'about' }">Home</RouterLink>
```

The _RouterView_ component tells Vue Router where to render the current route component.

```html
<RouterView />
```

## Redirect Routes

```js
{
    path: '/'
    redirect: HomeView,
},
```
