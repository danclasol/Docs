# Responses

Spring MVC provides several classes to customize HTTP responses.

## `@ResponseBody`

Indicates that the return value of a controller method should be written directly to the HTTP response body instead of being resolved as a view.

- serializes the return value using an appropriate `HttpMessageConverter`
- commonly used to return JSON, XML, or plain text

```java
@ResponseBody
public String hello() {
    return "Hello";
}
```

## `@ResponseStatus`

Specifies the HTTP status code that should be returned by a controller method or exception handler.

- sets the response status without using `ResponseEntity`
- can be applied to controller methods and exception classes

```java
@ResponseStatus(HttpStatus.CREATED)
@PostMapping("/users")
public User create(@RequestBody User user) {
    return service.save(user);
}
```

It can also be used on custom exceptions:

```java
@ResponseStatus(HttpStatus.NOT_FOUND)
public class UserNotFoundException extends RuntimeException {
}
```

## `ResponseEntity`

Represents a complete HTTP response.

It allows you to customize:

- Response body
- HTTP status code
- HTTP headers

```java
@GetMapping("/users/{id}")
public ResponseEntity<User> getUser(@PathVariable Long id) {
    return ResponseEntity.ok(service.findById(id));
}
```

## HttpStatus

Enumeration containing standard HTTP status codes.

- `HttpStatus.OK`: 200 OK 
- `HttpStatus.CREATED`: 201 Created
- `HttpStatus.NO_CONTENT`: 204 No Content
- `HttpStatus.BAD_REQUEST`: 400 Bad Request
- `HttpStatus.UNAUTHORIZED`: 401 Unauthorized
- `HttpStatus.FORBIDDEN`: 403 Forbidden
- `HttpStatus.NOT_FOUND`: 404 Not Found
- `HttpStatus.INTERNAL_SERVER_ERROR`: 500 Internal Server

We can sent a http status in the ResponseEntity

```java
return ResponseEntity.status(HttpStatus.CREATED)
        .body(user);
```

## HttpHeaders

Represents the HTTP headers of a request or response.

```java
HttpHeaders headers = new HttpHeaders();
headers.add("X-App-Version", "1.0");

return new ResponseEntity<>(user, headers, HttpStatus.OK);
```

Or using the builder API:

```java
return ResponseEntity.ok()
        .header("X-App-Version", "1.0")
        .body(user);
```

## Content negotiation