# INSERT

Adds new rows into a table

## INSERT INTO

Basic insert of a single row

```sql
INSERT INTO users (username, email)
VALUES ('alice', 'alice@example.com');
```

Insert multiple rows

```sql
INSERT INTO users (username, email)
VALUES
  ('alice', 'alice@example.com'),
  ('peter', 'peter@example.com'),
  ('daniel', 'daniel@example.com');
```

## INSERT INTO SELECT

Insert from another table

```sql
INSERT INTO table_name (column1, column2)
SELECT column1, column2
FROM another_table
WHERE condition;
```

## INSERT IGNORE

Skips rows with duplicate keys instead of throwing an error.

```sql
INSERT IGNORE INTO table_name (column1, column2)
VALUES (value1, value2);
```

## INSERT ON DUPLICATE KEY

If a duplicate key error occurs, it updates instead.

```sql
INSERT INTO table_name (id, name)
VALUES (1, 'Alice')
ON DUPLICATE KEY UPDATE name = 'Alice';
```

## REPLACE INTO

Deletes the old row if there's a duplicate key and inserts the new one.

- more destructive than `ON DUPLICATE KEY UPDATE`
- deletes the old row (which can affect foreign keys or triggers)

```sql
REPLACE INTO table_name (id, name)
VALUES (1, 'Bob');
```
