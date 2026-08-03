# Dependency Injection

There are two ways to obtain a bean from the Spring container.

- explicitly accessing the Application Context
- automatically inject the required dependency into another bean

## Explicitly accessing the Application Context

A bean can also be retrieved directly from the ApplicationContext.

```java
ApplicationContext context = ...;

UserService service = context.getBean(UserService.class);
```

## @Autowired

Spring automatically injects the required dependency into another bean. 

There are 3 types of injections:

### Constructor Injection (Recommended)

Dependencies are provided through the class constructor.

- recommended by the Spring team
- makes dependencies explicit
- supports immutable (final) fields
- easy to unit test
- ensures all required dependencies are available when the object is created

Since Spring 4.3, annotation `@Autowired` is not necessary in constructor injection if there is only one constructor

```java
@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
```

### Setter Injection

Dependencies are provided through setter methods.

#### Advantages

- useful for optional dependencies
- allows changing the dependency after object creation

#### Disadvantages

- dependencies are not guaranteed to be initialized.
- bbjects are mutable

```java
@Service
public class UserService {

    private UserRepository repository;

    @Autowired
    public void setRepository(UserRepository repository) {
        this.repository = repository;
    }
}
```

### Field Injection

Dependencies are injected directly into fields.

#### Advantages

- Less boilerplate code

#### Disadvantages

- harder to unit test
- dependencies are hidden
- cannot use final fields
- increases coupling to the Spring framework

```java
@Service
public class UserService {

    @Autowired
    private UserRepository repository;
}
```

### Injection with `@Bean`

The case of methods with `@Bean` are special. This methods below to a class marked with `@Configuration`, so the injection process also works.

```java
@Configuration
public class AConfiguration{
    @Bean
    public A a(final B b) {
        return new A(b);
    }
}
```
