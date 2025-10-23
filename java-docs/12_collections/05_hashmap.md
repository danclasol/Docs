# HashMap

A `HashMap<K, V>` stores key-value pairs, where:

- implements the `Map` interface
- keys are unique
- values can be duplicated
- one null key is allowed, and multiple null values are allowed
- fast access with average O(1) time complexity

To use custom objects as keys, you must override `equals()` and `hashCode()`

## Creation

```java
HashMap<Integer, String> map = new HashMap<>();
```

## Methods

### `put(K key, V value)`

Add or update key-value

```java
 map.put(101, "Java");
```

### `get(Object key)`

Get value by key

```java
System.out.println("Key 102: " + map.get(102));
```

### `replace(K key, V value)`

Change the value associated with a key in a hashmap

```java
map.replace(2, "C++");
```

### `remove(Object key)`

Remove entry by key

```java
map.remove(103);
```

### `containsKey(Object key)`

Check if key exists

```java
System.out.println("Contains key 103? " + map.containsKey(103));
```

### `containsValue(Object value)`

Check if value exists

```java
System.out.println("Contains key 103? " + map.containsKey(103));
```

### `keySet()`

Get all keys

```java
for (Integer key : map.keySet()) {
    System.out.println("Key: " + key);
}
```

### `values()`

Get all values

```java

```

### `entrySet()`

Get all key-value pairs

```java
for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " => " + entry.getValue());
}
```

### `clear()`

Remove all entries

```java
map.clear();
```

### `isEmpty()`

Check if empty

```java
System.out.println("Is empty? " + map.isEmpty());
```

### `size()`

Number of entries

```java
System.out.println("Size: " + map.size());

```
