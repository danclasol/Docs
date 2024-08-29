# Relational Databases

## Database Management System (DBMS)

A `database management system (DBMS)` is software that controls the storage, organization, and retrieval of data.

Typically, a `DBMS` has the following elements:

- _Kernel code_: This code manages memory and storage for the DBMS.

- _Repository of metadata_: This repository is usually called a data dictionary.

- _Query language_: This language enables applications to access the data.

A _database application_ is a software program that interacts with a database to access and manipulate data.

The first generation of database management systems included the following types:

- _Hierarchical_: A _hierarchical database_ organizes data in a tree structure. Each parent record has one or more child records, similar to the structure of a file system.

- _Network_: A _network database_ is similar to a hierarchical database, except records have a many-to-many rather than a one-to-many relationship.

The preceding database management systems stored data in rigid, predetermined relationships. Because no data definition language existed, changing the structure of the data was difficult. Also, these systems lacked a simple query language, which hindered application development.

## Relational Model

In his seminal 1970 paper _"A Relational Model of Data for Large Shared Data Banks,"_ _E. F. Codd_ defined a relational model based on mathematical set theory.

Today, the most widely accepted database model is the relational model.

A _relational database_ is a database that conforms to the relational model.

### Major aspects

The relational model has the following major aspects:

- _Structures_: Well-defined objects store or access the data of a database.

- _Operations_: Clearly defined actions enable applications to manipulate the data and structures of a database.

- _Integrity rules_: Integrity rules govern operations on the data and structures of a database.

## Relational database

A _relational database_ stores data in a set of simple relations. A _relation_ is a set of tuples. A _tuple_ is an unordered set of attribute values.

A _table_ is a two-dimensional representation of a relation in the form of rows (tuples) and columns (attributes). Each row in a table has the same set of columns. A relational database is a database that stores data in relations (tables). For example, a relational database could store information about company employees in an employee table, a department table, and a salary table.

## Relational Database Management System (RDBMS)

The relational model is the basis for a `relational database management system (RDBMS)`. An _RDBMS_ moves data into a database, stores the data, and retrieves it so that applications can manipulate it.

An _RDBMS_ distinguishes between the following types of operations:

- _Logical operations_: In this case, an application specifies what content is required.

  - For example, an application requests an employee name or adds an employee record to a table.

- _Physical operations_: In this case, the RDBMS determines how things should be done and carries out the operation.
  - For example, after an application queries a table, the database may use an index to find the requested rows, read the data into memory, and perform many other steps before returning a result to the user. The RDBMS stores and retrieves data so that physical operations are transparent to database applications.

## Oracle Database

Oracle Database is an _RDBMS_. An _RDBMS_ that implements object-oriented features such as user-defined types, inheritance, and polymorphism is called an object-relational database management system (ORDBMS). Oracle Database has extended the relational model to an object-relational model, making it possible to store complex business models in a relational database.

## Brief History of Oracle Database

The current version of Oracle Database is the result of over 40 years of innovative development.

Highlights in the evolution of Oracle Database include the following:

- **Founding of Oracle Corporation**: In 1977, Larry Ellison, Bob Miner, and Ed Oates started the consultancy Software Development Laboratories, which became Relational Software, Inc. (RSI). In 1983, RSI became Oracle Systems Corporation and then later Oracle Corporation.

- **First commercially available RDBMS**: In 1979, RSI introduced Oracle V2 (Version 2) as the first commercially available SQL-based RDBMS, a landmark event in the history of relational databases.

- **Portable version of Oracle Database**: Oracle Version 3, released in 1983, was the first relational database to run on mainframes, minicomputers, and personal computers. The database was written in C, enabling the database to be ported to multiple platforms.

- **Enhancements to concurrency control, data distribution, and scalability**:

  - Version 4 introduced multiversion read consistency.
  - Version 5, released in 1985, supported client/server computing and distributed database systems.
  - Version 6 brought enhancements to disk I/O, row locking, scalability, and backup and recovery. Also, Version 6 introduced the first version of the PL/SQL language, a proprietary procedural extension to SQL.

- **PL/SQL stored program units**: Oracle7, released in 1992, introduced PL/SQL stored procedures and triggers.

- **Objects and partitioning**: Oracle8 was released in 1997 as the object-relational database, supporting many new data types. Additionally, Oracle8 supported partitioning of large tables.

- **Internet computing**: Oracle8i Database, released in 1999, provided native support for internet protocols and server-side support for Java. Oracle8i was designed for internet computing, enabling the database to be deployed in a multitier environment.

- **Oracle Real Application Clusters (Oracle RAC)**: Oracle9i Database introduced Oracle RAC in 2001, enabling multiple instances to access a single database simultaneously. Additionally, Oracle XML Database (Oracle XML DB) introduced the ability to store and query XML.

- **Grid computing**: Oracle Database 10g introduced grid computing in 2003. This release enabled organizations to virtualize computing resources by building a grid infrastructure based on low-cost commodity servers. A key goal was to make the database self-managing and self-tuning. Oracle Automatic Storage Management (Oracle ASM) helped achieve this goal by virtualizing and simplifying database storage management.

- **Manageability, diagnosability, and availability**: Oracle Database 11g, released in 2007, introduced a host of new features that enabled administrators and developers to adapt quickly to changing business requirements. The key to adaptability is simplifying the information infrastructure by consolidating information and using automation wherever possible.

- **Plugging In to the Cloud**: Oracle Database 12c, released in 2013, was designed for the Cloud, featuring a new Multitenant architecture, In-Memory Column Store (IM column store), and support for JSON documents. Oracle Database 12c helped DBAs make more efficient use of their IT resources, while continuing to reduce costs and improve service levels for end users.

- **Integration and memory performance**: Oracle Database 18c simplified integration with directory services such as Microsoft Active Directory. It also introduced functionality to exploit memory for columnar data models and high-speed row access.

- **Enhanced stability**: Oracle Database 19c was the long-support version of the Oracle Database 12c (Release 12.2) family of products. A major focus of this release was stability. Oracle Database 19c also introduced several small but significant improvements to features such as JSON and Active Data Guard.

- **Improved developer experience**: Oracle Database 21c improves the developer experience with features such as Oracle Blockchain Tables and native JSON data types. Enhancements to Automatic In-Memory make the IM column store largely self-managing.
