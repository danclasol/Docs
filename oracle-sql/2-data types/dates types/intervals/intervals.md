# Intevals

`INTERVAL` is used to represent and work with time intervals, such as a span of years, months, days, hours, minutes, or seconds.

Useful when you need to calculate or manipulate time durations rather than specific points in time.

_Oracle SQL_ provides two types of intervals:

- `INTERVAL YEAR TO MONTH`
- `INTERVAL DAY TO SECOND`

## `INTERVAL YEAR TO MONTH`

Stores a period of time in years and months,

It's typically used for durations where you only need to track months or years, such as for calculating ages or contract durations.

### Sintax

```sql
INTERVAL 'n' YEAR[(precision)]
INTERVAL 'n' MONTH[(precision)]
INTERVAL 'n-n' YEAR[(precision)] TO MONTH
```

- `precision` (_optional_): number of digits in the `YEAR`/`MONTH` datetime field.
  - default value: `2`

### Examples

#### Adding years to a date

```sql
-- Adds 2 years to the current date
SELECT SYSDATE + INTERVAL '2' YEAR AS new_date FROM dual;
```

#### Adding months to a date

```sql
-- Adds 6 months to the current date
SELECT SYSDATE + INTERVAL '6' MONTH AS new_date FROM dual;
```

#### Adding a combination of years and months

```sql
-- Adds 1 year and 3 months to the current date
SELECT SYSDATE + INTERVAL '1-3' YEAR TO MONTH AS new_date FROM dual;
```

## `INTERVAL DAY TO SECOND`

Stores a period of time in days, hours, minutes, and seconds.

It's useful for tracking time durations that involve days or smaller units, like calculating differences in timestamps.

### Sintax

```sql
INTERVAL 'n' DAY [(precision)]
INTERVAL 'n' HOUR [(precision)]
INTERVAL 'n' MINUTE [(precision)]
INTERVAL 'n' SECOND [(precision)]
INTERVAL 'n-n' DAY[(precision)] TO SECOND [(fractional_seconds_precision)]
```

- `precision`: maximum number of digits in the datetimes field

  - accepted values: `0` to `9`
  - default value: `2`

- `fractional_seconds_precision`: number of digits in the fractional part of the SECOND field
  - accepted values: `0` to `9`
  - default value: `6`

The size is fixed at 11 bytes.

```sql
INTERVAL DAY [(*day_precision*)] TO SECOND [(*fractional_seconds_precision*)]
```

### Examples

#### Adding days to a date

```sql
-- Adds 10 days to the current date
SELECT SYSDATE + INTERVAL '10' DAY AS new_date FROM dual;
```

#### Adding hours and minutes to a timestamp:

```sql
-- Adds 4 hours and 30 minutes to the current timestamp
SELECT SYSTIMESTAMP + INTERVAL '4:30' HOUR TO MINUTE AS new_timestamp FROM dual;
```

#### Adding a complex interval (days, hours, minutes, and seconds):

```sql
-- Adds 1 day, 12 hours, 30 minutes, and 15 seconds to the current timestamp
SELECT SYSTIMESTAMP + INTERVAL '1 12:30:15' DAY TO SECOND AS new_timestamp FROM dual;
```

#### Subtracting seconds from a timestamp:

```sql
-- Subtracts 45 seconds from the current timestamp
SELECT SYSTIMESTAMP - INTERVAL '45' SECOND AS new_timestamp FROM dual;
```
