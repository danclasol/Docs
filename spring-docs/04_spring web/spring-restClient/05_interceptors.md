# RectClient Interceptors

Interceptors allow you to intercept outgoing HTTP requests and incoming HTTP responses.

They are executed automatically for every request made by a RestClient and are commonly used to implement cross-cutting concerns.

Typical use cases include:

- Authentication
- Authorization
- Logging
- Metrics
- Distributed tracing
- Adding common headers
- Request and response modification
- Simple retry logic

## Creating an interceptor

To create an interceptor, implement the `ClientHttpRequestInterceptor` interface.

- modify request: ex: `request.getHeaders().setBearerAuth(token)`
- `execution.execute(request, body)`: this passes the request to the next interceptor
    - if is not called, the request never reaches the server


```java
public class CustomerInterceptor implements ClientHttpRequestInterceptor {

    @Override
    public ClientHttpResponse intercept(HttpRequest request, byte[] body,
            ClientHttpRequestExecution execution) throws IOException {
        
        ClientHttpResponse response = execution.execute(request, body);

        // Añadir logica que queramos ejecutar
        request.getHeaders().setBearerAuth(token);
        System.out.println(response.getStatusCode());

        return response;
    }

}
```

## Register an interceptor

Interceptors are registered when building the RestClient.

The interceptor will be executed for every request made by this client.

```java
restClient = restClientBuilder.clone()
    .baseUrl("http://localhost:9090")
    .requestInterceptor(customerInterceptor)
    .build();
```

## Multiple interceptors

You can register multiple interceptors.

They are executed in the order in which they are registered.

```java
RestClient restClient = restClientBuilder.clone()
    .baseUrl("http://localhost:9090")
    .requestInterceptor(customerInterceptor)
    .requestInterceptor(authInterceptor)
    .build();
```

Use `requestInterceptors()` to register or modify several interceptors at once.

```java
RestClient restClient = restClientBuilder.clone()
    .requestInterceptors(interceptors -> {
        interceptors.add(loggingInterceptor);
        interceptors.add(authenticationInterceptor);
    })
    .build();
```
