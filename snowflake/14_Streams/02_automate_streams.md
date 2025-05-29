# Automate with a Task

Streams can be combined with task to automate tracking processes, providing automate secure ETL workflows.

```sql
CREATE OR REPLACE TASK cdc_task
WAREHOUSE = my_warehouse
SCHEDULE = 'USING CRON 0 * * * * UTC'
AS
MERGE INTO target_table AS tgt
USING (
  SELECT * FROM source_stream
) AS src
ON tgt.id = src.id
WHEN MATCHED THEN
  UPDATE SET tgt.name = src.name
WHEN NOT MATCHED THEN
  INSERT (id, name) VALUES (src.id, src.name);
```
