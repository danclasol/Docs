# Programmatic navigation

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