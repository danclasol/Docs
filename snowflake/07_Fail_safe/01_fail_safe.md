# Fail Safe

Fail-safe is a data protection feature in Snowflake that provides an additional layer of recovery for your data after the standard Time Travel retention period ends.

- Time Travel lets you recover data within a configurable period
  - up to 90 days on higher editions
- After Time Travel expires, Snowflake keeps your data in Fail-safe for 7 days
- Snowflake Support must be contacted to recover data from Fail-safe.
