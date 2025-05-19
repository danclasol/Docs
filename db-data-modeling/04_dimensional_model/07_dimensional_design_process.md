# Dimensional Design Process

## Select the Business Process

Identify the business process to model (e.g., sales, inventory, orders, claims)

- business processes are verbs (actions)
- chosen based on business priorities and user needs.

## Declare the Grain

Define the granularity (grain) of the fact table.

- clarify exactly what one row in the fact table represents
- must be precise and unambiguous

## Identify the Dimensions

Identify all descriptive dimensions required to analyze the facts

- ask who, what, when, where, how, why?
- each dimension will provide the descriptive context to the facts.

## Identify the Facts (Measures)

Determine the facts (measures) to be analyzed

- typically numeric and aggregatable
- validate against the defined grain

## Design the Fact Table

Create the fact table structure

- foreign keys to dimension tables
- fact columns (measures)
- ensure the fact table supports the declared grain.

## Design the Dimension Tables

Define dimension table structures

- surrogate keys (recommended for stability)
- attributes, hierarchies, SCD handling
- model hierarchies and organize attributes for usability

## Handle Slowly Changing Dimensions (SCD)

Decide how to manage historical changes in dimension attributes:

- Type 1: Overwrite
- Type 2: Add new row
- Type 3: Add new column

## Ensure Conformed Dimensions (if applicable)

For multiple fact tables, ensure that dimensions are conformed and reusable

- helps to standardize reporting across data marts

## Perform Quality Review

Review model with business users and technical teams.

- check alignment with business requirements
- confirm integrity, usability, and scalability
