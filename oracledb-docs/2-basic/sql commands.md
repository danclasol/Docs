# SQL Commands

**SQL Commands** are like instructions to a table.

- Interact with the database with some operations.
- Perform specific tasks, functions, and queries of data

These SQL commands are mainly categorized into five categories:

## Data Definition Language (DDL)

### CREATE

Create database or its objects (table, index, function, views, store procedure, and triggers)

```sql
CREATE TABLE table_name (column1 data_type, column2 data_type, ...);
```

### DROP

Delete objects from the database

```sql
DROP TABLE table_name;
```

### ALTER

Alter the structure of the database

```sql
ALTER TABLE table_name ADD COLUMN column_name data_type;
```

### TRUNCATE

Remove all records from a table, including all spaces allocated for the records are removed

```sql
TRUNCATE TABLE table_name;
```

### COMMENT

Add comments to the data dictionary

```sql
COMMENT 'comment_text' ON TABLE table_name;
```

### RENAME

Rename an object existing in the database

```sql
RENAME TABLE old_table_name TO new_table_name;
```

## Data Query Language (DQL)

## Data Manipulation Language (DML)

## Data Control Language (DCL)

## Transaction Control Language (TCL)
