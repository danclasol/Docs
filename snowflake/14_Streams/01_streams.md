# Streams

A Stream is a change tracking object that records insertions, updates, and deletions made to a table.

## Creating streams

Use the `CREATE STREAM` commend to create a stream for a table

- `ON TABLE`: defines the table that should be tracked
- `APPEND_ONLY`:

```sql
CREATE OR REPLACE STREAM my_stream
ON TABLE my_table;
```

## Capturing changes

A stream capture every change done in table in a structure called change data capture (CDC).

## Monitoring changes

We can query to view the rows that were inserted, updated, or deleted in the table.

```sql
SELECT * FROM my_stream;
```

## Automate with a Task

Streams can be combined with task to automate tracking processes, providing automate secure ETL workflows.

```sql
CREATE OR REPLACE TASK cdc_task
WAREHOUSE = my_warehouse
SCHEDULE = 'USING CRON 0 * * * * UTC'
AS
INSERT INTO target_table
SELECT * FROM source_stream;
```
