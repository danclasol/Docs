# WebMvcConfigurer

WebMvcConfigurer is a callback interface that allows you to customize Spring MVC's default configuration without replacing it.

In most Spring Boot applications, Spring MVC is configured automatically. Implement WebMvcConfigurer only when you need to customize its behavior.

```java
@Configuration
public class CustomWebConfig implements WebMvcConfigurer {

}
```
### Common customizations include:

- Configuring URL path matching
- Registering MVC interceptors
- Configuring CORS
- Adding formatters and converters
- Registering custom HttpMessageConverters
- Serving static resources
- Registering view controllers
- Configuring asynchronous request handling


# Configuration

## Path Matching

A common use case is adding a common prefix (such as */api*) to all REST controllers.

All controllers annotated with @RestController become:

- /users → /api/users
- /books → /api/books
- /orders → /api/orders

```java
@Override
public void configurePathMatch(final PathMatchConfigurer configurer) {
    configurer.addPathPrefix(
        "/api", 
        HandlerTypePredicate.forAnnotation(RestController.class));
}
```

## HandlerTypePredicate

HandlerTypePredicate determines which controllers should be affected by a configuration.

```java
HandlerTypePredicate.forBasePackage("com.example.api")
HandlerTypePredicate.forAssignableType(AdminController.class)
```

## Registering Interceptors

Spring MVC interceptors are registered through `WebMvcConfigurer`.

```java
@Override
public void addInterceptors(InterceptorRegistry registry) {

    registry.addInterceptor(new LoggingInterceptor())
            .addPathPatterns("/api/**")
            .excludePathPatterns("/api/auth/**");
}
```

## Configuring CORS

```java
@Override
public void addCorsMappings(CorsRegistry registry) {

    registry.addMapping("/api/**")
            .allowedOrigins("https://example.com")
            .allowedMethods("GET", "POST", "PUT", "DELETE");
}
```

## JSON Configuration

Spring Boot automatically configures Jackson.

You can customize the default ObjectMapper using a JsonMapperBuilderCustomizer.

### Enabling and Disabling Features

```java
@Bean
JsonMapperBuilderCustomizer customJsonCustomizer() {
    return builder -> builder.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
    .enable(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL)
    .enable(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES);
}
```

### Ignoring Null Values

Configure Jackson to omit properties with null values.

```java
@Bean
JsonMapperBuilderCustomizer customJsonCustomizer() {
    return builder -> builder.changeDefaultPropertyInclusion(e -> e.withValueInclusion(JsonInclude.Include.NON_NULL));
}
```

## XML Configuration

### Enabling and Disabling Features

```java
@Bean
XMLMapperBuilderCustomizer customXmlCustomizer() {
    return builder -> builder.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS)
    .enable(DeserializationFeature.READ_UNKNOWN_ENUM_VALUES_AS_NULL)
    .enable(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES);
}
```

### Ignoring Null Values

Configure Jackson to omit properties with null values.

```java
@Bean
XmlMapperBuilderCustomizer customXmlCustomizer() {
    return builder -> builder.changeDefaultPropertyInclusion(e -> e.withValueInclusion(XmlInclude.Include.NON_NULL));
}
```

### Serialize/Deserialize explicit

```java
Person originalPerson = createPerson();

// Convert an instance of Person to Json
String json = jsonMapper.writeValueAsString(originalPerson);

// Convert a Json to an instance of Person
Person readPerson = jsonMapper.readValue(json, Person.class);
```