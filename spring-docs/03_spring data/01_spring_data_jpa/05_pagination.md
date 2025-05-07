# Pagination and Sorting

With JPARepository, you can easily paginate query results and sort them by any attribute without needing to manually handle these operations.

```java
Page<User> activeUsers = userRepository.findAll(
    PageRequest.of(1, 5, Sort.by("createdAt").descending())
);
```

## Pageable

The class `Pageable` defines page number, size, sort order.

- `0` - first page
- `10` - records per page

```java
Pageable pageable = PageRequest.of(0, 10);
```

## Sort

You can add sorting using the class `Sort`

- `0` - first page
- `10` - records per page
- sorted by name ascending

```java
Pageable pageable = PageRequest.of(0, 5, Sort.by("name").ascending());
```

Adding sorting by multiple fields

```java
Pageable pageable = PageRequest.of(1, 10, Sort.by("age").descending().and(Sort.by("name").ascending()));
```

## Controller Params

Spring automatically builds the Pageable by mapping query parameters like:

- `/users?page=2&size=20&sort=name,asc`

```java
@GetMapping("/users")
public Page<User> getUsers(Pageable pageable) {
    return userRepository.findAll(pageable);
}
```

You can set default sorting params for cases the client doesn’t specify

- default page size: 5
- default sorting: by name

```java
@GetMapping("/users")
public Page<User> getUsers(@PageableDefault(size = 5, sort = "name") Pageable pageable) {
    return userRepository.findAll(pageable);
}
```

## Slice

If you need only a slice (without total count), you can `Slice<T>`

- lighter, doesn’t count total records
- useful for infinite scrolling

```java
Slice<User> findAll(Pageable pageable);
```
