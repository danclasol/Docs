# Actuator

Actuator brings production-ready features to our application.

- monitoring our app, gathering metrics, and understanding traffic or the state of our database becomes trivial with this dependency.

- production-grade tools without actually having to implement these features ourselves

- exposes operational information about the running application — health, metrics, info, dump, env, etc.

- uses HTTP endpoints or JMX beans to enable us to interact with it

## Configurate Actuator in your project

Once this dependency is on added the dependency in the `pom.xml` file, several endpoints are available for us out of the box. As with most Spring modules, we can easily configure or extend it in many ways.

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

## Predefined Endpoints

List of predefined endpoint available

- `/auditevents`

  - lists security audit-related events such as user login/logout
  - we can also filter by principal or type among other fields

- `/beans`

  - returns all available beans in our BeanFactory
  - unlike `/auditevents`, it doesn't support filtering

- `/conditions`

  - formerly known as /autoconfig, builds a report of conditions around autoconfiguration

- `/configprops`

  - allows us to fetch all `@ConfigurationProperties` beans

- `/env`

  - returns the current environment properties
  - additionally, we can retrieve single properties

- `/flyway`

  - provides details about our Flyway database migrations

- `/health`

  - summarizes the health status of our application

  ```
  { "status": "UP" }
  ```

- `/heapdump`

  - builds and returns a heap dump from the JVM used by our application

- `/info`

  - returns general information
  - this information or details must be set in the `application.properties`

  ```
  info.app.name=Aplication name
  info.app.description=Application description
  info.app.version=1.0.0
  ```

- `/liquibase`

  - behaves like `/flyway` but for Liquibase

- `/logfile`

  - returns ordinary application logs

- `/loggers`

  - enables us to query and modify the logging level of our application

- `/metrics`

  - details metrics of our application
  - this might include generic metrics as well as custom ones

- `/prometheus`

  - returns metrics like the previous one, but formatted to work with a Prometheus server

- `/scheduledtasks`

  - provides details about every scheduled task within our application

- `/sessions`

  - lists HTTP sessions, given we are using Spring Session

- `/shutdown`

  - performs a graceful shutdown of the application

- `/threaddump`
  - dumps the thread information of the underlying JVM

## Configure endpoints

Actuator comes with most endpoints disabled. Only two available by default are `/health` and `/info`

We can configurate the endpoints by adding them in the `application.properties`

### Enable all endpoints

```properties
management.endpoints.web.exposure.include=*
```

### Enable a specific endpoint

```properties
management.endpoint.shutdown.enabled=true
```

### Enabled endpoints except one

```properties
management.endpoints.web.exposure.include=\*
management.endpoints.web.exposure.exclude=loggers
```
