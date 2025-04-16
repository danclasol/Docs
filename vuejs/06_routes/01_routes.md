# Routes

Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze

https://router.vuejs.org/

## Install

```sh
npm install vue-router@4
```

## Creating the router instance

The router instance is created by calling the function `createRouter()`

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

## Registering the router plugin

Once we've created our router instance, we need to register it as a plugin by calling `use()` on our application:

```js
const app = createApp(App);
app.use(router);
app.mount("#app");
```

## Links

Use the custom component RouterLink\* to create links. This allows Vue Router to change the URL without reloading the page, handle URL generation, encoding, and various other features.

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

## Dynamic Route Matching with Params

To send parameter to the links

```js
{
    path: '/products/:id',
    name: 'products',
    component: ProductsView,
},
```

## Redirect Routes

```js
{
    path: '/'
    redirect: HomeView,
},
```

## Navigate to a different location

To navigate to a different URL, use `router.push`. Is the equivalent to `<router-link :to="...">` but programmatically

This method pushes a new entry into the history stack, so when the user clicks the browser back button they will be taken to the previous URL.

```js
// literal string path
router.push("/users/eduardo");

// object with path
router.push({ path: "/users/eduardo" });

// named route with params to let the router build the url
router.push({ name: "user", params: { username: "eduardo" } });
```

This is the method called internally when you click a `<router-link>`, so clicking `<router-link :to="...">` is the equivalent of calling router.push(...).

Equivalent to `<router-link :to="..." replace>`

## Replace current location

It acts like `router.push`, the only difference is that it navigates without pushing a new history entry, as its name suggests - it replaces the current entry.

```js
router.replace({ path: "/home" });
```

It's also possible to directly add a property `replace:` true to the to argument that is passed to `router.push`:

```js
router.push({ path: "/home", replace: true });
```

## Traverse history

This method takes a single integer as parameter that indicates by how many steps to go forward or go backward in the history stack, similar to window.history.go(n).

```js
// go forward by one record, the same as router.forward()
router.go(1);

// go back by one record, the same as router.back()
router.go(-1);

// go forward by 3 records
router.go(3);

// fails silently if there aren't that many records
router.go(-100);
router.go(100);
```
