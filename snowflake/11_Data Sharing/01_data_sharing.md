# Data Sharing

Snowflake allows you to create secure, read-only shares that expose databases, schemas, tables, views, and other objects to other Snowflake accounts.

- no data duplication
- real-time updates
- secure and managed
- zero-cost for sharing data (consumer pays for compute)

## Shareable objects

- Tables, Schemas, Databases
- Sequences
- File Formats
- Secure Views
  - Only secure views (not regular views)
- Secure Materialized Views
  - Must be marked as secure
- Secure UDFs (Functions)
  - Only secure user-defined functions
- Secure External Tables
  - If underlying cloud provider permissions allow
- Internal Stages
- Streams on Shared Tables
  - Only for consumers creating streams on shared data

## Not shareable objects

- Regular Views
  - Must be defined as secure views to protect logic
- External Stages (S3, Azure)
  - Security and cloud permissions prevent sharing
- Tasks
  - Cannot be executed on shared data
- Pipes
  - Related to Snowpipe ingestion, can't share execution context
- Procedures
  - Not currently supported for sharing
- Warehouses
  - No Compute resources are account-specific
- Roles and Users
  - No Security boundaries prevent cross-account role access
- Streams (created by provider)
  - Consumers must create their own streams on shared tables

## Creating a Share

Provider creates a `SHARE` object

```sql
CREATE SHARE my_share;
```

## Grants privilege to share

Grant usage on database

```sql
GRANT USAGE ON DATABASE my_db TO SHARE my_share;
```

Grant usage on schema

```sql
GRANT USAGE ON SCHEMA my_db.public TO SHARE my_share;
```

Grant usage on table

```sql
GRANT SELECT ON TABLE my_db.public.orders TO SHARE my_share;
GRANT SELECT ON ALL TABLES IN DATABASE my_database TO SHARE my_share;
GRANT SELECT ON ALL TABLES IN DATABASE my_schema TO SHARE my_share;
```

## Add Consumer accounts

Provider adds a Consumer account

- `consumer_account_locator`: ID of the other Snowflake account

```sql
ALTER SHARE my_share ADD ACCOUNTS = ('consumer_account_locator');
```

## Consuming a SHARE

In the consumer account, create a database from the share

- `ACCOUNTADMIN` role
- or `IMPORT SHARE` privileges required

```sql
CREATE DATABASE shared_orders FROM SHARE provider_account_locator.my_share;
```

Now the consumer should be able to query the shared table

```sql
SELECT * FROM shared_orders.public.orders;
```

### Grant privileges for other users

We can also allow others users to consume a share database

- grant permission to public role

```sql
GRANT IMPORTED PRIVILEGES ON DATABASE DATA_SHARE_DB TO ROLE PUBLIC;
```
