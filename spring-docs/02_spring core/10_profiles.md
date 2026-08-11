# Profiles

A profile is a named logical group that allows Spring Boot to activate different configuration and beans depending on the environment in which the application is running.

Common profiles include

- development
- testing
- staging
- production

## Activate profiles

### Command line argument

```sh
java -jar application.jar --spring.profiles.active=production
```

### JVM system property

- -D option must be placed before `-jar`

```sh
java -jar -Dspring.profiles.active=production application.jar
```

### Environment variable    

```sh
export SPRING_PROFILES_ACTIVE=staging
java -jar application.jar
```

## Profile-specific Properties

Spring Boot allows configuration files to be associated with a specific profile.

- application.properties
- application-dev.properties
- application-staging.properties
- application-production.properties


## Environment Variables

Configuration values can reference environment variables using placeholders:

```xml
my.db.password=${DB_PASS}
```

## `@Profile`

Controls whether a Spring bean is registered depending on the active profile.

### Class

MyComponent is only registered when either *dev* or *stg* is active.

```java
@Profile({"dev", "stg"})
@Component
class MyComponent {

}
```

### `@Bean` Methods

`@Profile` can also be applied to individual `@Bean` methods

```java
@Configuration
class MyConfiguration {

    @Profile("production")
    @Bean
    MyComponent myProdComponent() {
        return new MyProdComponent();
    }

    @Profile("!production")
    @Bean
    MyComponent myNonProdComponent() {
        return new MyNonProdComponent();
    }
}
```

### Profile Expressions

`@Profile` supports profile expressions.

#### OR

Active when dev or test is active.

```java
@Profile({"dev", "test"})
```

#### NOT

Active when production is not active.

```java
@Profile("!production")
```

#### AND

Active when both dev and local are active.

```java
@Profile("dev & local")
```

Expressions can also be combined:

```java
@Profile("dev | (staging & !production)")
```