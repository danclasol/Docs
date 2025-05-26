# Utils

## `LAST_QUERY_ID()`

Retrieve the query id os the last query executed.

- only works within the same session where the original query was run

```sql
SELECT LAST_QUERY_ID(); -- output: '01a2b3c4-1234-5678-9abc-def012345678'
```

## `RESULT_SCAN()`

Retrieve the result set of a previously executed query, without re-running it.

```sql
SELECT * FROM TABLE(RESULT_SCAN('<query_id>'));
```

## `ARRAY_SIZE()`

Returns the number of elements in an array.

```sql
SELECT ARRAY_SIZE(SPLIT('apple,banana,cherry', ','));
```

## `FLATTEN()`

Expands an array or object into multiple rows, one for each element.

```sql
SELECT value AS fruit
FROM TABLE(FLATTEN(INPUT => SPLIT('apple,banana,cherry', ',')));
```
