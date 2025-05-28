# `CrudRepository`

The `CrudRepository` interface provide basic CRUD functionality for the entity class that is being managed.

- shared interface in all Spring Data modules
- works with both JPA and JDBC but with different capabilities

```java
@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
```

## Methods

The `CrudRepository` repository interface provides automatically serie of build-in methods

### `findById(ID id)`

Retrieve an entity by its ID

```java
Optional<User> user = userRepository.findById(1L);
```

### `findByName(String name)`

Retrieve an entity by a name

```java
Optional<User> user = userRepository.findByName("Peter");
```

### `findAll()`

Get all entities

```java
Iterable<User> users = userRepository.findAll();

for (User user : users) {
    System.out.println(user.getName());
}
```

### `existsById(ID id) `

Check if an entity exists by ID

```java
boolean exists = userRepository.existsById(3L);
```

### `count()`

Count the total number of entities

```java
long totalUsers = userRepository.count();
```

### `save(S entity)`

Save or update an entity

```java
User user = new User();
user.setName("Alice");
user.setEmail("alice@example.com");

userRepository.save(user); // INSERT if id is null, UPDATE if id is not null
```

### `deleteById(ID id)`

Delete an entity by its ID

```java
userRepository.deleteById(1L);
System.out.println("User with ID 1 deleted");
```

### `delete(T entity)`

Delete a given entity

```java
User user = new User();
user.setId(2L);

userRepository.delete(user);
```

## Modifying Query

Despite the CrudRepository‘s built-in methods, we can create our methods for specific cases.

- `@Modifying`: annotate the querry method that modifies the entity
- `@Query`: add custom SQL command

```java
@Modifying
@Query("UPDATE person SET first_name = :name WHERE id = :id")
boolean updateByFirstName(@Param("id") Long id, @Param("name") String name);
```
