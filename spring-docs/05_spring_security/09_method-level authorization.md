# Method-level Authorization

Authorization can also be applied directly to methods instead of only to HTTP request paths.

Requires method security to be enabled `@EnableMethodSecurity`

```java
@Configuration @EnableMethodSecurity public class SecurityConfig { }
```

## `@PreAuthorize`

`@PreAuthorize` checks authorization before the method is executed.

```java
@PreAuthorize("hasRole('ADMIN')")
public void deleteBook(Long id) {
    // ...
}
```

```java
@PreAuthorize("hasAuthority('CAN_EDIT')")
public void deleteBook(Long id) {
    // ...
}
```

### Using method parameters

One of the main advantages of method-level authorization is that authorization expressions can use method parameters.

- user can only access their own user information

```java
@PreAuthorize("#userId == authentication.principal.id")
public User getUser(Long userId) {
    // ...
}
```

## @PostAuthorize

`@PostAuthorize` performs the authorization check after the method has executed.

- useful when the authorization decision depends on the returned object

```java
@PostAuthorize(
    "returnObject.owner == authentication.name"
)
public Book getBook(Long id) {
    return bookRepository.findById(id)
        .orElseThrow();
}
```

## `@Secured`

Unlike `@PreAuthorize`, @Secured uses a simpler role/authority-based model and does not provide the same expression capabilities.

```java
@Secured("ROLE_ADMIN")
public void deleteBook(Long id) {
}
```

## Request Authorization vs Method Authorization

Request authorization and method authorization are two different levels of authorization. They can be used independently or together.

- **Request authorization**: applies global/default authorization rules to HTTP requests
- **Method authorization**: provides more specific, fine-grained control over individual methods