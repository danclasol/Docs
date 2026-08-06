# Build-in CRUD operations

JpaRepository automatically provides basic CRUD (Create, Read, Update, Delete) functionality, so you don't need to write custom queries for these operations.

## Create and update

### `save`

Save a new entity.

```java
User user = new User("Alice");
userRepository.save(user);
```

Also can update an existing entity.

If the entity’s ID already exists, it updates the existing record.

```java
user.setName("Alice Smith");
userRepository.save(user); // UPDATE
```

## Find

### `findById(id)`

Retrieve one entity by its primary key

```java
userRepository.findById(1L);
```

### `findAll()`

Retrieve all records of the entity’s table

```java
userRepository.findAll();
```

## Delete

### `deleteById(id)`

Delete a record by its primary key

- if the entity ID doesn`t exists, throws an `EmptyResultDataAccessException`
- check if it exists first using `findById()`

```java
userRepository.deleteById(1L);
```

### `delete(entity)`

Delete a specific entity object from the database.

- requires an actual entity instance

```java
userRepository.delete(user);
```

## `deleteAll()`

Delete all records from the entity’s table.

```java
userRepository.deleteAll();
```

## Usefull methods

### `count()`

Returns total number of records.

```java
long totalUsers = userRepository.count();
```

### `existsById(id)`

Checks if a record exists for a given ID.

```java
boolean exists = userRepository.existsById(3L);
```
