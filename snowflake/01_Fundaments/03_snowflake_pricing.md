# Snowflake Pricing

- compute and storage costs are decoupled
- pay only what you need
- scalable and affordable cloud price
- pricing depends on the region/cloud provider

## Snowflake Credits

Snowflake uses a credit-based system for compute resources.

A credit is consumed when a virtual warehouse is running, or when serverless features like Snowpipe or Search Optimization are active.

## Costs

### Compute Costs

- Virtual Warehouses
  - charged only for active warehouses per hour
  - billed by second (minimum of 1min)
  - depending on the size of the warehouse
    - `X-Small`: 1 credit/hour
    - `Small`: 2 credits/hour
    - `Medium`: 4 credits/hour
    - `Large`: 8 credits/hour
    - `X-Large`: 16 credits/hour
    - `2X-Large`: 32 credits/hour
    - `3X-Large`: 64 credits/hour
    - `4X-Large`: 128 credits/hour
    - `5X-Large`: 256 credits/hour
    - `6X-Large`: 512 credits/hour
- Cloud Services
  - only charged if exceeds 10% of warehouse consumption
- Serverless
  - Snowpipe: 1 credit per hour
  - Search Optimization Service: Up to 10 credits per hour
  - Materialized Views: Up to 10 credits per hour

### Storage Costs

- Monthly storage fees
- Based on average storage used per month
- Depends on the cloud providers
- Cost calculated after data compression

- On Demand Storage

  - pay only for what you use
  - $40/TB per month

- Capacity Storage
  - pay only for defined capacity upfront
  - $24.50/TB

### Data transfer

- Data ingress is FREE
- Data egress

  - Within Same Cloud Provider: Free
  - Cross-Region or Cross-Cloud: Charges apply, varying by region and cloud provider

## Pricing per Editions

These costs can be different depending the region of the provider

- Standard: $2 / Credit
- Enterprise: $3 / Credit
- Business Critical: $4 / Credit
- Virtual Private: Contact Snowflake
