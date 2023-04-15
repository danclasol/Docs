# FullScreen API

The `Fullscreen API` adds methods to present a specific Element (and its descendants) in fullscreen mode, and to exit fullscreen mode once it is no longer needed.

# Methods

## Element.requestFullscreen()

Asks the user agent to place the specified element (and, by extension, its descendants) into fullscreen mode, removing all of the browser's UI elements as well as all other applications from the screen.

Returns a _Promise_ which is resolved once fullscreen mode has been activated.

```js
requestFullscreen();
requestFullscreen(options);
```

## Document.exitFullscreen()

Requests that the user agent switch from fullscreen mode back to windowed mode. Returns a _Promise_ which is resolved once fullscreen mode has been completely shut off.

```js
document.exitFullscreen;
```

# Properties

## Document.fullscreenElement

The `Document.fullscreenElement` read-only property returns the Element that is currently being presented in fullscreen mode in this document, or null if fullscreen mode is not currently in use.

```js
document.fullscreenElement;
```

## ShadowRoot.fullscreenElement

The `fullscreenElement` read-only property of the ShadowRoot interface returns the element within the shadow tree that is currently displayed in full screen.

```js
ShadowRoot.fullscreenElement;
```

## document.fullscreenEnabled

The fullscreenEnabled property tells you whether or not it is possible to engage fullscreen mode.

- false: if fullscreen mode is not available for any reason (such as the "fullscreen" feature not being allowed, or fullscreen mode not being supported).

# Events

## fullscreenchange

Sent to an Element when it transitions into or out of fullscreen mode.

## fullscreenerror

Sent to an Element if an error occurs while attempting to switch it into or out of fullscreen mode.

# Example

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```
