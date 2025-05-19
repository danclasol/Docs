# Time Travel

Time Travel is a built-in feature in Snowflake that allows you to access, query, and restore data from a previous point in time.

- recover accidentally deleted or updated data
- view data as it existed at a specific time or before a certain change
- compare data across different points in time
- default is 1 day (24 hours), but can be extended up to 90 days on higher editions

You can query data at a previous time using:

```sql
SELECT * FROM my_table AT (TIMESTAMP => '2025-05-15 10:00:00');
```

Or by specifying an offset relative to the current time:

```sql
SELECT * FROM my_table BEFORE (STATEMENT => 'query_id');
```

You can also restore a dropped table within the retention period

```sql
UNDROP TABLE my_table;
```
