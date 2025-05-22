# Performan Optimizations

Although Snowflake manage many optimizations for us, we still have a series of aspects we can control

## Dedicated Virtual Warehouses

- Identify and classify groups of workload/users
- Create dedicated warehouses for every class of workload and assign users
- Avoid using to many warehouses, avoid underutilization
- Refine classifications, work pattern can change

## Scaling up

- Increasing the size of virtual warehouses
- Change the size depending on different work loads in differente periods
- More complex query
- Examples
  - ETL at certain times (between 4pm and 8pm)
  - Special business event with more work load

## Scaling Out

- Using addition warehouses/Multi-cluster warehouses
- Dynamically for unknown patterns of work load
- More concurrent users/queries
- Automation the process if you have fluctuating number of users
- Multi-clusters:
  - Minimun: default should be 1 to avoid high costs
  - Maximum: can be very high

## Maximize Cache Usage

- Automatical process to speed up the queries
- If query is executed twice, results are cached and can be re-used
- Result are cached for 24 hours or until underlaying data has changed
- Ensure similar queries go on the same warehouse

## Cluster keys

- Subset of rowns to locate the data in micro-partitions
- For large tables this improves the scan efficiency in our queries
- In general Snowflake produces well-clustered tables automatically
- Cluster keys are not always idela and can change over time
- Manually customize these cluster keys
- Recommendations for column cluster
  - columns used frequently in WHERE, JOIN

### Create Cluster manually

```sql
CREATE TABLE table_name CLUSTER BY (column_name)
```

### Alter exisiting Cluster

```sql
ALTER TABLE table_name CLUSTER BY (column_name)
```
