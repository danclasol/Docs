# Entities

Each entity becomes a table.

## Strong entity

A strong entity becomes a table.

The key attribute becomes the primary key of the table.

## Weak entity

A weak entity becomes a table.

Primary key must be compose of:

- foreign key from the owner entity
- own partial key

## Attributes -> Columns

Attributes become columns.

- described with a noun in a singular form
- mandatory attributes
  - must be marked with `*`
  - marked as `NOT NULL`
- optional attributes
  - must be marked with `o`

### Composite attributes

If an attribute is composite, break it into atomic parts

- name → FirstName, LastName

### Multi-valued

Create a new table for the multivalued attribute.

- PK of the original entity
- the multivalued attribute itself
- PhoneNumber → (user_id, phone_id)

# Key attributes or Entity Unique Identifier

The primary key (PK) becomes the primary key of the table.

- Each entity should have at least one unique identifier
- An entity can have more than one unique identifier
- Each unique identifier may be composed of one or more attributes and/or relationships
- Represented with `#`
- Implentation in database as a _primary key_ or _unique key_
