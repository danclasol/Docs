# Fetch types

In JPA / Spring Data JPA, fetch types determine when related entities are loaded from the database.

There are two fetch types:

- `FetchType.LAZY`
- `FetchType.EAGER`

They are used in entity relationships like:

- `@OneToMany`: lazy by default
- `@ManyToMany`: lazy by default
- `@ManyToOne`: eager by default
- `@OneToOne`: eager by default

## `FetchType.LAZY`

Related data is loaded only when needed.

- ✅ Better performance
- ✅ Loads only necessary data
- ✅ Avoids huge object graphs
- ❌ Can cause: 
    - `N+1` problem
    - `LazyInitializationException`

### Example

```java
@Entity
public class User {

    @Id
    private Long id;

    private String name;

    @OneToMany(
        mappedBy = "user",
        fetch = FetchType.LAZY
    )
    private List<Order> orders;
}
```

When you query a user:

- only loads entity user
- orders are not loaded

```java
User user = userRepository.findById(1L).get();
```

JPA executes the following query:

```sql
SELECT * FROM users WHERE id = 1
```

In order to load orders you need to access it explicitily

```java
user.getOrders();
```

Then JPA executes another query:
```sql
SELECT * FROM orders
WHERE user_id = 1
```

## `FetchType.EAGER`

Related data is loaded immediately.

- ✅ No lazy loading problems
- ✅ Good for always-needed relationships
- ❌ Can hurt performance
- ❌ Loads unnecessary data
- ❌ May create huge joins

Is the default type for:
- `@ManyToOne`
- `@OneToOne`

### Example 

```java
@ManyToOne(fetch = FetchType.EAGER)
private User user;
```

When querying an order:
```java
Order order = orderRepository.findById(1L).get();
```

JPA automatically loads:
```
SELECT *
FROM orders o
LEFT JOIN users u
ON o.user_id = u.id
WHERE o.id = 1
```

## Best practices

Most experienced Spring developers recommend:

- Prefer `LAZY` by default
- Specially use `LAZY` for collections (OneToMany, ManyToMany)
- Usually override `ManyToOne` to `LAZY` too

Then explicitly fetch when needed using:

- `@EntityGraph`
- `JOIN FETCH`
- `DTO projections`

### `@EntityGraph`

This annotation tells Spring to whenever this method is called, also fetch this.

```java
@Repository
public interface StudentRepository
        extends JpaRepository<Student, Long> {

    @EntityGraph(
        attributePaths = {"courses"}
    )
    List<Student> findAll();
}
```