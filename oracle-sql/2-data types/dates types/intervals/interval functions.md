# Functions

## `TO_DSINTERVAL`

Converts a string into an `INTERVAL DAY TO SECOND` data type.

```sql
TO_DSINTERVAL('days hours:minutes:seconds')
```

The input string must be in the format: 'days hours:minutes:seconds'

- `days`: The number of days in the interval.
- `hours`: The number of hours in the interval.
- `minutes`: The number of minutes in the interval.
- `seconds`: The number of seconds in the interval.

The days, hours, minutes, and seconds are optional, but the format must adhere to the syntax.

### Example

```sql
SELECT TO_DSINTERVAL('5 03:45:30') AS interval_result FROM dual;
SELECT TO_DSINTERVAL('P1D') AS interval_result FROM dual;
```

## `TO_YMINTERVAL`

Converts a string into an `INTERVAL YEAR TO MONTH` data type.

```sql
TO_YMINTERVAL('years-months')
```

- `years-months`: string in the format 'years-months'
  - `years`: Represents the number of years
  - `months`: Represents the number of months

### Example

```sql
SELECT TO_YMINTERVAL('2-6') AS interval_result FROM dual;
SELECT TO_YMINTERVAL('P99Y1M') AS interval_result FROM dual;
```

## `NUMTODSINTERVAL`

Converts a numeric value into an INTERVAL DAY TO SECOND data type.

```sql
NUMTODSINTERVAL(numeric_value, 'unit')
```

- `numeric_value`: The numeric value representing the amount of time.
- `unit`: The unit of time for the interval. This must be one of the following:
  - `DAY`
  - `HOUR`
  - `MINUTE`
  - `SECOND`

### Examples

```sql
SELECT NUMTODSINTERVAL(10, 'DAY') AS interval_result FROM dual;
SELECT NUMTODSINTERVAL(2, 'HOUR') AS interval_result FROM dual;
SELECT NUMTODSINTERVAL(8600, 'SECOND') AS interval_result FROM dual;
```

## `NUMTOYMINTERVAL`

Converts a numeric value into an `INTERVAL YEAR TO MONTH` data type.

```sql
NUMTOYMINTERVAL(numeric_value, 'unit')
```

- `numeric_value`: numeric value representing the amount of time
- `unit`: The unit of time for the interval.
  - `YEAR`
  - `MONTH`

### Example

```sql
SELECT NUMTOYMINTERVAL(5, 'YEAR') AS interval_result FROM dual;
SELECT NUMTOYMINTERVAL(253, 'MONTH') AS interval_result FROM dual;
```
