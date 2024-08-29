# Alternative Quote Operator `q`

Allows to specify your own quotation mark delimiter.

Increase readability and usability

The following sentence is a incorrect code, because Oracle server thinks that the first `'` is for the stating literal and the second `'` is the for the ending literal.

```sql
SELECT last_name ||' has salary's '|| salary AS "Employee's Salary"
FROM employees;
```

We can use alternative Quote Operator to solve this problem

```sql
SELECT department_name || q'[ Department's Manager Id:W]' || manager_id  AS "Department and Manager"
FROM departments;
```

You can use as delimiter

```sql
SELECT department_name || q'{Department's Manager Id:}' || manager_id  AS "Department and Manager"
FROM departments;
```
