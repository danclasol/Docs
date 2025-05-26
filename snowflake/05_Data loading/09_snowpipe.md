# Snowpipe

Snowpipe is a continuous data ingestion service that automatically loads data from a stage (e.g., S3, Azure Blob, GCS) into Snowflake as soon as it arrives, with low latency.

- uses its own warehouse for pipe objects, don't need to be assigne to a warehouse
- designed for continous loading, not recommended for large batchs

## Configuration

In the storage provider we must configurate:

- grant access to snowflake to connect the pipe to the provider
- enable notifications so that the pipe can get notified

## Creating Snowpipes

### AWS

Define the pipe for AWS

- `NAME`: name of the pipe
- `AUTO_INGEST`: enables automatic loading via cloud event notifications
- `ERROR_ON_COLUMN_COUNT_MISMATCH`: ensures safety when file column count mismatches target table
- `PIPE_EXECUTION_PAUSED`: controls whether Snowpipe is paused or active

```sql
CREATE OR REPLACE PIPE my_snowpipe
AUTO_INGEST = TRUE
AS
COPY INTO my_data_table
FROM @my_s3_stage
FILE_FORMAT = my_json_format
```

### Azure

- `AZURE_CONSENT_URL`: open in browser to authorize Snowflake
- `AZURE_MULTI_TENANT_APP_NAME`
- `STORAGE_AZURE_MANAGED_IDENTITY`: grant this access to the container

```sql
CREATE OR REPLACE STORAGE INTEGRATION azure_int
TYPE = EXTERNAL_STAGE
STORAGE_PROVIDER = AZURE
ENABLED = TRUE
AZURE_TENANT_ID = '<your-azure-tenant-id>'
STORAGE_ALLOWED_LOCATIONS = ('azure://<storage-account>.blob.core.windows.net/<container>/');
```

## Managing pipes

### Show pipes

```sql
SHOW PIPES;
SHOW PIPES LIKE '%employee%';
SHOW PIPES IN DATABASE MANAGE_DB;
SHOW PIPES IN SCHEMA MANAGE_DB.PIPES;
SHOW PIPES LIKE '%employee%' IN SCHEMA MANAGE_DB.PIPES;
```

### List files in stage

```sql
LIST @MANAGE_DB.EXTERNAL_STAGES.csv_folder;
```

### Refresh files in stage

Forces Snowpipe to re-check files in the stage

```sql
ALTER PIPE my_pipe REFRESH;
```

### Pause Pipe execution

```sql
ALTER PIPE my_pipe SET PIPE_EXECUTION_PAUSED = TRUE;
ALTER PIPE my_pipe SET PIPE_EXECUTION_PAUSED = FALSE;
```

### Check pipe is actually working

```sql
SELECT SYSTEM$PIPE_STATUS('MY_SNOWPIPE')
```

## Monitoring snowpipes

### Snowpipe error message

```sql
SELECT * FROM TABLE(VALIDATE_PIPE_LOAD(
    PIPE_NAME => 'my_pipes.MY_SNOWPIPE'
    START_TIME => DATEADD(HOUR, -2, CURRENT_TIMESTAMP())
))
```

### View copy history

```sql
SELECT * FROM TABLE(INFORMATION_SCHEMA.COPY_HISTORY(
    TABLE_NAME => 'PUBLIC.my_data_table',
    START_TIME => DATEADD(HOUR, .2, CURRENT_TIMESTAMP())
));
```
