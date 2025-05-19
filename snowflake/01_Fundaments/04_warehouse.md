# Warehouse

In Snowflake, a Warehouse is a compute resource used to process queries, run transformations, and perform tasks like loading or exporting data.

- virtual compute layer
- scaled up (bigger size) or scaled out (multiple warehouses)
- separate from storage

## Warehouse sizes

Snowflake offers T-shirt sizes for virtual warehouses.

These define how much compute power (CPU, memory, etc.) is allocated.

- X-Small: small development tasks, testing, light queries
- Small: small teams, light analytics, small ELT jobs
- Medium: medium data transformations, small dashboards
- Large: heavy ELT jobs, large BI workloads
- X-Large -> 6x-Large: Very large data processing, concurrent workloads

## Warehouse clusters

### Single cluster

One compute cluster.

- suitable for most workloads
- queries may queue if too many run at once

### Multi-clustering

Multi-clustering allows a Snowflake Virtual Warehouse to automatically scale out by adding more clusters of compute to handle high concurrency.

- auto-scale out by adding more clusters on demand
- avoids query queuing delays by distributing the load across multiple clusters
- improves intensive ETL processes that require high compute resources

#### When to Use Multi-Clustering

- ✅ High concurrency workloads
- ✅ Dashboards & reports accessed by many users at once
- ✅ BI tools with many simultaneous queries
- ✅ Large-scale batch jobs triggering lots of parallel queries

### Scaling policies

#### Standard

Automatically adds clusters quickly when demand increases.

- removes idle clusters immediately when demand decreases
- designed for high performance and low query wait times
- best when fast responsiveness is needed for workloads with unpredictable or spiky usage

#### Economy

Adds clusters more slowly to avoid scaling too aggressively.

- keeps idle clusters running longer before shutting them down
- designed to reduce costs by preventing frequent scaling up/down
- best for workloads with predictable, steady demand where cost savings are a priority
