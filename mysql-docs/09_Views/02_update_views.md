# Updating Data Through a View

Views can be updatable, allowing `INSERT`, `UPDATE`, or `DELETE` operations.

However, certain conditions must be met:​

- view must reference only one table.
- can't contain:
  - aggregate functions (`SUM`, `AVG`, etc.)
  - `DISTINCT`, `GROUP BY`, `HAVING`, `UNION`
  - subqueries

## WITH CHECK OPTION

Clause to ensure that all `INSERT` and `UPDATE` operations performed through the view adhere to the criteria defined in the view's `WHERE` clause.

This constraint maintains data consistency by preventing modifications that would result in rows not visible through the view.

This clause has two options:

- `CASCADED` (default)
  - enforces the `CHECK OPTION` for the current view and all underlying views
- `LOCAL`:
  - enforces the `CHECK OPTION` only for the current view

### Example

- Allowed:
  - Inserting a new employee with `department = 'Sales'`
- Rejected:
  - Inserting or updating a row to have `department = 'Marketing'` through the sales_employees view, as it would violate the `WHERE` clause condition

```sql
CREATE VIEW sales_employees AS
SELECT id, name, salary
FROM employees
WHERE department = 'Sales'
WITH CHECK OPTION;
```

## Modifying a View

To modify an existing view, use the `ALTER VIEW` statement:​

```sql
ALTER VIEW high_salary_employees AS
SELECT id, name, salary
FROM employees
WHERE salary > 60000;
```
