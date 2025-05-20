# Tables Types

## Temporary tables

Exist only during the session (or until explicitly dropped).

```sql
CREATE TEMPORARY TABLE
```

- not recoverable by Time Travel or Fail-safe
- data is automatically dropped when the session ends
- useful for intermediate results / staging data

## Transient tables

Persist beyond the session, but no Fail-safe period.

- need to be removed explicitly
- limited Time Travel retention (max 1 day)
- cheaper than permanent tables
- best for temporary or semi-permanent data where recoverability isn’t critical
- not recommened for permanent data

## Permanent tables

Default table type.

- data is stored persistently
- protected by Time Travel and Fail-safe features
  - time travel retention period (days):
    - Standar Edition: 0 or 1 (default)
    - Enterprise Edition: 0 to 90
- used for production critical or long-term data
