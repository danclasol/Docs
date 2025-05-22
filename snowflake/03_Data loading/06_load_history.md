# Load History

Enables you to retrieve the history of data loaded into table using the `COPY INTO table` command

This information is automatically loaded in the view `LOAD_HISTORY`

```sql
SELECT * FROM INFORMATION_SCHEMA.LOAD_HISTORY;
```

We can filter by specific dates

```sql
SELECT * FROM INFORMATION_SCHEMA.LOAD_HISTORY
WHERE DATE(LAST_LOAD_TIME) <= DATEADD(days, -1, CURRENT_DATE);
```
