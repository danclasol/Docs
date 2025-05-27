# NamedParameterJdbcTemplate

builds on JdbcTemplate by letting you use named parameters (:paramName) instead of JDBC’s ordinal ? placeholders.

## Setting NamedParameterJdbcTemplate

```java
 @Bean
   public NamedParameterJdbcTemplate namedJdbcTemplate(DataSource ds) {
       return new NamedParameterJdbcTemplate(ds);
   }
```

## Methods

### `queryForObject()`

When the query returns exactly one row

- throws `IncorrectResultSizeDataAccessException` if the query returns 0 or more than 1 row
- `RowMapper`: maps each row of the ResultSet to an instance object

```java
String sql = "SELECT * FROM users WHERE id = ?";
Map<String, Object> params = new HashMap<>();
params.put("mail", "test@mail.com");

User user = namedParameterJdbcTemplate.queryForObject(sql, params, new BeanPropertyRowMapper<>(User.class));
```

### `query()`

Query returns more one or more rows

- _RowMapper_: maps each row of the ResultSet to an instance object

```java
String sql = "SELECT * FROM users WHERE age > :minAge";
int minAge = 18;

User user = namedParameterJdbcTemplate.query(sql, params, new BeanPropertyRowMapper<>(User.class));
```

You can also use `ResultExtractor<T>` for full control over the entire cursor.

```java
String sql = "SELECT * FROM users WHERE age > :minAge";
int minAge = 18;

List<String> userNames = namedParameterJdbcTemplate.query(sql, params, rs -> {
    List<String> list = new ArrayList<>();

    while (rs.next()) {
        list.add(rs.getString("name"));
    }
    return list;
});
```

### `update()`

Insert, update, or delete with a plain SQL query

- params will be map with the `:param` wildcard

```java
String sql = "UPDATE users SET mail = :mail WHERE id = :id";
Map<String, Object> params = new HashMap<>();
params.put("id", "1234");
params.put("mail", "test@mail.com");

int rowsAffected = namedParameterJdbcTemplate.update(sql, params);
```

### `execute()`

Executes the query by using `PreparedStatementCallback`.

```java
String sql = "SELECT COUNT(*) FROM users WHERE active :active";
Map<String, Object> params = new HashMap<>();
params.put("active", true);

Integer count = jdbcTemplate.execute(sql, params, (PreparedStatementCallback<Integer>) ps -> {
    ResultSet rs = ps.executeQuery();
    rs.next();
    return rs.getInt(1);
});
```

Call a stored procedure/function via jdbc’s `CallableStatement`

```java
String call = "{ call calculate_bonus(:userId, :year, :out_bonus) }";

Map<String, Object> params = new HashMap<>();
params.put("userId", 42L);
params.put("year", 2024);
params.put("out_bonus", Types.NUMERIC );

BigDecimal bonus = namedJdbc.execute(
  call,
  params,
  (CallableStatementCallback<BigDecimal>) cs -> {
      cs.registerOutParameter("out_bonus", Types.NUMERIC);
      cs.execute();

      return cs.getBigDecimal("out_bonus");
  }
);
```

### `execute(String query)`

Used for DDL, like creating tables

```java
String sql = "CREATE TABLE test_table (id INT PRIMARY KEY, name VARCHAR(50))";
jdbcTemplate.execute(sql);
```
