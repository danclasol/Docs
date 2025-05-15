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

## Types of Keys

In dimensional modeling, keys play an essential role in linking fact tables and dimension tables.

There are specific types of keys commonly used in this modeling approach:

### Business, Natural, Dimension Key

Represents the real-world identifier used in operational systems.

- like _Customer_ID_, _Product_Code_
- stored in the dimension table alongside the surrogate key
- not used as the primary key

## Surrogate Keys

A Surrogate Key is an artificial, system-generated key used as the primary key in dimension tables, to join dimensions and fact tables.

- independent from operational (business) keys
- typically an integer or sequence-generated value (e.g., 1, 2, 3...).
- has no business meaning
- used exclusively within the data warehouse environment
