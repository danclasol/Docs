# File Format

A named file format is a reusable object that defines how to interpret file contents when loading, unloading, or querying staged data.

- avoid repeating file format details
- easy to change file format settings centrally
- supported files types: CSV, JSON, PARQUET, AVRO, ORC, XML

## Using File Format

Instead of specifying a inline format you can reference a file format

```sql
COPY INTO employees
FROM @my_stage
FILE_FORMAT = my_csv_format;
```

Properties of a file format object can be overwritten

```sql
COPY INTO employees
FROM @my_stage
FILE_FORMAT = (FORMAT_NAME = my_csv_format field_delimiter="," skip_header=105_);
```

## Creating File Format

### CSV

```sql
CREATE FILE FORMAT my_csv_format
  TYPE = 'CSV'
  COMPRESSION = 'AUTO'                      -- Options: AUTO, GZIP, BZ2, etc.
  RECORD_DELIMITER = '\n'                  -- Row delimiter (default: newline)
  FIELD_DELIMITER = ','                    -- Column delimiter
  SKIP_HEADER = 1                          -- Skip first row (headers)
  FIELD_OPTIONALLY_ENCLOSED_BY = '"'       -- Use quotes around text fields
  TRIM_SPACE = TRUE                        -- Trim whitespace from fields
  NULL_IF = ('NULL', 'N/A')                -- These strings become NULL
  EMPTY_FIELD_AS_NULL = TRUE               -- Empty fields = NULL
  ESCAPE = '\\'                            -- Escape character
  ESCAPE_UNENCLOSED_FIELD = '\\'           -- Escape for unquoted fields
  DATE_FORMAT = 'YYYY-MM-DD'               -- Format for DATE columns
  TIME_FORMAT = 'HH24:MI:SS'               -- Format for TIME
  TIMESTAMP_FORMAT = 'YYYY-MM-DD HH24:MI:SS'
  BINARY_FORMAT = 'HEX'                    -- How to encode binary data
  ENCODING = 'UTF8';                       -- File character encodingv
```

### JSON

```sql
CREATE FILE FORMAT my_json_format
  TYPE = 'JSON'
  COMPRESSION = 'AUTO'                     -- GZIP, BZ2, etc.
  ENABLE_OCTAL = FALSE                     -- Allow octal numbers
  ALLOW_DUPLICATE = FALSE                  -- Allow duplicate keys
  STRIP_OUTER_ARRAY = TRUE                 -- If file starts with `[ {...}, {...} ]`
  STRIP_NULL_VALUES = FALSE                -- Remove keys with null values
  IGNORE_UTF8_ERRORS = TRUE                -- Prevent errors on bad encoding
  DATE_FORMAT = 'YYYY-MM-DD'
  TIME_FORMAT = 'HH24:MI:SS'
  TIMESTAMP_FORMAT = 'YYYY-MM-DD HH24:MI:SS.FF'
  BINARY_FORMAT = 'HEX'
  ENCODING = 'UTF8';
```

### PARQUET

```sql
CREATE FILE FORMAT my_parquet_format
  TYPE = 'PARQUET'
  COMPRESSION = 'SNAPPY'                   -- Options: SNAPPY (default), NONE
  BINARY_AS_TEXT = FALSE                   -- ,Read binary as text
  USE_LOGICAL_TYPES = TRUE;                -- Use logical (converted) types
```

## Editing file format

```sql
ALTER FILE FORMAT file_formats.my_file_format
SET SKIP_HEADER = 1;
```

## List formats

List all format files created

```sql
SHOW FILE FORMATS;
```

## Describe a format

```sql
DESC FILE FORMAT my_csv_format;
```

## Drop a format file

```sql
DROP FILE FORMAT my_csv_format;
```
