# Transactions

In Spring Data JPA we can use transactions to avoid risks of data corruption.

- all operations inside will either complete successfully together (commit)
- all will be undone (rollback) if an exception happens

## `@Transactional`

We can be applied to a method.

```java
@Transactional
public void updateUser(User user) {
    userRepository.save(user);
}
```

Or can be applied on a class and will be applied to all methods inside.

```java
@Service
@Transactional
public class UserService {

    public void createUser(User user) {
        userRepository.save(user);
    }
}
```

### Parameters

`@Transactional` can be configured with several parameters:

- `propagation`

  - What happens if there's already a transaction?
  - `Propagation.REQUIRED`: join existing transaction, or create new (default)
  - `Propagation.REQUIRES_NEW`: always create a new transaction (even if one exists)

- `isolation`

  - How isolated from other transactions?
  - `Isolation.READ_COMMITTED` (default for many DBs)

- `rollbackFor`

  - Which exceptions trigger rollback?
  - rollbackFor = MyException.class

- `noRollbackFor`

  - Exceptions NOT to rollback for
  - noRollbackFor = ValidationException.class

- `readOnly`

  - Hint that method doesn't change data
  - readOnly = true

- `timeout`

  - Max time (seconds) before rollback
  - timeout = 30

## Example

```
@Transactional(
    propagation = Propagation.REQUIRED,
    isolation = Isolation.READ_COMMITTED,
    timeout = 60,
    rollbackFor = CustomException.class
)
public void processOrder(Order order) {
    // save order
    // reduce inventory
    // send notification
}
```

## Good practices

✅ Place `@Transactional` at Service Layer

- Keep Repositories clean and simple

✅ Only rollback for unchecked exceptions by default

- i.e., subclasses of RuntimeException
- for checked exceptions, use rollbackFor manually

✅ Read-only flag improves performance

- Useful for queries (readOnly = true)

✅ Transaction proxy works only for public methods Spring AOP limitation.

❌ Using `@Transactional` inside private methods

- won't work (no proxy interception)

❌ Putting it only on Repository methods

- Doesn't control service logic transactions fully

❌ Expecting rollback on checked exceptions without config

- Won't rollback unless you set rollbackFor.
