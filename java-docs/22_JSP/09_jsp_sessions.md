# Sessions

JSP provides built-in session management through the session implicit object

- unique to each user
- stores data server-side across multiple requests
- uses a session ID (usually via a cookie) to track the user

### Sessions user cases

- storing user login info
- tracking shopping cart items
- preserving data across multiple pages

## Common use

### Enable Sessions

By default, the session object is available automatically.

```jsp
<%@ page session="true" %>
```

### Store Data in a session

Store in a session data as a key-value.

```jsp
<%
    String username = request.getParameter("username");
    session.setAttribute("user", username);
%>
```

### Retrieve Data from a session

```jsp
<%
    String user = (String) session.getAttribute("user");
    if (user != null) {
%>
    <h2>Welcome, <%= user %>!</h2>
<%
    } else {
%>
    <h2>Please log in.</h2>
<%
    }
%>
```

### Remove Session

Remove data from the session

```jsp
session.removeAttribute("user");
```

### Invalidate session

Destroy the session

- logout, cart reset, etc

```jsp
session.invalidate();
```

## Methods

### `getId()`

```jsp
String sessionId = session.getId();
```

### `getCreationTime()`

Returns when the session was created (in milliseconds since epoch).

```jsp
long createdAt = session.getCreationTime();
```

### `getLastAccessedTime()`

Returns the last time the client sent a request associated with this session.

```jsp
long lastAccess = session.getLastAccessedTime();
```

### `getMaxInactiveInterval()`

Returns the timeout period (in seconds) before the session is invalidated due to inactivity.

```jsp
int timeout = session.getMaxInactiveInterval(); // in seconds
```

### `setMaxInactiveInterval(int seconds)`

Sets how long the session should remain active without activity.

```jsp
session.setMaxInactiveInterval(600); // 10 minutes
```

### `isNew()`

Returns true if the session is new (just created).

```jsp
if (session.isNew()) {
    out.println("Welcome, new user!");
}
```
