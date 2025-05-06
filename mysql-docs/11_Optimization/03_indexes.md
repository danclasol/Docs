# Indexes

An index is a data structure that improves the speed of data retrieval operations on a table.

When executing a query instead of scanning the whole table, you can jump straight to the needed rows.

## Creating Indexes

Creates an index on a table.

```sql
CREATE INDEX index_name ON table_name (column_name);
CREATE INDEX index_name ON table_name (column_name_1, column_name_2);
```

## Drop Index

```sql
ALTER TABLE table_name DROP INDEX index_name;
```

## Show Indexes

How to See Indexes of a table

```sql
SHOW INDEXES FROM table_name;
```

## Recomendations

### ✅ When to use

- columns are used in `WHERE`, `JOIN`, `ORDER BY`, or `GROUP BY`
- queries filter or sort by specific columns
- often look up rows by ID or unique value

### ❌ Avoid Overusing Indexes

- each `INSERT`, `UPDATE`, or `DELETE` becomes slower (indexes must be updated)
- too many indexes can consume disk space and confuse the optimizer
- prefer composite indexes over too many single-column ones
- avoid functions on indexed columns in `WHERE

  ❌ `WHERE` YEAR(order_date) = 2023 → can’t use index

  ✅ `WHERE` order_date BETWEEN '2023-01-01' AND '2023-12-31'

## Covering Index

Use covering indexes (all selected columns are in the index).
