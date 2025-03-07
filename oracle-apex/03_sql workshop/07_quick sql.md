# Quick SQL

Quick SQL allows you to rapidly design and prototype data models by susing a markdown-like shorthand syntax that expands to stadards-based Oracle SQL

## Use Cases

- Quickly create robust data models
- Save Quick SQL shorthand syntax as a model to iterate through model changes or use as a template model to jumpstart the next model design
- Easily generate random data.
- Learn SQL create table, select, insert, index, trigger PL/SQL package, and view syntax by using the provided examples

## Access

You can access Quick SQL from:

- SQL Workshop > Utilities > Quick SQL
- SQL Workshop > SQL Scripts > Button Quick SQL

## Examples

### Load Quick SQL samples

- Help > Samples > Choose any model (eg. Departments and Employees)

```md
departments /insert 4
name /nn
location
country

    employees /insert 14
        name /nn vc50
        email /lower
        cost center num
        date hired
        job vc255

view emp_v departments employees
```

This example, will create:

- Tables: departments and employees
- View: emp_v
- It will insert the following data:
  - insert 4 departments
  - insert 14 employees
