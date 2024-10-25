# Difference Between Dates

## Calculates the number of days between dates

To calculate the number of days between dates whe can use the substraction.

```sql
SELECT (SYSDATE - TO_DATE('2024-01-01', 'YYYY-MM-DD')) AS days_diff FROM dual;
```

## Calculates the number of months between dates

To calculate the number of months between dates whe can use basic arithmetic (+ or -).

```sql
SELECT MONTHS_BETWEEN(SYSDATE, TO_DATE('2023-06-01', 'YYYY-MM-DD')) AS months_diff FROM dual;
```
