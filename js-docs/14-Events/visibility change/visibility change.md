# visibilitychange event

The `visibilitychange` event is fired at the document when the contents of its tab have become visible or have been hidden.

- The event is not cancelable.
- Use `visibilityState` property to get the document visibility status

# visibilityState property

Use `visibilityState` property to get the document visibility status, because the event doesn't include this status.

The status is changed to `hidden` when the user:

- navigates to a new page
- switches tabs
- closes the tab
- minimizes or closes the browser or mobile
- switch to a different app

Transitioning to `hidden` is the last event that's reliably observable by the page, so developers should treat it as the likely end of the user's session (for example, for sending analytics data).

The transition to `hidden` is also a good point at which pages can stop making UI updates and stop any tasks that the user doesn't want to have running in the background.

# Examples

## Using `addEventListener`

```js
addEventListener("visibilitychange", () =>
  console.log(document.visibilityState);
);
```

## Using onvisibilitychange

```js
onvisibilitychange = (event) => {};
```
