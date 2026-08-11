# Properties

Spring Boot allows application configuration to be defined in application.properties or application.yml and injected into Java classes.

## Properties files

### `application.properties`

Properties are defined as key-value pairs:

```xml
app.name=Biblioteca
app.version=1.0
app.max-books=100
app.library.name=Biblioteca
app.library.max-books=100
```

### `application.yml`

YAML represents the same configuration hierarchically:

```xml
app:
  name: Biblioteca
  version: 1.0
  max-books: 100
  library:
    name: Biblioteca
    max-books: 100
```

## `@Value`

Injects a specific property into a field, constructor parameter, or method parameter.

- `@Value("${}")`
- boolean and number

```java
@Component
public class LibraryConfig {

    private final String name;
    private final int maxBooks;

    public LibraryConfig(
            @Value("${app.name}") String name,
            @Value("${app.max-books}") int maxBooks
    ) {
        this.name = name;
        this.maxBooks = maxBooks;
    }
}
```

You can also provide a default value:

```java
@Value("${app.max-books:50}")
private int maxBooks;
```

## `@ConfigurationProperties`

`@ConfigurationProperties` is designed to bind a group of related properties to a Java object.

- useful when you have several related configuration properties

```xml
my.application.message=hello
my.application.timeout=5s
my.application.threads=2
```

```yml
app:
  name: Biblioteca
  version: 1.0
  max-books: 100
  enabled: true
```

Fields are mapped with the value of the properties

- `app.name`: name
- `app.version`: version
- `app.max-books`: maxBooks
- `app.enabled`: enabled

```java
@ConfigurationProperties(prefix = "app")
public class AppProperties {

    private String name;
    private String version;
    private int maxBooks;
    private boolean enabled;

    // getters and setters
}
```

### Using records

With modern Java, records are very convenient:

```java
@ConfigurationProperties(prefix = "app")
public record AppProperties(
        String name,
        String version,
        int maxBooks,
        boolean enabled
) {
}
```

## `@EnableConfigurationProperties`

`@ConfigurationProperties` defines how properties should be bound, but the class also needs to be registered as a Spring bean.

`@EnableConfigurationProperties` can be used to register it

```java
@EnableConfigurationProperties(AppProperties.class)
@Configuration
public class AppConfig {
}
```

Now Spring injects AppProperties.

```java
@Service
public class LibraryService {

    private final AppProperties properties;

    public LibraryService(AppProperties properties) {
        this.properties = properties;
    }
}
```

## `@ConfigurationPropertiesScan`

Instead of explicitly enabling every configuration-properties class, you can use:

```java
@SpringBootApplication
@ConfigurationPropertiesScan
public class Application {
}
```

## @Value vs @ConfigurationProperties

It is generally recommended to use `@ConfigurationProperties` because it provides several advantages over `@Value`

- Ideal for groups of related properties and large configurations

- Type-safe
    - configuration values are bound to strongly typed Java fields

- Supports validation using Bean Validation annotations
    - such as @NotNull, @NotEmpty, - @Min, etc

- Supports relaxed binding 
    - different naming conventions can be mapped to the same Java property
    - my-name, myName, and MY_NAME can map to myName

- Supports type conversion
    - Spring Boot can convert configuration values to appropriate Java types
    - 5s to a Duration

- Better documentation 
    - @ConfigurationProperties classes can be documented using Javadoc
  
- IDE support
  - Spring Boot can generate configuration metadata that improves autocomplete and documentation in IDEs

