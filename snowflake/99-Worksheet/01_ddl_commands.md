# DDL Commands

### CREATE WAREHOUSE

Create a warehouse

```sql
CREATE OR REPLACE WAREHOUSE my_warehouse
  WITH
  WAREHOUSE_SIZE = 'XSMALL'
  AUTO_SUSPEND = 300
  AUTO_RESUME = TRUE;
```

### CREATE DATABASE

Create database

```sql
CREATE OR REPLACE DATABASE my_database;
```

### CREATE SCHEMA

Create schema

```sql
CREATE OR REPLACE SCHEMA my_database.my_schema;
```

### CREATE TABLE

Create a table

```sql
CREATE OR REPLACE TABLE my_database.my_schema.employees (
  id INT AUTOINCREMENT,
  name STRING,
  department STRING,
  hire_date DATE
);
```

### CREATE SEQUENCE

Create a sequence

```sql
CREATE OR REPLACE SEQUENCE emp_seq START = 1000 INCREMENT = 1;
```

### CREATE VIEW

Create a view

```sql
CREATE OR REPLACE VIEW my_database.my_schema.active_employees AS
SELECT * FROM employees WHERE status = 'active';
```

### CREATE STAGE

Create a stage

```sql
CREATE OR REPLACE STAGE my_database.my_schema.my_stage;
```

### CREATE STORAGE INTEGRATION

Create storage integration

```sql
CREATE STORAGE INTEGRATION my_s3_integration
TYPE = EXTERNAL_STAGE
STORAGE_PROVIDER = S3
ENABLED = TRUE
STORAGE_AWS_ROLE_ARN = 'arn:aws:iam::123456789012:role/mySnowflakeRole'
STORAGE_ALLOWED_LOCATIONS = ('s3://my-bucket/path/');
```

## Roles

### CREATE ROLE

```sql
CREATE OR REPLACE ROLE analyst_role;
```

### GRANT ROLE

Give a user a privilege

```sql
GRANT ROLE analyst_role TO USER john_doe;
```

### CREATE USER

Create user

```sql
CREATE OR REPLACE USER john_doe
  PASSWORD = 'StrongPassword123'
  DEFAULT_ROLE = analyst_role
  DEFAULT_WAREHOUSE = my_warehouse
  MUST_CHANGE_PASSWORD = TRUE;
```

## FILE FORMATS

### CREATE FILE FORMAT

```sql
CREATE OR REPLACE FILE FORMAT my_file_format
  TYPE = 'CSV'
  FIELD_OPTIONALLY_ENCLOSED_BY = '"'
  SKIP_HEADER = 1;
```

### ALTER FILE FORMAT

Alter property of file format

```sql
ALTER FILE FORMAT my_file_format
FIELD_OPTIONALLY_ENCLOSED_BY = '"'
```

### DROP FILE FORMAT

Drop file format

```sql
DROP FILE FORMAT my_file_format;
```
