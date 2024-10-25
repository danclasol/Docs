# Functions

## `SYSDATE`

Get current date from database.

```sql
SELECT SYSDATE FROM DUAL;
```

## `TO_DATE`

Function that implicity converts a string into a date.

### Sintax

```sql
TO_DATE(<string> [, format_mask][, nls_language])
```

- `string`: value you want to convert into a date
- `format_mask`: format mask of the input string
  - `dd/mm/yyyy`
- `nls_language`: language of the text string that is being converted to a date -`NLS_DATE_LANGUAGE` = language'

To avoid errors, it is recommened to always use implicit conversion. In case another client is not hasn't the same date settings as you.

### Example

```sql
SELECT TO_DATE('2024-10-14', 'YYYY-MM-DD') FROM dual;
SELECT TO_DATE('2024-10-14 15:30:00', 'YYYY-MM-DD HH24:MI:SS') FROM dual;
SELECT TO_DATE('14-Oct-2024', 'DD-Mon-YYYY', 'NLS_DATE_LANGUAGE = English') FROM dual;
```

### Defining Default value

You can also set a default value if the conversion fails.

```sql
SELECT *
FROM dual
WHERE
    datetime_col > TO_DATE('31-02-2023' DEFAULT '31-12-9999' ON CONVERSION ERROR, 'DD-MM-YYYY')
```

## `VALIDATE_CONVERSION`

Check whether a given value can be converted to a specified data type without actually performing the conversion.

This function returns:

- `1` if the conversion is possible
- `0` if the conversion is not possible

### Sintax

```sql
VALIDATE_CONVERSION(<expression> as <data_type>[, format_mask][, nls_language])
```

- `value`: The value you want to check for convertibility.
- `datatype`: The target data type you want to validate against (e.g., NUMBER, DATE).
- `DEFAULT default_value ON CONVERSION ERROR` (_optional_): Specifies a default value to use if the conversion fails

### Example

```sql
SELECT *
FROM dual
WHERE
    VALIDATE_CONVERSION('16-Feb-2023' as date, 'DD-Mon-YYYY') = 1
```

## `TRUNC`

Truncates to the beginning of the specified unit (no rounding).

Always sets the date to the start of the unit (like the first day of the month, first hour of the day, etc.).

### Sintax

```sql
TRUNC(date, [date_format])
```

- `date`: The date value to be truncated
- `date_format` (_optional_): The date part to which the date is truncated.
  - `YEAR`, `MONTH`, `DAY`
  - default value: `DAY`

### Example

#### Truncates the current date to the start of the day

```sql
SELECT TRUNC(systimestamp) FROM DUAL; -- removes the seconds
SELECT TRUNC(TO_DATE('18/10/2024','dd/mm/yyyy')) FROM DUAL; -- 18/12/2024
```

#### Truncates the current date to the start of the month

```sql
SELECT TRUNC(TO_DATE('18/10/2024','dd/mm/yyyy'), 'MONTH') FROM DUAL; -- 01/10/2024
```

#### Truncates the current date to the start of the year

```sql
SELECT TRUNC(TO_DATE('18/10/2024','dd/mm/yyyy'), 'YEAR') FROM DUAL; -- 01/01/2024
```

## `ROUND`

Round a date to a specific unit (like year, month, or day). It rounds the date up or down based on the nearest boundary for that unit.

### Sintax

```sql
ROUND(date, [format])
```

- `date`: The date value you want to round.
- `format` (_optional_): Specifies the unit to which you want to round the date
  - `YEAR` or `YYYY`: Rounds to the nearest year.
  - `MONTH` or `MM`: Rounds to the nearest month.
  - `DAY` or `DD`: Rounds to the nearest day (default).
  - `HH` or `HH24`: Rounds to the nearest hour.
  - `MI`: Rounds to the nearest minute.

### Example

Rounds the current date to the nearest year

```sql
SELECT ROUND(TO_DATE('18/12/2024','dd/mm/yyyy'), 'YEAR') FROM dual; -- 01/01/2025 (nearest year is 2025)
SELECT ROUND(TO_DATE('06/03/2024','dd/mm/yyyy'), 'YEAR') FROM dual; -- 01/01/2024 (nearest year is 2024
```

Rounds the current date to the nearest month

```sql
SELECT ROUND(TO_DATE('18/12/2024','dd/mm/yyyy'), 'MONTH') FROM dual; -- 01/01/2025 (nearest month is January)
SELECT ROUND(TO_DATE('06/03/2024','dd/mm/yyyy'), 'MONTH') FROM dual; -- 01/03/2024 (nearest month is March)
```

## `TO_CHAR`

Converts date (or timestamp) data types into a formatted string.

This is especially useful for presenting dates in a specific format or for extracting parts of a date, like the year or month, as strings.

