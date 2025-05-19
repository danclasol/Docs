# Materialized views

In Snowflake, a Materialized view is a pre-computed result of a query that is stored physically in the database.

- automatically updates when the underlying table changes
- improves performances of repetitives queries
- use for expensive queries that don’t change frequently
- great for dashboards, summaries, reporting

### Limitations

- not ideal for frequently updated transactional tables
- no joins with non-unique keys
- no subqueries with non-deterministic functions
- extra storage costs apply
- streams cannot be created on materialized views

## Differences with traditional SQL Materialized views

- Refresh data

  - In Snowflake, data is automatically updated when the underlying table changes
  - In other traditional SQL it must be done manually o using triggers

- Optimization and storage

  - Snowflake optimises the storage and the recovery of results using micro-partitions
  - This is not available in regular SQL

- Performance and scalability

  - Snowflake structure provides a higher performance than traditional SQL

## Creating materialized views

```sql
CREATE MATERIALIZED VIEW sales_summary_mv AS
SELECT region, SUM(amount) AS total_sales
FROM sales_table
GROUP BY region;
```

## Monitoring Materialized Views:

Lists all materialized views in a given database/schema.

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
