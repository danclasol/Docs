# Monitoring tasks executions

Use Snowflake views and commands to monitor tasks

## `SHOW TASKS`

Lists all tasks and their status

```sql
SHOW TASKS;
```

## `DESCRIBE TASK`

Details about a specific task

```sql
DESCRIBE TASK my_task
```

## Historic Tables

### `INFORMATION_SCHEMA.TASK_HISTORY()`

Use function `TASK_HISTORY()` to check last executions

- current database and schema only

```sql
SELECT * FROM TABLE(INFORMATION_SCHEMA.TASK_HISTORY())
ORDER BY scheduled_time DESC;
```

Use parameters to filter by a given time

- `scheduled_time_range_start`: set starting date
- `scheduled_time_range_end`: set end date
- `result_limit`: limit the number of results
- `task_name`: name of the task

```sql
SELECT * FROM TABLE(INFORMATION_SCHEMA.TASK_HISTORY(
    scheduled_time_range_start => dateadd('hour', -4, current_timestamp()),
    scheduled_time_range_end   => CURRENT_TIMESTAMP(),
    result_limit => 5,
    task_name => 'my_procedure'
));
```

### Snowflake Web UI

Also provides a Tasks tab for visual monitoring.
