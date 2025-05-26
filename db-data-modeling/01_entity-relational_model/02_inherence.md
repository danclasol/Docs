# Inherence

In the Entity-Relationship model, inheritance (also called generalization/specialization) allows you to model _is-a_ relationships between entities, similar to inheritance in object-oriented programming.

Inheritance is the mechanism by which a sub-entity (child) inherits attributes and relationships from a more general entity (parent).

Inhence can be:

- `generalization`:
  - combine similar entities into a superclass
- `specialization`
  - split a general entity into subclasses based on some criteria

## Inheritance Constraints

A line labeled can be set to represent the relation total or partial

- `total`: every instance of the superclass must be in a subclass
- `partial`: some instances of the superclass may not belong to any subclass

## Disjoint vs. Overlapping

- Disjoint

  - an instance can belong to only one subtype
  - User can be Manager or Engineer, but not both
  - e.g.: a person is either a student or a teacher

- Overlapping
  - an instance can belong to multiple subtypes
  - e.g.: a person can be both a student and a teacher
