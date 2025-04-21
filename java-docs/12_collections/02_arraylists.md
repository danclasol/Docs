# `ArrayList<>`

`ArrayList` is a resizable array implementation of the List interface in Java.

Unlike regular arrays, it grows dynamically as elements are added or removed.

- ordered collection (insertion order maintained)
- allows nulls and duplicates
- allow random access
- slow manipulation, as it need to read all the list

## Creation

The default size is 10 elements.

```java
ArrayList<Type> listName = new ArrayList<>();
```

We can set the initial capacity

```java
ArrayList<String> list2 = new ArrayList<>(50);
```

Create a list from another list

```java
ArrayList<String> list3 = new ArrayList<>(list2);
```

## Methods

### `add(E e)`

Adds to end

```java
colors.add("Red");
colors.add("Blue");
```

### `add(int index, E e)`

Inserts at specific index

```java
colors.add(1, "Yellow");  // Insert at index 1
```

### `get(int index)`

Retrieves element

### `set(int index, E e)`

Replaces element

```java
colors.set(2, "Orange");
```

### `remove(int index)`

Removes element by index

```java
list.remove(2);
```

### `remove(Object o)`

Removes first occurrence

```java
list.remove("Cherry"); // Removes "Cherry"
```

### `contains(Object o)`

Returns true if exists

```java
System.out.println("Contains Blueberry? " + list.contains("Blueberry"));
```

### `clear()`

Removes all elements

```java
list.clear();
```

### `size()`

Number of elements

```java
System.out.println("Size of the list: " + list.size());
```

### `isEmpty()`

True if list is empty

```java
System.out.println("Is list empty? " + list.isEmpty());
```

### `toArray()`

Convert to array

```java
Object[] array = list.toArray();
```
