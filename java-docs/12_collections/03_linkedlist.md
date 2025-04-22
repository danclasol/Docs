# `LinkedList<>`

A LinkedList is a linear data structure that stores elements in nodes where each node contains:

- doubly linked lists, allow read the list in two directions
- each element has a reference (pointer) to the next and previous node
- allow duplicates
- mantain insertion order
- faster manipulation than `ArrayList`
- can be use as list, stack, or queue

In Java, the LinkedList class implements both:

- List (ordered collection, index-based)
- Deque (double-ended queue: you can add/remove from both ends)

```java
LinkedList<String> list = new LinkedList<>();
```

## Common Use

Use it when:

- You need frequent insertions/removals at the start or middle
- You don’t need fast random access
- You’re using it as a queue, deque, or stack

## Methods

### `add(e)`

Add to end

```java
list.add("Apple");
```

### `addFirst(e)`

Add to start

```java
list.addFirst("Mango");
```

### `addLast(e)`

Add to end

```java
list.addLast("Peach");
```

### `remove()`

Remove from start

```java
list.remove(2)
```

### `removeFirst()`

Remove from end

```java
list.removeFirst();
```

### `removeLast()`

Remove from end

```java
list.removeLast();
```

### `getFirst()`

Get elements from start

```java
System.out.println("First element: " + list.getFirst());
```

### `getLast()`

Get elements from end

```java
System.out.println("Last element: " + list.getLast());
```

### `offer(e)`

Add to the end (queue)

```java
list.offer("Task 1");
```

### `poll()`

Remove from front (queue)

```java
System.out.println("Poll: " + list.poll());
```

### `peek()`

Peek at front (queue)

```java
System.out.println("Peek: " + list.peek());
```

### `push(e)`

Add to front (stack)

```java
list.push("Urgent Task");
```

### `pop()`

Remove from front (stack)

```java
System.out.println("Pop: " + list.pop());
```
