# Windows Function

Window Functions are a powerful SQL feature used to perform calculations across a set of table rows that are somehow related to the current row.

Unlike aggregate functions, which return a single value after grouping, window functions return a value for each row.

Each row retains its original identity, and you can compute things like:

- running totals
- ranks
- moving averages
- etc

## Syntax

- `PARTITION BY` (optional)
  - divides the result set into groups of data (partitions)
  - allow to apply funtions for each group separately
- `ORDER BY` (optional)
  - specifies the order of rows within each partition
- `ROWS BETWEEN` (optional)
  - defines the frame
  - ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING

```sql
<window_funcion>() OVER (
    [PARTITION BY <columns> ]
    [ORDER BY <columns>])
```

## `ROWS BETWEEN`

The `ROWS BETWEEN` clause is used with window functions to define a custom "window frame": the subset of rows over which the function will operate for each row.

It tells SQL "From which row to which row around the current one should the function calculate?"

- control which rows around the current one are used
- more precise than just PARTITION BY and ORDER BY alone
- essential for running totals, moving averages, rolling counts, etc

### Example

| student_id | subject | score | moving_avg |
| ---------- | ------- | ----- | ---------- |
| 1          | Math    | 80    | 80.0       |
| 2          | Math    | 90    | 85.0       |
| 3          | Math    | 75    | 82.5       |
| 4          | English | 88    | 88.0       |
| 5          | English | 92    | 90.0       |
| 6          | English | 85    | 88.5       |

Explanation of calculations:

- student 1 (Math, score 80)
  - moving_avg = `(0 + 80) / 1 = 80.0`
- student 2 (Math, score 90)
  - moving_avg = `(80 + 90) / 2 = 85.0`
- student 3 (Math, score 75)
  - moving_avg = `(90 + 75) / 2 = 82.5`

```sql
SELECT
  student_id,
  subject,
  score,
  AVG(score) OVER (
    PARTITION BY subject
    ORDER BY student_id
    ROWS BETWEEN 1 PRECEDING AND CURRENT ROW
  ) AS moving_avg
FROM student_scores;
```

### Common Frame options

From the first row in the partition up to the current row

- start: UNBOUNDED PRECEDING
- end: CURRENT ROW

```sql
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
```

From 1 row before to the current row

- start: 1 PRECEDING
- end: CURRENT ROW

```sql
ROWS BETWEEN 1 PRECEDING AND CURRENT ROW
```

From current row to 1 row after

- start: CURRENT ROW
- end: 1 FOLLOWING

```sql
ROWS BETWEEN CURRENT ROW AND 1 FOLLOWING
```

Entire partition (like a full GROUP BY)

- start: UNBOUNDED PRECEDING
- end: UNBOUNDED FOLLOWING

```sql
ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
```
