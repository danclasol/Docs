# Collections Algorithms

Java Collections Framework includes generic algorithms methods that work on collections or arrays and can be applied to generic types.

### `sort(List<T>)`

Sorts a list of `Comparable` elements.

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Collections.sort(names);
System.out.println(names);  // [Alice, Bob, Charlie]
```

### `sort(List<T>, Comparator)`

Sort using custom comparator

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Collections.sort(names, (a, b) -> b.compareTo(a));  // reverse order
System.out.println(names);  // [Charlie, Bob, Alice]
```

### `shuffle(List<?>)`

Randomly shuffles the list.

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Collections.shuffle(numbers);
System.out.println(numbers);  // [3, 1, 5, 2, 4] (random)
```

### `reverse(List<?>)`

Reverses elements

```java
Collections.reverse(numbers);
System.out.println(numbers);  // [4, 2, 5, 1, 3]
```

### `swap(List<?>, i, j)`

Swaps two elements

```java
Collections.swap(numbers, 0, 1);
System.out.println(numbers);

```

### `copy(dest, src)`

Copies elements from one list to another

- destination must be same size or larger

```java
List<String> src = Arrays.asList("A", "B", "C");
List<String> dest = new ArrayList<>(Arrays.asList("X", "Y", "Z"));

Collections.copy(dest, src);
System.out.println(dest);  // [A, B, C]
```

### `fill(List, value)`

Replace all with a fixed value

```java
Collections.fill(dest, "Filled");
System.out.println(dest);  // [Filled, Filled, Filled]
```

### `min(Collection) / max()`

Finds the minimum or maximum element (using natural order or a comparator).

```java
List<Integer> nums = Arrays.asList(5, 2, 9, 1);
System.out.println(Collections.min(nums));  // 1
System.out.println(Collections.max(nums));  // 9
```

### `frequency(Collection, obj)`

Counts how many times an element appears.

```java
List<String> list = Arrays.asList("A", "B", "A", "C", "A");
int freq = Collections.frequency(list, "A");
System.out.println(freq);  // 3
```
