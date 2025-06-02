# Monitoring

## Cost Management

Go to Admin > Cost Management

- Account Overview

  - monitor by warehouse
  - filter by range of time
  - breakdown by compute, storage or data transfer costs

- Consumption
- Resource Monitors
  - control and monitor usage of warehouses and account credits
  - need a `ACCOUNTADMIN` role
  - can be control:
    - credit quota
    - type: Account or Warehouse
    - schedule
  - define the action when the quota is reached:
    - suspend
    - notify

## Metrics Tables

### SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS

Provides per-table storage usage (in bytes), including time travel and fail-safe data.

```sql
SELECT
    TABLE_CATALOG AS database,
    TABLE_SCHEMA AS schema,
    TABLE_NAME,
    ROUND(TABLE_BYTES / 1024 / 1024 / 1024, 2) AS size_gb,
    ROUND(TIME_TRAVEL_BYTES / 1024 / 1024 / 1024, 2) AS time_travel_gb,
    ROUND(FAILSAFE_BYTES / 1024 / 1024 / 1024, 2) AS failsafe_gb
FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS
ORDER BY size_gb DESC
LIMIT 20;
```

### SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY

Shows detailed info about each query (runtime, warehouse used, user)

- START_TIME
- CREDITS_USED
- can be group by database, schema, warehouse, user, etc

```sql
SELECT
    USER_NAME,
    COUNT(*) AS query_count,
    ROUND(SUM(CREDITS_USED_CLOUD_SERVICES + CREDITS_USED_COMPUTE), 2) AS total_credits
FROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY
WHERE START_TIME >= DATEADD(DAY, -7, CURRENT_TIMESTAMP())
GROUP BY USER_NAME
ORDER BY total_credits DESC;
```

### SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY

Tracks credit usage per warehouse

```sql
SELECT
    WAREHOUSE_NAME,
    SUM(CREDITS_USED) AS total_credits,
    DATE_TRUNC('day', START_TIME) AS usage_day
FROM SNOWFLAKE.ACCOUNT_USAGE.WAREHOUSE_METERING_HISTORY
GROUP BY WAREHOUSE_NAME, usage_day
ORDER BY usage_day DESC;
```
