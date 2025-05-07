# Beans

Beans are objects that are instantiated, assambled, and managed by the Spring IoC Container.

Sring IoC container manages the creation of beans:

- scans packages for classes annotated with `@Component`, `@Service`, `@Repository`, or `@Controller
- automatically creates beans and puts them in the `ApplicationContext`
- inject dependencies when are set as `@Autowired`

# Beans Scopes

- Singleton
  - single instance per IoC container
  - default option
- Prototype:
  - new instance each time a bean is requested
- Request, Session, Global Session:
  - scopes for web applications

## 1. Bean Instantiation

Spring creates an instance of your class.

No properties or dependencies are injected yet.

```java
public class Car {
  public Car() {
    System.out.println("Car constructor");
  }
}
```

## 2. Dependency Injection

Spring injects dependencies into the bean (fields, setters, constructors).

This is done using annotations like `@Autowired`, `@Value`, etc.

```java
@Autowired
private Engine engine;
```

## 3. `BeanNameAware` / `BeanFactoryAware` (Optional)

If your bean implements these interfaces, Spring gives the bean:

- its name (setBeanName)
- its BeanFactory or ApplicationContext reference

## 4. `@PostConstruct` or Init Method

After all properties are set, Spring calls:

- Methods annotated with `@PostConstruct`
- Or, `afterPropertiesSet()` if your class implements `InitializingBean`

```java
@PostConstruct
public void init() {
  System.out.println("Bean is initialized");
}
```

## 5. Bean is Ready to Use

The bean is fully initialized and available for use in your app.

## 6. `@PreDestroy` (or `DisposableBean.destroy()`)

When the app is shutting down, Spring cleans up.

It calls:

- Methods annotated with @PreDestroy
- Or `destroy()` if your class implements `DisposableBean`

```java
@PreDestroy
public void cleanup() {
  System.out.println("Bean is being destroyed");
}
```
