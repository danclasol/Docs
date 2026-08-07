# RestClient.Builder

`RestClient.Builder `is a mutable builder used to create and configure `RestClient` instances. 

It allows you to define common configuration that can be reused across multiple clients.

A common practice is to register a shared `RestClient.Builder` as a Spring bean and customize it where needed.

## Registering a Builder Bean

Create a shared `RestClient.Builder` bean in a configuration class.

- unlike a `RestClient`, the builder is mutable and intended to be customized before calling `build()`

```java
@Configuration
public class AppConfig {

    @Bean
    RestClient restClient() {
        return RestClient.builder()
                .baseUrl("https://api.example.com")
                .build();
    }

}
```

## Creating a RestClient from the Builder

Inject the shared builder into a service and create a RestClient with service-specific configuration.



```java
@Service
public class MoviesService {
    private final RestClient restClient;

    // Injectamos RestClient.Builder por constructor
    public MoviesService(final RestClient.Builder restClientBuilder) {
        this.restClient = restClientBuilder.clone()
            .baseUrl("http://localhost:9090")
            .defaultHeader("Accept-Language", "es")
            .build();
    }

    public List<Movie> getMovies() {
        return restClient.get()
            .uri("/movies")
            .retrieve()
            .body(new ParameterizedTypeReference<>() {})
    }

    public Movie getMovieById(long id) {
        return restClient.get()
                .uri("/movies/chatdom", id)
                .retrieve()
                .body(Movie.class);
    }
}
```

## `.clone()`

As RestClient.Builder is mutable, if multiple services share the same builder bean, modifying it directly would affect every service using that bean.

Using `clone()` creates an independent copy that can be customized safely.
- call `clone()` before applying service-specific customizations
- it won't modify the shared RestClient.Builder
```java
RestClient.Builder builder = restClientBuilder.clone()
            .baseUrl("http://localhost:9090")
            .defaultHeader("Accept-Language", "es")
            .build();
```

### Builder Lifecycle

```
RestClient.Builder (shared bean)
            │
            ▼
        clone()
            │
            ▼
Configure Builder
(baseUrl, headers, interceptors...)
            │
            ▼
         build()
            │
            ▼
       RestClient
            │
            ▼
     Execute requests
```
