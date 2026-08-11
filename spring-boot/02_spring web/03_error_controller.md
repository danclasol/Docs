## `ErrorController`

Spring Boot interface used to customize the application's default error endpoint.

By default, Spring Boot exposes the `/error` endpoint to handle unhandled exceptions.

```java
@Controller
public class CustomErrorController
        implements ErrorController {

    @RequestMapping("/error")
    public String handleError() {
        return "error";
    }

}
```