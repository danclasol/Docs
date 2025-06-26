# Java Server Pages (JSP)

JavaServer Pages (JSP) is a server-side technology used to create dynamic web pages using Java.

- allows you to embed Java code directly into HTML pages
- server processess this pages before sending the final HTML to the user's browser
- requires web server compatible with servlets (like Apache Tomcat)

## Syntax

JSP files are essentially `.html` files with some extra syntax, and a couple of minor initial differences:

- `.html` suffix is replaced with `.jsp` (it’s considered a `.jsp` filetype)
- add tag to the top of the `.html` markup elements

```jsp
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
```

We add Java code to a `.jsp` file by placing code blocks within two Scriptlet tags `<%`,`%>`

```jsp
<% if (doodad) {%>
    <div>Doodad!</div>
<% } else { %>
    <p>Hello!</p>
<% } %>
```
