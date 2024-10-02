# column alias

Alias allow to rename a column heading. It is useful with calculations.

Inmmediately follows the column name (there can also be the optional AS keyword between the column name and the alias).

```sql
SELECT last_name as name, commission_pct comm
FROM employees
```

Requiers double question marks if it contains spaces or special characters

```sql
SELECT last_name as name, salary*12 "Annual Salary"
FROM employees
```

In Oracle, it requires double quotation marks if it is case-sensitive
