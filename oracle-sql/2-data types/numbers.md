# Numberic Data Types

## `NUMBER`

Stores zero as well as positive and negative fixed numbers with absolute values from `1.0 x 10-130` to but not including `1.0 x 10126`.

If you specify an arithmetic expression whose value has an absolute value greater than or equal to `1.0 x 10126`, then Oracle returns an error.

Each `NUMBER` value requires from `1` to `22` bytes.

- `p` _precision_: maximum number of significant decimal digits,
  where the most significant digit is the left-most nonzero digit, and the least significant digit is the right-most known digit.

  - range: `1` to `38`

    Oracle guarantees the portability of numbers with precision of up to 20 base-100 digits, which is equivalent to 39 or 40 decimal digits depending on the position of the decimal point.

- `s` _scale_: number of digits from the decimal point to the least significant digit.

  - range: `-84` to `127`

    - Positive scale is the number of significant digits to the right of the decimal point to and including the least significant digit.

    - Negative scale is the number of significant digits to the left of the decimal point, to but not including the least significant digit. For negative scale the least significant digit is on the left side of the decimal point, because the actual data is rounded to the specified number of places to the left of the decimal point. For example, a specification of (10,-2) means to round to hundreds.

```sql
NUMBER(p,s)
```

### Examples

```sql
NUMBER := 123.89 -- store as 123.89
```

```sql
NUMBER(3) := 123.89 -- store as 124
```

```sql
NUMBER(3,2) := 123.89 -- store as exceeds precision
```

```sql
NUMBER(4,2) := 123.89 -- exceeds precision
```

```sql
NUMBER(5,2) := 123.89 -- store as 123.89
```

```sql
NUMBER(6,1) := 123.89 -- store as 123.9
```

```sql
NUMBER(6,-2) = 123.89 -- store as 100
```

```sql
NUMBER(4,5) := .01234 -- store as .01234
```

```sql
NUMBER(4,5) := .00012 -- store as .00012
```

```sql
NUMBER(4,5) := .000127 -- store as .00013
```

```sql
NUMBER(2,7) := .0000012 --store as .0000012
```

```sql
NUMBER(2,7) := .00000123 -- store as .0000012
```

```sql
NUMBER(2,5) := 1.2e-4 -- store as 0.00012
```

```sql
NUMBER(2,5) := 1.2e-5 -- store as 0.00001
```

## `FLOAT`

The `FLOAT` data type is a subtype of `NUMBER`, that stores floating-point number.

Each FLOAT value requires from 1 to 22 bytes

- `p` _precision_: It can be specified with or without precision, which has the same definition it has for NUMBER and can range from 1 to 126.

- `s` _scale_: Scale cannot be specified, but is interpreted from the data

### NUMBER vs FLOAT

Use `NUMBER` when you need precise control over numeric values, especially for fixed-point numbers or cases where precision matters.

Use `FLOAT` when you need floating-point arithmetic and are dealing with large-scale numbers in scientific or engineering contexts, where binary precision is acceptable.

### Examples

```sql
FLOAT(5) := 1.23 -- store as 1.2
FLOAT(5) := 7.89 -- store as 7.9
FLOAT(5) := 12.79 -- store as 13
FLOAT(5) := 123.45 -- store as 120
```

Oracle Database uses the Oracle `FLOAT` data type internally when converting _ANSI_ `FLOAT` data. Oracle `FLOAT` is available for you to use, but Oracle recommends that you use the BINARY_FLOAT and BINARY_DOUBLE data types instead, as they are more robust.

Oracle Database provides two numeric data types exclusively for floating-point numbers:

## BINARY_FLOAT

`BINARY_FLOAT` is a 32-bit, single-precision floating-point number data type.

Each `BINARY_FLOAT` value requires 4 bytes.

- Maximum positive finite value: 3.40282E+38F
- Minimum positive finite value: 1.17549E-38F

## BINARY_DOUBLE

`BINARY_DOUBLE` is a 64-bit, double-precision floating-point number data type.

Each `BINARY_DOUBLE` value requires 8 bytes.

- Maximum positive finite value: 1.79769313486231E+308
- Minimum positive finite value: 2.22507485850720E-308
