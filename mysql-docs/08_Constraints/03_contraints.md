# Constraints

Constraints are essential for enforcing data integrity and ensuring that the data stored in your database adheres to specific rules.

## `CHECK`

Ensures that all values in a column satisfy a specific condition.​

```sql
CREATE TABLE products (
  id INT PRIMARY KEY,
  price DECIMAL(10,2),
  CHECK (price > 0)
);
```

## `UNIQUE`

Ensures that all values in a column or a group of columns are distinct across the table.

```sql
CREATE TABLE users (
  email VARCHAR(255) UNIQUE
);
```

You can also define a composite unique constraint:​

```sql
CREATE TABLE students (
  id INT,
  subject_id INT,
  email VARCHAR(255),
  UNIQUE (id, subject_id, email)
);
```

## `NOT NULL`

Ensures that a column cannot contain NULL values.

```sql
CREATE TABLE employees (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);
```

## `DEFAULT`

Sets a default value for a column if no value is specified during insertion.​

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  status VARCHAR(20) DEFAULT 'pending'
);
```

## `AUTO_INCREMENT`

Automatically generates a unique number for each new row.​

```sql
CREATE TABLE customers (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
```
