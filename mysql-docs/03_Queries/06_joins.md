# Joins

## `INNER JOIN`

Returns only the rows where there is a match in both tables.

```sql
SELECT a.*, b.*
FROM table_a a
INNER JOIN table_b b ON a.id = b.a_id;
```

## `LEFT JOIN` (or `LEFT OUTER JOIN`)

Returns all rows from the left table, and the matching rows from the right table.

If no match, `NULLs` are returned from the right table.

```sql
SELECT a.*, b.*
FROM table_a a
LEFT JOIN table_b b ON a.id = b.a_id;
```

## `RIGHT JOIN` (or `RIGHT OUTER JOIN`)

Returns all rows from the right table, and the matching rows from the left table.

If no match, `NULLs` are returned from the left table.

## FULL JOIN (or FULL OUTER JOIN)

Returns all rows from both tables, with `NULLs` in place where the join condition is not met.

🚫 MySQL does not support `FULL JOI`N directly, but you can simulate it using `UNION`

```sql
SELECT a._, b._
FROM table_a a
LEFT JOIN table_b b ON a.id = b.a_id

UNION

SELECT a._, b._
FROM table_a a
RIGHT JOIN table_b b ON a.id = b.a_id;
```

## CROSS JOIN

Returns the Cartesian product, all combinations of rows from both tables.

```sql
SELECT *
FROM table_a
CROSS JOIN table_b;
```
