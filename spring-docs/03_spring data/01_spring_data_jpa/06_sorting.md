# Sort

Sort is a helper class to define ordering (sorting) for queries.

- immutable, returns a new object when modified
- type-safe only by field names, not checked by compiler

Usually combined with Pageable, but you can also use it directly:

- when creating a PageRequest (pagination + sorting)
- when calling findAll(Sort sort)
- when defining @Query methods that need ordering

## Creating sort

### Sort by one field

- by default ascending order
- SQL equivalent: `ORDER BY name ASC`

```java
Sort sort = Sort.by("name");
```

### Sort with Direction

- Sort descending by _createdDate_
- SQL: `ORDER BY created_date DESC`

```java
Sort sort = Sort.by(Sort.Direction.DESC, "createdDate");
```

### Multiple Fields Sorting

You can chain multiple fields

```java
Sort sort = Sort.by("age").ascending().and(Sort.by("name").descending());
```

## Examples

### Sorting without Pagination

Fetch all users, sorted newest first.

```java
List<User> users = userRepository.findAll(Sort.by(Sort.Direction.DESC, "createdDate"));
```

### Sorting with Pagination

First page (10 users), ordered by name ascending

```java
Pageable pageable = PageRequest.of(0, 10, Sort.by("name").ascending());
Page<User> page = userRepository.findAll(pageable);
```
