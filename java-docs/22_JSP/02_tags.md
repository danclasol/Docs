# JSP Tags

## Directive Tags

Used to define page-level settings

```jsp
<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.Date" %>
<%@ include file="header.jsp" %>  <!-- Static include -->
```

## Scriptlet Tags

Used to insert raw Java code into the JSP

- avoid using scriptlets in modern apps
- use JSTL or EL instead

```jsp
<%
  int count = 5;
  out.println("Count is: " + count);
%>
```

## Expression Tags

Output the result of a Java expression

```jsp
<%= LocalDateTime.now() %>
```

## Declaration Tags

Declare methods or variable

```jsp
<%!
  int square(int x) {
    return x * x;
  }
%>
<%= square(4) %>
```

## JSP Standard Tag Library (JSTL)

JSTL provides tags for common tasks

- loops
- conditions
- formatting

```jsp
<ul>
  <c:forEach var="item" items="${myList}">
    <li>${item}</li>
  </c:forEach>
</ul>
```

## Expression Language (EL)

Used to access variables

- like session or request attributes

```jsp
<h1>Welcome, ${user.name}</h1>
```
