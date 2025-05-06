# Optimizations

Ways to improve the performance of your SQL queries

## Indexes

- Create Indexes: Indexes help speed up data retrieval for columns used in `JOIN`, `WHERE`, and `ORDER BY` clauses

  - For `JOIN` operations, index the columns used in the ON condition
  - For filtering, create indexes on columns used in WHERE conditions
  - Consider composite indexes (multi-column indexes) when multiple columns are frequently queried together

## Predicate Pushdown (Filter Before Join)

Move Filters to the Join Condition: Apply filters directly in the ON clause of the join to reduce the number of rows before joining.

This can reduce the number of rows being processed, improving performance.

## Avoid Selecting Unnecessary Columns

Only select the columns you actually need to avoid unnecessary data processing.

This reduces the amount of data being retrieved and processed, speeding up the query.

## Optimize JOIN Types

Use appropriate `JOIN` types (`INNER JOIN`, `LEFT JOIN`, etc.) based on your needs.

Avoid unnecessary `OUTER JOIN` operations if you're only interested in matching rows.

## EXPLAIN to Analyze Execution Plans

Use the EXPLAIN statement to analyze your query’s execution plan.

It helps identify inefficiencies like full table scans, lack of index usage, or the need for sorting.

Look for things like:

- using index: indicates index usage, which is efficient
- using temporary: indicates temporary tables are being used, which can be inefficient
- using filesort: indicates that MySQL is sorting data without an index

## Optimize Subqueries

- Avoid using subqueries if possible, especially in `SELECT` or `WHERE` clauses.

  - These can often be replaced with `JOIN` operations or `IN` conditions, which are typically faster.

- Consider using Common Table Expressions (CTEs) or derived tables when appropriate.

## Optimize for Large Data Sets

If working with large tables, consider partitioning them based on relevant columns to reduce the amount of data scanned.

Use batch processing or pagination for queries that return a large number of rows.

## Reduce Redundant Operations

Eliminate redundant operations, such as unnecessary DISTINCT, GROUP BY, or ORDER BY clauses, unless absolutely needed.

Avoid complex operations inside `WHERE` clauses (e.g., avoid functions like `UPPER()`, `LOWER()`, `LIKE` on indexed columns).

## Use Materialized Views (For Read-heavy Queries)

For complex queries that are run frequently, consider creating materialized views (if your database supports them), which store the results of a query and are updated periodically.

## Database Design Considerations

Normalize tables where necessary to avoid data redundancy, but also consider denormalization if query performance is a higher priority and the data retrieval process is read-heavy.

Use appropriate data types for columns (e.g., INT instead of VARCHAR for numeric data) to save storage and improve speed.

## Query Caching

For frequently executed, read-only queries, use query caching to store the results of queries and avoid executing them repeatedly. This is particularly useful for databases with limited updates.
