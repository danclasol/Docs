# Common options

### Base URL

Sets the base URL for all requests.

```java
.baseUrl("https://api.example.com")
```

### Default Headers

Headers automatically included in every request.

```java
.defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer token")
.defaultHeader(HttpHeaders.ACCEPT_LANGUAGE, "en")
```

Configure multiple headers at once.

```java
.defaultHeaders(headers -> {
    headers.setBearerAuth(token);
    headers.setAcceptLanguageAsLocales(List.of(Locale.ENGLISH));
})
```

### Request Interceptors

Intercept requests and responses to add logging, authentication, tracing, or custom behavior.

```java
.requestInterceptor(new LoggingInterceptor())
```

### Request Factory

Configure the underlying HTTP client implementation.

```java
.requestFactory(new JdkClientHttpRequestFactory())
```

Common implementations include:

- JdkClientHttpRequestFactory
- HttpComponentsClientHttpRequestFactory
- JettyClientHttpRequestFactory

### Message Converters

Customize how request and response bodies are serialized and deserialized.

```java
.messageConverters(converters -> {
    // Add or customize HttpMessageConverters
})
```

### Default Status Handler

Handle HTTP errors globally for all requests created by this client.

```java
.defaultStatusHandler(
    HttpStatusCode::isError,
    (request, response) -> {
        throw new RuntimeException("Request failed");
    }
)
```

### Observation and Metrics

Integrate with Micrometer and Spring Observability for metrics and distributed tracing.

```java
.observationRegistry(observationRegistry)
```