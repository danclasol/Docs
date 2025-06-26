# Triggered Tasks

Triggered Task run whenever there’s a change in a stream.

- eliminates the need to poll a source frequently when the availability of new data is unpredictable
- reduces latency because data is processed immediately

## Creating triggered tasks

- define the target stream using the `WHEN` clause
- do not include param `SCHEDULE`

```sql
CREATE OR REPLACE TASK my_triggered_task
    WAREHOUSE = my_warehouse
    WHEN SYSTEM$STREAM_HAS_DATA('my_stream')
AS
INSERT INTO sales_summary
SELECT * FROM raw_sales_data;
```

## Migrate existing scheduled task to triggered task

You can migrate an existing task from a scheduled task to a triggered task

```sql
ALTER TASK task SUSPEND;
ALTER TASK task UNSET SCHEDULE;
ALTER TASK task SET WHEN SYSTEM$STREAM_HAS_DATA('my_stream');
ALTER TASK task RESUME;
```
