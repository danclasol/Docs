# Functions

## `SYSTIMESTAMP`

Get current timestamp from database.

```sql
SELECT SYSTIMESTAMP FROM DUAL;
```

## `FROM_TZ`

Convert a `TIMESTAMP` value to a `TIMESTAMP WITH TIME ZONE`.

Useful when you have a `TIMESTAMP` that doesn't contain time zone information, and you want to attach a specific time zone to it.

```sql
FROM_TZ(timestamp_value, timezone)
```

- `timestamp_value`: value that you want to convert
- `timezone`: time zone that you want to associate with the `TIMESTAMP`
  - time zone offset: `-08:00`
  - time zone region name: `America/New_York`

### Example

```sql
SELECT FROM_TZ(TIMESTAMP '2024-10-17 14:30:00', '-05:00') AS ts_with_tz
FROM dual;

SELECT FROM_TZ(TIMESTAMP '2024-10-17 14:30:00', 'America/New_York') AS ts_with_tz
FROM dual;
```

## `AT TIME ZONE`

Convert a `TIMESTAMP` or `TIMESTAMP WITH TIME ZONE` to a different time zone.

Useful when you need to handle timestamps across various time zones, such as in applications that operate in multiple geographic regions.

### Examples

```sql
SELECT SYSTIMESTAMP AT TIME ZONE '+01:00' AS berlin_time
FROM dual;

SELECT SYSTIMESTAMP AT TIME ZONE 'Europe/London' AS london_time
FROM dual;
```
