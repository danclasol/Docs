# Snowflake Default Optimizations

Snowflake is designed to handle complex optimizations automatically, allowing users to focus on working with business data and analytics instead of managing infrastructure.

The platform provides several built-in optimizations that require no manual intervention from the user

## Micro-partitions

Snowflake uses micro-partitions to store data efficientlly.

- optimized storage units that Snowflake manages for high performance and scalability
- Snowflake automatically creates, manages, and optimizes them

## Automatic Caching

Snowflake automatically caches data and query results to improve performance and reduce compute costs.

- users don’t need to configure or manage any caching manually

## Scaling Up and Scaling Out

### Scaling Up (Vertically)

Increasing the power of a single compute resource.

- automatically adjust virtual warehouses sizes
- when need more power for a single task or query

### Scaling Out (Horizontally)

Adding more compute resources in parallel to handle multiple tasks simultaneously.

- automatically adds or removes clusters based on demand
- improves concurrency, many users or queries can run at the same time without queuing

## No need to check execution plan

Snowflake automatically optimizes queries by generating the most efficient execution plan.

## No need to create indexes

Unlike traditional databases where you might need to create and optimize indexes or partitions, Snowflake eliminates that need.

Snowflake manages this optimizations internally, simplifying and improving performance

## Automatic removes innecessary full table scan

Snowflake avoid the automatic full table scans when is possible
