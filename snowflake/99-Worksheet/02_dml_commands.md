# DML

### TRUNCATE TABLE

Delete all rows quickly

```sql
TRUNCATE TABLE employees;
```

### INSERT INTO TABLE

```sql
INSERT INTO employees (id, name, department)
VALUES (1, 'Alice', 'HR');
```

### UPDATE TABLE

Modify existing data.

```sql
UPDATE employees
SET department = 'Marketing'
WHERE id = 1;
```

### DELETE FROM

Remove rows

```sql
DELETE FROM employees WHERE department = 'HR';
```

### MERGE

Conditional insert/update/delete (UPSERT)

```sql
MERGE INTO employees e
USING new_data n
  ON e.id = n.id
WHEN MATCHED THEN
  UPDATE SET e.department = n.department
WHEN NOT MATCHED THEN
  INSERT (id, name, department) VALUES (n.id, n.name, n.department);
```

### COPY INTO

Bulk load data into a table

```sql
COPY INTO employees
FROM @my_stage/employees.csv
FILE_FORMAT = (TYPE = 'CSV');
```
