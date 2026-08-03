# Beans Scopes

Used to define the scope of a bean, determining how many instances of that bean Spring will create and how long those instances will live within the Spring context.

- Singleton (Default)
  - single instance per IoC container
  - default option
- Prototype:
  - new instance each time a bean is requested
- Request, Session, Global Session:
  - scopes for web applications
  - new instance is created for each HTTP request
  - destroyed when the HTTP request is completed
- Request (For Web Applications):
  - new instance is created for each HTTP request
  - destroyed when the HTTP request is completed
- Session (For Web Applications):
  - new instance is created for each HTTP session
  - destroyed when the session expires
- Global Session (For Portlet Applications):
  - single instance is shared across all portlets within a global HTTP session

## `@Scope`

With the annotacion `@Scope` we can change the default scope of a bean.

```java
@Scope("prototype")
@Bean
public A a() {
  return new A();
}
```