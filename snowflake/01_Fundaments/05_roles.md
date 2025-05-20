# Roles

Roles in Snowflake manage access control by grouping privileges, which are then assigned to users or other roles.

Roles follow a hierarchical structure to simplify permission management.

## Roles Types

### `ACCOUNTADMIN`

Highest privilege role.

Snowflake account owner / top admin.

- full control over the entire account account
- can manage:
  - roles (create, remove, assign)
  - security
  - global settings
  - billing
  - resource monitors

### `SYSADMIN`

Manages databases, warehouses, schemas, tables and objects.

- create, update, eliminate database objects
- cannot manage users, roles, and their privileges

### `SECURITYADMIN`

Manages users, roles, passwords, and grants privileges.

- can grant/revoke roles
- cannot manage data objects

### `USERADMIN`

Manage Snowflake users accounts

- create, manage, drop users and custom roles
- assign roles to users
- cannot manage system objects

### `PUBLIC`

Default role for all users. Minimal access.

- login
- access to snowflake public resources
- don't have admin or modification permissions

### Custom Roles

You can create roles tailored to your organization's needs.

- roles can be organized hierarchically (roles can own other roles)
- useful for grouping related privileges by function or department

## Granting privileges

Privileges define what actions a role or user can perform on Snowflake objects. These can be system privileges or object privileges.

#### Grant a role to a user

```sql
GRANT ROLE analyst TO USER john_doe;
```

#### Grant a privilege on a database object to a role

```sql
GRANT SELECT ON TABLE sales_data TO ROLE analyst;
```

#### Grant a system privilege to a role

```sql
GRANT CREATE WAREHOUSE ON ACCOUNT TO ROLE sysadmin;
```

#### Grant a role to another role (role hierarchy)

```sql
GRANT ROLE analyst TO ROLE data_scientist;
```
