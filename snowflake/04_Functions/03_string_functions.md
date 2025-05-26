# String Functions

## `LEFT()`

Returns the leftmost `N` characters of a string.

```sql
SELECT LEFT('Snowflake', 4);  -- output: 'Snow'
```

## `RIGHT()`

Returns the rightmost `N` characters of a string.

```sql
SELECT RIGHT('Snowflake', 4); -- output: 'flake'
```

## `SPLIT()`

```sql
SELECT SPLIT('apple,banana,cherry', ',') AS fruits; -- output: ['apple', 'banana', 'cherry']
```

## `SPLIT_PART()`

Splits a string into parts using a delimiter and returns the `nth` part.

```sql
SELECT SPLIT_PART('apple,banana,cherry', ',', 2); -- output: banana
SELECT SPLIT_PART('2025-05-26', '-', 1);  -- output: 2025
```
