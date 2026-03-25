# @Valid

`@Valid` tells the validator to cascade validation into nested objects.

- used  to validate nested objects:

## Example

```java
public class User {

    @NotNull
    private String name;

    @Valid
    private Address address;
}
```

With '@Valid' the validation of field street will be evaluated.

```java
public class Address {

    @NotBlank
    private String street;
}
```

## Example in Spring Boot

With Spring Boot

- JSON → User
- @Valid triggers validation
- if errors → exception (MethodArgumentNotValidException)
```java
@PostMapping("/users")
public ResponseEntity<?> createUser(@Valid @RequestBody UserDTO user) {
    return ResponseEntity.ok(user);
}
```