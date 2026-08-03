# Stererotypes

The term bean stereotypes refers to annotations that tell Spring to automatically detect and register a class as a bean during component scanning.

## `@Controller`
The base stereotype. All other stereotypes are specializations of `@Component`.

```java
@Component
public class EmailSender {
}
```

## `@Service`

Represents the service layer.

```java
@Service
public class UserService {
}
```

## `@Repository`

Represents the data access layer.

```java
@Repository
public class UserRepository {
}
```

## `@Controller`

Handles HTTP requests in a Spring MVC application.

```java
@Controller
public class HomeController {
}
```

## `@RestController`

Handles REST API requests and automatically serializes responses to JSON or XML.

```java
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public List<User> getUsers() {
        return List.of();
    }
}
```

## `@Configuration`

Marks a class as a source of bean definitions.

```java
@Configuration
public class AppConfig {

    @Bean
    public Car car() {
        return new Car();
    }
}
```

## `@ControllerAdvice`

Provides global behavior for multiple controllers.

```java
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> handle(NotFoundException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                             .body(ex.getMessage());
    }
}
```