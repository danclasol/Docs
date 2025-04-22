# Type Parameter Convention

## `T` (Type)

Represent a generic type

- `Box<T>`
- `List<T>`

```java
public class Box<T> {}
```

## `E` (Element)

Represent common element in collections

- `List<E>`

```java
public interface List<E> {}
```

## `K, V` (Key-Value)

Used in maps

- `Map<K, V>`

## `S, U, R` (Additional generic types)

- S: second type
- U: third type
- R: forth type

- `List<T,S,U,R>`

## `N` (Number)

Less common, but intuitive

Sometimes used in math utilities
