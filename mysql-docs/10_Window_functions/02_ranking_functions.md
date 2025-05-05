# Ranking functions

## `ROW_NUMBER()`

Assigns a unique sequential number to each row.

### Ranking of best salaries

| employee_id | name  | salary | row_number |
| ----------- | ----- | ------ | ---------- |
| 1           | Alice | 8000   | 1          |
| 2           | Bob   | 7500   | 2          |
| 3           | Carol | 7500   | 3          |
| 4           | Dave  | 7000   | 4          |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    ROW_NUMBER() OVER (ORDER BY salary DESC) AS row_number,
FROM employees
ORDER BY salary DESC;
```

### Ranking of best salaries by department

| employee_id | name  | dept | salary | row_number |
| ----------- | ----- | ---- | ------ | ---------- |
| 1           | Alice | 10   | 8000   | 1          |
| 2           | Bob   | 10   | 7500   | 2          |
| 3           | Carol | 10   | 7500   | 3          |
| 4           | Marie | 10   | 6500   | 4          |
| 5           | Dave  | 20   | 6000   | 1          |
| 6           | Peter | 20   | 4500   | 2          |
| 7           | Karen | 20   | 3000   | 3          |

```sql
SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    ROW_NUMBER() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY department_id, salary DESC;
```

### Ranking of best salaries by department and region

| employee_id | name  | region | dept | salary | row_number |
| ----------- | ----- | ------ | ---- | ------ | ---------- |
| 1           | Alice | North  | 10   | 8000   | 1          |
| 2           | Bob   | North  | 10   | 7500   | 2          |
| 3           | Carol | West   | 10   | 7500   | 1          |
| 4           | Marie | West   | 10   | 6500   | 2          |
| 4           | Dave  | West   | 20   | 6500   | 3          |
| 5           | Peter | West   | 20   | 4500   | 4          |
| 6           | Karen | South  | 20   | 3000   | 1          |

```sql
SELECT
    employee_id,
    employee_name,
    region,
    department_id,
    salary,
    ROW_NUMBER() OVER (
            PARTITION BY region, department_id
            ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY region, department_id, salary DESC;
```

## `RANK()`

Assigns a rank, allowing gaps in case of ties.

### Ranking of best salaries

| employee_id | name  | salary | rank |
| ----------- | ----- | ------ | ---- |
| 1           | Alice | 8000   | 1    |
| 2           | Bob   | 7500   | 2    |
| 3           | Carol | 7500   | 2    |
| 4           | Dave  | 7000   | 4    |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    RANK() OVER (ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY department_id, salary DESC;
```

### Ranking of best salaries by department

| employee_id | name  | dept | salary | rank |
| ----------- | ----- | ---- | ------ | ---- |
| 1           | Alice | 10   | 8000   | 1    |
| 2           | Bob   | 10   | 7500   | 2    |
| 3           | Carol | 10   | 7500   | 2    |
| 4           | Marie | 10   | 6500   | 4    |
| 5           | Dave  | 20   | 6000   | 1    |
| 6           | Peter | 20   | 4500   | 2    |
| 7           | Karen | 20   | 3000   | 3    |

```sql
SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    RANK() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY department_id, salary DESC;
```

### Ranking of best salaries by department and region

| employee_id | name  | region | dept | salary | rank |
| ----------- | ----- | ------ | ---- | ------ | ---- |
| 1           | Alice | North  | 10   | 8000   | 1    |
| 2           | Bob   | North  | 10   | 7500   | 2    |
| 3           | Carol | West   | 10   | 7500   | 1    |
| 4           | Marie | West   | 10   | 6500   | 2    |
| 4           | Dave  | West   | 20   | 6500   | 2    |
| 5           | Peter | West   | 20   | 4500   | 4    |
| 6           | Karen | South  | 20   | 3000   | 1    |

```sql
SELECT
    employee_id,
    employee_name,
    region,
    department_id,
    salary,
    RANK() OVER (
            PARTITION BY region, department_id
            ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY region, department_id, salary DESC;
```

## `DENSE_RANK()`

Like `RANK()`, but no gaps (dense numbering).

### Ranking of best salaries

| employee_id | name  | salary | dense_rank |
| ----------- | ----- | ------ | ---------- |
| 1           | Alice | 8000   | 1          |
| 2           | Bob   | 7500   | 2          |
| 3           | Carol | 7500   | 2          |
| 4           | Dave  | 7000   | 3          |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank,
FROM employees
ORDER BY salary DESC;
```

### Ranking of best salaries by department

| employee_id | name  | dept | salary | dense_rank |
| ----------- | ----- | ---- | ------ | ---------- |
| 1           | Alice | 10   | 8000   | 1          |
| 2           | Bob   | 10   | 7500   | 2          |
| 3           | Carol | 10   | 7500   | 2          |
| 4           | Marie | 10   | 6500   | 3          |
| 5           | Dave  | 20   | 6000   | 1          |
| 6           | Peter | 20   | 4500   | 2          |
| 7           | Karen | 20   | 3000   | 3          |

```sql
SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    DENSE_RANK() OVER (
            PARTITION BY department_id
            ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY department_id, salary DESC;
```

### Ranking of best salaries by department and region

| employee_id | name  | region | dept | salary | dense_rank |
| ----------- | ----- | ------ | ---- | ------ | ---------- |
| 1           | Alice | North  | 10   | 8000   | 1          |
| 2           | Bob   | North  | 10   | 7500   | 2          |
| 3           | Carol | West   | 10   | 7500   | 1          |
| 4           | Marie | West   | 10   | 6500   | 2          |
| 4           | Dave  | West   | 20   | 6500   | 2          |
| 5           | Peter | West   | 20   | 4500   | 3          |
| 6           | Karen | South  | 20   | 3000   | 1          |

```sql
SELECT
    employee_id,
    employee_name,
    region,
    department_id,
    salary,
    DENSE_RANK() OVER (
            PARTITION BY region, department_id
            ORDER BY salary DESC) AS rank,
FROM employees
ORDER BY region, department_id, salary DESC;
```

## `PERCENT_RANK()`

Percent rank (0 to 1) showing relative standing

| employee_id | name  | salary | percent_rank |
| ----------- | ----- | ------ | ------------ |
| 1           | Alice | 8000   | 0.00         |
| 2           | Bob   | 7500   | 0.33         |
| 3           | Carol | 7500   | 0.33         |
| 4           | Dave  | 7000   | 1.00         |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    PERCENT_RANK() OVER (ORDER BY salary DESC) AS percent_rank
FROM employees
ORDER BY salary DESC;
```

## Compare `RANK()`, `DENSE_RANK()` and `ROW_NUMBER()`

- `RANK()`: skips numbers after ties
- `DENSE_RANK()`: no gaps
- `ROW_NUMBER()`: no ties — each row gets a unique number

| employee_id | name  | salary | rank | dense_rank | row_number |
| ----------- | ----- | ------ | ---- | ---------- | ---------- |
| 1           | Alice | 8000   | 1    | 1          | 1          |
| 2           | Bob   | 7500   | 2    | 2          | 2          |
| 3           | Carol | 7500   | 2    | 2          | 3          |
| 4           | Dave  | 7000   | 4    | 3          | 4          |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    RANK() OVER(ORDER BY salary DESC) AS row_number,
    DENSE_RANK() OVER(ORDER BY salary DESC) AS row_number,
    ROW_NUMBER() OVER(ORDER BY salary DESC) AS row_number,
FROM employees
ORDER BY salary DESC;
```
