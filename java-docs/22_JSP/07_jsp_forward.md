# `forward`

Used to `forward` the request from one JSP (or Servlet) to another resource on the server.

When forwarding happens, the current page stops executing, and control is transferred to the specified resource.

- happens on the server side, the client (browser) is not aware of the change
- URL in the browser remains the same, even after the forward
- target page gets access to the original request and its attributes
- target page must be on the same server

```jsp
<jsp:forward page="anotherPage.jsp" />
```

You can also pass parameters to the forwarded page:

```jsp
<jsp:forward page="anotherPage.jsp">
    <jsp:param name="username" value="John" />
</jsp:forward>
```
