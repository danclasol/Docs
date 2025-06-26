# Transactions

In Spring Data JDBC you can use `@Transactional` annotation to define transactional boundaries to a method or block of code.

- methods of `CrudRepository` instances are transactional by default
- relies on Spring’s `DataSourceTransactionManager`
  - not JPA's `JpaTransactionManager`
- Spring Boot automatically registers a `DataSourceTransactionManager` bean

```java
@Transactional
public void addRoleToAllUsers(String roleName) {
    Role role = roleRepository.findByName(roleName);

    for (User user : userRepository.findAll()) {
        user.addRole(role);
        userRepository.save(user);
    }
}
```

## Transaction Configuration

- `readOnly`:
  - `true`: methods will only read data
  - `false` (default): method will be transactional

```java
@Transactional(readOnly = true)
interface UserRepository extends CrudRepository<User, Long> {
}
```

## Transactional Query Methods

To let your query methods be transactional, use `@Transactional` at the repository interface you define

```java
@Modifying
@Transactional
@Query("delete from User u where u.active = false")
void deleteInactiveUsers();
```

## JDBC Locking

Spring Data JDBC supports locking on derived query methods. To enable locking on a given derived query method inside a repository, you annotate it with `@Lock`.

- `PESSIMISTIC_READ`: guarantees that the data you are reading doesn’t get modified
- `PESSIMISTIC_WRITE`: obtains a lock to modify the data
  - some databases do not make this distinction

```java
@Lock(LockMode.PESSIMISTIC_READ)
List<User> findByLastname(String lastname);
```
