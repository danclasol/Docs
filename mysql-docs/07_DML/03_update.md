# Update

## UPDATE

Update values in one or more columns.

```sql
UPDATE users
SET name = 'Alice'
WHERE id = 1;
```

Update Multiple Columns

```sql
UPDATE users
SET name = 'Alice', email = 'alice@example.com'
WHERE id = 1;
```

Update all rows

```sql
UPDATE users
SET status = 'active';
```

## UPDATE JOIN

Useful when updating based on data in a related table.

```sql
UPDATE users u
JOIN orders o ON u.id = o.user_id
SET u.status = 'buyer'
WHERE o.total > 100;
```

## UPDATE LIMIT

Update only a limited number of rows.

```sql
UPDATE users
SET status = 'pending'
WHERE status = 'new'
LIMIT 10;
```
