# Denormalization

Process of intentionally introducing data redundancy

- Satisfy nonfunctional requirements (NFRs)
  - This is not related to the business logic of the application
  - Describe performance, scalability, and security:
    - Place redundant data in a cache as well as in central storage for improved performance
    - Duplicate some data in redundant storage to improve reliability
    - Duplicate some data in isolated sy stem for security reasons
- Work around physical implementation limitations

## Denormalization costs

- A performance price must be paid to maintain cohesion of redundant values
- Application logic becomes more complex
- Maintenance is complicated with extra data dependencies
- Always start with the normalized model and fully document any denormalization cases

# Examples

## Stored derivable values

All denormalization values represent information that can be derived or calculated from other derived value.

This allow applications to achieve better performance when these records are queried, at the expense of losing some performance when records are created, updated, or deleted

For example, an _item total_ that is a result of _item quantity_ and _price_ multiplication. The reason to store such values is to avoid calcuting them when querying records and improving performance.

## Prejoined data

A prejoined denormalization case is a situation when data from one table is placed into another table where it is technically redundant, such as storing product _price_ as part of the _item_ record.

## Hard-coded values

A hard-coded value example is an order status, which could have otherwise been obtained from another table that could store possible statuses as records.

## Periord brackets and current date indicators

It is possible to identify which contact is current for a given person purely based on comparing start and end dates, but it could be quicker to simply look at the derivable value that explicityly indicates the current contact record when querying bundles.

## Hierarchy-level indicators

It is possible to find out a level in the hierarchy without a simple-level indicator value, such a _bundle-level_ column, but it could be quicker to simply look at the derivable value that explicitly indicates the level when querying bundles

## Implementation-specific columns

A version column is an example of the value that is stored not for its business meaning, but to accommodate specific technical requirements, such as optimistic lockin mechanism.
