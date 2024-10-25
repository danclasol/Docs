## `TIMESTAMP`

Extends `DATE` by including fractional seconds, allowing more precise time details.

- The size is fixed at 13 bytes.
- This data type contains the datetime fields `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, `SECOND`, `TIMEZONE_HOUR`, and `TIMEZONE_MINUTE`.

```sql
TIMESTAMP [(*fractional_seconds_precision*)]
```

### Fractional seconds precision

You can specify the fractional precision with the parameter _fractional_seconds_precision_, which is the number of digits in the fractional part of the SECOND datetime field.

- Accepted values are `0` to `9`
- The default is `6`

```sql
TIMESTAMP(3) -- for milliseconds
```

### Format

Default format is _YYYY-MM-DD HH24:MI:SS.FF_ (where .FF is fractional seconds).

## `TIMESTAMP WITH TIME ZONE`

Similar to `TIMESTAMP`, but includes time zone information (offset from UTC or a time zone region).

Useful when working with data across multiple time zones, as it tracks the exact time zone for each entry.

```sql
TIMESTAMP [(*fractional_seconds_precision*)] WITH TIME ZONE
```

### Format

Default format is _YYYY-MM-DD HH24:MI:SS.FF TZH:TZM_

- `TZH:TZM`: time zone offset from UTC (hours and minutes).
  - time zone can be specify the using the region name like `America/New_York`

The default date format is determined by the `NLS_TIMESTAMP_TZ_FORMAT` initialization parameter.

```sql
TIMESTAMP '2024-10-14 12:30:00 -07:00'
```

## Example

```sql
SELECT CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Tokyo' FROM dual;
```

## `TIMESTAMP WITH LOCAL TIME ZONE`

Stores the date and time without storing the time zone itself, but it normalizes and converts the time to the session's time zone.

Internally, Oracle stores this value in _UTC_ and automatically converts it to the user's session time zone when retrieved.

```sql
TIMESTAMP [(*fractional_seconds_precision*)] WITH LOCAL TIME ZONE
```

## Format

Default format is _TIMESTAMP 'YYYY-MM-DD HH24:MI:SS.FF'_

```sql
TIMESTAMP '2024-10-14 12:30:00' AT TIME ZONE 'UTC'
```

## Example

```sql
SELECT CURRENT_TIMESTAMP AT TIME ZONE 'Asia/Tokyo' FROM dual;
```
