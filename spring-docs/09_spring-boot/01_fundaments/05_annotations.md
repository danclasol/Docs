# Basic Annotations

## `@SpringBootApplication`

Indicates a configuration class that declares one or more `@Bean` methods and also triggers auto-configuration and component scanning.

Bundle all this annotation into one:

- `@EnableAutoConfiguration`
- `@ComponentScan`
  - `@basePackages`
  - `@basePackageClasses`
  - `@nameGenerator`
- `@Configuration`

## `@EnableAutoConfiguration`

Enables Spring Boot’s auto-configuration mechanism, eliminating the need for manual configuration of many common application settings.

- Spring Boot checks the classpath to see what dependencies are available
- Spring Boot auto-configures beans and settings for things like database connections, web servers, and more
- included in the `@SpringBootApplication` annotation

## `@EnableConfigurationProperties`

Enables automatic binding of properties from external configuration sources (like application.properties) to beans annotated with `@ConfigurationProperties`.

`@SpringBootApplication` automatically enables `@EnableConfigurationProperties`

- don't need to manually add `@EnableConfigurationProperties`
- any class annotated with `@ConfigurationProperties` will be automatically processed, and its properties will be bound to the corresponding fields
