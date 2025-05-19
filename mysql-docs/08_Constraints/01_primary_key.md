## Primary key

Uniquely identifies each row in a table. Each table can have only one primary key.​

Primary are `NOT NULL` and `UNIQUE`

```sql
CREATE TABLE departments (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(100)
);
```
