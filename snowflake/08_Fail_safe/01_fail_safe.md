# Fail Safe

Fail-safe is a data protection feature in Snowflake that provides an additional layer of recovery for your data after the standard Time Travel retention period ends.

- After Time Travel expires, Snowflake keeps your data in Fail-safe for 7 days
- No user interaction, can't query data
- Only recoverable by Snowflake support

## Monitoring Fail Safe Storage

Check how much storage is consuming a table

- `FAILSAFE_BYTES`: currently data stored for fail-safe recovery
  - in bytes
  - in GB: `FAILSAFE_BYTES` / (1024*1024*1024)

```sql
SELECT *
FROM SNOWFLAKE.ACCOUNT_USAGE.TABLE_STORAGE_METRICS;
```
