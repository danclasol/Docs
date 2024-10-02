# DISTINCT

The `DISTINCT` keyword can be use to filter duplicated rows in the result set.

It ensures that rows returned are unique for the column or columns specified.

```sql
SELECT DISTINCT department_id
FROM employees;
```

We can also use it with multiple columns.

```sql
SELECT DISTINCT department_id, job_id
FROM employees
ORDER BY 1,2;
```

## DISTINCT and NULL

The `DISTINCT` treats `NULL` values to be duplicates of each other.

If you use the `DISTINCT` statement to query data from a column that has many `NULL` values, the result set will include only one `NULL` value.
