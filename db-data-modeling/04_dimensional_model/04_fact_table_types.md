# Fact Table Types

## Transactional Fact Table

Stores facts at the most detailed, transactional level.

Each row represents an individual business transaction or event

- high volume
- lowest granularity
- typically additive facts

### Example

-
- bank transactions
- website clickstream events

`Fact_Sales` retail sales transactions

| Sales_ID | Date_Key | Product_ID | Customer_ID | Sales_Amount | Quantity |
| -------- | -------- | ---------- | ----------- | ------------ | -------- |
| 5001     | 20230110 | 1001       | 2001        | 150          | 2        |
| 5002     | 20230111 | 1002       | 2002        | 300          | 1        |

`Fact_Ticket_Purchase` - ticket Purchases

| Ticket_ID | Date_Key | Passenger_ID | Flight_ID | Ticket_Amount |
| --------- | -------- | ------------ | --------- | ------------- |
| 3001      | 20230501 | 7001         | F100      | 1200          |

## Snapshot Fact Table

Stores data that represents the state of a process or balance at specific points in time (daily, monthly, quarterly).

- for periodic reporting and performance analysis
- captures balances, inventory levels, account states
- supports trend analysis over time
- often semi-additive facts

### Example

`Fact_Account_Balance`

| Snapshot_Date | Account_ID | Balance |
| ------------- | ---------- | ------- |
| 20230131      | 3001       | 10,000  |
| 20230228      | 3001       | 12,000  |

`Fact_Employee_Count_Snapshot` - employee Headcount

| Snapshot_Date | Department_ID | Employee_Count |
| ------------- | ------------- | -------------- |
| 20230501      | HR            | 35             |

## Accumulating Snapshot Fact Table

Tracks the lifecycle of a process where racks the lifecycle of a process that has definite start and end points.

- useful for processes with a definite start and end, such as orders or claims
- single row per process instance
- updated as the process moves through stages
- contains milestone dates and durations

### Example

`Fact_Order_Lifecycle` - order processing lifecycle

| Order_ID | Order_Date | Ship_Date | Delivery_Date | Status     |
| -------- | ---------- | --------- | ------------- | ---------- |
| 7001     | 20230101   | 20230103  | 20230105      | Delivered  |
| 7002     | 20230102   | NULL      | NULL          | In Process |

`Fact_Recruitment_Process` - recruitment Process

| Candidate_ID | Application_Date | Interview_Date | Offer_Date | Hire_Date | Status |
| ------------ | ---------------- | -------------- | ---------- | --------- | ------ |
| 6001         | 20230501         | 20230503       | 20230505   | 20230510  | Hired  |
