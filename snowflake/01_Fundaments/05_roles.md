# Roles

## `ACCOUNTADMIN`

Highest privilege role.

Snowflake account owner / top admin.

- full control over the entire account account
- can manage:
  - roles (create, remove, assign)
  - security
  - global settings
  - billing
  - resource monitors

## `SYSADMIN`

Manages databases, warehouses, schemas, tables and objects.

- create, update, eliminate database objects
- cannot manage users, roles, and their privileges

## `SECURITYADMIN`

Manages users, roles, passwords, and grants privileges.

- can grant/revoke roles
- cannot manage data objects

## `USERADMIN`

Manage Snowflake users accounts

- create, manage, drop users and custom roles
- assign roles to users
- cannot manage system objects

## `PUBLIC`

Default role for all users. Minimal access.

- login
- access to snowflake public resources
- don't have admin or modification permissions
