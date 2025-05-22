# ETL Processes Layers

ETL stands for Extract, Transform, Load.

It’s the process of moving data from source systems into a data warehouse or data lake.

## Extract Layer (Raw Layer)

Data is collected or extracted from various source systems.

- gather raw data without changing it
- data is often pulled incrementally or in batches

Sources can be:

- databases (SQL, NoSQL)
- CRM or ERP systems
- files without format (CSV, JSON, XML)
- mail, websites
- APIs or external services

## Transform Layer (Staging Layer)

The raw extracted data is cleaned, formatted, and transformed to fit the target schema.

- ensures data quality and consistency before loading

Common transformations include:

- data cleaning (removing duplicates, fixing errors)
- data validation and type casting
- data enrichment (adding calculated fields)
- filtering and aggregation
- joining data from multiple sources

## Load Layer (Warehouse Layer)

The transformed data is loaded into the target system, usually a data warehouse, data lake, or database.

- dimensional model is applied, creating fact and dimensions tables
- after loading, data is ready for analytics, reporting, or machine learning

## Data Marts

Once the Warehouse is loaded, it can be defined the Data Marts which are subsets of the data warehouse tailored for specific business areas or departments (e.g., sales, finance).

- consume fact and dimensions from warehouse layer
- optimized for specific queries and reporting needs
- help improve query performance and user access control

## Analytics

The end-user consumption layer.

This layer gives users a safe and accurate view of the business, helping them make better decisions.

- supports BI tools, dashboards, machine learning models, and ad-hoc analysis
- may involve aggregated data, semantic layers, or data cubes
- often includes data visualization and reporting tools

# ETL in Snowflake

Each ETL process is implemented in a separete schema inside the database of the project.

- RAW Schema
- STAGING Schema
- WAREHOUSE Schema
  - FACT tables
  - DIMENSION tables
- DATA MARTS Schema
  - BUSINESS_MART
  - MANUFACTURE_MART
- ANALYTICS Schema

# ELT

ELT is the modern approach for cloud data warehouses.

Like ETL is data integration process but the processes order are different

- Extract data from source systems
- Load raw data into a data warehouse
  - without heavy processing
- Transform the data after loading it, using the power of the data warehouse

## ETL vs ELT

- Where Transform Happens

  - `ETL`: Outside target system (ETL tool, server)
  - `ELT`: Inside target system (e.g., Snowflake)

- Performance

  - `ETL`: Limited by ETL server resources
  - `ELT`: Leverages Snowflake's cloud scalability

- Flexibility
  - Complex data manipulation before loading
  - Raw data loaded quickly, flexible transformations later

## When to Use ETL

- ✅ You need to transform sensitive data before storing it
- ✅ Legacy systems that require on-premise processing
- ✅ You have complex business logic that needs heavy processing outside DB

## When to Use ELT

- ✅ You want to load raw data fast and transform later
- ✅ You're using a cloud data warehouse like Snowflake, BigQuery, Redshift
- ✅ You need scalability, simplicity, and faster time-to-insight
- ✅ You prefer SQL-based transformations
