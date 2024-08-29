# dual

- `dual` is a table automatically created by Oracle Database.
- owns by `sys` schema, but we can access by a public synomyn `dual`
- Has one column called `DUMMY` of data type `VARCHAR2(1)`, and contains one row with a value `X`

```sql
SELECT SYSDATE FROM dual;
```
