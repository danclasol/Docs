# Sending params in routes

To send parameter to the links

```js
{
    path: '/products/:id',
    name: 'products',
    component: ProductsView,
},
```

When a route is matched, the value of its params will be exposed as `route.params` in every component. 

```html
<template>
  <div>
    <!-- The current route is accessible as $route in the template -->
    User {{ $route.params.id }}
  </div>
</template>
```

You can also have multiple params in the same route, and they will map to corresponding fields on `route.params`.

- /users/:username/posts/:postId	
    - /users/eduardo/posts/123

## Custom regex in params

For example, we need to validate that the param is a always a number

```js
const routes = [
  // /:orderId -> matches only numbers
  { path: '/:orderId(\\d+)' },
  // /:productName -> matches anything else
  { path: '/:productName' },
]
```

## Optional parameters

You can also mark a parameter as optional by using the `?` modifier (0 or 1):

```js
const routes = [
  // will match /users and /users/posva
  { path: '/users/:userId?' },
  // will match /users and /users/42
  { path: '/users/:userId(\\d+)?' },
]
```

## Repeatable params

When you need to match routes with multiple sections like /first/second/third, you can mark a param as repeatable with:
- `*` (0 or more) 
- `+` (1 or more)

```js
const routes = [
  // /:chapters -> matches /one, /one/two, /one/two/three, etc
  { path: '/:chapters+' },
  // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  { path: '/:chapters*' },
]
```