# Annotations

Spring uses annotations to tell the IoC container which classes to manage and how to inject dependencies (DI).

The Spring IoC Container scans for annotations:

- `@Component` creates a bean for each of them
- `@Autowired` injects the depenency into the component

## Configuration Annotations

### `@Configuration`

A class annotated with `@Configuration` is interpreted by Spring as a configuration class that can declare one or more `@Bean` methods.

Without `@Configuration`, using only `@Component`, Spring may treat `@Bean` methods as regular method calls, bypassing the container.

### `@ConfigurationProperties`

Used to bind external configuration properties (e.g., from `application.properties` or `application.yml`) to a strongly-typed Java object.

```yaml
app:
  name: MyApplication
  version: 1.0
  features:
    enable-logging: true
```

Spring will automatically bind the properties to the corresponding fields.

```java
@Component
@ConfigurationProperties(prefix = "app")
public class AppProperties {

    private String name;
    private String version;
    private Features features;

    public static class Features {
        private boolean enableLogging;

        // getters and setters
    }

    // getters and setters
}
```

### `@PropertySource`

Load additional property files, especially in modular configurations or legacy applications

- working in a Spring (non-Boot) project or need modular config files
- need to support legacy file-based configuration
- it won't work for `.yml` files, only `.properties`

```java
@Configuration
@PropertySource("classpath:config/app.properties")
public class AppConfig {

    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String appVersion;

    // Use these values in your bean definitions
}
```

### `@PropertySources`

Load multiple property files in a single configuration class

```java
@Configuration
@PropertySources({
    @PropertySource("classpath:application.properties"),
    @PropertySource("classpath:database.properties")
})
public class AppConfig {

    @Value("${app.name}")
    private String appName;

    @Value("${db.url}")
    private String dbUrl;

    // Use the injected properties in your beans
}
```

### `@Value`

Injects property values directly into fields/methods beans

- Spring will resolve the placeholders and inject the corresponding values from the configuration file
- only recommended used for small, atomic values
- use `@ConfigurationProperties ` for complex or grouped settings

```java
@Value("${app.title}")
private String title;

@Value("${app.port}")
private int port;
```

Can be also inject in parameter in constructors

```java
public Application(@Value("${app.version}") String version) {
    this.version = version;
}
```

## Bean Annotations

### `@Bean`

Used to define manually a bean in a Spring configuration class.

- when don't want to use `@Component`, `@Service`, `@Repository`, or other automatic bean-scanning annotations
- when you need more control over the bean instantiation process

```java
@Configuration
public class AppConfig {

    @Bean
    public MyService myService() {
        return new MyService();
    }

    @Bean
    public MyRepository myRepository() {
        return new MyRepository();
    }
}
```

### `@Scope`

Used to define the scope of a bean, determining how many instances of that bean Spring will create and how long those instances will live within the Spring context.

- Singleton (Default):
  - single instance of the bean is created for the entire Spring container
- Prototype:
  - new instance of the bean is created each time it is requested
- Request (For Web Applications):
  - new instance is created for each HTTP request
  - destroyed when the HTTP request is completed
- Session (For Web Applications):
  - new instance is created for each HTTP session
  - destroyed when the session expires
- Global Session (For Portlet Applications):
  - single instance is shared across all portlets within a global HTTP session

### `@PostConstruct`

Define a method that should be executed immediately after the bean is created and its dependencies are injected

```java
@Component
public class MyService {

    private String configValue;

    @PostConstruct
    public void init() {
        // This method will be called after the bean is fully initialized
        configValue = "Configuration Loaded";
        System.out.println("MyService initialized: " + configValue);
    }

    public void performService() {
        System.out.println("Service is performing with config value: " + configValue);
    }
}
```

### `@PreDestroy`

Define a method that should be executed just before a Spring bean is destroyed

```java
@Component
public class MyService {

    @PreDestroy
    public void cleanup() {
        // Cleanup logic before bean is destroyed
        System.out.println("MyService is being destroyed and cleaned up.");
    }

    public void performService() {
        System.out.println("Performing service...");
    }
}
```

## Dependency Injection Annotations

### `@Autowired`

Enables automatic injection of dependencies by type.

```java
@Autowired
private Engine engine;
```

### `@Primary`

When exists more than one bean of the same type use `@Primary` on a ben instruct the Spring container to treat that bean as the default choice for `@Autowiring`.

- throws an exception unless it can determine which one to inject

```java
@Component
public class DieselEngine implements Engine {}

@Primary
@Component
public class PetrolEngine implements Engine {}
```

### `@Qualifier`

Use to resolve dependency injection conflicts when multiple beans of the same type are defined in the application context.

Explicitly identify the desired bean by name, avoiding ambiguity and ensures the correct bean is injected.

Firstly, it neccessary to name beans with the annotation `@Component`, so we can set the name of the component to the `@Qualifier` annotation.

```java
@Component("dieselEngine")
public class DieselEngine implements Engine {}

@Component("petrolEngine")
public class PetrolEngine implements Engine {}
```

In this example, the _Car_ class explicitly requests the _dieselEngine_ bean, even though both _dieselEngine_ and _petrolEngine_ are available in the context

```java
@Component
public class Car {

    private final Engine engine;

    @Autowired
    public Car(@Qualifier("dieselEngine") Engine engine) {
        this.engine = engine;
    }
}
```

### `@ConditionalOnProperty`

Allows you to enable or disable a bean or configuration class based on the presence, absence, or value of a specific property in the application's environment (`application.properties` or `application.yml`).

- `name`: name of the property to check
- `havingValue`: required value for the condition to match
  - optional
  - if omitted, presence alone triggers it
- `matchIfMissing`: if set to true, the condition will match even if the property is missing

```java
@Configuration
@ConditionalOnProperty(name = "feature.enabled", havingValue = "true")
public class FeatureConfig {

    @Bean
    public SomeService someService() {
        return new SomeService();
    }
}
```

### `@Lazy`

Indicate that a bean should be initialized lazily. By default, Spring instantiates singleton-scoped beans eagerly at application startup.

- reduce startup time
- reduce resource usage for beans that may not always be required

Can be applied at both the class level and injection point level

```java
@Lazy
@Component
public class ExpensiveService {
    public ExpensiveService() {
        System.out.println("ExpensiveService initialized");
    }
}
```

Lazy Injection

```java
@Component
public class SomeComponent {

    @Autowired
    @Lazy
    private ExpensiveService expensiveService;

    public void doSomething() {
        // ExpensiveService will be initialized here if used for the first time
        expensiveService.perform();
    }
}
```
