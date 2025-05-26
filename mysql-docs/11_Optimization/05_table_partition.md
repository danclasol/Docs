# Table Partition

Partitioning divides table data horizontally, all rows stay in the same table logically, but physically they are stored in separate partitions.

- faster queries (if partition pruning is used)
- easier data maintenance (e.g. drop old data partitions)
- better I/O for large datasets

Useful when:

- table is very large (millions+ of rows)
- often filter by range, time, or hashable keys
- want to manage partitions (e.g., drop old data fast)

## Partition Types

### RANGE

In range partitioning, the partition key is used to define ranges of values.

For example, dates or numerical ranges.

- partition key: YEAR(_sale_date_)
- rows where the _sale_date_ falls in a particular year will be stored in the respective partition

```sql
CREATE TABLE sales (
    id INT,
    amount DECIMAL(10,2),
    sale_date DATE
)
PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p2022 VALUES LESS THAN (2023),
    PARTITION p2023 VALUES LESS THAN (2024),
    PARTITION pmax  VALUES LESS THAN MAXVALUE
);
```

### LIST

In list partitioning, the partition key is used to specify explicit values that will belong to each partition.

- partition key: _region_
- rows with _region_ = 'east' will go into the _p_east_ partition, and so on

```sql
CREATE TABLE customers (
    id INT,
    name VARCHAR(50),
    region VARCHAR(10)
)
PARTITION BY LIST COLUMNS (region) (
    PARTITION p_east VALUES IN ('east'),
    PARTITION p_west VALUES IN ('west'),
    PARTITION p_south VALUES IN ('south')
);
```

### HASH

In hash partitioning, MySQL uses the partition key’s hash value to determine the partition for each row.

This method is typically used when you want a uniform distribution of data across partitions.

- partition key: _user_id_
- MySQL will compute the hash of the _user_id_ value and distribute the rows across 4 partitions

```sql
CREATE TABLE logs (
    user_id INT,
    action VARCHAR(100)
)
PARTITION BY HASH(user_id)
PARTITIONS 4;
```

### KEY

Key partitioning is similar to hash partitioning but uses MySQL’s internal partitioning algorithm (rather than just hashing the partition key directly).

It can be used to partition by one or more columns, and it also uses MySQL’s internal function to generate the hash.

- partition key: id
- this will distribute rows across 6 partitions, using MySQL's internal key partitioning algorithm.

```sql
CREATE TABLE orders (
    id INT,
    order_date DATE,
    PRIMARY KEY (id)
)
PARTITION BY KEY (id)
PARTITIONS 6;
```

## Parition Limitations

- ❌ cannot use foreign keys on partitioned tables
- ❌ only one partitioning key allowed
- ❌ not suitable for small tables, overhead outweighs benefit
- ✅ use partition pruning, MySQL skips irrelevant partitions if WHERE clause matches

## Partition pruning

Partitioning can enhance query performance by limiting the number of rows that need to be scanned.

Partition pruning is the process where MySQL only reads the relevant partitions based on the query’s WHERE clause, reducing the amount of data to process.

For example, a range partitioning for Date-based Queries.

```sql
CREATE TABLE sales (
    id INT,
    amount DECIMAL(10, 2),
    sale_date DATE,
    PRIMARY KEY (id, sale_date)
)
PARTITION BY RANGE (YEAR(sale_date)) (
    PARTITION p_2020 VALUES LESS THAN (2021),
    PARTITION p_2021 VALUES LESS THAN (2022),
    PARTITION p_2022 VALUES LESS THAN (2023)
);
```

When you query data for a specific year, partition pruning will help

- only the p_2021 partition is scanned
- without partitioning, the entire table would be scanned

```sql
SELECT * FROM sales
WHERE YEAR(sale_date) = 2021;
```

## Check patitions usage

```sql
SELECT * FROM information_schema.partitions
WHERE table_name = 'your_table';
```

## Removing partitions

Partitioning simplifies data management tasks like archiving, deleting, or purging old data. Instead of deleting or updating rows one-by-one, you can drop or manage entire partitions.

```sql
ALTER TABLE log_entries DROP PARTITION p_2010;
```
