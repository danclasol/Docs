# `COPY`

`COPY INTO` command in Snowflake is used for data movement.

It has two primary forms:

#### `COPY INTO <table>`

Used to load data from staged files (CSV, JSON, etc.) into a Snowflake table.

```sql
COPY INTO target_table
FROM @stage_path
FILE_FORMAT = (TYPE = 'CSV');
```

You can specify the columns you want to load

```sql
COPY INTO target_table(column1, column1)
FROM @stage_path
FILE_FORMAT = (TYPE = 'CSV');
```

#### `COPY INTO <stage | external location>`

Used to unload data from a Snowflake table or query into a stage or cloud storage (S3, Azure, GCS).

```sql
COPY INTO @stage_path/prefix_
FROM (SELECT * FROM source_table)
FILE_FORMAT = (TYPE = 'CSV');
```

## Options

### `FROM`

Specifies the stage where the source file(s) are located.

- `$1`,` $2`: positional referrence to columns in flat file formats
- `UPPER`: some SQL functions can be used

```sql
COPY INTO PUBLIC.ORDERS
FROM (select
        s.$1, s.$2
        , UPPER(s.$3), from @my_stage s)
FILE_FORMAT = (TYPE = 'CSV')
```

### `FILE_FORMAT`

Defines how Snowflake should interpret the file contents.

- CSV, JSON, PARQUET, etc

#### CSV Params

- `FIELD_DELIMITER`: set file delimiter
  - default `,`
- `SKIP_HEADER`: skip first lines

#### Inline format

You can define inline

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
FILE_FORMAT = (TYPE = 'CSV')
```

#### Named file format

You can also use a named format.

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
FILE_FORMAT = my_csv_format
```

### `FILES`

When the stage have many files and you only want to load some of them specify it in the FILES option.

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
FILE_FORMAT = (TYPE = 'CSV')
FILES = ('file1.csv', 'file2.csv');
```

### `PATTERN`

Loads files matching the regular expression.

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
FILE_FORMAT = (TYPE = 'CSV')
PATTERN = '.*sales_2024.*\.csv'
```

### `ON_ERROR`

Controls behavior when errors occur

- `ABORT_STATEMENT` (default): stops the entire load
- `CONTINUE`: skips problematic rows
- `SKIP_FILE`: skips the entire file if there’s an error
- `SKIP_FILE_n`: skips file if it has ≥`n` errors
- `SKIP_FILE_%`: skips file if the percentage of errors is ≥`%`

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
ON_ERROR = 'CONTINUE'
```

### `VALIDATION_MODE`

Validates the data files instead of loading them.

It has the following options:

- `RETURN_ERRORS`: returns up to 100 parsing errors without loading any data
- `RETURN_n_ROWS`: returns errors found in first `n` rows scanned
  specify the numnber of rows to return
- `RETURN_ALL_ERRORS`: return all errors ocurred

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
VALIDATION_MODE = 'RETURN_10_ERRORS'
```

### `FORCE`

Forces loading of files even if they’ve been loaded previously and have not changed since they were loaded.

- by default (false), duplicated are automatically avoided
- reloading files, potentially can create duplication data in tables

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
FORCE = 'TRUE'
```

### `SIZE_LIMIT`

Specify maximun size (in bytes) of data loaded in that command (at least one file)

- when threshold is exceeded, the `COPY` operation stops loading
- e.g.: 3 files with `20MB` and limit = `30MB`
  - first file will be always loaded
    - only 20MB have been loaded
  - second file will be loaded as well
    - 40MB have been loaded and
  - size limit exceeded and no more file will be loaded

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
SIZE_LIMIT = num
```

### `RETURN_FAILED_ONLY`

Specify whether to return only files that have failed to load in the statement result

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
RETURN_FAILED_ONLY = true | false
```

### `TRUNCATECOLUMNS`

Specify whether to truncate text strings that exceed the target column length

- `true` : string are automatically truncated to the target column length
- `false` (default): `COPY` produces an error if a loaded string exceeds the target column length

```sql
COPY INTO PUBLIC.ORDERS
FROM @my_stage
TRUNCATECOLUMNS = true | false
```
