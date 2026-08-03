# Multiple candidates for injection

## `@Autowired`

Enables automatic injection of dependencies by type.

```java
@Autowired
private Engine engine;
```

## `@Primary`

When exists more than one bean of the same type use `@Primary` on a ben instruct the Spring container to treat that bean as the default choice for `@Autowiring`.

- throws an exception unless it can determine which one to inject

```java
@Component
public class DieselEngine implements Engine {}

@Primary
@Component
public class PetrolEngine implements Engine {}
```

## `@Qualifier`

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

## `@ConditionalOnProperty`

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

## `@Lazy`

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
