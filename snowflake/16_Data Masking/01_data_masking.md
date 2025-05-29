# Data Masking

Data masking allows you to hide or obfuscate sensitive data (like SSNs, credit card numbers, etc.) based on user roles.

- implemented using masking policies

## Creating Masking

Create a simple masking policy

```sql
CREATE OR REPLACE MASKING POLICY phone_mask AS (val VARCHAR)
RETURNS VARCHAR ->
  CASE
    WHEN current_role() IN ('ANALYST') THEN val
    ELSE CONCAT('XXX-XXX-', RIGHT(val, 4))
  END;
```

## Apply policy to specific column

Apply a masking policy to a column from a table

```sql
ALTER TABLE IF EXISTS CUSTOMER MODIFY COLUMN phone
SET masking POLICY phone_mask;
```

## Unset policy

Remove policy from a column

```sql
ALTER TABLE IF EXISTS CUSTOMER MODIFY COLUMN phone
UNSET MASKING POLICY;
```

## Delete policy

Remove policy from database

- need to be unset first

```sql
DROP MASKING POLICY phone_mask;
```

## Show column with applied policies

List all the column with are appliying a policy

```sql
SELECT * FROM TABLE(INFORMATION_SCHEMA.POLICY_REFERENCES(policy_name => 'my_phone'));
```

## Replace policy

```sql
ALTER MASKING POLICY phone_mask
SET BODY ->
CASE
    WHEN current_role() IN ('ANALYST') THEN val
    ELSE CONCAT('XXX-XXX-', RIGHT(val, 4))
  END;
```
