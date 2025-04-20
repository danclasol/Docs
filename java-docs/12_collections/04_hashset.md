# HashSet

Uses `equals()` to check if elements are duplicates. But for custom objects, you must override `equals()` and `hashCode()` for it to behave correctly.

## Common Use

- When you care about uniqueness
- When you don't care about order
- When you need fast search/insertion/removal

## Creation

```java
HashSet<String> set = new HashSet<>();
```

## Methods

### `add(E e)`

Adds element if not already present

```java
set.add("Java");
set.add("Python");
set.add("C++");
set.add("Python"); // Duplicate ignored
```

### `remove(Object o)`

Removes element

```java
set.remove("C++")
```

### `contains(Object o)`

Checks if element exists

```java
System.out.println("Contains 'Java'? " + set.contains("Java"));
```

### `size()`

Returns number of elements

```java
System.out.println("Size: " + set.size());
```

### `isEmpty()`

Checks if the set is empty

```java
System.out.println("Is empty? " + set.isEmpty());
```

### `clear()`

Removes all elements

```java
set.clear();
```

### `toArray()`

Converts to array

```java
Object[] arr = set.toArray();
```
