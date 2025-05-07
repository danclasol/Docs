# Subqueries

## Scalar Subqueries

A scalar subquery returns a single value (a single column and a single row).

This value can be used wherever a single value is expected, such as in the `SELECT`, `WHERE`, or `HAVING` clauses

```sql
SELECT name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

## Row Subqueries

A row subquery returns a single row with multiple columns.

It can be used in the `WHERE` clause to compare multiple columns simultaneously.

```sql
SELECT name
FROM employees
WHERE (department, position) = (SELECT department, position FROM employees WHERE id = 101);
```

## Table Subqueries

A table subquery, or derived table, is a subquery in the FROM clause that returns a result set, which can then be used like a regular table.​

```sql
SELECT
    avg_salary.department, avg_salary.avg_salary
FROM (
    SELECT department, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department
) AS avg_salary;
```

## Correlated Subqueries

A correlated subquery references columns from the outer query.

It is evaluated once for each row processed by the outer query, making it more computationally expensive.​

In this case, the subquery calculates the average salary for each department, and the outer query retrieves employees earning more than their department's average. ​

```sql
SELECT name
FROM employees e
WHERE salary > (SELECT AVG(salary) FROM employees WHERE department = e.department);
```

## Non-Correlated Subqueries

A non-correlated subquery does not reference any columns from the outer query. It is executed once and its result is used by the outer query.​

This subquery retrieves the IDs of departments located in 'New York', and the outer query retrieves employees belonging to these departments.​

```sql
SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE location = 'New York');
```

## Subqueries with `IN`, `ANY`, `ALL`

These subqueries are used to compare a value to a set of values returned by the subquery.​

### `IN`

Returns `true` if the value matches any value in the subquery result.​

```sql
SELECT name
FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE location = 'New York');
```

### `ANY`

Returns `true` if the comparison is `true` for at least one row returned by the subquery.​

```sql
SELECT name
FROM employees
WHERE salary > ANY (SELECT salary FROM employees WHERE department = 'Sales');
```

### `ALL`

Returns `true` if the comparison is `true` for all rows returned by the subquery.​

```sql
SELECT name
FROM employees
WHERE salary > ALL (SELECT salary FROM employees WHERE department = 'Sales');
```

## Subqueries with `EXISTS` and `NOT EXISTS`

These subqueries are used to test for the existence of rows returned by the subquery.​

### `EXISTS`

Returns `true` if the subquery returns one or more rows.​

```sql
SELECT name
FROM employees e
WHERE EXISTS (SELECT 1 FROM departments d WHERE d.manager_id = e.id);
```

### `NOT EXISTS`

Returns `true` if the subquery returns no rows.​

```sql
SELECT name
FROM employees e
WHERE NOT EXISTS (SELECT 1 FROM departments d WHERE d.manager_id = e.id);
```
