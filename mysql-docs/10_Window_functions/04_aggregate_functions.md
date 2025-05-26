# Aggreagation functions

## `SUM()`

Adds up values

### Total sum salary of employees on each row

| employee_id | name  | salary | total |
| ----------- | ----- | ------ | ----- |
| 1           | Alice | 8000   | 29000 |
| 2           | Bob   | 7500   | 29000 |
| 3           | Carol | 6500   | 29000 |
| 4           | Marie | 7000   | 29000 |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    SUM(salary) OVER () AS sum_salary
FROM employees
ORDER BY employee_id;
```

### Running total salary of employees

| employee_id | name  | salary | running_total |
| ----------- | ----- | ------ | ------------- |
| 1           | Alice | 8000   | 8000          |
| 2           | Bob   | 7500   | 15500         |
| 3           | Carol | 6500   | 22000         |
| 4           | Marie | 3000   | 25000         |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    SUM(salary) OVER (ORDER BY employee_id) AS running_total
FROM employees
ORDER BY employee_id;
```

### Running total salary of employees by department

| employee_id | name  | dept | salary | running_total |
| ----------- | ----- | ---- | ------ | ------------- |
| 1           | Alice | 10   | 8000   | 8000          |
| 2           | Bob   | 10   | 7500   | 15500         |
| 3           | Carol | 10   | 6500   | 22000         |
| 4           | Marie | 20   | 7000   | 7000          |
| 4           | Dave  | 20   | 6500   | 13500         |
| 5           | Peter | 20   | 4500   | 18000         |

```sql
SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    SUM(salary) OVER (
                    PARTITION BY department_id
                    ORDER BY employee_id) AS running_total
FROM employees
ORDER BY employee_id;
```

### Total salary of employees by department on each row

| employee_id | name  | dept | salary | total_dept |
| ----------- | ----- | ---- | ------ | ---------- |
| 1           | Alice | 10   | 8000   | 22000      |
| 2           | Bob   | 10   | 7500   | 22000      |
| 3           | Carol | 10   | 6500   | 22000      |
| 4           | Marie | 20   | 7000   | 18000      |
| 4           | Dave  | 20   | 6500   | 18000      |
| 5           | Peter | 20   | 4500   | 18000      |

```sql
SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    SUM(salary) OVER (PARTITION BY department_id) AS total_dept
FROM employees
ORDER BY employee_id;
```

## `AVG()`

Calculates the average

### Total Average salary of employees on each row

| employee_id | name  | salary | avg  |
| ----------- | ----- | ------ | ---- |
| 1           | Alice | 8000   | 7250 |
| 2           | Bob   | 7500   | 7250 |
| 3           | Carol | 6500   | 7250 |
| 4           | Marie | 7000   | 7250 |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    AVG(salary) OVER () AS avg_salary
FROM employees
ORDER BY employee_id;
```

### Department average salary of employees

| employee_id | name  | dept | salary | avg  |
| ----------- | ----- | ---- | ------ | ---- |
| 1           | Alice | 10   | 8000   | 7750 |
| 2           | Bob   | 10   | 7500   | 7750 |
| 3           | Carol | 20   | 6500   | 4750 |
| 4           | Marie | 20   | 3000   | 4750 |

```sql
SELECT
    employee_id,
    employee_name,
    department_id,
    salary,
    AVG(salary) OVER (PARTITION BY department_id) AS dept_avg
FROM employees
ORDER BY employee_id;
```

### Running average salary of employees

| employee_id | name  | salary | running_avg |
| ----------- | ----- | ------ | ----------- |
| 1           | Alice | 8000   | 8000        |
| 2           | Bob   | 7500   | 7750        |
| 3           | Carol | 6500   | 7333        |
| 4           | Marie | 3000   | 5666        |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    AVG(salary)
        OVER (
            ORDER BY employee_id
            ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS runnig_avg
FROM employees
ORDER BY employee_id;
```

### Rolling average salary of employees (last 3 rows)

