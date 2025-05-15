# Dimension Table Types

## Conformed Dimension

A shared dimension used across multiple fact tables or data marts.

- ensures consistency in reporting across subject areas

### Examples

##### Date dimension

| Date_Key (PK) | Date       | Year | Month | Day | Weekday   | Quarter | Is_Holiday |
| ------------- | ---------- | ---- | ----- | --- | --------- | ------- | ---------- |
| 20230101      | 2023-01-01 | 2023 | 1     | 1   | Sunday    | Q1      | Y          |
| 20230315      | 2023-03-15 | 2023 | 3     | 15  | Wednesday | Q1      | N          |

Shared between sales, shipments, and payments

| Sales_ID (PK) | Customer_ID | Product_ID | Sale_Amount | Sale_Date_Key (FK) |
| ------------- | ----------- | ---------- | ----------- | ------------------ |
| 10001         | 5001        | 2001       | 250         | 20230101           |

| Shipment_ID (PK) | Order_ID | Ship_Date_Key (FK) | Delivery_Date_Key (FK) |
| ---------------- | -------- | ------------------ | ---------------------- |
| 70001            | 60001    | 20230102           | 20230105               |

| Payment_ID (PK) | Customer_ID | Amount | Payment_Date_Key (FK) |
| --------------- | ----------- | ------ | --------------------- |
| 9001            | 5001        | 150    | 20230315              |

#### Customer dimension

Used by sales, service, and marketing

| Customer_ID (PK) | Name       | City   |
| ---------------- | ---------- | ------ |
| 1001             | John Smith | London |

| Sales_ID (PK) | Customer_ID (FK) | Product_ID | Sale_Amount |
| ------------- | ---------------- | ---------- | ----------- |
| 10001         | 5001             | 2001       | 500         |

| Payment_ID (PK) | Customer_ID (FK) | Amount | Payment_Date_Key |
| --------------- | ---------------- | ------ | ---------------- |
| 9001            | 5001             | 150    | 20230120         |

## Degenerate Dimension

A dimension key stored inside the fact table, with no separate dimension table.

- conceptually belongs to a specific dimension
- not enough attributes to justify using a separate table
- provide grouping

- e.g.:
  - invoice number

| Fact_Sales_ID (PK) | Invoice_Number (DD) | Customer_ID | Amount |
| ------------------ | ------------------- | ----------- | ------ |
| 50001              | INV12345            | 1001        | 100    |

## Slowly Changing Dimension

Dimensions which values can change over time.

- require techniques to ensure historical coherence

### SCD Types

#### `Type 1`: overwrites old data (no history)

Overwrites the existing data when changes occur (no history kept).

- e.g.: correcting a wrong customer address
  - Alice Smith changes her country to UK
  - old country is overwritten immediately
  - no history is kept

| User_ID (PK) | Name        | Email                                         | Country |
| ------------ | ----------- | --------------------------------------------- | ------- |
| 5001         | Alice Smith | [alice@example.com](mailto:alice@example.com) | USA     |
| 5002         | John Doe    | [john@example.com](mailto:john@example.com)   | Canada  |

#### `Type 2`: adds new rows for changes (keeps history)

Keeps historical records by adding a new row for each change with surrogate key and date range.

- e.g.: tracking customer address changes over time
  - Alice Smith changes her country to UK
  - range of dates to have full historical tracking
  - keeps historical of the old address

| User_Surrogate_Key (PK) | User_ID | Name        | Country | Start_Date | End_Date   | Is_Current |
| ----------------------- | ------- | ----------- | ------- | ---------- | ---------- | ---------- |
| 1                       | 5001    | Alice Smith | USA     | 2022-01-01 | 2024-05-01 | N          |
| 2                       | 5001    | Alice Smith | UK      | 2024-05-02 | 9999-12-31 | Y          |

#### `Type 3`: adds new columns for limited history

Stores limited historical data by adding additional columns to track previous values, typically for only one or two prior changes.

When the business only cares about current and previous state, not full history

- e.g.: storing current and previous customer status
  - one historical value is kept

| Customer_ID (PK) | Name       | Current_City | Previous_City |
| ---------------- | ---------- | ------------ | ------------- |
| 1001             | John Smith | London       | New York      |

## Role-Playing Dimension

A single physical dimension table playing multiple logical roles in different contexts or columns within the same or multiple fact tables.

The same dimension is reused multiple times using different foreign keys with different business meanings.

### Examples

#### Date dimension

| Date_Key (PK) | Date       | Year | Month | Day | Quarter |
| ------------- | ---------- | ---- | ----- | --- | ------- |
| 20230101      | 2023-01-01 | 2023 | 1     | 1   | Q1      |
| 20230105      | 2023-01-05 | 2023 | 1     | 5   | Q1      |
| 20230110      | 2023-01-10 | 2023 | 1     | 10  | Q1      |

Date Dimension can play roles such as

- Order Date - Order_Date_Key (FK)
- Ship Date - Ship_Date_Key (FK)
- Delivery Date - Delivery_Date_Key (FK)

