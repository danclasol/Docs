# Change Tracking

When CHANGE_TRACKING is enabled:

- Snowflake records metadata about changes to the table (insert, update, delete)
- enables streams to track and consume those changes
- maintains a 14-day default history (can be customized)
- without `CHANGE_TRACKING = TRUE`, you cannot create a stream on a table

## Enable change tracking

When creating a table

```sql
CREATE TABLE my_table (
  id INT,
  name STRING
)
WITH CHANGE_TRACKING = TRUE;
Or on an existing table:
```

Or modifying an exisiting table

```sql
ALTER TABLE my_table SET CHANGE_TRACKING = TRUE;
```

## Change Retention Period

By default, changes are retained for 14 days. You can increase it up to 90 days

- longer retention means higher storage usage
- but more resilience to stream staleness

```sql
ALTER TABLE my_table SET CHANGE_TRACKING_RETENTION_TIME_IN_DAYS = 30;
```

## Table Change Tracking

Use `CHANGES` clause to query the change tracking metadata for a table or view within a specified interval of time without a stream .

- feature is part of advanced CDC features in Snowflake
- table must have CHANGE TRACKING = TRUE enabled
- available in Snowflake Enterprise Edition+

### Example

- `CHANGES(...)`: indicates to get changes, not just the current table state
- `INFORMATION`:
  - `DEFAULT`: change metadata, such as `CHANGE_TYPE`, `CHANGE_TRACKING_COLUMNS`, etc
  - `APPLY-ONLY`: get only inserts
- `AT (OFFSET => -0.5\*60)`: changes from 30 seconds ago (0.5 minutes × 60 seconds)

```sql
SELECT * FROM SALES_RAW
CHANGES(INFORMATION => DEFAULT)
AT (OFFSET => -0.5*60)
```
