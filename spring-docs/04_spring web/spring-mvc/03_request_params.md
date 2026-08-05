# Request parameters

Spring MVC provides several classes to retrieve params from HTTP responses.

- `@RequestParam`: query parameters 
    - `?page=1`
- `@PathVariable`: URI path 
    - `/users/10`
- `@RequestBody`: HTTP request body
    - JSON, XML, etc
- `@RequestHeader`:	HTTP headers
- `@CookieValue`: HTTP cookies
- `@RequestAttribute`: attributes stored in the current request by Spring
    - a filter, or an interceptor

## @RequestParam 

Annotation used to extract query parameters from an HTTP request and bind them to method.

- binds a value from the query string to a method parameter.
- for example, this request `/search?name=John` is sending the param **name** value 'John' with 

```java
@GetMapping("/search")
public String search(@RequestParam String name) {
    return name;
}
```

Default value can be set to a param with the parameter *defaultValue*

```java
@GetMapping("/search")
public String search(@RequestParam(defaultValue = "guest") String name) {
    return name;
}
```

You can make a param optional with the parameter *required*

```java
@GetMapping("/search")
public String search(@RequestParam(required = false) String name) {
    return name;
}
```

## @PathVariable

Annotation used to extract values from the URL path and bind them to method parameters.


- binds a value from the URI path to a method parameter
- for example, /users/10, bind **id** with value **10**

```java
@GetMapping("/users/{id}")
public String getUser(@PathVariable int id) {
    return "User " + id;
}
```

By default, the path variable is mapped to the method parameter by name. If the parameter name is different from the variable in the URL, you can specify it explicitly using `name` (or `value`).

```java
@GetMapping("/users/{id}")
public String getUser(@PathVariable(name="id") int id) {
    return "User " + id;
}
```

If you want the `@PathVariable` to be optional, set `required = false`

```java
@GetMapping("/users/{id}")
public String getUser(@PathVariable(required=false) int id) {
    return "User " + id;
}
```

## `@RequestBody`

Used to bind the HTTP request body (usually JSON) to a Java object.

- converts JSON (or other formats) from the request body into a Java object

```java
@PostMapping("/users")
public User create(@RequestBody User user) {
    return user;
}
```

If you want the `@PathVariable` to be optional, set `required = false`

```java
@PostMapping("/users")
public User create(@RequestBody(required=false) User user) {
    return user;
}
```

## `@RequestHeader`

Used to access HTTP headers.

- binds HTTP header values to method parameters

```java
public String getHeader(@RequestHeader("User-Agent") String agent)
```

## `@CookieValue`

Binds the value of an HTTP cookie to a method parameter.

```java
@GetMapping("/profile")
public String profile(@CookieValue("theme") String theme) {
    return theme;
}
```

## `@RequestAttribute`

Binds a request attribute to a method parameter.

Request attributes are values stored in the current request by another component, such as a filter, interceptor, or another controller.

`@RequestAttribute` is not used to read data sent by the client. 

```java
@GetMapping("/profile")
public String profile(@RequestAttribute("user") User user) {
    return user.getName();
}
```