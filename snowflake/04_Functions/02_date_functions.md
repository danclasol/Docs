# Date Functions

## `CURRENT_DATE()`

Get current date

```sql
SELECT CURRENT_DATE();
```

## `CURRENT_TIME()`

Get current date and time

```sql
SELECT CURRENT_TIME();
```

### `CURRENT_TIMESTAMP()`

Return the current timestamp

```sql
SELECT CURRENT_TIMESTAMP();
```

## DATEADD(unit, value, date)

Adds a value to a date.

```sql
SELECT DATEADD(DAY, 7, '2025-05-26');  -- output: 2025-06-02
```

## DATEDIFF(unit, date1, date2)

Difference between dates.

```sql
SELECT DATEDIFF(DAY, '2025-05-01', '2025-05-26');  -- output: 25
```

## TO_DATE(string)

Converts a string to a date.

```sql
SELECT TO_DATE('2025-05-26'); -- output: 2025-05-26
```

## EXTRACT(part FROM date)

Gets part of a date (e.g., year, month).

```sql
SELECT EXTRACT(YEAR FROM '2025-05-26');  -- output: 2025
```

### DATE_FROM_PARTS(days, month, year)

Construct a date from separate year, month, and day values.

```sql
SELECT DATE_FROM_PARTS(2025, 5, 26);  -- output: 2025-05-26
```
