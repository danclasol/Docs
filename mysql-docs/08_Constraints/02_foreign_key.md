# Foreign Keys

Establishes a relationship between two tables, ensuring referential integrity. The foreign key in the child table references the primary key in the parent table.​

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);
```

When defining a foreign key, you can specify actions to be taken when the referenced data in the parent table is updated or deleted

## `CASCADE`

Automatically delete or update matching child rows.

- `ON DELETE CASCADE`:
  - when a row in the parent table is deleted, all corresponding rows in the child table are automatically deleted
- `ON UPDATE CASCADE`:
  - when a primary key value in the parent table is updated, all matching foreign key values in the child table are also updated

```sql
CREATE TABLE departments (
  dept_id INT PRIMARY KEY
);

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
```

## `SET NULL`

Set foreign key in child rows to `NULL`. Requires columns to be nullable.

The foreign key columns in the child table must allow `NULL` values for this action to succeed.

- `ON DELETE SET NULL`:
  - when a row in the parent table is deleted, the foreign key values in the child table are set to `NULL`
- `ON UPDATE SET NULL`:
  - when a primary key value in the parent table is updated, the foreign key values in the child table are set to `NULL`

```sql
CREATE TABLE departments (
  dept_id INT PRIMARY KEY
);

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
    ON DELETE SET NULL
    ON UPDATE SET NULL
);
```

## `RESTRICT`

Prevent deletion or update of parent row if child rows exist.

- `ON DELETE RESTRICT`:
  - prevents the deletion of a parent row if there are matching rows in the child table
  - operation is rejected immediately.
- `ON UPDATE RESTRICT`:
  - prevents the update of a parent row if there are matching rows in the child table
  - operation is rejected immediately

```sql
CREATE TABLE departments (
  dept_id INT PRIMARY KEY
);

CREATE TABLE employees (
  emp_id INT PRIMARY KEY,
  dept_id INT,
  FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT
);
```

## `NO ACTION`

Similar to `RESTRICT`, but the check is deferred until the end of the transaction.

If the foreign key constraint is violated, the entire transaction is rolled back.

In MySQL, `NO ACTION` behaves identically to `RESTRICT` because foreign key constraints are checked immediately.
