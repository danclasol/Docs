# Secure View

A secure view in Snowflake is a special type of view that prevents unauthorized users (including data sharing recipients) from seeing the underlying logic or SQL code.

- protects business logic and data masking
- show/hide columns depending on user/role
- SQL definition is completely hidden
- use when sharing via Secure Data Sharing

## Creating secure views

```sql
CREATE OR REPLACE SECURE VIEW secure_employee_view AS
SELECT
  id,
  name,
  CASE
    WHEN CURRENT_ROLE() = 'HR_ROLE' THEN salary
    ELSE NULL
  END AS salary
FROM employees;
```

## Adding view to Share

We can add the secure view to the share

- share by default only allo using secure views
- set `secure_object_only=false` to make possible to use regular views

```sql
GRANT SELECT ON VIEW secure_employee_view TO SHARE my_share;
```

## Views with data from multiple databases

When using views that refer to a different database, we need to grant the `REFERENCE_USAGE` privilege to allow a user or role to reference an object indirectly.

- without `REFERENCE_USAGE` we will get a permission error

```sql
GRANT REFERENCE_USAGE ON DATABASE my_database TO SHARE my_share
```
