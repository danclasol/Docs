# Dimensional Schema Design

## Star Schema

Central Fact Table surrounded by denormalized Dimension tables.

- most common design
- simplest and easy to understand
- dimension tables are not normalized (flat structure)

### ✅ Pros

- simplified queries
- user-friendly
- fast query performance (fewer joins)
- best suited for reporting and BI tools

### ❌Cons

- data redundancy in dimension tables
- harder to maintain dimensions if attributes change frequently

## Snowflake Schema

Normalized dimensions (dimension tables broken into related sub-tables).

### ✅ Pros

- easier maintenance of dimension data
- less redundancy
- lower storage requirements
- good for environments with complex hierarchies

### ❌Cons

- more complex SQL queries
- requires more joins
- slightly lower performance due to extra joins

## Galaxy Schema

Multiple fact tables share dimension tables.

- shared conformed dimensions
- supports cross-process analysis
- also called Fact Constellation Schema.
- used in complex enterprise data warehouses with multiple business processes

### ✅ Pros

- flexibility to support multiple subject areas
- promotes reusability of dimensions

### ❌Cons

- higher complexity
- requires careful management of conformed dimensions
