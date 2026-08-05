# Server

Configuration properties for the embedded web server (Tomcat).

### `server.error.include-stacktrace`

Controls whether stack traces are included in error responses.

- always
- never

```xml
server.error.include-stacktrace=always
```

# Spring Web

General web configuration shared across Spring Web components, such as locale, static resources, and request handling.

### `spring.web.locale`

Sets the application's default locale.

```xml
spring.web.locale=en_GB
```

### `spring.web.locale-resolver`

Defines how the locale is resolved 
- accept-header: 
    - default value
    - resolves the locale from the `Accept-Language` HTTP header sent by the client
- fixed: 
    - use the locale defined by `spring.web.locale`
    - ignores the client request

```xml
spring.web.locale-resolver=fixed
```

# Spring MVC

Configuration specific to the Spring MVC framework, including data formatting, view resolution, and request mapping behavior.

### `spring.mvc.format.date` 

Sets the default format for `LocalDate` values.

```xml
spring.mvc.format.date=yyyy-MM-dd
```

# Spring REST Client

Configuration for the HTTP client used by `RestClient`, including connection and read timeouts.

### `spring.http.client.connect-timeout`

Maximum time to establish a connection.

```xml
spring.http.client.connect-timeout=5s
```

### `spring.http.client.read-timeout`

Maximum time to wait for a response after connecting.

```xml
spring.http.client.read-timeout=30s
```