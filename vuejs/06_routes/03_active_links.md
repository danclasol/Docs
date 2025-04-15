## Active links

To style links to the currently active route differently from the others, the _RouterLink_ component adds two CSS classes to active links:

- router-link-active
  - matches the same route record as the current location
  - has the same values for the params as the current location
- router-link-exact-active
  - does not include ancestor routes

### Configuring the classes

The RouterLink component has two props, `activeClass` and `exactActiveClass`, that can be used to change the names of the classes that are applied:

```html
<RouterLink
  activeClass="border-indigo-500"
  exactActiveClass="border-indigo-700"
></RouterLink>
```

The default class names can also be changed globally by passing the linkActiveClass and linkExactActiveClass options to createRouter():

```js
const router = createRouter({
  linkActiveClass: "border-indigo-500",
  linkExactActiveClass: "border-indigo-700",
});
```
