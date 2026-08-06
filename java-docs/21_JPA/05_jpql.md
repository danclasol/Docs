# JPQL

JPQL (Java Persistence Query Language) is a query language used to interact with data in a JPA (Jakarta Persistence API) context.

### Object-Oriented

Queries are written using the entity class names and their attributes, not the database table and column names

This query selects the User entity (Java object) and checks the name attribute.

```java
SELECT u FROM User u WHERE u.name = :name
```

### No Direct Database Columns:

You don’t refer to database columns directly, but instead, you refer to the properties of the entity objects.

### SQL vs JPQL

Syntaxis SQL

```sql
SELECT * FROM users WHERE name = ?
```

Syntaxis JPQL

- _User_: Java entity class
- _u_: alias for the _User_ entity

```sql
SELECT u FROM User u WHERE u.name = :name
```

## Complex Queries

JPQL supports complex queries, aggregations, pagination, sorting, and joins, while abstracting away the need for raw SQL.

### Where

Filter results based on conditions, similar to WHERE in SQL:

```java
SELECT u FROM User u WHERE u.age > 30
```

## Named Parameters

You can use named parameters in JPQL:

```java
SELECT u FROM User u WHERE u.name = :name
```

Then, you can set the name parameter in the query:

```java
query.setParameter("name", "John");
```

### Join

JPQL allows joining related entities:

```java
SELECT o FROM Order o JOIN o.customer c WHERE c.name = :name
```

This joins the Order entity with the Customer entity and filters by customer name.

### Aggregates and Grouping

You can use aggregate functions and group the results:

```java
SELECT AVG(u.age) FROM User u
```

This calculates the average age of all users.

### Order by

Sorting the result set:

```java
SELECT u FROM User u ORDER BY u.name ASC
```

### Distinct

To avoid duplicates, you can use DISTINCT:

```java
SELECT DISTINCT u FROM User u
```

### Pagination

Pagination is a common feature to limit the number of results:

```java
TypedQuery<User> query = em.createQuery("SELECT u FROM User u", User.class);
query.setMaxResults(10);  // Limit to 10 results
query.setFirstResult(20); // Skip first 20 results (page 3)
List<User> users = query.getResultList();
```
