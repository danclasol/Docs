# Notification

The `Notification` interface of the Notifications API is used to configure and display desktop notifications to the user.

```js
const notification = Notification(name, options);
```

## Options properties

- `body` The body string of the notification as specified in the constructor's options parameter.

- `data`: Returns a structured clone of the notification's data.

- `dir`: The text direction of the notification as specified in the constructor's options parameter.

- `lang`: The language code of the notification as specified in the constructor's options parameter.

- `tag`: The ID of the notification (if any) as specified in the constructor's options parameter.

- `icon`: The URL of the image used as an icon of the notification as specified in the constructor's options parameter.

- `image`: The URL of an image to be displayed as part of the notification, as specified in the constructor's options parameter.

- `renotify`: Specifies whether the user should be notified after a new notification replaces an old one.

- `requireInteraction`: A boolean value indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically.

- `silent`: Specifies whether the notification should be silent — i.e., no sounds or vibrations should be issued, regardless of the device settings.

- `timestamp`: Specifies the time at which a notification is created or applicable (past, present, or future).

- `title`: The title of the notification as specified in the first parameter of the constructor.

- `vibrate`: Specifies a vibration pattern for devices with vibration hardware to emit

# Static properties

The Notification object has the following properties available.

## Notification.permission

A string representing the current permission to display notifications.

Possible values are:

- `denied`: the user refuses to have notifications displayed
- `granted`: the user accepts having notifications displayed.
- `default`: the user choice is unknown and therefore the browser will act as if the value were denied.

```js
Notification.permission;
```

## Notification.maxActions

The maximum number of actions supported by the device and the User Agent.

```js
Notification.maxActions;
```

# Methods

## Notification.requestPermission()

Static method that requests permission from the user to display notifications.

```js
Notification.requestPermission();
```

## close()

Programmatically closes a notification instance

```js
notification.close();
```

# Events

## click

Fires when the user clicks the notification.

```js
notification.addEventListener("click", () => console.log("CLICK"));
```

## close

Fires when the user closes the notification.

```js
notification.addEventListener("close", () => console.log("CLOSE"));
```

## error

Fires when the notification encounters an error.

```js
notification.addEventListener("error", () => console.log("ERROR"));
```

## show

Fires when the notification is displayed.

```js
notification.addEventListener("show", () => console.log("SHOW"));
```

# Example

```js
const permissions = document.getElementById("permissions");

permissions.addEventListener("click", () => {
  if (Notification.permission !== "granted") {
    getPermissions();
  } else {
    notify();
  }
});
const getPermissions = () => {
  Notification.requestPermission()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const notify = () => {
  const options = {
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "world.png",
    data: "Extra data",
    tag: "notification demo",
  };
  const notification = new Notification("Hello World", options);

  notification.addEventListener("close", () => console.log("CLOSE"));
  notification.addEventListener("show", () => console.log("SHOW"));

  console.log(notification);
};
```
