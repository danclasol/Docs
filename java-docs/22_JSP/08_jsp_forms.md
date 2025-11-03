# Forms

## Create form

Create form in plain HTML

- `action="process.jsp"`: where to send the data after submit
- `method="post"`: sets the method

```jsp
<form action="process.jsp" method="post">
    Name: <input type="text" name="username" /><br />
    Email: <input type="email" name="email" /><br />
    <input type="submit" value="Submit" />
</form>
```

## Get form data

In the `.jsp` file of the action you can retrieve the submitted form values

```jsp
<%
    String name = request.getParameter("username");
    String email = request.getParameter("email");
%>

<h2>Hello, <%= name %>!</h2>
<p>Your email: <%= email %></p>
```

### Using Servlets

Instead of sending the form to another `.jsp`, it can be sent to a Servlet

- `action`

```jsp
<form action="MyServlet" method="post">
    Username: <input type="text" name="username" />
    <input type="submit" />
</form>
```

```java
@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        String username = request.getParameter("username");
        request.setAttribute("username", username);
        request.getRequestDispatcher("welcome.jsp").forward(request, response);
    }
}
```
