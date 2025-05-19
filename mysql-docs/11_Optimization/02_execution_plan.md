# Execution Plan Analysis

An execution plan (or query plan) is a breakdown of how a database engine will execute a SQL query.

It shows step-by-step operations, including table scans, index lookups, joins, sorts, and more — allowing you to identify performance bottlenecks.

## Get Execution Plan of a query

The `EXPLAIN` output shows how MySQL plans to execute your query, including how tables are read, whether indexes are used, and how rows are joined.

```sql
EXPLAIN
EXPLAIN SELECT * FROM orders;
```

Or use EXPLAIN `FORMAT=JSON` for more detail

```sql
EXPLAIN FORMAT=JSON
EXPLAIN SELECT * FROM orders;
```

The output will show the following columns

| id  | select_type | table  | type | possible_keys | key          | key_len | ref   | rows | Extra       |
| --- | ----------- | ------ | ---- | ------------- | ------------ | ------- | ----- | ---- | ----------- |
| 1   | SIMPLE      | orders | ref  | customer_idx  | customer_idx | 4       | const | 10   | Using where |

### id

Query step (higher = executed later).

### select_type

Type of SELECT

- SIMPLE
- PRIMARY
- SUBQUERY

### table

Table involved in the step.

### type

Join/access type — VERY important for performance.

- avoid `ALL`, especially on large tables
- good query should ideally use `ref`, `range`, or `eq_ref`

From fastest to slowest

- const
- eq_ref
- ref
- range
- index
- ALL ← ⚠️ Full table scan

### possible_keys

Indexes could be use.

### key

Index actually used.

### key_len

Length of the used index.

### ref

Which columns are compared to the index.

### rows

Estimated number of rows to examine.

### Extra

Additional info

- Using where
- Using index
- filesort

## Execution Order

### 1️⃣ `FROM`

Load base tables and apply JOINs.

### 2️⃣ `ON`

Apply join conditions (for JOIN).

### 3️⃣ `JOIN`

Combine rows based on ON condition.

### 4️⃣ `WHERE`

Filter rows (before grouping).

### 5️⃣ `GROUP BY`

Group remaining rows.

### 6️⃣ `HAVING`

Filter grouped rows.

### 7️⃣ `SELECT`

Choose columns or expressions.

- can’t use column aliases from SELECT in WHERE or HAVING because those clauses run before SELECT

### 8️⃣ `DISTINCT`

Remove duplicates, if used.

### 9️⃣ `ORDER BY`

Sort result.

### 🔟 `LIMIT`

Return only the specified number of rows.
