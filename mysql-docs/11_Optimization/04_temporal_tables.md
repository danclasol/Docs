# Temporal Tables

To create a temporary table is similar to creating a normal table, but with the TEMPORARY keyword.

- only exists for the duration of the session
- automatically dropped at the end of the session or when the connection is closed
- not visible to other sessions
- can exists a temp table with the same name in multiple sessions, and they won’t interfere with each other

```sql
CREATE TEMPORARY TABLE temp_users (
    id INT,
    username VARCHAR(50),
    email VARCHAR(100)
);
```

## Inserting data

You can insert data into a temporary table just like any other table.

```sql
INSERT INTO temp_users (id, username, email)
VALUES (1, 'john_doe', 'john.doe@example.com');
```

## Using Temporary Tables

You can join temporary tables with regular tables or use them in other queries.

```sql
SELECT u.id, u.username, t.email
FROM users u
JOIN temp_users t ON u.id = t.id;
```

## Dropping a Temporary Table

Temporary tables are dropped automatically when the session ends, but you can also drop them manually if needed

```sql
DROP TEMPORARY TABLE temp_users;
```
