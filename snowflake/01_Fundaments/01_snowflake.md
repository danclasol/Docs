# Snowflake

Snowflake is a cloud-based data platform that provides data storage, processing, and analytics solutions.

- software as a service (SaaS)
- built for the cloud from the ground up
- supports data lakes, data engineering, data science, and secure data sharing
- works on cloud providers like AWS, Azure, and Google Cloud

## Software as a Service (SaaS)

Snowflake is SaaS which means that is a cloud-based software delivery model where you access applications over the internet.

- no need to install any software or manage servers
- service is available instantaneously after subcription
- fully hosted in the cloud (AWS, Azure, GCP)
- access it from anywhere through a web interface, SQL clients, or APIs
- updates and maintenance are handled automatically by the provider

## Architecture

### Storage Layer

Stores all your structured and semi-structured data (CSV, JSON, Parquet, etc.).

- data is stored in compressed, optimized formats in cloud storage (AWS S3, Azure Blob, GCP Storage)
- saved in blobs
- don’t need to manage the storage directly
- Snowflake takes care of data organization, compression, encryption, and optimization
- cost-efficient: only pay for the data you store

### Compute Layer

This is where all the processing (queries, transformations, loading) happens.

- compute resources are called Virtual Warehouses
- performs MMP (Massive Parallel Processing)
- can scale up/down independently
- multiple warehouses can run at the same time without impacting each other
- can dedicate warehouses for different workloads
  - e.g., BI queries, ETL jobs, data science

### Services layers

Manages infrastructure, authentication, query parsing, optimization, metadata management, access control, caching, etc.

- manages how queries are executed
- ensures security, governance, and availability
- handles automatic scaling, failover, and optimization behind the scenes
