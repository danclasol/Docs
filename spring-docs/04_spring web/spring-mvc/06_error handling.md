# Error Handling

Spring MVC provides several mechanisms for handling exceptions and generating HTTP error responses.

Exception handling can be performed:

- locally within a controller
- globally across the application
- automatically by Spring MVC

Spring resolves exceptions through a chain of `HandlerExceptionResolver` implementations.

## `HandlerExceptionResolver`

Strategy interface used by Spring MVC to resolve exceptions and convert them into HTTP responses.

The `DispatcherServlet` delegates exception processing to a chain of registered resolvers.

Built-in implementations include:

- `ExceptionHandlerExceptionResolver`
- `ResponseStatusExceptionResolver`
- `DefaultHandlerExceptionResolver`

```
Controller
    │
    ▼
Exception
    │
    ▼
HandlerExceptionResolver
    │
    ├── @ExceptionHandler
    ├── @ResponseStatus
    └── Default Spring Handling
    │
    ▼
HTTP Response
```

## `@ExceptionHandler`

Handles exceptions thrown by controller methods.

By default, exception handlers only apply to the controller in which they are declared.

```java
@Controller
public class UserController {

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        throw new UserNotFoundException();
    }

    @ExceptionHandler(UserNotFoundException.class)
    @ResponseBody
    public ResponseEntity<String> handleNotFound(
            UserNotFoundException ex) {

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("User not found");
    }

}
```

## `@ControllerAdvice`

Specialized component that applies exception handling across multiple controllers.

Common uses include:

- global exception handling
- global model attributes
- global data binding configuration

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleNotFound(
            UserNotFoundException ex) {

        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body("User not found");
    }

}
```

## `ResponseEntityExceptionHandler`

Convenient base class that provides default handling for many Spring MVC exceptions.

Extend this class to customize the default responses generated for framework exceptions such as validation errors, unsupported HTTP methods, or missing request parameters.

It is commonly used together with `@ControllerAdvice`.

Provides default implementations for many framework exceptions, including:

- `MethodArgumentNotValidException`
- `MissingServletRequestParameterException`
- `HttpRequestMethodNotSupportedException`

`ResponseEntityExceptionHandler` is intended for Spring MVC exceptions, while application-specific exceptions are typically handled with `@ExceptionHandler.`

```java
@ControllerAdvice
public class GlobalExceptionHandler
        extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            MethodArgumentNotValidException ex,
            HttpHeaders headers,
            HttpStatusCode status,
            WebRequest request) {

        return ResponseEntity.badRequest()
                .body("Validation failed");
    }

}
```

## ResponseStatusException

Represents an exception that carries an HTTP status code and an optional reason.

- useful when the response status depends on runtime conditions
- unlike @ResponseStatus, the status code is determined dynamically at runtime

```java
@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {

    return repository.findById(id)
            .orElseThrow(() ->
                new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "User not found"));
}
```

## ProblemDetail

Represents an RFC 9457 problem detail response.

It is the recommended way to represent REST API errors in modern Spring applications.

```java
@ExceptionHandler(UserNotFoundException.class)
public ProblemDetail handle(UserNotFoundException ex) {

    ProblemDetail problem =
            ProblemDetail.forStatus(HttpStatus.NOT_FOUND);

    problem.setTitle("User not found");
    problem.setDetail(ex.getMessage());

    return problem;
}
```

Example response:

```json
{
  "type": "about:blank",
  "title": "User not found",
  "status": 404,
  "detail": "User 10 does not exist"
}
```