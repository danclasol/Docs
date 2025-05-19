# Tasks

A Task in Snowflake is a scheduled or event-driven job that automates running SQL statements.

- automates SQL execution
- can run on a schedule (cron) or after another task (dependency chain)
- supports simple queries or calling stored procedures
- can be used for incremental data processing (e.g., streams)

## Creating tasks

Use the `CREATE TASK` command to create a task

- `WAREHOUSE`: define the warehouse to use
- `SCHEDULE`: CRON expression to define when the task should run
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

## Dependencies

Tasks can be linked to run in sequence or as a chain.

You create task dependencies so one task starts only after another finishes.

- `AFTER`: `task_b` will run only after `task_a` finishes successfully

```sql
CREATE OR REPLACE TASK task_b
WAREHOUSE = my_warehouse
AFTER task_a
AS
-- Your SQL statement for Task B
INSERT INTO table_b SELECT * FROM table_a WHERE processed = false;
```

## Tasks executions

Tasks can be triggered:

- On a schedule (using CRON expression)
- On demand (manually started)

  ```sql
  EXECUTE TASK my_task;
  ```

- By dependency completion (if linked to another task)

## Monitoring tasks executions

Use Snowflake views and commands to monitor tasks:

- `SHOW TASKS`: lists all tasks and their status
- `DESCRIBE TASK <task_name>`: details about a specific task
- Query `SNOWFLAKE.ACCOUNT_USAGE.TASK_HISTORY` to see:

  - When tasks ran
  - Duration
  - Success or failure status
  - Error messages if any

- Snowflake Web UI also provides a Tasks tab for visual monitoring.
