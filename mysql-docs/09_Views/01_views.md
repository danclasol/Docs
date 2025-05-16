# Views

View is a virtual table based on the result set of a `SELECT` query.

- simplify complex queries
- does not store data physically
- encapsulate logic
- enhance security by restricting access to specific rows or columns
- reusability Use the same query logic across multiple applications or reports.

## Create view

```sql
CREATE VIEW high_salary_employees AS
SELECT id, name, salary
FROM employees
WHERE salary > 50000;
```

## Querying a View

You can query a view just like a regular table:

```sql
SELECT * FROM high_salary_employees;
```

## Dropping a View

To remove a view from the database:

```sql
DROP VIEW high_salary_employees;
```
