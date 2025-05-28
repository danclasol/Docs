# Query Method Keywords in JDBC

In Spring Data JDBC, you can use query method keywords like `findByName`, but with some limitations compared to Spring Data JPA.

- Only simple property-based queries:
  - No support for joins
  - No nested property paths (like `findByAddress_City`)
  - No IN clauses or advanced expressions
- No derived delete or update methods:
  - deleteByName does not work out of the box in JDBC
  - You must use `@Query` or write custom implementations
- No projections or entity graphs

findByAddress_City (nested fields)

findByRoleIn(List<Role> roles)

Derived deleteBy... and updateBy...

Pageable and Sort parameters

## Equality

Matches exact value of a property.

### Name(`No keyword)`, `Not`

Matches values based on an attribute

```java
findByFirstname(String name)        // firstname = name
findByFirstnameNot(String name)     // firstname != name
```

### `Is`

Match values based on equals number

```java
findByAgeIs(Integer age); // WHERE age = ?
```

### `Equals`

Match values based on equals strings

```java
findByName(String name);  // WHERE name = ?
```

### `IsNull` or `NotNull`

```java
findByEmailIsNull();    // WHERE email IS NULL
findByEmailIsNOTNull(); // WHERE email IS NOT NULL
```

### `In`, `NotIn`

```java
findByAgeIn(Collection<Integer> ages)   // age IN (age1, age2, ageN)
findByAgeNotIn(Collection ages)         // age NOT IN (age1, age2, ageN)
```

## Comparison keywords

Matches values based on comparisons.

### `After` and `Before`

Matches values based on a date comparison

```java
findByCreatedAtAfter(Date date)
findByBirthdateBefore(Date date)
```

### `GreaterThan`, `GreaterThanEqual`

Matches values based on a greater than comparison

```java
findByAgeGreaterThan(int age)       // WHERE age > ?
findByAgeGreaterThanEqual(int age)  // WHERE age >= ?
```

### `LessThan`, `LessThanEqual`

Matches values based on a less than comparison.

```java
findByAgeLessThan(int age)      // WHERE age < ?
findByAgeLessThanEqual(int age) // WHERE age <= ?
```

### `Between` and `NotBetween`

Matches values that are betwen or not two numbers.

```java
findByAgeBetween(int from, int to)      // WHERE age BETWEEN ? AND ?
findByAgeNotBetween(int from, int to)   // WHERE age NOT BETWEEN ? AND ?
```

## String matching

Matches values based on string patterns.

### `Like`, `NotLike`

Match values based on string check

```java
findByFirstnameLike(String name)            // firstname LIKE ?
findByFirstnameNotLike(String name)         // firstname NOT LIKE ?
findByFirstnameStartingWith(String name)    // firstname LIKE ?%
findByFirstnameLEndingWith(String name)     // firstname LIKE %?
findByFirstnameContaining(String name)      // firstname LIKE %?%
```

### `StartingWith`, `EndingWith`

Match values that starts or end with a string

```java
findByFirstnameLike(String name)            // firstname LIKE ?
findByFirstnameNotLike(String name)         // firstname NOT LIKE ?
findByFirstnameStartingWith(String name)    // firstname LIKE ?%
findByFirstnameLEndingWith(String name)     // firstname LIKE %?
findByFirstnameContaining(String name)      // firstname LIKE %?%
```

### `Containing` and `NotContaining`

Match values that contains or not contains a string

```java
findByFirstnameContaining(String name)      // firstname LIKE %?%
findByFirstnameNotContaining(String name)   // firstname NOT LIKE %?%
```

## Boolean

Check for true or false flags

### `IsTrue` and `IsFalse`

```java
findByActiveIsTrue()
findByActiveIsFalse()
```

## Modifying Query

The JDBC module supports defining a query manually as a String in a `@Query` annotation or as named query in a property file.

- `@Modifying`: annotate the querry method that modifies the entity
- `@Query`: add custom SQL command

```java
@Modifying
@Query("UPDATE person SET first_name = :name WHERE id = :id")
boolean updateByFirstName(@Param("id") Long id, @Param("name") String name);
```

## Example

```java
interface PersonRepository extends PagingAndSortingRepository<Person, String> {

    List<Person> findByFirstname(String firstname);

    List<Person> findByFirstnameOrderByLastname(String firstname, Pageable pageable);

    Slice<Person> findByLastname(String lastname, Pageable pageable);

    Page<Person> findByLastname(String lastname, Pageable pageable);

    Person findByFirstnameAndLastname(String firstname, String lastname);

    Person findFirstByLastname(String lastname);

    @Query("SELECT * FROM person WHERE lastname = :lastname")
    List<Person> findByLastname(String lastname);
    @Query("SELECT * FROM person WHERE lastname = :lastname")
    Stream<Person> streamByLastname(String lastname);

    @Query("SELECT * FROM person WHERE username = :#{ principal?.username }")
    Person
```