### Syntax

```sql
TO_CHAR(date, 'format_model')
```

- `date`: date or timestamp you want to convert to a string
- `format_model` (_optional_): specifies the format in which you want the date to be returned

### Examples

Here are some commonly used format elements.

```sql
SELECT TO_CHAR(sysdate, 'YYYY') FROM DUAL; -- 	Year (4 digits)	= 2024
SELECT TO_CHAR(sysdate, 'YY') FROM DUAL; -- Year (last 2 digits) = 24
SELECT TO_CHAR(sysdate, 'MM') FROM DUAL; -- Month (2 digits) = 10
SELECT TO_CHAR(sysdate, 'MON') FROM DUAL; -- 	Abbreviated month name = OCT
SELECT TO_CHAR(sysdate, 'MONTH') FROM DUAL; -- Full month name = OCTOBER
SELECT TO_CHAR(sysdate, 'DD') FROM DUAL; -- Day of the month	17
SELECT TO_CHAR(sysdate, 'DY') FROM DUAL; -- 	Abbreviated day name	THU
SELECT TO_CHAR(sysdate, 'DAY')	FROM DUAL; -- Full day name =	THURSDAY
SELECT TO_CHAR(sysdate, 'HH24') FROM DUAL; -- Hour (24-hour format) =	16
SELECT TO_CHAR(sysdate, 'HH12') FROM DUAL; -- Hour (12-hour format)	= 04
SELECT TO_CHAR(sysdate, 'MI') FROM DUAL; -- Minute = 30
SELECT TO_CHAR(sysdate, 'SS') FROM DUAL; -- Second = 45
SELECT TO_CHAR(sysdate, 'AM/PM') FROM DUAL; -- Meridian indicator	= PM
```

Yo can also mix one or more format elements to create custom formats.

```sql
SELECT TO_CHAR(sysdate, 'YYYY MON DD') FROM DUAL; -- 2024 Oct 12
```

## `CAST`

Converts between different date-related data types or to convert date strings into `DATE` or `TIMESTAMP` types.

However, `CAST` does not support formatting like `TO_CHAR`.

### Sintax

```sql
CAST(expression AS target_data_type)
```

- `expression`: value or expression you want to convert
- `target_data_type`: desired data type for the conversion
  - such as `DATE` or `TIMESTAMP`

### Examples

#### Converting Strings to Dates

Ensure the string format matches the expected default format.

```sql
SELECT CAST('2024-10-17' AS DATE) AS date_value FROM dual;
```

#### Converting Dates to Timestamps

```sql
SELECT CAST(SYSDATE AS TIMESTAMP) AS timestamp_value FROM dual; -- 17/10/2024 15:25:16,000000000
```

#### Casting with TIMESTAMP WITH TIME ZONE

```sql
SELECT CAST(SYSTIMESTAMP AS TIMESTAMP WITH TIME ZONE) AS ts_with_tz FROM dual; -- 17/10/2024 15:25:39,219000000 +02:00
```

#### Casting with TIMESTAMP WITH TIME ZONE

In this case, it looses any fractional seconds and time zone.

```sql
SELECT CAST(SYSTIMESTAMP AS DATE) AS dt FROM dual; -- 17/10/2024
```

## `NEXT_DAY`

Finds the next occurrence of a specific day of the week after a given date.

```sql
-- Returns the next Monday after the current date
SELECT NEXT_DAY(SYSDATE, 'MONDAY') AS next_monday FROM dual;
```

## `LAST_DAY`

Returns the last day of the month for a given date.

```sql
-- Returns the last day of the current month
SELECT LAST_DAY(SYSDATE) AS last_day_of_month FROM dual;
```

## EXTRACT

Retrieves a specific part (such as year, month, day, hour, minute, or second) from a date or timestamp.

```sql
EXTRACT (datetime_field FROM {date | timestamp})
```

- `datetime_field`: part of the date or timestamp you want to extract
- `date` | `timestamp`: date or timestamp value from which you want to extract the component.

```sql
SELECT
  EXTRACT(DAY FROM SYSTIMESTAMP) AS day,
  EXTRACT(MONTH FROM SYSTIMESTAMP) AS month,
  EXTRACT(YEAR FROM SYSTIMESTAMP) AS year,
  EXTRACT(HOUR FROM SYSTIMESTAMP) AS hour,
  EXTRACT(MINUTE FROM SYSTIMESTAMP) AS minute,
  EXTRACT(SECOND FROM SYSTIMESTAMP) AS second,
  EXTRACT(TIMEZONE_HOUR FROM SYSTIMESTAMP) AS tz_hour,
  EXTRACT(TIMEZONE_MINUTE FROM SYSTIMESTAMP) AS tz_minute
FROM dual;
```
