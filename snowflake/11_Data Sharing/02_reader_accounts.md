# Reader Accounts

A Reader Account is a free, managed Snowflake account that you (the data provider) can create and control.

It allows non-Snowflake users to query your shared data using the Snowflake UI, SQL, or BI tools, without purchasing their own Snowflake subscription.

- provider is responsible for all cost
- share becomes inmmediately visible once shared
- each account can share and consume
  - even own share can be consumed
- Virtual Private Edition not support sharing
- can create private hub for sharing data
  - member can be invited
  - enabled by Snoflake support

## Creating Reader Account

Create a Reader Account

- must be done by a Snowflake account admin

```sql
CREATE MANAGED ACCOUNT reader_acct
ADMIN_NAME = 'reader_admin'
ADMIN_PASSWORD = 'StrongPassword123!';
```

Check the account is created

```sql
SHOW MANAGE ACCOUNT;
```

## Add the Reader Account to the Share

Share the data with the Reader account

```sql
ALTER SHARE my_share ADD ACCOUNT = reader_acct;
```

## Consume database from Reader Account

Once the consumer access as a Reader Account, it can create a share database

### Check share exists

```sql
SHOW SHARES;
```

### Create database

```sql
CREATE DATABASE DATA_SHARE_DB FROM SHARE <ACCOUNT_NAME_PRODUCER>.<SHARE_TABLE_NAME>
```
