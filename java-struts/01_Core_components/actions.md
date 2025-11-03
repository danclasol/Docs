# Actions

```xml
<action path="/login"
        type="com.example.LoginAction"
        name="LoginForm"
        input="/login.jsp"
        scope="request">
    <forward name="success" path="/welcome.jsp"/>
</action>
```
