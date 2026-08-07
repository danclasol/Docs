# RestClient 

`RestClient` is Spring Framework's modern synchronous HTTP client. It provides a fluent API for calling REST services.

A `RestClient` instance is thread-safe and should typically be created once and reused. 

A common practice is to store it as a field in a Spring bean, such as a class annotated with `@Service`.

```java
@Service
public class MoviesService {
    private final RestClient restClient = RestClient.create();

    public List<Movie> getList(final Long id) {
        
        // Use RestClient to execute HTTP requests
    }
}
```

## Create RestClient

### Default instance

Creates a RestClient with the default configuration.

```java
RestClient restClient = RestClient.create();
```

### With a base URL

Configures a base URL so that all requests are relative to it.

- request: `GET http://localhost:9090/movies`

```java
RestClient restClient = RestClient.create("http://localhost:9090");
```

### From an existing RestTemplate

Allows reuse of an existing `RestTemplate` configuration, including message converters, interceptors, and request factories.

```java
RestClient restClient = RestClient.create(restTemplate);
```

### Using a RestClient.Builder

The builder provides the most flexible way to configure a RestClient.

```java
RestClient restClient = RestClient.build();
    .baseUrl("http://localhost:9090")
    .defaultHeader("Authorization", "Bearer token")
    .build();
```

## HTTP methods

Each method corresponds to an HTTP verb.

```java
restClient.get()
restClient.post()
restClient.put()
restClient.delete()
restClient.patch()
restClient.head()
restClient.options()
```

## Sending requests

### GET request

- `uri`: url of the request

```java
restClient.get()
    .uri("/movies")
    .retrieve()
    .body(Movie.class);
```

### POST request

- `body(...)`: send a body in the request
- `retrieve().body(...)`: retrieve the body of the response

```java
restClient.post()
    .uri("/movies")
    .body(movie)
    .retrieve()
    .body(Movie.class);
```

### PUT request

- `toBodilessEntity`: when response body is not needed

```java
restClient.put()
    .uri("/movies/{id}", id)
    .body(movie)
    .retrieve()
    .toBodilessEntity();
```

### DELETE request

- `toBodilessEntity`: when response body is not needed

```java
restClient.put()
    .uri("/movies/{id}", id)
    .retrieve()
    .toBodilessEntity();
```

## Path Variables

Path variables are automatically expanded.

- request: `GET /movies/1`

```java
restClient.get()
        .uri("/movies/{id}", id)
        .retrieve()
        .body(Movie.class);
```

## Query Parameters

Use `UriBuilder` when building URLs with query parameters.

- request: `GET /users?page=2&size=20`

```java
restClient.get()
    .uri(builder -> builder
            .path("/users")
            .queryParam("page", 2)
            .queryParam("size", 20)
            .build())
    .retrieve()
    .body(UserPageDto.class);
```

## Content-Type and Accept

- `contentType` specifies the format of the data being sent to the server
- `accept` specifies the format expected in the response

```java
restClient.post()
    .uri("http://localhost:9090/movies")
    .contentType(MediaType.APPLICATION_JSON)
    .accept(MediaType.APPLICATIOIN_JSON)
    .body(movie)
    .retrieve()
    .body(Movie.class);
```

## Headers

Add a single header.

```java
restClient.get()
    .uri("http://localhost:9090/movies/{id}", movieId)
    .header("Accept-Language", "es")
    .retrieve()
    .body(Movie.class);
```

Or multiple headers

```java
restClient.get()
    .uri("http://localhost:9090/movies/{id}", movieId)
    .header("Accept-Language", "es")
    .header("Client","prueba")
    .retrieve()
    .body(Movie.class);
```

### Default headers

Headers that should be included in every request are typically configured when creating the RestClient.

```java
RestClient restClient = RestClient.builder()
    .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer token")
    .defaultHeader(HttpHeaders.ACCEPT_LANGUAGE, "en")
    .build();
```

## ResponseEntity

Retrieve the complete HTTP response, including the status code, headers, and body.

```java
ResponseEntity<UserDto> response = restClient.get()
    .uri("/movies/{id}", id)
    .retrieve()
    .toEntity(Movie.class);

HttpStatusCode status = response.getStatusCode();
HttpHeaders headers = response.getHeaders();
Movie body = response.getBody();
```

## Response without body

Useful for requests such as DELETE or PUT that return only an HTTP status.

```java
restClient.get()
    .uri("/movies/{id}", id)
    .retrieve()
    .toBodilessEntity();
```