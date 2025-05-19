# Facts

Central table that contains measurable, quantitative data (facts) and allows grouping and clasifying data for analytics purposes.

- store metrics, KPIs, and numerical measures of business processes
- contains foreign keys to dimension tables
- typically very large
- supports aggregation (SUM, AVG, COUNT)
- e.g.: sales Amount, Quantity Sold, Revenue

## Measures

The numeric data stored in the fact table.

- measures performance and business processes
- sales amount, units Sold, profit margin
- clicks, rrders, returns

Measures can be:

- Additive: can be aggregated across all dimensions
  - sales amount, quantity sold
- Semi-Additive: can be aggregated across some dimensions only
  - account balance (by date, not over time).
- Non-Additive: cannot be aggregated
  - ratios, percentages

## Granularity

The grain defines what one row in the fact table represents.

- defined by the combination of dimension keys
- e.g.:
  - Sales Transaction: one row per transaction line item
  - Inventory Snapshot: one row per product per store per day
  - Web Clickstream: one row per user session per page view
