# Batch data operations

To can run multiple insert/update/delete statements in a single batch, which improves performance by reducing database round-trips.

### `batchUpdate(String[] sql)`

When you have different static SQL statements

- returns an `int[]` where each element is the number of rows affected by each statement

```java
String[] sqlStatements = {
    "INSERT INTO users (id, name) VALUES (1, 'Alice')",
    "INSERT INTO users (id, name) VALUES (2, 'Bob')",
    "UPDATE users SET name = 'Charlie' WHERE id = 1"
};

int[] updateCounts = jdbcTemplate.batchUpdate(sqlStatements);
```

### `batchUpdate(String sql, List<Object[]> batchArgs)`

When batching same SQL with different params

```java
String sql = "INSERT INTO users (id, name) VALUES (?, ?)";

List<Object[]> batchArgs = new ArrayList<>();
batchArgs.add(new Object[]{1, "Alice"});
batchArgs.add(new Object[]{2, "Bob"});
batchArgs.add(new Object[]{3, "Charlie"});

int[] updateCounts = jdbcTemplate.batchUpdate(sql, batchArgs);
```

### `batchUpdate(String sql, BatchPreparedStatementSetter)`

When you want fine-grained control over setting params

```java
String sql = "INSERT INTO users (id, name) VALUES (?, ?)";

int[] updateCount = jdbcTemplate.batchUpdate(sql,
    new BatchPreparedStatementSetter() {

        @Override
        public void setValues(PreparedStatement ps, int i) throws SQLException {
            ps.setInt(1, users.get(i).getId());
            ps.setString(2, users.get(i).getName());
        }

        @Override
        public int getBatchSize() {
            return users.size();
        }
    });
```

## Using NamedParameterJdbcTemplate

### `batchUpdate(String sql, BatchPreparedStatementSetter)`

```java
String sql = "INSERT INTO users (id, name) VALUES (:id, :name)";

Map<String, Object>[] batchValues = users.stream()
    .map(user -> {
        Map<String, Object> paramMap = new HashMap<>();
        paramMap.put("id", user.getId());
        paramMap.put("name", user.getName());
        return paramMap;
    })
    .toArray(Map[]::new);

int[] updateCount = namedParameterJdbcTemplate.batchUpdate(sql, batchValues);
```
