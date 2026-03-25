# Number validations

## `@Min`

Value must be greater than or equal to the given number

```java
@Min(18)
private int age;
```

## `@Max`

Value must be less than or equal to the given number

```java
@Max(99)
private int age;
```

Can be combined

```java
@Min(18)
@Max(99)
private int age;
```

## `@Positive`

Checks strictly > 0.

```java
@Positive
private double price;
```

## `@Negative`

Checks strictly < 0

```java
@Negative
private int temperature;
```


## `@PositiveOrZero`

- ✔ Valid: 0, 5
- ❌ Invalid: -1

```java
@PositiveOrZero
private int quantity;
```

## `@NegativeOrZero`

- ✔ Valid: 0, -10
- ❌ Invalid: 5

```java
@NegativeOrZero
private int balance;
```