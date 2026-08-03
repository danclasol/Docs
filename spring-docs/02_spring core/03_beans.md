# Beans

Beans are objects that are instantiated, assambled, and managed by the Spring IoC Container.

- is an object that we do not instantiate ourselves
- Spring creates, initializes, and injects it where it is needed

Spring IoC container manages the creation of beans:

- scans packages for classes annotated with `@Component`, `@Service`, `@Repository`, or `@Controller`
- automatically creates beans and puts them in the `ApplicationContext`
- inject dependencies when are set as `@Autowired`


## Bean Instantiation

With annotation `@Bean`, Spring instantiates a bean and registers it in the application context.

When using `@Bean`, it is recommended to declare the bean inside a class annotated with `@Configuration`.

- `@Bean` can only be applied to methods
- `@Configuration` indicates that the class contains bean definitions
- Spring creates an instance of the configuration class and invokes each `@Bean` method to create and register the corresponding beans
- By default, each `@Bean` is a singleton, so the same instance is returned whenever it is requested


```java
@Configuration
public class Car {
  @Bean
  public Car() {
    System.out.println("Car constructor");
  }
}
```

## `@Component`

This annotation marks a class as a Spring-managed bean that will be detected during component scanning.

When Spring scans the package:

- Detects the EmailSender class.
- Instantiates it
- Registers it as a bean in the application context.
- Makes it available for dependency injection.

```java
@Component
public class EmailSender {
}
```

## `@ComponentScan`

`@ComponentScan` tells Spring where to search for classes annotated with stereotype annotations (such as @Component, @Service, @Repository, and @Controller) and register them as beans.

If your beans are located outside the default package hierarchy, specify the packages explicitly:

```java
@ComponentScan(basePackages = {
    "com.example.service",
    "com.shared.library"
})
```

## `@Component` vs `@Bean`

Both register objects as Spring beans, but they do so in different ways.

### @Component

Use @Component when:
- class belongs to your application
- you can modify its source code
- no special creation logic is required

### @Bean

Use when:

- need explicit control over bean creation
- especially for third-party classes or beans requiring custom configuration

  ```java
  @Bean PasswordEncoder password() {
    return PasswordEncoder.defaultForSpring(); // third-party class
  }
  ```
- bean creation depends on configuration or runtime logic