# Working with error results

## After `VALIDATION_MODE`

After using the `COPY` command with the option `VALIDATION_MODE` we can retrieve the rejected rows checking the last query executed.

The rejected record will be store in the column `rejected_record`

```sql
SELECT rejected_record FROM TABLE(RESULT_SCAN(last_query_id()));
```

To retrieve the last query id you can:

- use `last_query_id()` function
- or enter a specify query id
  - go to the query which you want to get the ID
  - go to Query Details > Copy Query ID

## Without `VALIDATION_MODE` and `ON_ERROR=CONTINUE`

If we use the `COPY` command without `VALIDATION_MODE` but using `ON_ERROR=CONTINUE` we can still get the rejected rows.

- `validate()`: return errors of a past execution
- `job_id`: query id of the copy command

```sql
validate(PUBLIC.ORDERS, job_id=>'01bc7df5-0001-5ad8-0gr30')
```
