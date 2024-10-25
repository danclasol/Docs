# NLS (National Language Support) parameters

## Common NLS Parameters for Date and Time

Here are some commonly used `NLS` parameters related to date and time:

- `NLS_DATE_LANGUAGE`: language used for names of days and months
  - e.g., Monday, October
- `NLS_TERRITORY`: geographic region (territory) of the session
- `NLS_DATE_FORMAT`: default format for displaying dates
- `NLS_TIMESTAMP_FORMAT`: default format for displaying timestamps
- `NLS_TIMESTAMP_TZ_FORMAT`: default format for displaying timestamps with time zone

## Get parameters values

```sql
SELECT * FROM nls_session_parameters
WHERE parameter LIKE '%DATE%' OR parameter LIKE '%TIMESTAMP%'
```

## Modify parameters value

```sql
ALTER SESSION SET NLS_DATE_FORMAT = 'DD/MM/RRRR'
ALTER SESSION SET NLS_DATE_LANGUAGE = 'Spanish'
ALTER SESSION SET NLS_TERRITORY = 'SPAIN';
ALTER SESSION SET NLS_TIMESTAMP_FORMAT = 'DD/MM/RR HH24:MI:SSXFF'
ALTER SESSION SET NLS_TIMESTAMP_TZ_FORMAT = 'DD/MM/RR HH24:MI:SSXFF TZR'
```
