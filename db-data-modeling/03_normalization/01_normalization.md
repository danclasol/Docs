# Normalization

Normalization is a process of regrouping information in a way that removes redundant data items so that each and every piece of information appears in a model just one.

Normalized data is data that contains no redundancies.

Normalization is the activity that leads to a normalized data structure as does the entity relationship modeling.

## Entity-Relationship modeling

Entity-Relationship modeling rules were intentionally designed to mimic normalization rules.

The main difference between Normalization and Entity-Relationship modeling techniques is:

- _Normalization_ is based on data dependencies
- _Entity-Relationship_ approach extensively uses lexical rules to validate assumption that analysts make about data

# Normal Forms

Normal forms progression starts with unnormalized data `UNF`, which is data that has not been normalized yet.

Through a series of transformations, kwon as applying normal form rules, data is restructured so that all redundancies are eventually removed.

## Unnormalized Data `ONF`

Unnormalized data is data that has not been normalized yet.

First, data needs to be gathered into a table and a key should be selected.

## First Normal Form `1NF`

A table is considered in the first normal form if:

- all columns contain atomic (indivisible) values
- each column contains values of a single type
- each row is unique, identified by a primary key

### Example

Non-atomic data in _Orders_ column violates `1NF`

| ID  | Orders        |
| --- | ------------- |
| 1   | Apple, Banana |
| 2   | Orange        |

Solution

| ID  | Orders |
| --- | ------ |
| 1   | Apple  |
| 2   | Banana |
| 2   | Orange |

## 2NF

Every non-key column must depend on a whole key, not part of a key

A table is considered in the second normal form if:

- It is in `1NF`
- every _non-primary-key_ column must depend on a whole key, not part of a key

### Example

_CustomerName_ depends only on _OrderID_, not on _ProductName_.

| OrderID | ProductName | CustomerName |
| ------- | ----------- | ------------ |
| 1       | Apple       | John         |
| 2       | Banana      | John         |

Split into two tables:

| OrderID | ProductName | CustomerName |
| ------- | ----------- | ------------ |
| 1       | Apple       | John         |
| 2       | Banana      | John         |

| CustomerID | CustomerName |
| ---------- | ------------ |
| 1          | John         |
| 2          | John         |

## 3NF

A table is in the thrid normal form if:

- It is in `2NF`
- All columns are directly dependent on the primary key
  - no transitive dependencies
  - _non-key_ columns must not depend on other non-key columns

### Example

_CustomerAddress_ is dependent on _CustomerID_, not directly on _OrderID_.

| OrderID | CustomerID | CustomerAddress |
| ------- | ---------- | --------------- |
| 1       | 101        | 123 Main St.    |

The solution is split into two tables

| OrderID | CustomerID | CustomerAddress |
| ------- | ---------- | --------------- |
| 1       | 101        | 123 Main St.    |

| CustomerID | CustomerAddress |
| ---------- | --------------- |
| 101        | 123 Main St.    |
