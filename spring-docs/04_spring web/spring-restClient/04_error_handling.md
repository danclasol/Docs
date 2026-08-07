# Error Handle

`RestClient` allows you to handle HTTP errors directly in the request chain using the `onStatus()` method.

By default, `retrieve()` throws a `RestClientResponseException` (or one of its subclasses) for HTTP 4xx and 5xx responses. 

You can override this behavior by registering one or more status handlers.

### `onStatus()`

The onStatus() method accepts two arguments:

- `Predicate<HttpStatusCode>`: determines whether the handler should be invoked for the current response
- `ErrorHandler`: receives the request and response, allowing you to inspect the response and throw a custom exception

```java
UserDto user = restClient.get()
    .uri("/users/{id}", id)
    .retrieve()
    .onStatus(status -> status.value() == 404, 
            (request, response) -> {
                throw new UserNotFoundException();
            })
    .body(UserDto.class);
```

### Multiple Status Handlers

You can register multiple handlers to process different HTTP status codes.

The first matching handler is executed.

```java
UserDto user = restClient.get()
    .uri("/users/{id}", id)
    .retrieve()
    .onStatus(status -> status.value() == 404, 
            (request, response) -> {
                throw new UserNotFoundException();
            })
    .onStatus(HttpStatusCode::is4xxClientError, 
            (request, response) -> {
                throw new BadRequestException();
            })
    .body(UserDto.class);
```

## Using HttpStatusCode Predicates

HttpStatusCode provides convenient methods for matching response status codes.

- `is1xxInformational()`: code 100-199
- `is2xxSuccessfull()`: code 200-299
- `is3xxRedirection()`: code 300-399
- `is4xxClientError()`: code 400-499
- `is5xxServerError()`: code 500-599
- `isError()`: codes 4xx o 5xx

```java
UserDto user = restClient.get()
    .uri("/users/{id}", id)
    .retrieve()
    .onStatus(HttpStatusCode::is4xxClientError, 
            (request, response) -> {
                throw new BadRequestException();
            })
    .body(UserDto.class);
```

Use `HttpStatusCode` predicate methods instead of checking numeric status codes whenever possible.

## Handle Error Response

The error handler has access to the complete HTTP response.

The response body can be parsed to extract error messages or validation details returned by the server.

```java
UserDto user = restClient.get()
    .uri("/users/{id}", id)
    .retrieve()
    .onStatus(HttpStatusCode::is4xxClientError, 
            (request, response) -> {
                response.getBody()

                throw new BadRequestException();
            })
    .body(UserDto.class);
```

## Global Error Handling

Instead of configuring `onStatus()` for every request, you can register a default status handler when building the `RestClient`.

The default handler applies to every request executed by that client.

Use for errors that should be handled consistently across all requests.

```java
@Service
public class MoviesService {
    private final RestClient restClient;

    // Injectamos RestClient.Builder por constructor
    public MoviesService(final RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.clone()
            .baseUrl("http://localhost:9090")
            .defaultStatusHandler(HttpStatusCode::is4xxClientError, 
                (request, response) -> {                  
                    throw new BadRequestException();
                })
            .build();
    }
}
```

## Handler Precedence

A request-specific `onStatus()` handler has higher priority than a handler registered with `defaultStatusHandler()`.

```
Request
    │
    ▼
onStatus()
    │
    ├── Match → Execute handler
    │
    └── No match
            │
            ▼
defaultStatusHandler()
            │
            ▼
Default RestClient exception
```