# Querying data

The `SELECT` statement is used to retrieve data from a database.

### Select all columns

```sql
SELECT * FROM employees;
```

### Select specific columns

```sql
SELECT first_name, last_name FROM employees;
```

### Use column alias

```sql
SELECT salary * 12 AS annual_salary FROM employees;
```

### Filter duplicates

```sql
SELECT DISTINCT country FROM customers;
```

## Combine with other clauses

- `WHERE`: filter rows before grouping
- `GROUP BY`: aggregate by one or more columns
- `HAVING`: filter groups after aggregation
- `ORDER BY`: sort the result
- `LIMIT`: restrict the number of returned rows
