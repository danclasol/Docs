# Set Operators

## `UNION`

Combine two or more result sets of multiple queries into a single result set.

- removes duplicates

```sql
SELECT name FROM employees
UNION
SELECT name FROM contractors;
```

## `UNION ALL`

Combines the results of two or more SELECT queries into a single result set

- includes all duplicates

```sql
SELECT name FROM employees
UNION ALL
SELECT name FROM contractors;
```