| Order_ID (PK) | Customer_ID | Order_Date_Key (FK) | Ship_Date_Key (FK) | Delivery_Date_Key (FK) | Amount |
| ------------- | ----------- | ------------------- | ------------------ | ---------------------- | ------ |
| 5001          | 1001        | 20230101            | 20230105           | 20230110               | 300    |

## Junk Dimension

Combines low-cardinality flags and miscellaneous attributes into a single dimension table.

- not enough attributes to justify using a separate table
- helps to reduce clutter in the fact table
- avoid creating bunch of small dimensions

| Junk_ID (PK) | Is_New_Customer | Is_Promotion_Applied | Is_Returning_User |
| ------------ | --------------- | -------------------- | ----------------- |
| 1            | Y               | N                    | N                 |
| 2            | N               | Y                    | Y                 |

## Bridge Table

Used to resolve many-to-many relationships between fact and dimension tables or between two dimension tables in dimensional modeling.

- allow accurate aggregations and reporting in cases where a direct one-to-many relationship cannot represent the business reality
- avoids data duplication, redundancies or incorrect measures in many-to-many scenarios

### Examples

#### Categories -> Product (many-to-many)

- `Dim_Product`

| Product_ID (PK) | Product_Name |
| --------------- | ------------ |
| 1001            | Laptop X     |
| 1002            | Tablet Y     |

- `Dim_Category`

| Category_ID (PK) | Category_Name  |
| ---------------- | -------------- |
| 10               | Electronics    |
| 20               | Computing      |
| 30               | Mobile Devices |

- `Bridge_Product_Category`

  - allows us to keep just one row in the Fact_Sales
  - and map multiple categories to the product in a separate table
  - avoids duplicates in the Fact_Sales

| Product_ID (FK) | Category_ID (FK) |
| --------------- | ---------------- |
| 1001            | 10               |
| 1001            | 20               |
| 1002            | 10               |
| 1002            | 30               |

- `Fact_Sales`

| Sales_ID | Product_ID | Sale_Date_Key | Sale_Amount |
| -------- | ---------- | ------------- | ----------- |
| 5001     | 1001       | 20230101      | 500         |
| 5002     | 1002       | 20230105      | 300         |

## Outrigger Dimension

A normalized dimension table that connects to another dimension table rather than directly to a fact table.

- when you need to add more detailed information to a dimension, which itself can be too broad or contain redundant data
- used in snowflake schemas
- not recommended unless necessary
- creates a hierarchical relationship

### Examples

#### Employee with Department and Location Details

`Dim_Employee` (Main Dimension)

This dimension contains general information about employees

| Employee_ID (PK) | Name       | Department_ID (FK) |
| ---------------- | ---------- | ------------------ |
| 1001             | John Smith | 10                 |
| 1002             | Jane Doe   | 20                 |

`Dim_Department` (Outrigger Dimension)

This outrigger table stores details about the departments.

- linked to `Dim_Employee`

| Department_ID (PK) | Department_Name | Location_ID (FK) |
| ------------------ | --------------- | ---------------- |
| 10                 | HR              | 100              |
| 20                 | IT              | 200              |

`Dim_Location` (Outrigger's Reference)

This outrigger table contains location information for departments.

| Location_ID (PK) | Location_Name | Country |
| ---------------- | ------------- | ------- |
| 100              | New York      | USA     |
| 200              | London        | UK      |

`Fact_Employee_Activity`

The Fact Table only links to `Dim_Employee` directly.

Through outrigger tables, the `Dim_Department` and `Dim_Location` allow you to add hierarchical context to the Employee dimension.

| Activity_ID (PK) | Employee_ID (FK) | Activity_Type | Activity_Date |
| ---------------- | ---------------- | ------------- | ------------- |
| 5001             | 1001             | Meeting       | 2023-01-10    |
| 5002             | 1002             | Coding        | 2023-01-15    |

## Mini Dimension

A Mini Dimension is a small dimension table that captures descriptive attributes of a larger dimension.

- allow rapidly changing attributes in wide dimension
- reduce the size of the main dimension
- full history of changes without affecting the performance or size of the main dimension

### Examples

#### Customer Mini Dimension for Customer Tier

`Dim_Customer` (Main Dimension)

| Customer_ID (PK) | Name       | Email                                               | Address     | Phone    |
| ---------------- | ---------- | --------------------------------------------------- | ----------- | -------- |
| 1001             | John Smith | [john.smith@email.com](mailto:john.smith@email.com) | 123 Main St | 555-1234 |
| 1002             | Jane Doe   | [jane.doe@email.com](mailto:jane.doe@email.com)     | 456 Oak Ave | 555-5678 |

`Dim_Customer_Tier` (Mini Dimension)

- stores the tier information (e.g., Premium, Standard)
- tracks changes over time (using Start_Date and End_Date)

| Customer_Tier_ID (PK) | Customer_ID (FK) | Tier_Level | Start_Date | End_Date   |
| --------------------- | ---------------- | ---------- | ---------- | ---------- |
| 1                     | 1001             | Premium    | 2023-01-01 | NULL       |
| 2                     | 1002             | Standard   | 2022-05-01 | 2023-01-01 |
| 3                     | 1002             | Premium    | 2023-01-01 | NULL       |
