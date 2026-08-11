# RestClient

Add the required dependency to our project’s pom.xml file:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-restclient</artifactId>
</dependency>
```

# Autoconfiguration RestClient.Builder

Spring Boot registra automáticamente un bean de `RestClient.Builder`, 

Por lo que podremos inyectar sin necesidad de declarar ningun bean.

Además, ese builder ya viene configurado con:

- HttpMessageConverter
- ClientHttpRequestFactory
- soporte para SSL
- observability (Micrometer), si está disponible
- cualquier personalización realizada mediante - 
- RestClientCustomizer

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
                .uri("/movies/{id}", id)
                .retrieve()
                .body(Movie.class);
    }
}
```

## Interceptors 

Spring Boot automatically configures the underlying `RestClient.Builder`. 

You can add your own interceptors when building a client:

```java
@Service
public class MovieService {

    private final RestClient restClient;

    public MovieService(RestClient.Builder builder) {
        this.restClient = builder.clone()
                .baseUrl("https://api.example.com")
                .requestInterceptor(new AuthenticationInterceptor())
                .requestInterceptor(new LoggingInterceptor())
                .build();
    }

}
```