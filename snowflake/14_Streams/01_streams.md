# Streams

A Stream is a change tracking object that records insertions, updates, and deletions made to a table.

A stream capture every change done in table in a structure. This process is called change data capture (CDC).

- a stream tracks changes on a base table
- a streams doesn't duplicate data
- after being read in a transaction, Snowflake considers the changes as consumed, and they won’t appear in future queries unless you reset the stream

## Offset

When you create a stream on a table, Snowflake starts recording changes. The stream maintains a "bookmark" (offset) that:

- advances automatically after a transaction reads the stream
- ensures only new changes are returned in subsequent queries
- managed by Snowflake, not manually set

## Staleness

Snowflake uses a Change Tracking Retention Period (default is 14 days) to keep track of table changes for streams.

When a stream is stale

- get an error like
  - _Stream 'MY_STREAM' is stale. Backing data is no longer available_
- cannot query the stream anymore
- must drop and recreate the stream to recover

A stream becomes stale if:

- not consumed within that retention window
- underlying table’s change tracking data is purged before the stream is read

You can increase the change tracking retention on base table if needed

- increase storage costs slightly

```sql
ALTER TABLE my_table SET CHANGE_TRACKING_RETENTION_TIME_IN_DAYS = 30;
```

## Stream Types

### Standard

Tracks all row-level changes

- for full CDC pipelines

### APPEND-ONLY

Tracks only insters

- not track update or delete
- lower overhead
- better performance and cost-efficient for insert-only data

## Creating streams

Use the `CREATE STREAM` commend to create a stream for a table

- `ON TABLE`: defines the table that should be tracked
- `APPEND_ONLY`:
  - `FALSE`: standard stream
  - `TRUE` create a APPEND_ONLY stream (only track inserts)

```sql
CREATE OR REPLACE STREAM my_stream
ON TABLE my_table;
```

## Monitoring changes

We can query to view the rows that were inserted, updated, or deleted in the table.

Apart from the columns of the original table, a stream has the following metadata columns

- `METADATA$ACTION`: type of change (INSERT, DELETE)
- `METADATA$ISUPDATE`: boolean (TRUE if it's part of an update)
- `METADATA$ROW_ID`: internal unique row ID for identifying changes

```sql
SELECT * FROM my_stream;
```

## Merging data

Use `merge` to insert changes tracked in a stream to update a target table

- merge is highly optimized for large-scale data ingestion and CDC scenarios
- after merging the stream will be empty

```sql
MERGE INTO target_table AS tgt
USING (
  SELECT * FROM my_stream
) AS src
ON tgt.id = src.id
WHEN MATCHED THEN
  UPDATE SET tgt.name = src.name
WHEN NOT MATCHED THEN
  INSERT (id, name) VALUES (src.id, src.name);
```
