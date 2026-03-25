# Format Constraints

## `@Email`

Check email format

```java
@Email
private String email;
```

### `@Pattern`

Custom regex validation.

```java
@Pattern(regexp = "\\d{9}")
private String phoneNumber;
```