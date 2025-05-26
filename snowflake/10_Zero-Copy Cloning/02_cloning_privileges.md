# Cloning Priviledge

## Privileges inherence

- Databases

  - priviledge will not be clone to the new database
  - child object will inherit the privileges of the original database

- Schema

  - priviledge will not be clone to the new schema
  - child object will inherit the privileges of the original schema

- Tables

## Needed privileges

Depending the object type we will need the following privilege:

- Tables: SELECT privilege
- Pipe, Stream, Task: OWNER privilege
- Others objects: USAGE privilege
