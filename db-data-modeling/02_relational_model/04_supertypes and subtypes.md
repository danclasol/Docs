# Implementation

## Single Table Subtype-Supertype

```sql
CREATE TABLE EVENTS (
    ID INTEGER NOT NULL,
    START_TIME DATE NOT NULL,
    EVE_TYPE CHAR(7) NOT NULL,
    URL VARCHAR(255),
    VEN_ID INTEGER,

    CONSTRAINT EVE_PK PRIMARY KEY (ID),
    CONSTRAINT EVE_VEN_FK FOREIGN KEY (VEN_ID)
    REFERENCES VENUES (ID)

    -- Check constraints
    CONSTRAINT EVE_TYPE_CH CHECK
        (EVE_TYPE IS 'ONLINE' AND URL IS NOT NULL AND VEN_ID IS NULL
        OR
        EVE_TYPE IS 'OFFLINE' AND URL IS NULL AND VEN_ID IS NOT NULL)
)
```

```sql
CREATE TABLE VENUES (
    ID INTEGER NOT NULL,
    CONSTRAINT VEN_PK PRIMARY KEY (VEN_ID)
)
```

## Joined Subtype-Supertype

The joined table approach converts the supertype-subtype design into an arc design.

- A table per subtype
- A table for a supertype containing foreign keys to a table representing subtypes
- Foreign keys for subtypes are implemented as an arc

```sql
CREATE TABLE EVENTS (
    ID INTEGER NOT NULL,
    START_TIME DATE NOT NULL,
    ONL_ID INTEGER,
    OFF_ID INTEGER,

    CONSTRAINT EVE_PK PRIMARY KEY (ID),
    CONSTRAINT EVE_ONL_FK FOREIGN KEY (ONL_ID)
    REFERENCES ONLINE (ID)

     -- Check constraints
    CONSTRAINT ONL_OFF_CH CHECK
        (ONL_ID IS NOT NULL AND OFF_ID IS NULL
        OR
        ONL_ID IS NULL AND OFF_ID IS NOT NULL)
)
```

```sql
CREATE TABLE ONLINE (
    ID INTEGER NOT NULL,
    URL VARCHAR(255) NOT NULL,
    CONSTRAINT ONL_PK PRIMARY KEY (ID)
)
```

```sql
CREATE TABLE OFFLINE (
    ID INTEGER NOT NULL,
    VEN_ID INTEGER NOT NULL,
    CONSTRAINT OFF_PK PRIMARY KEY (ID)
)
```

### Single table vs Joined implementation

- Single table is less compact in terms of storage
- Joined implemantation has performance issues when joining data from multiples tables

## Table Per Subtype

A table per subtype, with duplicated supertype columns.

This is mostly theorical construc because of its many flaws such as:

- Extensive duplication of data
- The difficulty, if not impossible, of implementing any supertype integrity checks
- Significant performance implications when joining data from multiple tables

```sql
CREATE TABLE ONLINE (
    ID INTEGER NOT NULL,
    START_TIME DATE NOT NULL,
    URL VARCHAR(255) NOT NULL

    CONSTRAINT ONL_PK PRIMARY KEY (ID),
)
```

```sql
CREATE TABLE OFFLINE (
    ID INTEGER NOT NULL,
    START_TIME DATE NOT NULL,
    VEN_ID INTEGER NOT NULL

    CONSTRAINT OFF_PK PRIMARY KEY (ID),
)
```

The table per subtype implementation is generally a bad idea unless:

- Supertype has almost no attributes and relationships
- Subtype has different unique identifiers and no common identity
