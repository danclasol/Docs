# Implementing Arc Relationships

Relationships in an arc are implemented as optional _foreign key_ columns. These columns can not marked as `NOT NULL`

Extra check constraint can be use to validate that these foreign key columns are mutually exclusive. Not all relational databases have the capability to create check constraints, and only can be done programmatically.

### EVENTS Table

```sql
CREATE TABLE EVENTS
(
    ID INTEGER NOT NULL,
    START_TIME DATE NOT NULL,
    VIR_ID INTEGER,
    VEN_ID INTEGER,

    CONSTRAINT EVENT_ID PRIMARY KEY (ID),
    CONSTRAINT EVE_VIR_FK FOREIGN KEY (VIR_ID)
    REFERENCES VIRTUAL_ROOMS (ID)
    CONSTRAINT EVE_VEN_FK FOREIGN KEY (VEN_ID)
    REFERENCES VENUES (ID)

    -- Check constraints
    CONSTRAINT VIR_VEN_CH CHECK
        (VIR_ID IS NULL AND VEN_ID IS NOT NULL
        OR
        VIR_ID IS NOT NULL AND VEN_ID IS NULL)
);
```

### VIRTUAL_ROOMS Table

```sql
CREATE TABLE VIRTUAL_ROOMS (
    ID INTEGER NOT NULL,

    CONSTRAINT VIRTUAL_ROOM_ID PRIMARY KEY (ID)
)
```

### VENUES Table

```sql
CREATE TABLE VENUES (
    ID INTEGER NOT NULL,

    CONSTRAINT VENUE_ID PRIMARY KEY (ID)
)
```
