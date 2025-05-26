# Tasks

A Task in Snowflake is a scheduled or event-driven job that automates running SQL statements.

- automates SQL execution
- can run on a schedule (cron) or after another task (dependency chain)
- supports simple queries or calling stored procedures
- can be used for incremental data processing (e.g., streams)
- one task can only execute on SQL statement

## Creating tasks

Use the `CREATE TASK` command to create a task

- `WAREHOUSE`: define the warehouse to use
- `SCHEDULE`: CRON expression to define when the task should run
  - `INTERVAL`: number of hours, minutes or seconds
    - `10 MINUTES`, `2 HOURS`, `30 SECONDS`
  - `USING CRON 0 5 * * * UTC` -> runs daily at 5:00 AM UTC
    - `0`: Minute
    - `5`: Hour
    - `*`: Day of Month
    - `*`: Month
    - `*`: Day of Week
    - `UTC`: Time Zone

```sql
CREATE OR REPLACE TASK my_task
    WAREHOUSE = my_warehouse
    SCHEDULE = 'USING CRON 0 5 * * * UTC'

AS
INSERT INTO sales_summary
SELECT * FROM raw_sales_data;
```

## Modify Task

Modify the settings of task

- task must be suspended

```sql
ALTER TASK my_task
ADD SCHEDULE = '1 MINUTE';
```

## Drop Task

Remove a task

- task must be suspended

```sql
DROP TASK task_a:
```

## Tasks executions

Tasks can be triggered:

- On a schedule (using CRON expression)
- On demand (manually started)

  ```sql
  EXECUTE TASK my_task;
  ```

- By dependency completion (if linked to another task)

## Suspend Tasks

Stop a running task

```sql
ALTER TASK my_task SUSPEND;
```

## Resume Tasks

Resumen the scheduling of task that is suspended

```sql
ALTER TASK my_task SUSPEND;
```

## Calling Producedures

Use `CALL` command to call a procedure

- params can be pass

```sql
CREATE OR REPLACE TASK my_task
WAREHOUSE = my_warehouse
SCHEDULE = '1 MINUTE'
AS CALL my_procedure (params)
```

## Task Condition

Tasks can include a `WHEN` clause to determine whether the task should run.

```sql
CREATE OR REPLACE TASK my_task
WAREHOUSE = my_wh
SCHEDULE = '1 MINUTE'
WHEN CURRENT_DATE = DATEADD('day', 1, '2024-01-01')
AS
-- SQL statement
```

We can see which tasks were skipped due to conditions by querying

```sql
SELECT name, state, scheduled_time
FROM TABLE(INFORMATION_SCHEMA.TASK_HISTORY())
WHERE state = 'SKIPPED';
```
