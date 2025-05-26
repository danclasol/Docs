# `variant` type

The VARIANT data type in Snowflake is used to store semi-structured data.

It’s a flexible column type that can hold arbitrary structured or nested data, and Snowflake automatically parses and indexes the contents so you can query them easily.

Supported data types

- JSON
- XML
- Avro
- ORC
- Parquet

## Creating table with `VARIANT`

```sql
CREATE TABLE JSON_RAW (
    RAW_FILE VARIANT
)
```

## Inserting data into `VARIANT`

### `JSON`

You can insert manually data into a `VARIANT` column or use `COPY` command

```sql
INSERT INTO json_data (id, data)
VALUES
(1, PARSE_JSON('{"name": "Alice", "age": 30}')),
(2, PARSE_JSON('{"name": "Bob", "age": 25, "skills": ["SQL", "Python"]}'));
```

## Querying `VARIANT` data

Use `:` to access to `JSON` field and uses as table columns

```sql
SELECT RAW_FILE:city FROM JSON_RAW;
```

Use `::` to convert a `JSON` field to a specific type

```sql
SELECT RAW_FILE:id::int FROM JSON_RAW;
```

Use `.` to access to nested field data in a `JSON`

```json
{
  "fist_name": "Peter",
  "last_name": "Smith",
  "job": {
    "salary": 14400,
    "title": "Assistant Media Planner"
  }
}
```

```sql
SELECT RAW_FILE:job.salary::int, RAW_FILE:job.title::int
FROM JSON_RAW;
```

Use `[]` to access to array position

```json
{
  "fist_name": "Peter",
  "last_name": "Smith",
  "skills": [
    {
      "name": "Pianist",
      "level": "high"
    },
    {
      "name": "Teaching",
      "level": "low"
    }
  ]
}
```

We can access to the field of an array specificying the array position

```sql
SELECT
    RAW_FILE:skills[0].name::string, RAW_FILE:skills[0].level::string,
    RAW_FILE:skills[1].name::string, RAW_FILE:skills[1].level::string
FROM JSON_RAW;
```

We can use `flatten` to treat an array field as a table and join it to the table

```sql
SELECT f.value.name::string as SKILL_NAME, f.value.level::string as SKILL_LEVEL
FROM JSON_RAW, TABLE(FLATTEN(RAW_FILE:skills)) f;
```
