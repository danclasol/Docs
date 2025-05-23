# Database Types

## Transient database

You can create a transient database.

- schemas under a database will inherence the transient type
- no Fail-safe
- save storage cost

```sql
CREATE TRANSIENT DATABASE my_database;
```

## Permanent database

You can create a permanent database.

- Time Travel and Fail-safe
- higher cost

```sql
CREATE DATABASE my_database;
```
