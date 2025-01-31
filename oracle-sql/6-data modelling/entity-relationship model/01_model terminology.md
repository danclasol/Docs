# Entity

- An object or concept about which you want to store information
- Described with a noun in a singular form
- Implentation in database as a _table_

# Attributes

- Descriptions of entities and specific pieces of information that must be knowm
- Described with a noun in a singular form
- Can be mandatory or optional
  - Mandatory attributes must be marked with `*`
  - Optional attributes must be marked with `o`
- Implentation in database as a _column_
- Mandatory attributes must be marked as `NOT NULL`

# Entity Unique Identifier

An Entity Unique Identifier (UID) represents a natural way of distinguishing entity instances.

- Each entity should have at least one unique identifier
- An entity can have more than one unique identifier
- Each unique identifier may be composed of one or more attributes and/or relationships
- Represented with `#`
- Implentation in database as a _primary key_ or _unique key_

# Relationships

A named natural association that exists between two entities.

![Entities relationship](images/entities_relationship.png)

- A relationship is transformed into a foreign key and foreign key columns
- A foreign key is essentially a copy of all corresponding primary key columns that this foreign key is referencing

# Constraints

Constraints are the rules with which the database must cope to be consistent.

- Some of the business rules are translated into _Check Constraints_
- Other complex ones require additional programming
