# Data Loading

Snowflake supports multiple ways to load data into tables, depending on the source, size, and use case.

## Bulk Data Loading

Efficient method to load large volumes of data (gigabytes to terabytes) into Snowflake tables.

- uses warehouses
- loading from stages
- big batch load or puntual loads
- supports formats: CSV, JSON, PARQUET, AVRO, ORC, XML

## Continuous Loading (Snowpipe)

Automated continuous data loading service.

- detects new files in a stage and loads them automatically
- uses event notifications (e.g., S3 events) or can be triggered manually
- designed to load small volumes of data
- best for real-time / near-real-time loading (micro-batches)
