# Relationship

- A named natual association that exists between two entities
- Can be recursive, relates instances of an entity to other instances of the same entity
- Implentation in database as a _foreing key_
- Bidirectional: if A relates o B, then B should also somehow relate to A

Each relationship direction has a number of characteristics:

- a name
- minumin cardinality: optional (dashed line) or mandatory (solid line)
- maximum cardinality: one (simple line) o many (crow's-foot)

### Formal rules for reading a relationship direction

Each <entity_name><minimum_cardinality><relationship_name><maximum_cardinality><entity_name>

- minimum cardinality:
  - _may be_
  - _must be_
- maximum cardinality:
  - _one and only one_
  - _one or more_

#### Example

- From Course to Topic direction:

  - Each course may be composed of one or more topics.

- From Topic to Course direction:
  - Each topic must be part of one and only one course
