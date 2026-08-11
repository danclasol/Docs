# Spring Boot Actuator

Spring Boot Actuator provides production-ready features for monitoring and managing a Spring Boot application.

It exposes information about the application through endpoints, such as:

- Application health
- Metrics
- Application information
- Environment and configuration
- HTTP request mappings
- Beans
- Logging configuration

## Dependency

Add the Actuator starter:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

## Common endpoints

### `/actuator/health`

Provides information about the application's health.

- provide information about application dependencies such as databases

```
{
  "status": "UP"
}
```

### `/actuator/info`

Provides arbitrary application information.

The information can then be exposed through:

```
info.app.name=Biblioteca
info.app.version=1.0.0
```

### `/actuator/metrics`

Provides application metrics.

Individual metrics can be queried:

```
GET /actuator/metrics/jvm.memory.used
```

Common metrics include:

- jvm.memory.used
- jvm.threads.live
- process.cpu.usage
- http.server.requests


### `/actuator/beans`

Shows the Spring beans registered in the application context.

Useful for debugging the application context.

### `/actuator/mappings`

Shows the application's request mappings.

It can be useful for inspecting which controllers and endpoints have been registered.

### `/actuator/env`

Provides information about the Spring Environment, including configuration properties and property sources.

This endpoint can expose sensitive configuration information, so it should be protected carefully.

### `/actuator/configprops`

Shows the properties bound using @ConfigurationProperties.

Useful for inspecting how configuration properties have been bound.

### `/actuator/loggers`

Allows inspection and modification of logging levels.

- GET /actuator/loggers
- GET /actuator/loggers/com.example

It can also be used to change a logger's level at runtime.

### `/actuator/threaddump`

Provides a thread dump:

Useful for diagnosing thread-related problems.

### `/actuator/heapdump`

Generates a JVM heap dump:

This endpoint should be carefully protected because heap dumps can contain sensitive application data.

## Enable/disable funcionalities

Controls whether an Actuator endpoint is available and the level of access allowed to it.

- unrestricted
- read-only
- none: disabled

```
management.endpoint.shutdown.access=unrestricted
management.endpoint.metrics.access=none
```

We can disable all functionalities by default

```
management.endpoint.access.default=none
management.endpoint.health.access=read_only
```

## Exposing Endpoints

By default, Actuator only exposes the endpoint */actuator/health*.

You can configure which endpoints are exposed:

```xml
management.endpoints.web.exposure.include=health,info,metrics
```

To expose all endpoints:

- not recommended for production without appropriate security controls

```xml
management.endpoints.web.exposure.include=*
```

## Excluding Endpoints

Endpoints can also be excluded:

```
management.endpoints.web.exposure.exclude=env,beans
```
