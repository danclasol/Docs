# Entity-Relational (ER) Model

The Entity-Relational Model (ER Model) is a high-level conceptual data model used to design and visualize the structure of a database.

Is the step prior to the final implementation of a database, where the requirements and business processes are determined first to subsequently model and graphically design the structure of the system to be implemented.

# ER Model elements

## Entity

Graphic representation of a concrete or abstract object that is distinguishable from the rest

- described with a noun in a singular form
- implentation in database as a _table_

### Strong Entity

- complete by themselves
- not dependent on any other entity type
- e.g.: Course

  - course_code (PK)
  - title
  - credits

### Weak Entity

- can’t be identified on its own
- need some other entity for its distinct identity
- e.g.: Section

  - section_number
  - semester
  - course_code (FK)

### Associative Entity

- when two or more entities has a `N:M` relationship
- need to track details of that relationship
- e.g.: `Booking` can be associate becuase connect `Customer` with `Room` in a `N:M` relationship

  - booking_id
  - checkIn
  - checkOut

## Attributes

Attributes are describing characteristics or properties that define an entity.

- described with a noun in a singular form
- implentation in database as a _column_

### Simple (Atomic)

- cannot be divided further
- name, age, salary

### Composite

- can be divided into smaller subparts
- split in simple attributes if we need to access the small parts
- full_name → first_name + last_name
- address → street, number, zip_code, city

### Derived

- can be calculated from other attributes
- age (derived from birthdate)

### Multi-valued

- can hold multiple values for a single entity
- implementation in database as a separate table
- e.g.: An Hotel Entity can have multiple phonenumbers
  - PhoneNumber: "+1 555-1234", "+1 555-5678"

## Key attribute

A key attribute uniquely identifies each instance (row) of an entity.

- each entity should have at least one unique identifier
- part of a candidate or primary key
- implentation in database as a _primary key_ or _unique key_

### Superkey

- uniquely identify an entity
- may be composed of one or more attributes
- e.g: all are superkeys
  - `CustomerID`
  - `CustomerID, Name`
  - `Email` (if unique)

### Candidate Keys

- minimal superkey (no extra attributes)
- candiates to be part of a primary key
- e.g.: any of these could be the superkey or part of it
  - `CustomerID`
  - `Name`
  - `Email`

### Partial Keys

- uniquely identifies a weak entity
- used only in weak entities
- requires related strong entity’s key to uniquely identify the entity

- e.g.: Entity Room -> `RoomNumber` is a partial key, not globally unique
  - the full unique ID for a room will be `HotelID + RoomNumber`

## Relationships

A named natural association that exists between two entities.

- implentation in database as a _foreing key_
- can be recursive, relates instances of an entity to other instances of the same entity
- bidirectional: if A relates o B, then B should also somehow relate to A

### Relationships Types

- Strong relationship
  - mutual existential independence of the two entities
  - depicted as a diamond with a normal line border
- Weak relationship (Identifying)
  - existence of the weak entity is dependent on the existence of the related entity
  - depicted as a diamond with a double line border

### Participation

Define if an instance must participate or not

- `total` (mandatory): every instance must participate
- `partial` (optional): some may not participate

### Cardinality

Defines how many instances of an entity relate to another

- `1`: each instance can participate only in one relationship
- `N`: each instance can particpate in multiple relationships

#### One-to-One (`1:1`)

- one entity is related to only one of another
- a passport **must belong to exactly one** person
- a person **can have only one** passport

#### One-to-Many (`1:N`)

- one entity is related to many of another
- each course **can include one or more** topics
- each topic **is assigned to exactly one** course

#### Many-to-Many (`M:N`)

- many entities relate to many others
- a student **can take multiple** courses
- a course **can be taken by one or more** students

## Constraints

Constraints are the rules with which the database must cope to be consistent.

- some of the business rules are translated into _Check Constraints_
- other complex ones require additional programming
