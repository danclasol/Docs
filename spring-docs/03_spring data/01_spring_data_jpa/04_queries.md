# Queries

There are several way of defining queries in Spring Data JPA.

## Method Name Derivation

The easiest way of perform complex queries is using method names

- without the need to write SQL or JPQL
- Spring Data parses the method name and generates the right query

```java
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameAndAge(String name, int age);
}
```

This example converts the method name into a query, so _findByNameAndAge_ will internally map to a query like:

```sql
SELECT * FROM User WHERE name = ? AND age = ?
```

## JPQL (Java Persistence Query Language)

You can define custom queries using the `@Query` annotation and using _JPQL_ code.

- works on entity fields, not table columns
- _User_ is the entity, not the table
- _u.name_ is the field, not the database column

```java
@Query("SELECT u FROM User u WHERE u.name = :name")
List<User> findUsersByName(@Param("name") String name);
```

## SQL

You can also use real SQL if you need full database power.

- set `nativeQuery = true`

```java
@Query(value = "SELECT * FROM users WHERE name = :name", nativeQuery = true)
List<User> findUsersByNameNative(@Param("name") String name);
```

## Stored Procedures

When you have database functions, you can call database stored procedures with Spring Data.

```java
@Procedure(name = "get_users_by_status")
List<User> getUsersByStatus(@Param("status") String status);
```

## Specification API

You can build complex dynamic queries programmatically using the Specification API.

- powerful for dynamic filters
- must extend `JpaSpecificationExecutor<T>`

```java
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface UserRepository extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
}
```

### Inline Specification

- `root`: represents the entity (like FROM user)
- `query`: query being built
- `criteriaBuilder`: helper to build conditions

```java
Specification<User> spec = (root, query, criteriaBuilder) ->
    criteriaBuilder.equal(root.get("name"), "Alice");

List<User> users = userRepository.findAll(spec);
```

#### `equal`

```java
cb.equal(root.get("name"), "Alice");
```

#### `like`

```java
cb.like(root.get("name"), "%" + name + "%"))
```

#### `greaterThan`

```java
cb.greaterThan(root.get("age"), age));
```

#### `greaterThanOrEqualTo`

```java
cb.greaterThanOrEqualTo(root.get("age"), age));
```

### Combine Specifications

Spring Data allows you to combine specifications with:

- `.and()`
- `.or()`
- `.not()`

```java
Specification<User> nameSpec = (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("name"), "Alice");
Specification<User> ageSpec = (root, query, criteriaBuilder) -> criteriaBuilder.greaterThan(root.get("age"), 20);
Specification<User> combinedSpec = nameSpec.and(ageSpec);

List<User> users = userRepository.findAll(combinedSpec);
```

### Dynamic Specification

You can build dynamically adding specifications

```java
public List<User> searchUsers(String name, Integer age) {
    Specification<User> spec = Specification.where(null);

    if (name != null && !name.isEmpty()) {
        spec = spec.and((root, query, cb) -> cb.like(root.get("name"), "%" + name + "%"));
    }
    if (age != null) {
        spec = spec.and((root, query, cb) -> cb.greaterThanOrEqualTo(root.get("age"), age));
    }

    return userRepository.findAll(spec);
}
```
