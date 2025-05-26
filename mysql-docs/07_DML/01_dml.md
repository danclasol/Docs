# DML (Data Manipulation Language)

SQL commands used to work with data inside database tables, inserting, updating, deleting, or querying it.

- DML changes can be rolled back if you're using transactions
  - START TRANSACTION, ROLLBACK, COMMIT

### DML Commands

- `SELECT`: Retrieves data from one or more tables
- `INSERT`: Adds new rows into a table
- `UPDATE`: Modifies existing rows
- `DELETE`: Removes rows from a table

## UPDATE

Modifies existing rows

```sql
UPDATE users
SET email = 'newalice@example.com'
WHERE id = 1;
```

## DELETE FROM

Removes rows from a table

```sql
DELETE FROM users WHERE id = 1;
```
