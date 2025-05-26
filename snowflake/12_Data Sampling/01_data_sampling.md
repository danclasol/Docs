# SAMPLE / TABLESAMPLE

Returns a subset of rows sampled randomly from the specified table.

- testing or debugging
- previewing large datasets
- reducing compute cost during development

```sql
SELECT ...
FROM ...
  { SAMPLE | TABLESAMPLE } [ samplingMethod ]
[ ... ]
```

## Sampling methods

### BERNOULLI (or ROW)

Includes each row with a probability of _p/100._

- similar to flipping a weighted coin for each row
- random row sampling
- slower but accurate
- recommended for smaller tables

```sql
{ BERNOULLI | ROW } ( <probability> | <num> ROWS )
```

### SYSTEM (or BLOCK)

Includes each block of rows with a probability of _p/100_

- similar to flipping a weighted coin for each block of rows
- block-level sampling
- faster but less precise
- recommended for larger tables

```sql
{ SYSTEM | BLOCK } ( <probability> ) [ { REPEATABLE | SEED } ( <seed> ) ]
```

### `<probability>`

Specifies the percentage probability to use for selecting the sample

```sql
SELECT * FROM SNOWFLAKE_SAMPLE_DATA.TPCDS_SF100TCL.CUSTOMER_ADDRESS
SAMPLE ROW (10);
```

### `<num ROWS>`

Specifies the number of rows (up to 1,000,000) to sample from the table

```sql
SELECT * FROM SNOWFLAKE_SAMPLE_DATA.TPCDS_SF100TCL.CUSTOMER_ADDRESS
SAMPLE ROW (10 ROWS);
```

### `<seed>`

A seed value to make the sampling deterministic.

- if you run a query multiple times with the same seed, you'll always get the same row.
- if you change the seed (e.g., SEED(99)), the sampled row will change.
- only applies to SYSTEM and BLOCK sampling

```sql
SELECT * FROM SNOWFLAKE_SAMPLE_DATA.TPCDS_SF100TCL.CUSTOMER_ADDRESS
SAMPLE SYSTEM (10);
```

## Examples

Return a sample of a table in which each row has a 10% probability of being included in the sample:

```sql
SELECT * FROM testtable SAMPLE (10);
```

Return a sample of a table in which each row has a 20.3% probability of being included in the sample:

```sql
SELECT * FROM testtable TABLESAMPLE BERNOULLI (20.3);
```

Return an entire table, including all rows in the table:

```sql
SELECT * FROM testtable TABLESAMPLE (100);
```

Return an empty sample:

```sql
SELECT * FROM testtable SAMPLE ROW (0);
```

Return a sample of a table in which each block of rows has a 3% probability of being included in the sample, and set the seed to 82:

```sql
SELECT * FROM testtable SAMPLE SYSTEM (3) SEED (82);
```

Return a sample of a table in which each block of rows has a 0.012% probability of being included in the sample, and set the seed to 99992:

```sql
SELECT * FROM testtable SAMPLE BLOCK (0.012) REPEATABLE (99992);
```
