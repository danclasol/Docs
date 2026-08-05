# BindingResult

BindingResult is a Spring MVC interface that stores the result of data binding and validation for an object received in an HTTP request.

Used together with `@Valid` or `@Validated` to check whether the submitted data contains validation errors without Spring automatically throwing an exception

```java
@PostMapping("/users")
public String createUser(
        @Valid @ModelAttribute UserForm form,
        BindingResult bindingResult) {

    if (bindingResult.hasErrors()) {
        return "user-form";
    }

    return "redirect:/users";
}
```

Validation constraints:

- if any constraint is violated, `bindingResult.hasErrors()` returns `true`

```java
public class UserForm {

    @NotBlank
    private String name;

    @Email
    private String email;

    // getters y setters
}
```

## Accessing Validation Errors

```java
if (bindingResult.hasErrors()) {

    for (FieldError error : bindingResult.getFieldErrors()) {
        System.out.println(error.getField());
        System.out.println(error.getDefaultMessage());
    }
}
```

## Parameter Order

BindingResult must immediately follow the parameter being validated.

```java
@PostMapping
public String save(
        @Valid UserForm form,
        BindingResult bindingResult) {
}
```

Otherwise, Spring will throw an exception because the BindingResult is no longer associated with the validated object.

```java
@PostMapping
public String save(
        @Valid UserForm form,
        Model model,
        BindingResult bindingResult) {
}
```

## Common methods

- `hasErrors()`: returns whether any validation errors exist
- `hasFieldErrors()`: checks whether any field contains errors
- `getAllErrors()`: returns all validation errors
- `getFieldErrors()`: returns only field-specific errors
- `getFieldError(String field)`: returns the error for a specific field
- `getErrorCount()`: returns the total number of errors
- `reject()`: adds a custom global validation error
- `rejectValue()`: adds a custom validation error to a specific field