# sessionStorage

Maintains a separate storage area for each given origin that's available for the duration of the page session (as long as the browser is open, including page reloads and restores).

- Stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
- Data is never transferred to the server.
- Storage limit is larger than a cookie (at most 5MB).

## `setItem()`

Store or update a key/value pair

```js
sessionStorage.setItem("key", value);
```

## `getItem()`

Retrieve the value of a stored key

```js
sessionStorage.getItem("key");
```

## `removeItem()`

Delete key/value

```js
sessionStorage.removeItem("key");
```

## `clear()`

Clears all keys stored in a given Storage object.

```js
sessionStorage.setItem("bgcolor", "red");
sessionStorage.setItem("font", "Helvetica");
sessionStorage.setItem("image", "miGato.png");

sessionStorage.clear(); // all three are cleared
```
