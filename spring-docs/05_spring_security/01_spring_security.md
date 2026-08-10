# Spring Security

Spring Security is the Spring framework used to secure applications by providing mechanisms for authentication, authorization, and protection against common web security attacks.

It integrates with Spring applications through a series of security filters that process incoming HTTP requests before they reach the controller.

## Security Filter Chain

The Security Filter Chain is the core mechanism that intercepts every HTTP request and applies authentication, authorization, CSRF protection, session management, and other security features before the request reaches your controller.

```
Client Request
      |
      v
Servlet Container (Tomcat)
      |
      v
DelegatingFilterProxy
      |
      v
FilterChainProxy
      |
      v
+----------------------------------------+
| Spring Security Filter Chain           |
|----------------------------------------|
| SecurityContextHolderFilter            |
| CsrfFilter                             |
| LogoutFilter                           |
| UsernamePasswordAuthenticationFilter   |
| BasicAuthenticationFilter              |
| RequestCacheAwareFilter                |
| SecurityContextHolderAwareRequestFilter|
| AnonymousAuthenticationFilter          |
| ExceptionTranslationFilter             |
| AuthorizationFilter                    |
+----------------------------------------+
      |
      v
DispatcherServlet
      |
      v
Controller
```

### DelegatingFilterProxy

This is the filter registered with the servlet container (Tomcat).

- delegates all requests to Spring's security infrastructure

## FilterChainProxy

This is the main Spring Security filter.

It selects the appropriate SecurityFilterChain based on the incoming request.

- manages one or more SecurityFilterChain instances
- order is important because each filter depends on the previous ones

## Security Filter Chain

Each filter has one responsibility.

- `SecurityContextHolderFilter`: 
    - loads and stores the SecurityContext
- `CsrfFilter`: 
    - checks CSRF tokens
- `LogoutFilter`: 
    - processes logout requests
- `UsernamePasswordAuthenticationFilter`: 
    - handles form login authentication
- `BasicAuthenticationFilter`: 
    - Handles HTTP Basic authentication
- `BearerTokenAuthenticationFilter`: 
    - handles JWT Bearer tokens (OAuth2 Resource Server)
- `AnonymousAuthenticationFilter`: 
    - creates an anonymous user if no authentication exists
- `ExceptionTranslationFilter`: 
    - converts security exceptions into HTTP responses
- `AuthorizationFilter`: 
    - performs authorization checks

## Custom filter

You can add your own filter before or after an existing filter.

You can customize the chain by adding your own filters with 
- `addFilterBefore()`
- `addFilterAfter()`
- `addFilterAt()`

```java
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    http
        .addFilterBefore(new JwtAuthenticationFilter(),
                UsernamePasswordAuthenticationFilter.class)
        .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated());

    return http.build();
}
```