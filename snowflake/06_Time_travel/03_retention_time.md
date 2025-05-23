# Retention Period

Period during which you can query, clone, or restore previous versions of data.

You can set the retention period at:

- table level
- schema level
- database level

The default retention period is 1 day, but depending on the Snowflake Edition hired we can have longer periods

- Standard: up to 1 day
- Enterprise: up to 90 days
- Business Critical: up to 90 days
- Virtual Private: up to 90 days

## Managing Reterion Periods

### Check Retention Period

Check retention period on a table

- `retention_time`: indicates the current retention period

```sql
SHOW TABLES LIKE '%CUSTOMER%';
```

### Set Retention Period

When creating a table we can specify the period

- `DATA_RETENTION_TIME_IN_DAYS`: set the retention period
  - default value is `1`
  - if we set `0` no historic data will be store and we won't be able to use time travel, it will inmmediately enter in the Fail-safe

```sql
CREATE TABLE CUSTOMER(
    id int,
    name string,
    email string
)
DATA_RETENTION_TIME_IN_DAYS = 3;
```

We can also modify this value

- `DATA_RETENTION_TIME_IN_DAYS`: set the retention period

```sql
ALTER TABLE PUBLIC.CUSTOMER
SET DATA_RETENTION_TIME_IN_DAYS = 2;
```

## Monitoring Time Travel Storage

Check how much storage is consuming a table

- `ACTIVE_BYTES`: currently visible data (not deleted or changed)
  - in bytes
  - in GB: `ACTIVE_BYTES` / (1024*1024*1024)
- `TIME_TRAVEL_BYTES`: deleted or updated data that is still in the time travel retention period
  - in bytes
  - in GB: `TIME_TRAVEL_BYTES` / (1024*1024*1024)

```sql
SELECT *
FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS;
```
