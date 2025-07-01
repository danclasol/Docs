# Include jsp

## Static Include

The content of file.jsp is copied directly into the including JSP before compilation.

- happens at compile time
- for static content like headers, footers, or menus
- cannot include files dynamically based on variable values

```jsp
<%@ include file="header.jsp" %>
```

## Dynamic Include

The included file is executed separately at runtime, and its output is included in the main page.

- happens at runtime
- for dynamic content, or when passing parameters is needed
- ideal for modular components like notifications, widgets, etc

```jsp
<jsp:include page="file.jsp">
    <jsp:param name="username" value="John" />
</jsp:include>
```

## Custom Tag Libraries

With Custom Tag Libraries you can create custom components

- separate business logic from presentation

### Using `.tag` files

Stored your custom tags files under `/WEB-INF/tags/`

- e.g.: hello.tag

```jsp
<%@ attribute name="name" required="true" %>
Hello, <strong><%= name %></strong>!
```

To use it in a `.jsp` page

```jsp
<%@ taglib prefix="my" tagdir="/WEB-INF/tags" %>
<my:hello name="Alice" />
```
