# Dates

## `@Past`

The annotated date must be strictly in the past (before now).

- must be < current date/time
- today is NOT allowed

```java
@Past
private LocalDate birthDate;
```

## `@PastOrPresent`

Allows past and today

```java
@PastOrPresent
private LocalDate createdAt;
```

## `@Future`

The annotated date must be strictly in the future (after now).

- must be > current date/time
- today is NOT allowed

```java
@Future
private LocalDate appointmentDate;
```

## `@FutureOrPresent`

Allows future and today

```java
@FutureOrPresent
private LocalDate deadline;
```
