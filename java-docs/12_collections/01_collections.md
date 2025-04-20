# Collections

## List

Ordered collection. Duplicates are allowed.

- `ArrayList`: Resizable array, fast for random access
- `LinkedList`: Doubly-linked list, good for insert/delete

## Set

Unordered collection of unique elements. Duplicates are not allowed.

- `HashSet`: No duplicates, unordered
- `LinkedHashSet`: Maintains insertion order
- `TreeSet`: Sorted set (natural order or comparator)

## Map

Key-value pairs (not a subtype of Collection).

Each key is unique, and each key maps to one value

- `HashMap`: key-value pairs, fast lookup
- `TreeMap`: sorted keys
- `LinkedHashMap`: maintains insertion order
- `ConcurrentHashMap`: offers thread-safety

## Queue

Ordered collection for holding elements prior to processing.

- `PriorityQueue`
- `ArrayDeque`
