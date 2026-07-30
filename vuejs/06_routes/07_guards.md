# Navigation Guards

The navigation guards provided by Vue router are primarily used to guard navigations either by redirecting it or canceling it.

## Global Before Guards

You can register global before guards using `router.beforeEach`:

- `to`: target route location in a normalized format being navigated to
- `from`: current route location in a normalized format being navigated away from

```js
const router = createRouter({ ... })

router.beforeEach((to, from) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})
```
