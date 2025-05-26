# Sorting data

Use `ORDER BY` to sort the result set of a query by one or more columns.

- default sort is ascending (ASC)
- explicitly specify descending (DESC)
- comes at the end of the SQL query

```sql
SELECT first_name, last_name
FROM users
ORDER BY last_name ASC;
```

## `ORDER BY` and expressions

You can sort by expressions directly

```sql
SELECT name, price, quantity, price * quantity AS total
FROM products
ORDER BY price * quantity DESC;
```

## `ORDER BY` with `NULL`

By default, `ORDER BY` shows `NULL` as:

- `ORDER BY` column `ASC` -> `NULLs` first
- `ORDER BY` column `DESC` -> `NULLs` last

You can control this behaviour, by pushing `NULL` values to the end of an ascending sort

```sql
ORDER BY column ASC NULLS LAST;
ORDER BY column IS NULL, column ASC; -- Compatible MySQL < 8.0
```

To put `NULL` values to the beginning of an ascending sort

```sql
ORDER BY column ASC NULLS FIRST;
ORDER BY column IS NOT NULL, column ASC; -- Compatible MySQL < 8.0
```
