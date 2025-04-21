# Methods

All enums in Java extend the java.lang.Enum class, so they inherit some useful methods

## `name()`

Returns the name of the enum constant as a String.

```java
Day d = Day.MONDAY;
System.out.println(d.name()); // Output: MONDAY
```

## `ordinal()`

Returns the position of the constant in the enum (starting at 0).

```java
System.out.println(d.ordinal());  // Output: 0
```

## `values()`

Returns an array of all constants in the enum (automatically added by the compiler).

```java
for (Day day : Day.values()) {
    System.out.println(day);
}
```

## `valuesOf(String name)`

Returns the enum constant of the specified name.

```java
Day d2 = Day.valueOf("FRIDAY");
System.out.println(d2);  // Output: FRIDAY
```
