# Warehouse Operations

We can create, update or delete warehouses

## Create Warehouse

### Using Warehouse Creation Wizard

In the left Menu Bar:

- go to Admin > Warehouses
- click on `+ Warehouse` button

#### Basic New Warehouse Details

- enter name, description
- type:
  - Standard
  - Snowpark-optimized
- size:

  - e.g.: `X-Small`

#### Advanced options

- Auto-resume (true/false)
  - whenever any statement that requires a warehouse is submitted
- Auto-suspend (seconds)
  - if it is inactive for the specific time
- Multi-cluster
  - min number of clusters
  - max number of clusters
  - scaling policy: Standard or Economy
- Query Acceleration

### Using SQL

You can also create a Warehouse using SQL

```sql
CREATE OR REPLACE WAREHOUSE MY_WAREHOUSE
WITH
WAREHOUSE_SIZE = XSMALL
AUTO_SUSPEND = 300
AUTO_RESUME = TRUE
SCALING_POLICY = 'Economy'
MIN_CLUSTER_COUNT = 1
MAX_CLUSTER_COUNT = 3
INITIALLY_SUSPENDED = TRUE
COMMENT = 'This is my warehouse'
```

## Updating Warehouse

### Using Warehouse Edition Wizard

In the left Menu Bar:

- go to Admin > Warehouses
- select a warehouse
- click on `...` and select `Edit` option

### Using SQL

For example, change size of warehouse

```sql
ALTER WAREHOUSE MY_WAREHOUSE
SET WAREHOUSE_SIZE = 'SMALL'
```

## Drop Warehouse

### Using Warehouse Edition Wizard

In the left Menu Bar:

- go to Admin > Warehouses
- select a warehouse
- click on `...` and select `Drop` option

### Using SQL

```sql
DROP WAREHOUSE MY_WAREHOUSE
```
