# JdbcTemplate

JdbcTemplate is a central class in the JDBC core package that simplifies the use of JDBC and helps to avoid common errors.

- internally uses JDBC API
- eliminates a lot of problmes with JDBC API

## Setting JDBCTemplate

Configure the `JdbcTemplate` bean in the Spring Context.

```java
@Service
public class UserService {
    @Autowired
    private JdbcTemplate jdbcTemplate;
}
```

## Methods

### `queryForObject()`

Query returns exactly one row

- throws `IncorrectResultSizeDataAccessException` if the query returns 0 or more than 1 row
- _RowMapper_: maps each row of the ResultSet to an instance object

```java
String sql = "SELECT * FROM users WHERE email = ?";
User user = jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(User.class), "test@mail.com");
```

### `query()`

Query returns more one or more rows

- _RowMapper_: maps each row of the ResultSet to an instance object

```java
String sql = "SELECT * FROM users WHERE age > ?";
int minAge = 18;

User user = jdbcTemplate.query(sql, new Object[]{ minAge }, new BeanPropertyRowMapper<>(User.class));
```

You can also use `ResultExtractor<T>` for full control over the entire cursor.

```java
String sql = "SELECT * FROM users WHERE age > ?";
int minAge = 18;

List<String> userNames = jdbcTemplate.query(
    sql,
    new Object[]{ minAge },
    rs -> {
        List<String> list = new ArrayList<>();

        while (rs.next()) {
            list.add(rs.getString("name"));
        }
        return list;
    });
```

### `update(String query)`

Insert, update, or delete with a plain SQL query

```java
String sql = "UPDATE users SET mail = ? WHERE id = ?";
int rowsAffected = jdbcTemplate.update(sql, "alice@example.com", "1234");
```

### `update(String query, Object... args)`

Insert/update/delete using placeholders `?` and parameters.

```java
String sql = "INSERT INTO STUDENT (id, name, country) VALUES (?, ?, ?)";
int rowsAffected = jdbcTemplate.update(sql, 1L, "Alice", "alice@example.com");
```

### `execute(String sql, PreparedStatementCallback action)`

Executes the query by using `PreparedStatementCallback`.

```java
String sql = "SELECT COUNT(*) FROM users";

Integer count = jdbcTemplate.execute(sql, (PreparedStatementCallback<Integer>) ps -> {
    ResultSet rs = ps.executeQuery();
    rs.next();
    return rs.getInt(1);
});
```

Call a stored procedure/function via jdbc’s `CallableStatement`

```java
String call = "{ call calculate_bonus(?, ?, ?) }";

BigDecimal bonus = namedJdbc.execute(
  call,
  (CallableStatementCallback<BigDecimal>) cs -> {
      cs.setLong(1, 42L);
      cs.setLong(2, 2024);
      cs.registerOutParameter(3, Types.NUMERIC);
      cs.execute();

      return cs.getBigDecimal(3);
  }
);
```

### `execute(String query)`

Used for DDL, like creating tables

```java
String sql = "CREATE TABLE test_table (id INT PRIMARY KEY, name VARCHAR(50))";
jdbcTemplate.execute(sql);
```
