## Configuration

Spring MVC can be configured manually in a Spring Framework application.

> **Note:** Spring Boot performs this configuration automatically.

## `@EnableWebMvc`

Enables Spring MVC support.

It registers the core infrastructure required by Spring MVC, including:

- request mappings
- controllers
- data binding
- validation
- message converters
- exception handling

```java
@EnableWebMvc
@Configuration
    public class WebConfig {
}
```

## `WebMvcConfigurer`

Allows customization of Spring MVC's default configuration.

Common use cases include:

- configuring CORS
- registering interceptors
- adding formatters and converters
- serving static resources
- configuring view controllers
- customizing message converters

Example:

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
    }

}
```

## Running application

In a traditional Spring Framework application, the `DispatcherServlet` must be registered manually.

One option is to implement `WebApplicationInitializer`.

```java
public class MainWebAppInitializer
        implements WebApplicationInitializer {

    @Override
    public void onStartup(ServletContext servletContext) {

        // Register DispatcherServlet

    }

}
```

