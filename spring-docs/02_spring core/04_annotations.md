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


