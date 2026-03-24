# Annotations

## @Getter and @Setter

Generate getters and setters.

```java
@Getter
@Setter
public class User {
    private String name;
    private int age;
}
```

## @ToString

Generates a toString() method.

- output example, User(name=John, age=30)

```java
@ToString
public class User {
    private String name;
    private int age;
}
```

## @EqualsAndHashCode

Generates equals() and hashCode().

```java
@EqualsAndHashCode
public class User {
    private String name;
    private int age;
}
```

## @Data
All-in-one annotation:

- getters
- setters
- toString
- equals and hashCode
- required constructor

```java
@Data
public class User {
    private String name;
    private int age;
}
```

## Constructors

### @NoArgsConstructor

Generates a constructor with no parameters

```java
@NoArgsConstructor
public class User {
    private String name;
}
```

Equivalent to

```java
public User() {}
```

### @AllArgsConstructor

Generates a constructor with ALL fields

```java
@AllArgsConstructor
public class User {
    private String name;
    private int age;
}
```

### @RequiredArgsConstructor

Generates a constructor with ONLY required fields

- only for final or `@NonNull` fields.

```java
@RequiredArgsConstructor
public class User {
    private final String name;
    private int age;
}
```

## @Builder

Implements the Builder pattern.

```java
@Builder
public class User {
    private String name;
    private int age;
}
```
Usage:
```java
User user = User.builder()
    .name("John")
    .age(30)
    .build();
```

## @Value (immutable objects)

Creates an immutable class:

- all fields private final
- no setters
- includes getters, constructor, etc


```
@Value
public class User {
    String name;
    int age;
}
```

## @Slf4j (logging)

Adds a logger automatically.

```java
@Slf4j
public class MyService {

    public void doSomething() {
        log.info("Hello from Lombok!");
    }
}
```