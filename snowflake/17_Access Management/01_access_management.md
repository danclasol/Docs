# Access Management

## Users

A user is an individual (person, service account, or application) that connects to Snowflake.

- log in to Snowflake
- perform actions based on the roles assigned to them

```sql
CREATE USER my_user PASSWORD = '1234'
DEFAULT_ROLE = SECURITYADMIN
MUST_CHANGE_PASSWORD = TRUE;
```

## Roles

A role is a container for privileges. It defines what actions a user can perform in Snowflake.

- control access to objects like tables, warehouses, and databases
- can be assigned to users or to other roles (hierarchical)
- is recommended to assign every custom roles to the role `SYSADMIN`
  - to have access and manage custom roles

```sql
CREATE ROLE analyst;
GRANT ROLE analyst TO USER john_doe;
```

## Privileges

A privilege is a specific permission to perform an action on a Snowflake object (like a database, table, or warehouse).

- `USAGE`: required to access an object
- `SELECT`: read data from a table or view
- `INSERT`: insert data into a table
- `CREATE TABLE`: create a table in a schema
- `OPERATE`: resume/suspend a warehouse

```sql
GRANT SELECT ON TABLE sales TO ROLE analyst;
```

## Securable Object

Object to which privileges can be granted - database, table, warehouse

## Types of Access Control

### Discretionary Access Control (DAC)

Each object has an owner who can grant access to that object

### Role-based Access Control (RBAC)

Access privileges are assigned to roles, which are in turn assigned to users
