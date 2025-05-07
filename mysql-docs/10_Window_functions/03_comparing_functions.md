# Comparing functions

### `LEAD()`

Accesses data from the next row.

| employee_id | name  | dept | salary | next_salary |
| ----------- | ----- | ---- | ------ | ----------- |
| 1           | Alice | 10   | 8000   | 7500        |
| 2           | Bob   | 10   | 7500   | 7500        |
| 3           | Carol | 10   | 7500   | 7000        |
| 4           | Dave  | 10   | 7000   | NULL        |

```sql
SELECT
    employee_id,
    hire_date,
    salary,
    LEAD(salary, 1) OVER (ORDER BY hire_date) AS next_salary
FROM employees;
```

### `LAG()`

Accesses data from the previous row.

| employee_id | name  | dept | salary | previous_salary |
| ----------- | ----- | ---- | ------ | --------------- |
| 1           | Alice | 10   | 8000   | NULL            |
| 2           | Bob   | 10   | 7500   | 8000            |
| 3           | Carol | 10   | 7500   | 7500            |
| 4           | Dave  | 10   | 7000   | NULL            |

```sql
SELECT
    employee_id,
    hire_date,
    salary,
    LAG(salary, 1) OVER (ORDER BY hire_date) AS previous_salary,
FROM employees;
```

### `FIRST_VALUE`

Returns the first value in the window frame.

- get highest salary in each department
- repeated for each employee in that department

```sql
SELECT
    employee_id,
    department_id,
    salary,
    FIRST_VALUE(salary) OVER (PARTITION BY department_id ORDER BY salary DESC) AS highest_salary_in_dept
FROM employees;
```

### `NTH_VALUE`

Returns the N-th value in the window frame.

```sql
SELECT
    employee_id,
    department_id,
    salary,
    NTH_VALUE(salary, 3) OVER (PARTITION BY department_id ORDER BY salary DESC) AS third_highest_salary
FROM employees;
```
