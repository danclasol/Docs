# RestClientCustomizer

## Without RestClientCustomizer

Cuando tienes muchos RestClient configurador por cada servicio, estamos duplicando mucho codigo

```java
public MovieService(RestClient.Builder builder) {

    this.restClient = builder.clone()
            .defaultHeader("X-App", "Library")
            .requestInterceptor(new LoggingInterceptor())
            .baseUrl("https://movies.api")
            .build();
}
```


```java
public BookService(RestClient.Builder builder) {

    this.restClient = builder.clone()
            .defaultHeader("X-App", "Library")
            .requestInterceptor(new LoggingInterceptor())
            .baseUrl("https://books.api")
            .build();
}
```

## With RestClientCustomizer

- Spring Boot automatically discovers all RestClientCustomizer beans
- Every injected RestClient.Builder is customized before you receive it

```java
@Component
public class MyRestClientCustomizer implements RestClientCustomizer {

    @Override
    public void customize(RestClient.Builder builder) {
        builder.defaultHeader("X-App", "Library");
    }

}
```

```java
@Component
public class LoggingCustomizer implements RestClientCustomizer {

    @Override
    public void customize(RestClient.Builder builder) {
        builder.requestInterceptor(new LoggingInterceptor());
    }

}
```

```java
public MovieService(RestClient.Builder builder) {

    this.restClient = builder.clone()
            .baseUrl("https://movies.api")
            .build();
}
```

```java
public BookService(RestClient.Builder builder) {

    this.restClient = builder.clone()
            .baseUrl("https://books.api")
            .build();
}
```