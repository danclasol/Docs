# HashSet

The `HashSet` class of the Java Collections framework provides the functionalities of the hash table data structure.

- implements the `Set` interface
- each hash set element has a unique hashcode
- cannot have duplicated
  - uses `equals()` to check if elements are duplicates
  - for custom objects, you must override `equals()` and `hashCode()` for it to behave correctly

## Common Use

- when you care about uniqueness
- when you don't care about order
- when you need fast search/insertion/removal
- when need to access element randomly

## Creation

We can create a HashSet with capacity and load factor.

- `capacity`: number of elements it can store
- `loadFactor`: whenever our hash set is filled by this value, the elements are moved to a new hash table of double the size of the original hash table

```java
HashSet<Integer> numbers = new HashSet<>(8, 0.75);
```

We can create a with the default values

- `capacity`: default `16`
- `loadFactor`: default `0.75`

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

### `addAll()`

Inserts all the elements of the specified collection to the set

```java
HashSet<Integer> evenNumber = new HashSet<>();
evenNumber.add(2);
evenNumber.add(4);
evenNumber.add(6);

HashSet<Integer> numbers = new HashSet<>();
numbers.addAll(evenNumber);
```

### `remove(Object o)`

Removes element

```java
set.remove("C++")
```

### `removeAll()`

Removes all the elements from the set

```java
HashSet<Integer> numbers = new HashSet<>();
numbers.add(2);
numbers.add(5);
numbers.add(6);
boolean value2 = numbers.removeAll(numbers);
```

### `contains(Object o)`

Checks if element exists

```java
System.out.println("Contains 'Java'? " + set.contains("Java"));
```

### `containsAll()`

Check if a set is a subset of another set.

```java
HashSet<Integer> numbers = new HashSet<>();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);

HashSet<Integer> primeNumbers = new HashSet<>();
primeNumbers.add(2);
primeNumbers.add(3);

// Check if primeNumbers is a subset of numbers
boolean result = numbers.containsAll(primeNumbers);
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
