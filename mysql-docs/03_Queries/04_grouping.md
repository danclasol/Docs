# `GROUP BY`

Use `GROUP BY` to group data into rows that have the same values in specified columns into summary rows, like totals or averages.

```sql
SELECT column1, AGGREGATE_FUNCTION(column2)
FROM table_name
GROUP BY column1;
```

## Aggregatation Functions

### `COUNT()`

Counts rows por group

```sql
SELECT country, COUNT(*) AS total_users
FROM users
GROUP BY country;
```

### `SUM()`

Adds values

```sql
SELECT month, SUM(amount) AS total_sales
FROM sales
GROUP BY month
ORDER BY month;
```

### `AVG()`

Calculates average

```sql
SELECT department, AVG(salary) AS avg
FROM employees
GROUP BY department;
```

### `MIN()`

Get the smallest value

```sql
SELECT department, MIN(salary) AS min_salary
FROM employees
GROUP BY department;
```

### `MAX()`

Get the largest value

```sql
SELECT department, MAX(salary) AS max_salary
FROM employees
GROUP BY department;
```

## `HAVING`

Used to filter groups of rows after using `GROUP BY`.

```sql
SELECT country, COUNT(*) AS total
FROM users
GROUP BY country
HAVING COUNT(*) > 10;
```

The difference with `WHERE`:

- `WHERE` filters individual rows (before grouping)
- `HAVING` filters grouped rows (after aggregation)

```sql
SELECT country, COUNT(*) AS total
FROM users
WHERE status = 'active'
GROUP BY country
HAVING COUNT(*) > 10;
```

Avoid repeating aggregates, use alias instead of repeat the aggregation function

```sql
SELECT country, COUNT(*) AS total
FROM users
GROUP BY country
HAVING total > 10;
```
