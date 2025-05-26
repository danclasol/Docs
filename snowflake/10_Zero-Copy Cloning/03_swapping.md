# Swapping

Using the `SWAP WITH` command you can swapp to atomically exchange the names of two tables or schemas.

- privileges are not swap to the target object
- usefull to move from development to production

```sql
ALTER TABLE table_origin
SWAP WITH table_destination
```

### Schema

```sql
ALTER SCHEMA schema_origin
SWAP WITH schema_destination
```
