# String Methods

## `CONCAT()`

Joins two or more strings

```sql
SELECT VCONCAT('A', 'B') -- 'AB'
```

## `LENGTH()`

Returns the number of characters

```sql
SELECT LENGTH('test') -- 4
```

## `UPPER()`

Returns a string that has all the characters in upper case.

```sql
SELECT UPPER('hello') -- 'HELLO'
```

## `LOWER()`

Returns returns the lower case of the given string.

```sql
SELECT LOWER('HELLO') -- 'hello'
```

## `SUBSTR()` or `SUBSTRING()`

Extracts part of a string.

```sql
SELECT SUBSTRING('abcdef', 2, 3) → 'bcd'
```

## `INSTR()`

Returns position of substring

```sql
SELECT INSTR('hello', 'e') -- 2
```

## `REPLACE()`

Replaces part of a string

```sql
SELECT REPLACE('car', 'c', 'b')-- 'bar'
```

## `LEFT()`

Gets the leftmost N characters

```sql
SELECT LEFT('banana', 3) -- 'ban'
```

## `RIGHT()`

Gets the rightmost N characters

```sql
SELECT RIGHT('banana', 3) -- 'ana'
```

## `TRIM()`

Returns a trimmed string.

```sql
SELECT TRIM(' abc ') -- 'abc'
```

## `LTRIM()`

Returns a string after removing all the white spaces and characters from the string found on the left side.

```sql
SELECT LTRIM(' abc') -- 'abc'
```

## `RTRIM()`

Returns a string after removing all trailing blanks.

```sql
SELECT RTRIM('abc ') -- 'abc'
```

## `REPEAT()`

Repeats a string a given number of times

```sql
SELECT REPEAT('ha', 3) -- 'hahaha'
```

## `REVERSE()`

Returns a reversed string.

```sql
SELECT REVERSE('abc') -- 'cba'
```

## `STRING_SPLIT()`

Splits a string into rows of substrings.
