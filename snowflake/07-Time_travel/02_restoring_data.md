# Restoring Data

## Clone the data from the past

The best way of restoring a table that has been updated by accident is

### 1. Store correct data in a separated backup table

Clone the data to a temporal backup table

```sql
CREATE OR REPLACE TABLE orders_backup
CLONE orders
AT (OFFSET => -3600); -- 1 hour ago
```

### 2. Truncate the original table

It is recommended to truncate the table over `CREATE OR REPLACE` the table because:

- with CREATE OR REPLACE the table is dropped and recreated
  - table id will changed
  - table loose the time travel capability
  - not able to restore old data
- with TRUNCATE we don't lose the table id
  - we are able to search for older data

```sql
TRUNCATE orders;
```

### 3. Restore the data from the backup table

```sql
INSERT INTO orders
SELECT * FROM orders_backup;
```

## Restore dropped objects

With the `DROP` command to easily restore a database object

### TABLE

```sql
UNDROP TABLE orders;
```

### SCHEMA

```sql
UNDROP SCHEMA demo_db.public;
```

### DATABASE

```sql
UNDROP DATABASE demo_db;
```
