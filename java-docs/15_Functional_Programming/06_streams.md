# Streams

A Stream in Java is a sequence of elements (from a Collection, array, etc.) that you can process with operations like `map`, `filter`, `reduce`, and more.

- process collections of data in a declarative and readable way
- uses lambdas and functional interfaces
- operations are only evaluated when needed
- without modifying the original source
- introduced in Java 8

## Workflow

- Create a Stream
- Apply Intermediate Operations
  - filter
  - map
  - sorted
- Apply Terminal Operation
  - collect
  - forEach
  - reduce

## Creating Stream

You can create a stream form a collection or array

```java
collection.stream()
    .intermediateOperation()
    .intermediateOperation()
    .terminalOperation();
```

```java
Arrays.stream()
    .intermediateOperation()
    .intermediateOperation()
    .terminalOperation();
```

For large data sets, use `.parallelStream()` to take advantage of multiple CPU cores:

```java
collection.parallelStream()
    .intermediateOperation()
    .intermediateOperation()
    .terminalOperation();
```

## Intermediate operations

### `filter(Predicate)`

Removes elements that don’t match a condition

```java
names.stream()
    .filter(name -> name.startsWith("A"))
    .forEach(System.out::println);
```

Using 2 conditions

```java
names.stream()
    .filter(name -> name.startsWith("A") || name.startsWith("E"))
    .forEach(System.out::println);
```

### `map(Function)`

Transforms each element

```java
List<String> upper = names.stream()
    .map(String::toUpperCase)
    .toList();  // ["ALICE", "BOB", "AMANDA"]
```

### `flatMap(Function)`

Flattens nested streams

```java
List<List<String>> nested = List.of(
    List.of("a", "b"),
    List.of("c", "d")
);

List<String> flat = nested.stream()
    .flatMap(List::stream)
    .toList();  // ["a", "b", "c", "d"]
```

### `sorted()`

Sorts the stream

```java
List<String> sorted = names.stream()
    .sorted()
    .toList();  // ["Alice", "Amanda", "Bob"]
```

### `sorted(Comparator)`

Sort the stream using a comparator

```java
List<String> sorted = names.stream()
    .sorted(Comparator.comparingInt(String::length))
    .toList();  // ["Bob", "Alice", "Amanda"]
```

For lists of custom object use `Comparator.comparing` and set the attributes you want to filter

```java
List<String> sorted = names.stream()
    .sorted(Comparator.comparing(MyCar::getPrice))
    .toList();
```

To apply two sort attributes

```java
List<String> sorted = names.stream()
    .sorted(Comparator
              .comparing(MyCar::getPrice)
              .thenComparing(MyCar::getBrand))
    .toList();
```

### `distinct()`

Remove duplicates

```java
List<Integer> nums = List.of(1, 2, 2, 3, 3, 3);

nums.stream()
    .distinct()
    .forEach(System.out::println);  // 1, 2, 3
```

### `limit(n)`

Keep first _n_ elements

```java
List<Integer> topTwo = List.of(10, 20, 30, 40).stream()
    .limit(2)
    .toList();  // [10, 20]

```

### `skip(n)`

Skip the first _n_ elements

```java
List<Integer> skipOne = List.of(10, 20, 30).stream()
    .skip(1)
    .toList();  // [20, 30]
```

## Terminal operations

Terminal Operations can be chained. Once you call a terminal operation, the stream is consumed.

### `forEach(Consumer)`

Perform an action on each element

```java
list.stream().forEach(System.out::println)
```

### `collect(Collectors)`

Reduces stream into a collection or other structure

```java
List<String> result = list.stream()
    .filter(s -> s.startsWith("A"))
    .collect(Collectors.toList());
```

### `reduce(...)`

Combine elements into a single result

```java
int sum = List.of(1, 2, 3, 4).stream()
    .reduce(0, Integer::sum);  // Output: 10
```

### `count()`

Count the number of elements

```java
System.out.println(list.stream().count());
```

### `anyMatch()`

Checks if any element matches a predicate

```java
boolean hasEmpty = list.stream().anyMatch(String::isEmpty);
```

### `allMatch()`

Checks if all elements match a predicate

```java
boolean hasEmpty = list.stream().allMatch(String::isEmpty);
```

### `noneMatch()`

Checks if no elements match a predicate

```java
boolean hasEmpty = list.stream().noneMatch(String::isEmpty);
```

### `findFirst()`

Returns the first element (if present)

```java
Optional<String> first = list.stream().findFirst();
```

### `findAny()`

Returns any one element (useful in parallel streams)

```java
Optional<String> first = list.stream().findAny();
```
