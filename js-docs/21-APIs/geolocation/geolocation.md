# Geolocation API

MDN: https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation

The Geolocation API allows the user to provide their location to web applications if they so desire.

# navigator.geolocation

Access to user's geolocation. The user will be asked for permission to report location information.

```js
const geolocation = navigator.geolocation;
```

# Methods

## getCurrentPosition()

Determines the device's current location and gives back a `GeolocationPosition` object with the data.

Parameters:

- success: mandatory success callback
- error: optional error callback
- options: optional object which provides options

```js
geolocation.getCurrentPosition(success, error, options);
```

## watchPosition()

Returns a long value representing the newly established callback function to be invoked whenever the device location changes.

```js
geolocation.watchPosition(success, error, options);
```

## clearWatch()

Removes the particular handler previously installed using watchPosition().

Parameters:

- id : number returned by the `watchPosition()` method when installing the handler you wish to remove

```js
geolocation.clearWatch(id);
```

# WebExtensions

WebExtensions that wish to use the Geolocation object must add the "geolocation" permission to their manifest. The user's operating system will prompt the user to allow location access the first time it is requested.
