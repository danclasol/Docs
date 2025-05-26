# Tables Types

## Temporary tables

Exist only during the session (or until explicitly dropped).

- limited Time Travel retention (max 1 day)
- fail-safe not suppported
- data is automatically dropped when the session ends
- useful for intermediate results / staging data

```sql
CREATE TEMPORARY TABLE
```

## Transient tables

Persist beyond the session, but no Fail-safe and limited Time Travel

- need to be removed explicitly
- limited Time Travel retention (max 1 day)
- fail-safe not suppported
- cheaper than permanent tables
- best for temporary or semi-permanent data where recoverability isn’t critical
- not recommened for permanent data

```sql
CREATE TRANSIENT TABLE
```

## Permanent tables

Default table type.

- data is stored persistently
- protected by Time Travel and Fail-safe features
- used for production critical or long-term data

```sql
CREATE TEMPORARY TABLE
```
