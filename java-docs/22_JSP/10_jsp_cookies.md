# Cookies

You can create, read, and delete cookies using the Java Servlet API, and JSP gives you access to this functionality via the request and response implicit objects.

## Common use

### Creating Cookies

Create a Cookie with containig data as a key-value.

- `setMaxAge()`: sets the lifespan
  - if ommited, is a session cookie, deleted when browser is closed
- `response.addCookie()`: send the cookie in the response

```jsp
<%
    Cookie cookie = new Cookie("username", "Alice");
    cookie.setMaxAge(60 * 60 * 24); // 1 day
    response.addCookie(cookie);
%>
```

### Reading Cookies

To read cookies that the browser sends back:

```jsp
<%
    Cookie[] cookies = request.getCookies();

    for (Cookie c : cookies) {
        out.println(c.getName());
        out.println(c.getValue());
    }
%>
```

### Deleting a Cookie

To delete a cookie, set its max age to 0 and send it again

```jsp
<%
    Cookie cookie = new Cookie("username", "");
    cookie.setMaxAge(0);
    response.addCookie(cookie);
%>
```
