# Controllers

Controller are a stereotype annotation used in Spring MVC to define a class as a web controller.

- handles incoming HTTP requests
- maps requests to handler methods
- can return a server-side view or an HTTP response
- is detected during component scanning

### Working with views

In traditional Spring MVC applications, a controller typically returns the name of the view to be rendered (e.g. Thymeleaf or JSP).

- `ViewResolver` resolves the view name `sample`
- and renders the corresponding template

```java
@Controller
public class SampleController {
    @GetMapping("/sample")
    public String showForm() {
        return "sample";
    }
}
```

### Working with API Rest

When building REST APIs, a controller returns data instead of a view.

This can be achieved by:

- annotating individual methods with `@ResponseBody`
- annotating the controller with `@RestController`

#### `@Controller`

```java
@Controller
public class UserController {

    @GetMapping("/users/1")
    @ResponseBody
    public User getUser() {
        return user;
    }

}
```

#### `@RestController`

Combines `@Controller` and `@ResponseBody`
- every handler method writes its return value directly to the HTTP response body

```java
@RestController
public class UserController {

    @GetMapping("/users/1")
    public User getUser() {
        return user;
    }

}
```


## Requests

### @RequestMapping

Core annotation for mapping HTTP requests to handler methods.

- defines the URL path and HTTP method for a request
- can be used at class level and method level
- supports HTTP methods (GET, POST, etc.)

```java
@RequestMapping("/users", method = POST)
```


### `@GetMapping`

Specialized version of `@RequestMapping` for HTTP method **GET**.

```java
@GetMapping("/users")
```

### `@PostMapping`

Specialized version of `@RequestMapping` for HTTP method **POST**.

```java
@PostMapping("/users")
``` 

### `@PutMapping`

Specialized version of `@RequestMapping` for HTTP method **PUT**.

```java
@PutMapping("/users")
``` 

### `@DeleteMapping`

Specialized version of `@RequestMapping` for HTTP method **DELETE**.

```java
@DeleteMapping("/users")
```