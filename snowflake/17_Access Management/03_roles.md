# Roles

## Creating roles

Create a role

```sql
CREATE ROLE my_role;
```

## Drop roles

```java
DROP ROLE my_role;
```

## Grant roles

Grant role to user

```sql
GRANT ROLE my_role TO USER my_user;
```

Grant role to role

- allow to create hierarchies

```sql
GRANT ROLE my_role TO ROLE another_role;
```

## Grant privilege

Grant privilege

```sql
GRANT SELECT ON TABLE my_table TO ROLE my_role;
```

Grant usage to access, view or use an object

```sql
GRANT USAGE ON WAREHOUSE my_warehouse TO ROLE my_role;
GRANT USAGE ON DATABASE my_database TO ROLE my_role;
GRANT USAGE ON SCHEMA my_schema TO ROLE my_role;
```

Grant ownership of an object

```sql
GRANT OWNERSHIP ON DATABASE my_database TO ROLE PUBLIC;
```

Grant reference to resolve dependencies when using views or functions that references to other schemas/databases

```sql
GRANT REFERENCE_USAGE ON DATABASE finance_db TO ROLE analyst;
GRANT REFERENCE_USAGE ON SCHEMA finance_db.sensitive_schema TO ROLE analyst;
```

## View Role Grants

### Show roles granted to a user

```sql
SHOW GRANTS TO USER john_doe;
```

### Show privileges assigned to a role

```sql
SHOW GRANTS TO ROLE analyst_role;
```

### Show role hierarchy

```sql
SHOW ROLES;
```

```
ACCOUNTADMIN
   └── SECURITYADMIN
         ├── USERADMIN
         └── reporting_team
               └── analyst_role
```

## Change using role in session

The `USE` command allows to switch between roles

```sql
USE ROLE analyst_role;
```
