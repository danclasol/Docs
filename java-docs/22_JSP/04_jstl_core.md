# Core Tags

## Install

Import the library at the top of the `.jsp` file

```jsp
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
```

## Tags List

### `<c:out>`

Like `<%= ... >`, but for expressions.

```jsp
<c:out value="${user.name}" default="Guest" />
```

### `<c:set>`

Sets the result of an expression evaluation in a scope.

```jsp
<c:set var="title" value="Dashboard" />
<h1>${title}</h1>
```

### `<c:remove>`

Removes a scoped variable (from a particular scope, if specified).

```jsp
<c:remove var="title" scope="request" />
```

### `<c:catch>`

Catches any Throwable that occurs in its body and optionally exposes it.

```jsp
<c:catch var="error">
  <% int result = 1 / 0; %>
</c:catch>
<c:if test="${not empty error}">
  Error occurred: ${error.message}
</c:if>
```

### `<c:if>`

Simple conditional tag which evalutes its body if the supplied condition is true.

```jsp
<c:if test="${user.loggedIn}">
  <p>Welcome, ${user.name}!</p>
</c:if>
```

### `<c:choose>`,`<c:when>`, `<c:otherwise>`

Simple conditional tag that establishes a context for mutually exclusive conditional operations, marked by `<when>` and `<otherwise>`.

```jsp
<c:choose>
  <c:when test="${user.role == 'admin'}">
    <p>Welcome, Admin!</p>
  </c:when>
  <c:otherwise>
    <p>Welcome, User.</p>
  </c:otherwise>
</c:choose>
```

### `<c:import>`

Retrieves an absolute or relative URL and exposes its contents to either the page, a String in 'var', or a Reader in 'varReader'.

```jsp
<c:import url="/header.jsp" />
<c:import url="https://example.com/news" />
```

### `<c:forEach>`

The basic iteration tag, accepting many different collection types and supporting subsetting and other functionality .

```jsp
<c:forEach var="item" items="${list}">
  <li>${item}</li>
</c:forEach>
```

### `<c:forTokens>`

Iterates over tokens, separated by the supplied delimeters.

```jsp
<c:forTokens items="one,two,three" delims="," var="word">
  ${word}<br/>
</c:forTokens>
```

### `<c:param>`

Adds a parameter to a containing _import_ tag's URL.

```jsp
<c:url var="myUrl" value="/details.jsp">
  <c:param name="id" value="${item.id}" />
</c:url>
<a href="${myUrl}">Details</a>
```

### `<c:redirect>`

Redirects to a new URL.

```jsp
<c:redirect url="login.jsp" />
```

### `<c:url>`

Creates a URL with optional query parameters

```jsp
<c:url var="logoutUrl" value="/logout.jsp" />
<a href="${logoutUrl}">Logout</a>
```
