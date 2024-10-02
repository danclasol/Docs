# Literal Character String

A literal is a character, a number, or a date that is included in the `SELECT` statement.

Date and character literal values must be enclosed within single quotation marks.

Each character string is output once for each row returned.

```sql
SELECT last_name || ' is a ' || job_id AS "Employee Details"
FROM employees;
```
