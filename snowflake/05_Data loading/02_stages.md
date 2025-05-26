# Stages

Location of data files where data can be loaded from.

## Types of stages

### External Stage

- External cloud provider
  - S3
  - Google Cloud Platform
  - Microsoft Azure
- Database object created in Schema
- Additional cost may be applied

### Internal Stage

Local storage maintained by Snowflake

## Managing Stages

### Create external stage

```sql
CREATE OR REPLACE STAGE my_stage
URL= 's3://bucketsnowflake3'
CREDENTIALS=(aws_key_id='ABCD_DUMMY_ID' aws_secrete_key='1234abcd_key');
```

### Description of stage

```sql
DESC STAGE my_stage;
```

### Alter stage

```sql
ALTER STAGE my_stage
SET CREDENTIALS=(aws_key_id='XYZ_DUMMY_ID' aws_secrete_key='9876xyz_key');
```

## List files in a stage

```sql
LIST @my_stage
```
