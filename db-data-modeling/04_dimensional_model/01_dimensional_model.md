# Dimensional Model

A Dimensional Model is a design concept used in data warehousing to structure data in a way that is easy to understand and query, especially for reporting and business intelligence purposes.

- created specifically for Data Warehousing
- helps organize data into clear structures using fact tables and dimension tables
- making it easier for users to explore and analyze information efficiently

Core components

- facts
- dimensions

## Differences with relational model

Relational model was designed for data integrity, normalization, consistency while dimensional model is optimized for analytical processing.

- high performance in queries
- simpler and intuitive
- based on facts and dimensions
- uses denormalized tables to speed up read performance
- frequently uses derived and aggregatated data
- star, snowflake schemas
