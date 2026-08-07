# Interceptors

A Servlet Filter intercepts every incoming HTTP request and outgoing HTTP response before it reaches a Spring controller.

- filters are part of the **Jakarta Servlet API**.

They are typically used for cross-cutting concerns such as:

- Logging requests and responses
- Processing request data (headers, query parameters, cookies, etc.)
- Adding or propagating request identifiers (Correlation ID, Trace ID)
- Measuring request duration
- Collecting metrics (response times, error rates, request counts)
- Authentication and authorization
- Rejecting requests based on custom conditions
- Compression, CORS, or security-related processing

## Interface Filter

A filter implements the `jakarta.servlet.Filter` interface.

- `doFilter()`: invoked for every request that matches the filter mapping

```java
public interface Filter {

    default void init(FilterConfig filterConfig) 
        throws ServletException {

    };

    void doFilter(
        ServletRequest request, 
        ServletResponse response, 
        FilterChain chain) 
        throws IOException, ServletException;

    default void destroy() {

    };
}
```

## Implementing a filter

For example, this filter counts the number of requests currently being processed.

```java
public class InFlightRequestFilter implements Filter {
    private final AtomicInteger inFlightRequest = new AtomicInteger();

    try {
        inFlightRequest.incrementAndGet();
        chain.doFilter(request, response);
    } finally {
        inFlightRequests.decrementAndGet();
    }
}
```

## The Filter Chain

This call, passes the request to the next filter in the chain.

```java
chain.doFilter(request, response);
```

If there are no more filters, the request reaches the Spring `DispatcherServlet`.

```
HTTP Request
      │
      ▼
Filter 1
      │
      ▼
Filter 2
      │
      ▼
DispatcherServlet
      │
      ▼
Controller
      │
      ▼
HTTP Response
      ▲
      │
Filter 2
      ▲
      │
Filter 1
```

## Register filters

### Using @Component

The simplest approach is to let Spring discover the filter.

```java
@Component
public class LoggingFilter implements Filter {

}
```

### Using FilterRegistrationBean

This approach provides more control over the filter configuration.

- `setFiter`: registers the filter instance
- `setUrlPatterns()`: defines the URL patterns handled by the filter
- `addUrlPatterns()`: adds additional URL patterns
- `setOrder()`: defines the filter execution order
- `setDispatcherTypes()`: restricts the dispatcher types (REQUEST, FORWARD, etc.)

```java
@Bean
public FilterRegistrationBean<@NonNull InFlightRequestsFilter> inFlightRequestFilter() {
    FilterRegistrationBean<@NonNull InFlightRequestsFilter> registrationBean = new FilterRegistrationBean<>();

    registrationBean.setFilter(new InFlightRequestsFilter()); 
    registrationBean.setUrlPatterns(List.of("/web/*", "/app"));
    registrationBean.addUrlPatterns("/api/*");
    registration.setOrder(1);

    return registrationBean;
}
```

## Filter Order

When multiple filters are registered, they are executed according to their order.

### Using `@Order`

```java
@Component
@Order(1)
public class LoggingFilter implements Filter {

}
```

Or with `FilterRegistrationBean`

- Lower values indicate higher priority

```java
registration.setOrder(1);
```
