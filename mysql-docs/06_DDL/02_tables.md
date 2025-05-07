# Table DDL Commands

## CREATE TABLE

Creates a new database object

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

The `CREATE TABLE ... LIKE` statement is used to create a new table with the same structure (schema) as an existing table, but without copying any data.

- copy columns, indexes, and constraints
- triggers are not copied

```sql
CREATE TABLE new_table
LIKE existing_table;
```

If you want to copy both structure and data, use

```sql
CREATE TABLE new_table LIKE existing_table;
INSERT INTO new_table SELECT * FROM existing_table;
```

## RENAME TABLE

Renames a database object.

```sql
RENAME TABLE users TO app_users;
```

## DROP TABLE

Deletes an existing database object.

```sql
DROP TABLE IF EXISTS users;
```

## TRUNCATE TABLE

Removes all rows from a table quickly without logging each row deletion.

- faster than `DELETE FROM`
- doesn't log individual row deletions
- resets `AUTO_INCREMENT`

```sql
TRUNCATE TABLE users;
```

## ALTER TABLE

Modifies an existing database object.

### ALTER TABLE ADD COLUMN

Add a column to a table

```sql
ALTER TABLE users ADD COLUMN age INT;
```

### ALTER TABLE DROP COLUMN

Remove a column from a table

```sql
ALTER TABLE users DROP COLUMN;
```

### ALTER TABLE MODIFY COLUMN

Modify a column

```sql
ALTER TABLE users MODIFY COLUMN email VARCHAR(150) NOT NULL;
```

### ALTER TABLE RENAME COLUMN

Rename a column

```sql
ALTER TABLE users CHANGE COLUMN username user_name VARCHAR(50);
```
