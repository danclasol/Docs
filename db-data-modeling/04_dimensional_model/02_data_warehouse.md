# Data Warehouse (DW)

Data Warehouse are specialized system used for storing, managing, and analyzing large volumes of data from multiple sources.

Designed to support business intelligence (BI), reporting, and data analysis by providing a central repository of cleaned, organized, and historical data.

## DW Features

- Subject-Oriented

  - Organized around key business subjects like sales, finance, inventory, etc.

- Integrated

  - Combines data from multiple heterogeneous sources (databases, files, APIs).

- Time-Variant

  - Stores historical data for trend analysis and decision-making.

- Non-Volatile
  - Data is stable and only updated through controlled ETL processes (Extract, Transform, Load), not by regular transactional operations.

## Components of a Data Warehouse:

### Data Sources

Operational databases, CRM, ERP, external data, etc.

### ETL Process

Extract, transform, and l oad the data into the warehouse.

### Data Warehouse Database

Centralized data storage optimized for querying and reporting.

### Data Marts (optional)

Subsets of the data warehouse focused on specific business areas.

### BI Tools & Reporting Tools

Used to analyze and visualize data.

# Data Lake

A Data Lake is a centralized storage system that holds large amounts of raw, unprocessed, or semi-processed data in its native format, including structured, semi-structured, and unstructured data.

It is designed to store big data at any scale, enabling organizations to capture all types of data without predefined schema or structure (also known as schema-on-read approach).
