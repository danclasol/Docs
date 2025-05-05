# Filtering data

## `WHERE`

Filter records and specify the conditions for selecting rows from a table.

```sql
SELECT * FROM employees
WHERE salary > 50000;
```

## `DISTINCT`

Keyword to remove duplicate values from the result set.

It ensures that the query returns only unique values in the selected columns.

```sql
SELECT DISTINCT department
FROM employees;
```

Works on all selected columns

```sql
SELECT DISTINCT department, job_title
FROM employees;
```

## `BETWEEN`

Filter the results within a certain range.

- is inclusive, meaning it includes the boundary values (value1 and value2)
- can be used with numbers, dates, and strings (alphabetically for text)

```sql
SELECT * FROM employees
WHERE age BETWEEN 25 AND 40;
```

```sql
SELECT * FROM sales
WHERE sale_date BETWEEN TO_DATE('2025-01-01', 'YYYY-MM-DD') AND TO_DATE('2025-03-31', 'YYYY-MM-DD');
```

```sql
SELECT * FROM employees
WHERE name BETWEEN 'A' AND 'M';
```

## `IN`

Check whether a value matches any value in a list of values.

```sql
SELECT * FROM employees
WHERE department IN ('Sales', 'Marketing', 'IT');
```

You can also use a subquery with `IN` to compare values against the result of another query.

```sql
SELECT * FROM employees
WHERE department IN (
  SELECT department
  FROM employees
  WHERE department = 'Sales'
);
```

## `NOT IN`

You can also use NOT IN to exclude certain values.

```sql
SELECT * FROM employees
WHERE department NOT IN ('Sales', 'Marketing');
```

## `LIKE`

Operator is used in a WHERE clause to search for a specified pattern in a column.

- find all employees whose name starts with 'A':

```sql
SELECT * FROM employees
WHERE name LIKE 'A%'; -- "Alice", "Anna", "Avery",
```

- find employees whose name has exactly five characters and starts with 'J':

```sql
SELECT * FROM employees
WHERE name LIKE 'J____'; -- "James", "Johns"
```

In MySQL, the LIKE operator is case-insensitive by default

```sql
SELECT * FROM employees
WHERE UPPER(name) LIKE 'J%';
```

## `LIMIT`

Specify the number of records to return from a query.

```sql
SELECT * FROM employees
LIMIT 5;
```
