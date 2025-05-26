# Zero-Copy Cloning

Zero-Copy Cloning in Snowflake allows you to instantly create a copy of a database, schema, or table without duplicating data on storage.

We can copy any database object

- databases: all contained objects will be cloned
- schemas: all contained objects will be cloned
- tables
- tasks, streams, file format, sequence

Limitations for:

- stage: named internal stages not cloned
- pipe: only for external stages

## Cloning process

### Instant copy

- clones are created inmmediately, regardless of data size
- copy all metadata such as comment, clustering keys

### No data is copied

- there is no duplication of data storage
- creates a snapshot of the moment the clone is done
- keep a reference to micro-partitions of the original table
- the table will containt the data of the cloned table

### Indendent copy

- a clone is an independent object
- changes in the source or clone don't affect each other
- if we update the source object will not be reflected in the clone
- when we make changes in the clone, new micro-partitions will be created in the clone table to store this new data

## Cloning objects

### Clone database

```sql
CREATE TABLE new_database
CLONE database_origen
```

### Clone schema

```sql
CREATE SCHEMA new_schema
CLONE schema_origen
```

### Clone tables

- permanent table cannot be create from a temporal or transient table

```sql
CREATE TABLE new_table
CLONE table_origen
```

### Clone from a point in time

```sql
CREATE TABLE orders_backup
CLONE prod_db.sales.orders
BEFORE (TIMESTAMP => TO_TIMESTAMP('2024-05-01 10:00:00'));
```

### Clone from a specific query id

```sql
CREATE TABLE orders_backup
CLONE prod_db.sales.orders
BEFORE (STATEMENT => 'query_id')
```
