# JPA Repository

JPA Repository is an interface that helps you easily perform CRUD operations and queries on your entities without writing boilerplate code.

## Implement JPARepository

- JpaRepository is generic: must provide `<Entity, ID>` types

```java
public interface UserRepository extends JpaRepository<User, Long> {
    // Spring will automatically implement these methods
}
```

## Features

- Basic CRUD:
  - save(), findById(), delete(), existsById(), etc
  - batch operations: saveAll(), deleteAllInBatch()
- Query methods:
  - Auto-generates queries from method names
  - Custom queries Use @Query if needed
  - Specifications support Dynamic queries using the Specification API
- Pagination
  - findAll(Pageable pageable)
- Sorting
  - findAll(Sort sort)
- Projection support
  - Return DTOs directly

## Automatic Entity Management

Spring Data JPA handles entity lifecycle management for you. You don't need to manually handle EntityManager, transactions, or persistence context in most cases.

Spring automatically manages the persistence context, including lazy-loading, cascading, and transactional boundaries.

## Transaction Management

Spring Data JPA integrates with Spring's transaction management system, which makes it much easier to manage database transactions.

- `@Transactional` manage transactions declaratively, without manually starting and committing them
- automatic rollback in case of exceptions

```java
@Transactional
public void updateUserName(Long userId, String newName) {
    User user = userRepository.findById(userId).orElseThrow(...);
    user.setName(newName);
    userRepository.save(user);
}
```

## Auditing

Spring Data JPA provides built-in support for auditing, where you can automatically track changes like creation and modification timestamps.

```java
@CreatedDate
private LocalDateTime createdDate;
@LastModifiedDate
private LocalDateTime lastModifiedDate;
```

## Event Listeners

Automatically listen for entity lifecycle events like `@PrePersist`, `@PostPersist`, etc., to perform actions before or after certain events.
