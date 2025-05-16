# Types of Keys

In dimensional modeling, keys play an essential role in linking fact tables and dimension tables.

There are specific types of keys commonly used in this modeling approach:

## Business, Natural, Dimension Key

Represents the real-world identifier used in operational systems.

- like _Customer_ID_, _Product_Code_
- stored in the dimension table alongside the surrogate key
- not used as the primary key

## Primary

Uniquely identifies each record in the dimension table.

- usually the surrogate key
- enables joins with the fact table

## Foreign Key

A foreign key in the fact table that references the surrogate key in the dimension table.

- connects facts to their descriptive context in the dimension

## Surrogate Keys

A Surrogate Key is an artificial, system-generated key used as the primary key in dimension tables, to join dimensions and fact tables.

- independent from operational (business) keys
- typically an integer or sequence-generated value (e.g., 1, 2, 3...).
- has no business meaning
- used exclusively within the data warehouse environment
