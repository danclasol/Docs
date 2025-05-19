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
