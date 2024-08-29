# Add `+`

```sql
SELECT last_name, salary, salary + 300
FROM employees;
```

# Subtrack `-`

```sql
SELECT last_name, salary, salary - 300
FROM employees;
```

# Multiply `*`

```sql
SELECT last_name, salary, salary - 300
FROM employees;
```

Operator Precedence

```sql
SELECT last_name, salary, 12 * salary + 300
FROM employees;
```

We can use parenthesis

```sql
SELECT last_name, salary, 12 * (salary + 300)
FROM employees;
```

# Divide `/`

```sql
SELECT last_name, salary, salary - 300
FROM employees;
```

# Null values in Arithmetic Expressions

Arithmetic expressions containing a null value evaluate to null

```sql
SELECT last_name, 12*salary*commision_pct
FROM employees;
```
