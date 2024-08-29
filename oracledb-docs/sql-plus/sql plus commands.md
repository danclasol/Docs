## SQL\*Plus Commands

SQL\*Plus commands allow a user to manipulate and submit SQL statements. Specifically, they enable a user to:

- Enter, edit, store, retrieve, and run SQL statements
- List the column definitions for any table
- Format, perform calculations on, store, and print query results in the form of reports
- Access and copy data between SQL databases

The following is a list of SQL\*Plus commands and their functions.

The most commonly used commands are emphasized in italics:

### /

Execute the current SQL statement in the buffer – same as RUN

```sql

```

### ACCEPT

Accept a value from the user and place it into a variable

```sql

```

### APPEND

Add text to the end of the current line of the SQL statement in the ### buffer

### AUTOTRACE

Trace the execution plan of the SQL statement and gather ### statistics

### BREAK

Set the formatting behavior for the output of SQL statements

### BTITLE

Place a title on the bottom of each page in the printout from a SQL ### statement

### CHANGE

Replace text on the current line of the SQL statement with new text

### CLEAR

Clear the buffer

### COLUMN

Change the appearance of an output column from a query

### COMPUTE

Does calculations on rows returned from a SQL statement

### CONNECT

Connect to another Oracle database or to the same Oracle database under a different user name

Connect as _SYSDBA_

```
CONN /AS SYSDBA
```

### COPY

Copy data from one table to another in the same or different databases

### DEL

Delete the current line in the buffer

### DESCRIBE

List the columns with datatypes of a table (Can be abbreviated as ### DESC

### EDIT

Edit the current SQL statement in the buffer using an external editor ### such
vi or emacs

### EXIT

Exit the SQL\*Plus program

### GET

Load a SQL statement into the buffer but do not execute it

### HELP

Obtain help for a SQL\*Plus command (In some installations)

### HOST

Drop to the operating system shell

### INPUT

Add one or more lines to the SQL statement in the buffer

### LIST

List the current SQL statement in the buffer

### QUIT

Exit the SQL\*Plus program

### REMARK

Place a comment following the REMARK keyword

### RUN

Execute the current SQL statement in the buffer

### SAVE

Save the current SQL statement to a script file

### SET

Set an environemnt variable to a new value

### SHOW

Show the current value of an environemnt variable

### SPOOL

Send the output from a SQL statement to a file

### START

Load a SQL statement located in a script file and then run that SQL statement

### TIMING

Used to time the execution of SQL statements for performance analysis

### TTITLE

Place a title on the top of each page in the printout from a SQL ### statement

### UNDEFINE

Delete a user defined variable
