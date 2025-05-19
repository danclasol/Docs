# Warehouse clusters

## Clusters types

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

## Scaling policies

### Standard

Immediately add clusters when either a query is queued or the system detects that tere are more queries that can be executed by the currently available clusters.

- removes idle clusters immediately when demand decreases
- designed for high performance and low query wait times
- best when fast responsiveness is needed for workloads with unpredictable or spiky usage

### Economy

Add clusters only if the system estimates there's enough query load to keep the cluster busy for at least 6 minutes.

- keeps idle clusters running longer before shutting them down
- designed to reduce costs by preventing frequent scaling up/down
- best for workloads with predictable, steady demand where cost savings are a priority
