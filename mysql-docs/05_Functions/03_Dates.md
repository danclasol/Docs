# Dates Functions

## `NOW()`

Returns current date and time

```sql
SELECT NOW() -- 2025-04-29 12:34:56
```

## `CURDATE()`

Returns current date

```sql
SELECT CURDATE() -- 2025-04-29
```

## `CURTIME()`

Returns current time

```sql
SELECT CURTIME() -- 12:34:56
```

## `DATE()`

Extracts date from a datetime

```sql
SELECT DATE('2025-04-29 12:00') -- 2025-04-29
```

## `YEAR()`

Extracts the year part

```sql
SELECT YEAR('2025-04-29') -- 2025
```

## `MONTH()`

Extracts the month part

```sql
SELECT MONTH('2025-04-29') -- 4
```

## `DAY()`

Extracts the day part

```sql
SELECT DAY('2025-04-29') -- 29
```

## `WEEKDAY()`

Day of week (0=Monday)

```sql
SELECT WEEKDAY('2025-04-29') -- 1
```

## `DAYNAME()`

Name of the day

```sql
SELECT DAYNAME('2025-04-29') -- Tuesday
```

## `DATE_ADD`

Adds interval to date

```sql
SELECT DATE_ADD('2025-04-29', INTERVAL 10 DAY) -- 2025-05-09
```

## `DATE_SUB()`

Subtracts interval from date

```sql
SELECT DATE_SUB('2025-04-29', INTERVAL 1 MONTH) -- 2025-03-29
```

## `LAST_DAY`

Returns the last day of the month for a given date.

```sql
SELECT LAST_DAY('2025-04-10'); -- 2025-04-30
```

## `TIMESTAMPDIFF`

Difference in specified unit

- Units can be: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND

```sql
SELECT TIMESTAMPDIFF(YEAR, '2000-01-01', '2025-01-01') -- 25
SELECT TIMESTAMPDIFF(MONTH, '2025-01-01', '2025-04-29') -- 3
SELECT TIMESTAMPDIFF(DAY, '2025-04-01', '2025-04-29') -- 29
```

## `STR_TO_DATE()`

Converts a string into a DATE or DATETIME, based on the given format string.

```sql
SELECT STR_TO_DATE('29-04-2025', '%d-%m-%Y'); -- 2025-04-29
```
