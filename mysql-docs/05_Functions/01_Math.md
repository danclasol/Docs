# Number Functions

## `ABS()`

Returns the absolute value of numeric expression.

```sql
SELECT ABS(-10);  -- Result: 10
```

## `CEIL()` or `CAILING()`

Rounds a number up to the nearest integer.

```sql
SELECT CEIL(4.2);     -- Result: 5
SELECT CEILING(3.01); -- Result: 4
```

## `FLOOR()`

Returns the largest integer value that is not greater than passed numeric expression.

```sql
SELECT FLOOR(7.8);  -- Result: 7
```

## `ROUND()`

Returns numeric expression rounded to an integer.

Can be used to round an expression to a number of decimal points

```sql
SELECT ROUND(5.678, 2);  -- Result: 5.68
SELECT ROUND(5.678, 0);  -- Result: 6
```

## `SIGN()`

Returns the sign of a number, indicating whether it is positive, negative, or zero.

```sql
SELECT SIGN(10);     -- Result: 1
SELECT SIGN(0);      -- Result: 0
SELECT SIGN(-25.5);  -- Result: -1
```

## `MOD()`

Returns the remainder of division.

```sql
SELECT MOD(10, 3);  -- Result: 1
```

## `POWER()` or `POW()`

Returns the value of one expression raised to the power of another expression.

```sql
SELECT POWER(2, 3);  -- Result: 8
```

## `SQRT()`

Returns the non-negative square root of numeric expression.

```sql
SELECT SQRT(25);  -- Result: 5
```

## `RAND()`

Returns a random number between 0 and 1.

```sql
SELECT RAND(); -- Result: varies (e.g., 0.72923)
```
