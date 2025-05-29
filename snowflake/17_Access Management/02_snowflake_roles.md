# Snowflake Roles

## Hierarchy

In Snowflake, roles are hierarchical, meaning that roles can inherit privileges from other roles.

`ACCOUNTADMIN` role is the highest privilege role and inherence all privileges from all other roles.

- `ACCOUNTADMIN`
  - `SECURITYADMIN` -> `USERADMIN` -> `PUBLIC`
  - `SYSADMIN` -> [Custom Roles]

## Types

### `ACCOUNTADMIN`

Highest privilege role. Full control over the entire account account

Snowflake account owner / top admin.

- `SYSADMIN` and `SECURITY` are granted to this role
- should be granted only to a limited number of users
- can manage:
  - full access account admin tab
  - roles (create, remove, assign)
  - security
  - global settings
  - billing and usage
  - resource monitors
  - reader accounts

### `SECURITYADMIN`

Manages users, roles, passwords, and grants privileges.

Designed to manage any object grant globally.

- `USERADMIN` is granted to this role
- can grant/revoke roles
- can manage:
  - limited access account admin tab
  - create and manage users
  - create and manage roles
  - grant/revoke roles to/from users and roles
  - reset passwords
- cannot manage:
  - creation or modification of data objects (like databases, tables)
  - grant/revoke roles data objects (unless is granted the role)

### `SYSADMIN`

Manages databases, warehouses, schemas, tables and objects.

Designed to manage data objects

- recommended that all custom roles are assigned to `SYSADMIN` role as tha parent
- can manage:

  - create and manage databases, schemas, tables, views, warehouses, stages
  - create and manage own data objects
  - grant privileges on warehouses, database, and other objects to the custom roles

- cannot manage:
  - create and manage users
  - create and manage roles and privileges

### `USERADMIN`

Dedicated to user and role management.

- can manage:
  - create and manage users
  - create and manage own roles
  - grant/revoke roles to users (only roles it owns)
- cannot manage:
  - create or manage data
  - assign roles it doesn't own

### `PUBLIC`

Default role for all users. Minimal access.

- automatically granted to every user
- everyone can see their objects (bottom of the hierarchy)
- can:

  - default functions
  - login
  - access to snowflake public resources
  - can own objects
  - can manage own objects like every other user/role

- can`t
  - can't create objects
  - can't manage object if we are not the owner
  - access most objects unless explicitly granted
  - have admin or modification permissions
