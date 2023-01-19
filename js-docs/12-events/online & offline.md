# online

The event `online` is fired when the browser has gained access to the netword and the value of `Navigator.onLine` switches to `true`.

## Using `addEventListener`

```js
window.addEventListener("online", (event) => {
  console.log("You are now connected to the network.");
});
```

## Using ononline

```js
window.ononline = (event) => {
  console.log("You are now connected to the network.");
};
```

# offline

The `offline` event is fired when the browser has lost access to the network and the value of `Navigator.onLine` switches to `false`

## Using `addEventListener`

```js
window.addEventListener("offline", (event) => {
  console.log("The network connection has been lost.");
});
```

## Using onoffline

```js
window.onoffline = (event) => {
  console.log("The network connection has been lost.");
};
```
