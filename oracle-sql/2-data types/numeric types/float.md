# `FLOAT`

The `FLOAT` data type is a subtype of `NUMBER`, that stores floating-point number.

Each FLOAT value requires from 1 to 22 bytes

- `p` _precision_: It can be specified with or without precision, which has the same definition it has for NUMBER and can range from 1 to 126.

- `s` _scale_: Scale cannot be specified, but is interpreted from the data

## NUMBER vs FLOAT

Use `NUMBER` when you need precise control over numeric values, especially for fixed-point numbers or cases where precision matters.

Use `FLOAT` when you need floating-point arithmetic and are dealing with large-scale numbers in scientific or engineering contexts, where binary precision is acceptable.

## Examples

```sql
FLOAT(5) := 1.23 -- store as 1.2
FLOAT(5) := 7.89 -- store as 7.9
FLOAT(5) := 12.79 -- store as 13
FLOAT(5) := 123.45 -- store as 120
```

FLoat is a SQL standard. Oracle `FLOAT` is available for you to use, but Oracle recommends that you use the `BINARY_FLOAT` and `BINARY_DOUBLE` data types instead, as they are more robust.

## BINARY_FLOAT

Stores floating point nmbers.

`BINARY_FLOAT` is a `32-bit`, single-precision floating-point number data type.

Use it if performance is important or accuracy is not important.

Each `BINARY_FLOAT` value requires 4 bytes.

- Maximum positive finite value: 3.40282E+38F
- Minimum positive finite value: 1.17549E-38F

## BINARY_DOUBLE

Stores double numbers.

`BINARY_DOUBLE` is a `64-bit`, double-precision floating-point number data type.

Use it if performance is important or accuracy is not important and is not enough with a `BINARY_FLOAT`.

Each `BINARY_DOUBLE` value requires 8 bytes.

- Maximum positive finite value: 1.79769313486231E+308
- Minimum positive finite value: 2.22507485850720E-308