| employee_id | name  | salary | rolling_avg |
| ----------- | ----- | ------ | ----------- |
| 1           | Alice | 8000   | 8000        |
| 2           | Bob   | 7500   | 7750        |
| 3           | Carol | 6500   | 7333        |
| 4           | Marie | 3000   | 6250        |

```sql
SELECT
    employee_id,
    employee_name,
    salary,
    AVG(salary)
        OVER (
            ORDER BY employee_id
            ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS rolling_avg
FROM employees
ORDER BY employee_id;
```

## `COUNT()`

Counts the number of rows

### Count all rows

| student_id | score | count |
| ---------- | ----- | ----- |
| 1          | 80    | 5     |
| 2          | 90    | 5     |
| 3          | 75    | 5     |
| 4          | 88    | 5     |
| 5          | 92    | 5     |

```sql
SELECT
    student_id,
    score,
    COUNT(*) OVER () AS student_count
FROM student_scores;
```

### Count rows by subject

| student_id | subject | score | count |
| ---------- | ------- | ----- | ----- |
| 1          | Math    | 80    | 3     |
| 2          | Math    | 90    | 3     |
| 3          | Math    | 75    | 3     |
| 4          | English | 88    | 2     |
| 5          | English | 92    | 2     |

```sql
SELECT
    student_id,
    subject,
    score,
    COUNT(*) OVER (PARTITION BY subject) AS student_count
FROM student_scores;
```

### Cumulative Count

| student_id | score | count |
| ---------- | ----- | ----- |
| 1          | 80    | 1     |
| 2          | 90    | 2     |
| 3          | 75    | 3     |
| 4          | 88    | 4     |
| 5          | 92    | 5     |

```sql
SELECT
    student_id,
    score,
    COUNT(*) OVER (ORDER BY student_id) AS student_count
FROM student_scores;
```

### Count of scores higher than 90 by subject

| student_id | subject | score | count |
| ---------- | ------- | ----- | ----- |
| 1          | Math    | 80    | 2     |
| 2          | Math    | 91    | 2     |
| 3          | Math    | 95    | 2     |
| 4          | English | 88    | 1     |
| 5          | English | 92    | 1     |

```sql
SELECT
    student_id,
    subject,
    score,
    COUNT(CASE WHEN score > 90 THEN 1 END) OVER (PARTITION BY subject) AS subject_score_count
    COUNT(CASE WHEN score > 90 THEN 1 END) OVER () AS total_score_count
FROM student_scores;
```

## `MIN()` and `MAX()`

Finds the smallest/highest value

### Overall min and max score

| student_id | score | min_score | max_score |
| ---------- | ----- | --------- | --------- |
| 1          | 85    | 65        | 92        |
| 2          | 90    | 65        | 92        |
| 3          | 65    | 65        | 92        |
| 4          | 92    | 65        | 92        |
| 5          | 88    | 65        | 92        |

```sql
SELECT
    student_id,
    score,
    MIN(score) OVER () AS min_score
    MAX(score) OVER () AS max_score
FROM student_scores;
```

### Overall min and max score by subject

| student_id | subject | score | min_score | max_score |
| ---------- | ------- | ----- | --------- | --------- |
| 1          | Math    | 85    | 78        | 90        |
| 2          | Math    | 90    | 78        | 90        |
| 3          | Math    | 78    | 78        | 90        |
| 4          | English | 92    | 88        | 92        |
| 5          | English | 88    | 88        | 92        |

```sql
SELECT
    student_id,
    subject,
    score,
    MIN(score) OVER (PARTITION BY subject) AS min_score
FROM student_scores;
```

| student_id | subject | score | min_score |
| ---------- | ------- | ----- | --------- |
| 1          | Math    | 85    | 78        |
| 2          | Math    | 90    | 78        |
| 3          | Math    | 78    | 78        |
| 4          | English | 92    | 88        |
| 5          | English | 88    | 88        |

```sql
SELECT
    student_id,
    subject,
    score,
    MIN(score) OVER (PARTITION BY subject) AS min_score
FROM student_scores;
```
