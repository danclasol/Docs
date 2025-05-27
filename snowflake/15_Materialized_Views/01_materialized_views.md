# Materialized views

In Snowflake, a Materialized view is a pre-computed result of a query that is stored physically in the database.

- automatically updates when the underlying table changes
- improves performances of repetitives queries
- use for expensive queries that don’t change frequently
- great for dashboards, summaries, reporting

### Limitations

- no joins with non-unique keys
- limited amount of aggregation functions
  - cannot use HAVING, ORDER BY, LIMIT, etc
- no subqueries with non-deterministic functions
- extra storage costs apply
- streams cannot be created on materialized views

## Differences with traditional SQL Materialized views

- Refresh data

  - in Snowflake, data is automatically updated when the underlying table changes
  - in other traditional SQL it must be done manually o using triggers

- Optimization and storage

  - Snowflake optimises the storage and the recovery of results using micro-partitions
  - this is not available in regular SQL

- Performance and scalability

  - Snowflake structure provides a higher performance than traditional SQL

## When to use instead of regular view

- view would take a long time to be processed and is used frequently
- underlaying data is changed not frequently and on a rather irregular basis
  - since materialized views auto-refresh, frequent base table changes can increase compute costs
  - for frequent changes use task and streams instead

## Creating materialized views

```sql
CREATE MATERIALIZED VIEW sales_summary_mv AS
SELECT region, SUM(amount) AS total_sales
FROM sales_table
GROUP BY region;
```

## Monitoring Materialized Views:

Lists all materialized views in a given database/schema.

- `refresh_on`: last time the view was refresh
- `behind_by`: time passed since last refresh

```sql
SHOW MATERIALIZED VIEWS;
```

Shows detailed definition and metadata of a specific materialized view.

```sql
DESCRIBE MATERIALIZED VIEW <view_name>;
```

Monitor credits used for maintenance in `ACCOUNT_USAGE` views.

- Materialized Views in Snowflake consume credits when refreshing
- You should monitor how much they cost (especially with large/complex MVs)

```sql
SELECT *
FROM SNOWFLAKE.ACCOUNT_USAGE.MATERIALIZED_VIEW_REFRESH_HISTORY
WHERE MATERIALIZED_VIEW_NAME = 'SALES_SUMMARY_MV'
ORDER BY START_TIME DESC;
```
