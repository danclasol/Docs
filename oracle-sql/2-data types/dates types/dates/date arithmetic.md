# Date arithmetic

## Adding/Subtracting number or internval

| Left Type | Op  | Right Type | Result Type |
| --------- | --- | ---------- | ----------- |
| date      | +/- | number     | date        |
| date      | +/- | interval   | date        |
| timestamp | +/- | number     | date        |
| timestamp | +/- | inteval    | timestamp   |

## Examples

### Add/Subtract number to date

```sql
SELECT sysdate + 1 FROM dual;
SELECT SYSDATE - 10 FROM dual;
```

When adding months, we can use the functions `ADD_MONTHS`

```sql
SELECT ADD_MONTHS(SYSDATE, 3) FROM dual;
SELECT ADD_MONTHS(SYSDATE, -2) FROM dual;
SELECT ADD_MONTHS(SYSDATE, 12) FROM dual; -- add a year
```

### Add/Subtract intevals to date

```sql
SELECT sysdate + INTERVAL '1' day FROM dual;
SELECT sysdate - INTERVAL '2' day FROM dual;
```

### Add/Subtract number to timestamp

```sql
SELECT systimestamp + 1 FROM dual;
SELECT systimestamp - 1 FROM dual;
```

### Add/Subtract intevals

```sql
SELECT systimestamp + INTERVAL '1' day FROM dual;
SELECT systimestamp - INTERVAL '1' day FROM dual;
```

## Subtracting dates or timestamps

| Left Type | Op  | Right Type | Result Type |
| --------- | --- | ---------- | ----------- |
| date      | -   | date       | number      |
| date      | -   | timestamp  | interval    |
| timestamp | -   | date       | interval    |
| timestamp | -   | timestamp  | interval    |

### Examples

### Subtracting between dates

Substracting two dates returns the number of days between the two dates.

```sql
SELECT TO_DATE('25/12/2024','dd/mm/yyyy') - sysdate FROM dual;
```

### Subtracting timestamp to date

Returns an interval with the difference of period between both.

```sql
SELECT sysdate - systimestamp FROM dual;
```

### Subtracting date to interval

Returns an interval with the difference of period between both.

```sql
SELECT systimestamp - sysdate FROM dual;
```

### Subtracting between timestamps

Returns an interval with the difference of period between both.

```sql
SELECT systimestamp + systimestamp FROM dual;
```
