# Casting

## `CAST()`

Used to convert a value from one data type to another.

```sql
CAST(value AS target_type)
```

Convert a string to a date:

```sql
SELECT CAST('2025-04-29' AS DATE);
```

Convert a number to a string:

```sql
SELECT CAST(12345 AS CHAR);
```

Convert an expression to a signed integer:​

```sql
SELECT CAST(10 - 20 AS SIGNED);
```

## `FORMAT()`

Used to format numeric values with a specified number of decimal places and thousands separators, returning the result as a string.

- `number`: numeric value to be formatted
- `decimal_places`: number of decimal places to round the number to
- `locale` (optional): determines the formatting conventions
  - 'en_US', 'de_DE'

```sql
FORMAT(number, decimal_places [, locale])
```

```sql
SELECT FORMAT(1234567.89, 2); -- '1,234,567.89'
```

Format a number using a different locale (e.g., Germany):

```sql
SELECT FORMAT(1234567.89, 2, 'es_ES'); -- '1.234.567,89'
```

## `CONVERT()`

Function that serves a dual purpose: it can convert data types and character sets.​

### For data type conversion

```sql
CONVERT(value, target_type)
```

Convert a string to a datetime

```sql
SELECT CONVERT('2025-04-29 14:30:00', DATETIME);
```

### For character set conversion

```sql
CONVERT(value USING charset_name)
```

Convert a string to a different character set:

```sql
SELECT CONVERT('Müller' USING utf8mb4);
```
