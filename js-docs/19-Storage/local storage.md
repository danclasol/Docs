# localStorage

Does the same thing as sessionStorage, but persists even when the browser is closed and reopened

- Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
- Storage limit is the maximum amongst the two. (10MB)

## `setItem()`

Store or update a key/value pair

```js
localStorage.setItem("key", value);
```

## `getItem()`

Retrieve the value of a stored key

```js
localStorage.getItem("key");
```

## `removeItem()`

Delete key/value

```js
localStorage.removeItem("key");
```

## `clear()`

Clears all keys stored in a given Storage object.

```js
localStorage.setItem("bgcolor", "red");
localStorage.setItem("font", "Helvetica");
localStorage.setItem("image", "miGato.png");

localStorage.clear(); // all three are cleared
```
