# CSRF

CSRF protection is configured through `HttpSecurity`:

```java
http.csrf(csrf -> csrf.disable());
```

Or you can configure it instead of disabling it:

```java
http.csrf(csrf -> csrf
    .ignoringRequestMatchers("/api/**")
);
```