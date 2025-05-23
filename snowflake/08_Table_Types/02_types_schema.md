# Schema Types

## Transient schema

You can create a transient schema.

- tables under a schema will inherence the transient type
- no Fail-safe
- save storage cost

```sql
CREATE TRANSIENT SCHEMA my_schema;
```

## Permanent schema

You can create a permanent schema.

- Time Travel and Fail-safe
- higher cost

```sql
CREATE SCHEMA my_schema;
```
