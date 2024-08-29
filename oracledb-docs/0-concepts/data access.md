# Data Access

A general requirement for a DBMS is to adhere to accepted industry standards for a data access language.

## Structured Query Language (SQL)

**SQL** is a set-based declarative language that provides an interface to an RDBMS such as Oracle Database.

SQL is the _ANSI_ standard language for relational databases. All operations on the data in an Oracle database are performed using SQL statements.

A SQL statement can be thought of as a very simple, but powerful, computer program or instruction. Users specify the result that they want (for example, the names of employees), not how to derive it. A SQL statement is a string of SQL text such as the following:

```sql
SELECT first_name, last_name FROM employees;
SQL statements enable you to perform the following tasks:
```

SQL statements enable you to perform the following tasks:

- Insert, update, and delete rows in a table
- Create, replace, alter, and drop objects
- Control access to the database and its objects
- Guarantee database consistency and integrity

SQL unifies the preceding tasks in one consistent language. Oracle SQL is an implementation of the ANSI standard. Oracle SQL supports numerous features that extend beyond standard SQL.

## PL/SQL

**PL/SQL** is a procedural extension to Oracle SQL.

PL/SQL is integrated with Oracle Database, enabling you to use all of the Oracle Database SQL statements, functions, and data types. You can use PL/SQL to control the flow of a SQL program, use variables, and write error-handling procedures.

A primary benefit of PL/SQL is the ability to store application logic in the database itself. A PL/SQL procedure or function is a schema object that consists of a set of SQL statements and other PL/SQL constructs, grouped together, stored in the database, and run as a unit to solve a specific problem or to perform a set of related tasks. The principal benefit of server-side programming is that built-in functionality can be deployed anywhere.

- Permite almacenarse en el servidor como unidad de codigo almacenada
- Poder ejecutar y controlar el proceso de una ejucion

## Java

Oracle Database can also store program units written in **Java**.

A Java stored procedure is a Java method published to SQL and stored in the database for general use. You can call existing PL/SQL programs from Java and Java programs from PL/SQL.
