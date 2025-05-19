# Delete

## DELETE

Delete rows matching a condition.

```sql
DELETE FROM users
WHERE id = 1;
```

Delete all rows

```sql
DELETE FROM users;
```

## DELETE LIMIT

Delete only a certain number of rows.

```sql
DELETE FROM users
WHERE status = 'inactive'
LIMIT 5;
```

## DELETE JOIN

Delete rows from one table based on related data in another.

```sql
DELETE u
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.status = 'cancelled';
```

## TRUNCATE

Removes all rows very quickly. Faster than `DELETE`

- reset auto-increment
- cannot use `WHERE`
- triggers are not fired
- usually rollback transactions not supported

```sql
TRUNCATE TABLE users;
```
