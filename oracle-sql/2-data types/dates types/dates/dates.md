# `DATE`

Stores both date and time, but doesn't have fractional seconds or a time zone.

- This data type contains the datetime fields `YEAR`, `MONTH`, `DAY`, `HOUR`, `MINUTE`, and `SECOND`
- The size is fixed at `7` bytes
- Valid date range from January 1, 4712 BC, to December 31, 9999 AD

# Format

Default format is _DD-MON-YY_.

The default format is determined explicitly by the `NLS_DATE_FORMAT` parameter or implicitly by the `NLS_TERRITORY` parameter.

## FX (Fix Format) modifier

Be default, the format is flexible with extra spaces or missing elements.

Ensures that the format mask is followed exactly with no flexibility.

```sql
-- Without FX Modifier
select to_date('12~01~2022','dd/mm/yyyy') from dual;  -- 12/01/2022
select to_date('12-01/2022','dd/mm/yyyy') from dual;  -- 12/01/2022
select to_date('12-01-2022','dd/mm/yyyy') from dual;  -- 12/01/2022
select to_date('12012022','dd/mm/yyyy') from dual;  -- 12/01/2022

-- With FX Modifier
select to_date('12-01-2022','FXdd/mm/yyyy') from dual;  -- error
```
