# Enums

In Java, enums (short for enumerations) are a special data type used to define collections of constants.

- useful when you want to represent a fixed set of values
- like days of the week, directions, or status codes

```java
public enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
}
```

## Fields and methods

In Java, enum types can have fields and methods, just like classes.

```java
public enum Status {
    NEW(0),
    IN_PROGRESS(1),
    COMPLETED(2);

    private final int code;

    Status(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
```
