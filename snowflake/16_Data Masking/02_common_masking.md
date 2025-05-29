# Common Masking

## Email

Masked email address leaving domain unmasked

```sql
CREATE OR REPLACE MASKING POLICY email_mask AS (val VARCHAR)
RETURNS VARCHAR ->
  CASE
    WHEN current_role() IN ('ANALYST') THEN val
    ELSE REGEX_REPLACE(val, '.+\@', '*****@')
  END;
```

## Masking with Hashing

Create a masking policy with hashing

```sql
CREATE OR REPLACE MASKING POLICY sha2_mask AS (val VARCHAR)
RETURNS VARCHAR ->
  CASE
   WHEN current_role() IN ('ANALYST') THEN val
    ELSE sha2(val) -- return hash of the column value
  END;
```
