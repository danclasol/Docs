# CTE (Common Table Expression)

A CTE (Common Table Expression) is a temporary named result set that you can reference within a SELECT, INSERT, UPDATE, or DELETE query.

Breaking down complex queries by filtering, aggregating, or transforming data before main query.

- improves readability and maintainability
- allow recursive queries (tree structures)
- reuse intermediate results

```sql
WITH recent_orders AS (
  SELECT * FROM orders
  WHERE order_date >= '2024-01-01'
)
SELECT customer_id, COUNT(*) AS total_orders
FROM recent_orders
GROUP BY customer_id;
```

## Recursive CTE

Used for hierarchical or tree-like data (e.g., org charts, categories).

```sql
WITH RECURSIVE cte_name (id, parent_id, level) AS (
  -- Anchor member
  SELECT id, parent_id, 1 AS level
  FROM categories
  WHERE parent_id IS NULL

  UNION ALL

  -- Recursive member
  SELECT c.id, c.parent_id, level + 1
  FROM categories c
  JOIN cte_name ON c.parent_id = cte_name.id
)
SELECT * FROM cte_name;
```

## CTE vs Subquery

### Use CTE when

- qwuery complexity is high, and you need to break it into steps
- want recursive queries
- reusing the same logic multiple times.

### Use Subquery when

- performance is critical and you're only using the result once
- SQL engine optimizes subqueries better than CTEs (often the case in MySQL)
