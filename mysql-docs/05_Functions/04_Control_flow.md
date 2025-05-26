# Control Flow Functions

## `IF(expr, true_value, false_value)`

Evaluates expr; returns _true_value_ if expr is `true`, otherwise returns _false_value_

```sql
SELECT IF(salary > 50000, 'High', 'Low') AS salary_level
FROM employees;
```

## `IFNULL(expr1, expr2)`

Returns _expr1_ if it is not `NULL`; otherwise, returns _expr2_.

- This query replaces `NULL` phone numbers with 'No phone'

```sql
SELECT name, IFNULL(phone_number, 'No phone') AS contact
FROM customers;
```

## `ISNULL(expr)`

Returns 1 if _expr_ is `NULL`; otherwise, returns `0`.​

```sql
SELECT name, ISNULL(email) AS email_status
FROM users;
```

## `NULLIF(expr1, expr2)`

Returns `NULL` if _expr1_ equals _expr2_; otherwise, returns _expr1_.

```sql
SELECT order_id, NULLIF(discount, 0) AS discount_applied
FROM orders;
```

## `COALESCE(val1, val2, ..., val_n)`

Returns the first _non-NULL_ value in the list; if all are `NULL`, returns `NULL`.

- This query retrieves the first available phone number from home or mobile; if both are `NULL`, it returns 'No phone'

```sql
SELECT name, COALESCE(phone_home, phone_mobile, 'No phone') AS contact_number
FROM contacts;
```

## `CASE`

Evaluates conditions and returns a result based on the first true condition.​

```sql
SELECT name,
       CASE
           WHEN score >= 90 THEN 'A'
           WHEN score >= 80 THEN 'B'
           WHEN score >= 70 THEN 'C'
           WHEN score >= 60 THEN 'D'
           ELSE 'F'
       END AS grade
FROM students;
```
