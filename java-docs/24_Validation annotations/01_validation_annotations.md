# Jakarta Bean Validation

In Jakarta, Bean Validation annotations are part of a standard way to validate data in objects (DTOs, entities, etc.)

- used in Java apps, often with frameworks like Spring Boot

## Basic validations

### `@NotNull`

Field must not be null (but can be empty if it's a String/collection).

- only checks null

```java
@NotNull
private String name;
```

### `@NotEmpty`

Field must not be null and not empty (for Strings, collections, maps).

- checks null + empty

```java
@NotEmpty
private String username;
```

### `@NotBlank`

For Strings only → must not be null and must contain at least one non-whitespace character.

- checks null + empty + whitespace

```java
@NotBlank
private String email;
```

### `@Length`

Checks String length only

- From Hibernate Validator (NOT standard)

```java
@Length(min = 3, max = 20)
private String name;
```

### `@Size`

Defines min/max length 

Works with:
- String
- List, Set, Map
- Arrays

```java
@Size(min = 3, max = 20)
private String password;
```
